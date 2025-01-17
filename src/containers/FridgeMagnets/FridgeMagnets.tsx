"use client";

import SectionsHero from "@/components/SectionsHero/SectionsHero";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import useEffect from "react";
import MagnetDimensions from "../MagnetDimensions/MagnetDimensions";
import StepLayout from "@/components/StepLayout/StepLayout";
import useUpdateSearchPRams from "@/hooks/useUpdateSearchParams";

const FridgeMagnets = () => {
  // Hooks
  const updateSearchParams = useUpdateSearchPRams();

  const params = new URLSearchParams(window?.location?.search);
  const step = params.get("step");

  // Utils
  const steps = [1, 2, 3, 4];

  // Effects
  useEffect(() => {
    updateSearchParams("step", "1", "set");
  }, []);

  const container = step === "1" ? <MagnetDimensions /> : <div></div>;

  return (
    <AppLayout isDynamic>
      <SectionsHero title="Fridge Magnets" />
      <StepLayout steps={steps}>{container}</StepLayout>
    </AppLayout>
  );
};

export default FridgeMagnets;
