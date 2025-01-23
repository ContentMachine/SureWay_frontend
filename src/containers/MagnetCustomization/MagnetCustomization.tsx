"use client";

import Input from "@/components/Input/Input";
import InqiryModalBody from "../InqiryModalBody/InqiryModalBody";
import classes from "./MagnetCustomization.module.css";
import FileUploadInput from "@/components/FileUploadInput/FileUploadInput";
import TextArea from "@/components/Textarea/TextArea";
import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import { valentineTexts } from "@/utilities/constants";
import { magnetDataType } from "@/utilities/types";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import { Dispatch, SetStateAction, Suspense, useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import { magnetShapes } from "@/utilities/products";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

type MagnetCustomizationTypes = {
  data: magnetDataType;
  setData: Dispatch<SetStateAction<magnetDataType>>;
  onSubmit: () => void;
  onUpdate: () => void;
  loading: boolean;
};

const MagnetCustomization = ({
  data,
  setData,
  onSubmit,
  loading,
  onUpdate,
}: MagnetCustomizationTypes) => {
  // States
  const [customText, setCustomText] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();
  const orderId = updateSearchParams("order-id", undefined, "get");

  //   Effects
  useEffect(() => {
    if (customText !== "Other") {
      setData((prevState) => {
        return { ...prevState, customText };
      });
    }

    if (files.length > 0) {
      setData((prevState) => {
        return { ...prevState, image: files[0] };
      });
    }
  }, [customText, files]);

  return (
    <Suspense fallback={<Loader />}>
      <section className={classes.container}>
        <h2>Customize your Magnet</h2>
        <p>
          Our custom fridge magnets come in 8 shapes and 3 sizes, perfect for
          any occasion. Whether you need a single photo magnet as a gift or bulk
          souvenir magnets for an event, SureWay has you covered!
        </p>

        <form className={classes.body}>
          <Input
            label="Full name"
            isRequired
            name="fullName"
            value={data?.fullName}
            onChange={(e) => inputChangeHandler(e, setData)}
          />
          <Input
            label="Email Address"
            type="email"
            isRequired
            name="email"
            value={data?.email}
            onChange={(e) => inputChangeHandler(e, setData)}
          />
          <Input
            label="Phone Number"
            type="phone"
            isRequired
            name="phone"
            value={data?.phone}
            onChange={(e) => inputChangeHandler(e, setData)}
          />
          <Dropdown
            label="What text would you like to see on your custom magnet"
            title="Select a text"
            options={valentineTexts}
            selected={customText || data?.customText}
            setSelected={setCustomText}
          />
          {customText === "Other" && (
            <Input
              label="Please Type in your Custom Text"
              type="text"
              isRequired
              name="customText"
              value={data?.customText}
              onChange={(e) => inputChangeHandler(e, setData)}
            />
          )}

          <TextArea
            label="Tell us what you are trying to achieve"
            isRequired
            name="achievement"
            value={data?.achievement}
            onChange={(e) => inputChangeHandler(e, setData)}
          />

          <FileUploadInput files={files} setFiles={setFiles} />

          <Button
            onClick={(e) => {
              e.preventDefault();

              if (orderId) {
                onUpdate();
              } else {
                onSubmit();
              }
            }}
            disabled={
              !data?.fullName ||
              !data?.email ||
              !data?.phone ||
              !data?.customText ||
              !data?.achievement
            }
            loading={loading}
          >
            Preview & Pay
          </Button>
        </form>
      </section>
    </Suspense>
  );
};

export default MagnetCustomization;
