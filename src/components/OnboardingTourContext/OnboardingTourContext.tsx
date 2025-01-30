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
        "Whether you're looking for personalized fridge magnets, stylish car magnets, elegantly engraved items, or custom sure things, we've got you covered!",
    },
    {
      selector: "#shop-button",
      content:
        "Click here to browse our collection of custom fridge magnets and more!",
    },
    {
      selector: "#contact-us-form",
      content:
        "Have questions or need assistance? We're here to help! Whether it's about custom orders, product details, or anything else, feel free to reach out.",
    },
    {
      selector: "#products-nav",
      content:
        "Easily browse through our range of custom products using the navigation menu! Whether you're looking for valentine magnets, father's day magnets, or our unique sure things, our categories help you find exactly what you need.",
    },
    {
      selector: "#product",
      content:
        "Love this magnet? Click ‘Buy’ to start customizing and make it yours today!",
    },
    {
      selector: "#product-category",
      content:
        "Explore our range of magnets, from fridge magnets that add personality to your space to car magnets that make a statement on the go. Whether you're looking for stylish engraved items or unique sure things, we have something for everyone!",
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
        badge: (base) => ({ ...base, left: "auto", right: "-0.8125em" }),
        controls: (base) => ({ ...base, marginTop: 16 }),
        close: (base) => ({ ...base, right: "auto", left: 16, top: 16 }),
      }}
      onClickHighlighted={(e) => {
        e.stopPropagation();
        console.log("No interaction");
      }}
      prevButton={({ currentStep, setCurrentStep, steps }) => {
        const first = currentStep === 0;
        return (
          <Button
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
                localStorage.setItem(LOCAL_NEW_USER_KEY, "false");
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
