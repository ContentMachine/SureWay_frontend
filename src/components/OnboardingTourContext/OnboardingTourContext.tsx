"use client";

import React from "react";
import { TourProvider } from "@reactour/tour";
import Button from "../Button/Button";
import { LOCAL_NEW_USER_KEY } from "@/utilities/constants";

type OnboardingTourTypes = {
  children: React.ReactNode;
};

const OnboardingTourContextProvider = ({ children }: OnboardingTourTypes) => {
  // Utils
  const steps = [
    {
      selector: "#our-services",
      content:
        "Whether you're looking for personalised fridge magnets, stylish car magnets, elegantly engraved items, or custom sure things, we've got you covered!",
    },
    {
      selector: "#shop-button",
      content:
        "Click here to browse our collection of custom fridge magnets and more!",
    },
    {
      selector: "#contact-us-form",
      content: "Need assistance? We are here to help! Feel free to reach out.",
    },
    {
      selector: "#products-nav",
      content:
        "Use the navigation menu to browse through our product range. Our categories help you find exactly what you need.",
    },
    {
      selector: "#product",
      content: "⁠Pick your size and click ‘Buy’ to start customising",
    },
    {
      selector: "#product-category",
      content:
        "Our Fridge Magnets add personality to your space, our Car Magnets make a statement on the go, and our Engraved Items and unique Sure Things will definitely impress. We have something for everyone!",
    },
  ];

  const radius = 10;

  return (
    <TourProvider
      steps={steps}
      scrollSmooth
      padding={{
        mask: 0,
        popover: [5, 10],
        wrapper: 0,
      }}
      styles={{
        popover: (base) => ({
          ...base,
          "--reactour-accent": "#ffe24a",
          borderRadius: radius,
          fontFamily: "Montserrat",
          fontWeight: "normal",
          fontSize: "18px",
          lineHeight: "150%",
          padding: "2rem",
        }),
        maskArea: (base) => ({ ...base, rx: radius }),
        maskWrapper: (base) => ({ ...base }),
        badge: (base) => ({
          ...base,
          left: "auto",
          right: "-0.8125em",
          color: "#000",
        }),
        controls: (base) => ({ ...base, marginTop: 16 }),
        close: (base) => ({
          ...base,
          right: "auto",
          left: 16,
          top: 16,
          color: "red",
        }),
      }}
      onClickHighlighted={(e) => {
        e.stopPropagation();
        console.log("No interaction");
      }}
      prevButton={({ currentStep, setCurrentStep, steps }) => {
        const first = currentStep === 0;
        return (
          <Button
            type="invalid"
            onClick={() => {
              if (first) {
                setCurrentStep((s: any) => (steps?.length as any) - 1);
              } else {
                setCurrentStep((s: any) => s - 1);
              }
            }}
          >
            Back
          </Button>
        );
      }}
      nextButton={({
        currentStep,
        stepsLength,
        setIsOpen,
        setCurrentStep,
        steps,
      }) => {
        const last = currentStep === stepsLength - 1;
        return (
          <Button
            onClick={() => {
              if (last) {
                setIsOpen(false);
                if (typeof window !== "undefined") {
                  localStorage.setItem(LOCAL_NEW_USER_KEY, "false");
                }
              } else {
                setCurrentStep((s) =>
                  s === (steps?.length as any) - 1 ? 0 : s + 1
                );
              }
            }}
          >
            {last ? "Close" : "Next"}
          </Button>
        );
      }}
      showDots={false}
    >
      {children}
    </TourProvider>
  );
};

export default OnboardingTourContextProvider;
