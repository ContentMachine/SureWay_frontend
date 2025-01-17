"use client";

import SectionsHero from "@/components/SectionsHero/SectionsHero";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import { useEffect, useState } from "react";
import MagnetDimensions from "../MagnetDimensions/MagnetDimensions";
import StepLayout from "@/components/StepLayout/StepLayout";
import useUpdateSearchPRams from "@/hooks/useUpdateSearchParams";
import MagnetSizes from "../MagnetSizes/MagnetSizes";
import { magnetDataType } from "@/utilities/types";
import MagnetCustomization from "../MagnetCustomization/MagnetCustomization";

const FridgeMagnets = () => {
  // Hooks
  const updateSearchParams = useUpdateSearchPRams();

  const step = updateSearchParams("step", undefined, "get");

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
      updateSearchParams("step", "1", "set");
    }
  }, []);

  const container =
    (step as string) === "2" ? (
      <MagnetCustomization data={magnetData} setData={setMagnetData} />
    ) : (
      <MagnetDimensions data={magnetData} setData={setMagnetData} />
    );

  return (
    <AppLayout isDynamic>
      <SectionsHero title="Fridge Magnets" />
      <StepLayout steps={steps}>{container}</StepLayout>
    </AppLayout>
  );
};

export default FridgeMagnets;
