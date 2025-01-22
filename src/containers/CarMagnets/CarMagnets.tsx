"use client";

import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { magnetDataType } from "@/utilities/types";
import React, { useEffect, useState } from "react";
import MagnetCustomization from "../MagnetCustomization/MagnetCustomization";
import MagnetPreviewAndPayment from "../MagnetPreviewAndPayment/MagnetPreviewAndPayment";
import MagnetDimensions from "../MagnetDimensions/MagnetDimensions";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import SectionsHero from "@/components/SectionsHero/SectionsHero";
import StepLayout from "@/components/StepLayout/StepLayout";
import { useParams } from "next/navigation";
import { useMagnetTypesBySlug } from "@/hooks/useMagnets";
import Loader from "@/components/Loader/Loader";

const CarMagnets = () => {
  // Hooks
  const updateSearchParams = useUpdateSearchParams();
  const step = updateSearchParams("step", undefined, "get");
  const { type } = useParams();

  // Request
  const { isLoading, data } = useMagnetTypesBySlug(type as string);

  // Utils
  const steps = [1, 2, 3];

  // States
  const [magnetData, setMagnetData] = useState<magnetDataType>({
    shape: "",
    dimension: "",
    fullName: "",
    email: "",
    phone: "",
    customText: "",
    achievement: "",
    image: null,
  });

  // Effects
  useEffect(() => {
    if (typeof window !== undefined) {
      if (!step) {
        updateSearchParams("step", "1", "set");
      }
    }
  }, []);

  const container =
    (step as string) === "2" ? (
      <MagnetCustomization data={magnetData} setData={setMagnetData} />
    ) : (step as string) === "3" ? (
      <MagnetPreviewAndPayment />
    ) : (
      <MagnetDimensions data={magnetData} setData={setMagnetData} />
    );

  return (
    <AppLayout isDynamic>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SectionsHero title="Car Magnets" />
          <StepLayout steps={steps}>{container}</StepLayout>
        </>
      )}
    </AppLayout>
  );
};

export default CarMagnets;
