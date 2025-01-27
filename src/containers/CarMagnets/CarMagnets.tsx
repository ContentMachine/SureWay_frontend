"use client";

import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import {
  magnetDataType,
  magnetTypeTypes,
  requestType,
} from "@/utilities/types";
import React, {
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import MagnetCustomization from "../MagnetCustomization/MagnetCustomization";
import MagnetPreviewAndPayment from "../MagnetPreviewAndPayment/MagnetPreviewAndPayment";
import MagnetDimensions from "../MagnetDimensions/MagnetDimensions";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import SectionsHero from "@/components/SectionsHero/SectionsHero";
import StepLayout from "@/components/StepLayout/StepLayout";
import { useParams, usePathname } from "next/navigation";
import { useMagnetSubmission, useMagnetTypesBySlug } from "@/hooks/useMagnets";
import Loader from "@/components/Loader/Loader";
import { requestHandler } from "@/helpers/requestHandler";
import { mutate } from "swr";
import { MagnetContext } from "@/context/MagnetContext";
import { useToast } from "@/context/ToastContext";
import useError from "@/hooks/useError";

const CarMagnets = () => {
  // Hooks
  const { updateSearchParams, updateConcurrentSearchParams } =
    useUpdateSearchParams();
  const step = updateSearchParams("step", undefined, "get");
  const orderId = updateSearchParams("order-id", undefined, "get");
  const { showToast } = useToast();
  const { errorFlowFunction } = useError();

  // Router
  const pathname = usePathname();
  const magnetType = pathname?.split("/")[2].split("-")[0];
  const { type } = useParams();

  // Request
  const { isLoading, data: magnetInfoData } = useMagnetTypesBySlug(
    type as string
  );
  const { isLoading: magnetSubmissionIsLoading, data: magnetSubmissionData } =
    useMagnetSubmission(orderId as string);

  // Memo
  const magnetInfo: magnetTypeTypes = useMemo(
    () => magnetInfoData?.data,
    [magnetInfoData]
  );
  const magnetSubmission: magnetDataType = useMemo(
    () => magnetSubmissionData?.data,
    [magnetSubmissionData]
  );

  // Utils
  const steps = [1, 2, 3];

  // COntext
  const { magnetData, setMagnetData } = useContext(MagnetContext);

  // States
  const [magnetDataFormdata, setMagnetDatFormdata] = useState(new FormData());
  const [requestState, setRequestState] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });

  const submitForm = () => {
    requestHandler({
      url: "/api/magnets/submit-magnet",
      data: magnetDataFormdata,
      method: "POST",
      isMultipart: true,
      state: requestState,
      setState: setRequestState,
      successFunction(res) {
        showToast(
          "Your order has been booked successfully, Please complete payment",
          "success"
        );
        updateConcurrentSearchParams(
          {
            step: "3",
            "order-id": res?.data?._id,
          },
          "set"
        );
      },
      errorFunction(err) {
        console.log(err);
      },
    });
  };

  const editFormSubmission = () => {
    requestHandler({
      url: `/api/magnets/submit-magnet/${orderId}`,
      data: magnetDataFormdata,
      method: "PUT",
      isMultipart: true,
      state: requestState,
      setState: setRequestState,
      successFunction(res) {
        showToast(
          "Your order has been edited successfully, Please complete payment",
          "success"
        );
        updateConcurrentSearchParams(
          {
            step: "3",
            "order-id": res?.data?._id,
          },
          "set"
        );
      },
    });
  };

  // Effects
  useEffect(() => {
    if (typeof window !== undefined) {
      updateSearchParams("step", "1", "set");
    }
  }, []);

  useEffect(() => {
    const testFormdata = new FormData();

    testFormdata.append("email", magnetData?.email);
    testFormdata.append("phone", magnetData?.phone);
    testFormdata.append("customText", magnetData?.customText);
    testFormdata.append("achievement", magnetData?.achievement);
    testFormdata.append("shape", magnetData?.shape);
    testFormdata.append("dimension", magnetData?.dimension);
    testFormdata.append("fullName", magnetData?.fullName);
    testFormdata.append("image", magnetData?.image as any);
    testFormdata.append("type", magnetType as string);

    setMagnetDatFormdata(testFormdata);
  }, [magnetData]);

  useEffect(() => {
    if (orderId) {
      mutate(`/api/magnets/submit-magnet/${orderId}`);
    }
  }, [orderId, step]);

  useEffect(() => {
    if (magnetSubmissionData?.data) {
      setMagnetData({
        shape: magnetSubmission?.shape,
        dimension: magnetSubmission?.dimension,
        achievement: magnetSubmission?.achievement,
        customText: magnetSubmission?.customText,
        email: magnetSubmission?.email,
        fullName: magnetSubmission?.fullName,
        image: magnetSubmission?.image,
        phone: magnetSubmission?.phone,
      });
    }
  }, [magnetSubmissionData?.data]);

  const container =
    (step as string) === "2" ? (
      <MagnetCustomization
        data={magnetData}
        setData={setMagnetData}
        onSubmit={submitForm}
        onUpdate={editFormSubmission}
        loading={requestState?.isLoading}
      />
    ) : (step as string) === "3" ? (
      <MagnetPreviewAndPayment data={magnetData} setData={setMagnetData} />
    ) : (
      <MagnetDimensions
        data={magnetData}
        setData={setMagnetData}
        magnetInfo={magnetInfo}
      />
    );

  return (
    <Suspense fallback={<Loader />}>
      <AppLayout isDynamic>
        {isLoading || magnetSubmissionIsLoading ? (
          <div style={{ paddingTop: "70px" }}>
            <Loader />
          </div>
        ) : (
          <>
            <SectionsHero
              title={magnetInfo?.name || "Magnet"}
              bannerImage={magnetInfo?.bannerImage}
            />
            <div>
              <StepLayout caption={magnetInfo?.description} steps={steps}>
                {container}
              </StepLayout>
            </div>
          </>
        )}
      </AppLayout>
    </Suspense>
  );
};

export default CarMagnets;
