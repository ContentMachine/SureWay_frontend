"use client";

import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Homepage.module.css";
import HomeHero from "../HomeHero/HomeHero";
import HomeProductsSummary from "../HomeProductsSummary/HomeProductsSummary";
import HomeProducts from "../HomeProducts/HomeProducts";
import MagnetMagnetTypes from "../MagnetsMagnetTypes/MagnetMagnetTypes";
import HomeMagnetTypes from "../HomeMagnetTypes/HomeMagnetTypes";
import ContactUs from "../ContactUs/ContactUs";

const Homepage = () => {
  return (
    <AppLayout className={classes.container} isDynamic>
      <HomeHero />
      <HomeProductsSummary />
      <ContactUs />
      <HomeProducts />
      <HomeMagnetTypes />
    </AppLayout>
  );
};

export default Homepage;
