"use client";

import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Homepage.module.css";
import HomeHero from "../HomeHero/HomeHero";
import HomeProductsSummary from "../HomeProductsSummary/HomeProductsSummary";
import HomeProducts from "../HomeProducts/HomeProducts";
import MagnetMagnetTypes from "../MagnetsMagnetTypes/MagnetMagnetTypes";
import HomeMagnetTypes from "../HomeMagnetTypes/HomeMagnetTypes";
import ContactUs from "../ContactUs/ContactUs";
import Button from "@/components/Button/Button";
import Close from "@/assets/SvgIcons/Close";
import { useEffect, useState } from "react";
import { useTour } from "@reactour/tour";
import { LOCAL_NEW_USER_KEY } from "@/utilities/constants";

const Homepage = () => {
  // States
  const [showGuidePrompt, setShowGuidePrompt] = useState(false);

  // Local
  const isNotNewUser =
    typeof window !== "undefined"
      ? localStorage.getItem(LOCAL_NEW_USER_KEY)
      : null;

  // Hooks
  const { setIsOpen } = useTour();

  // Effects
  useEffect(() => {
    if (isNotNewUser) {
      setShowGuidePrompt(false);
    } else {
      setShowGuidePrompt(true);
    }
  }, [isNotNewUser]);

  return (
    <AppLayout className={classes.container} isDynamic>
      <HomeHero />
      <HomeProductsSummary />
      <ContactUs />
      <HomeProducts />
      <HomeMagnetTypes />

      {showGuidePrompt && (
        <div className={classes.tourPrompt}>
          <Close
            onClick={() => {
              setShowGuidePrompt(false);
              if (typeof window !== "undefined") {
                localStorage.setItem(LOCAL_NEW_USER_KEY, "false");
              }
            }}
          />
          <p>
            We're excited to have you here! To help you get started, we'll take
            you on a quick tour of our store. You'll learn how to browse
            products, add items to your cart, and complete your purchase with
            ease.
          </p>
          <Button
            onClick={() => {
              setIsOpen(true);
              setTimeout(() => {
                setShowGuidePrompt(false);
              }, 2000);
            }}
          >
            Take tour
          </Button>
        </div>
      )}
    </AppLayout>
  );
};

export default Homepage;
