"use client";

import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Homepage.module.css";
import HomeHero from "../HomeHero/HomeHero";
import HomeProductsSummary from "../HomeProductsSummary/HomeProductsSummary";
import HomeProducts from "../HomeProducts/HomeProducts";
import MagnetMagnetTypes from "../MagnetsMagnetTypes/MagnetMagnetTypes";

const Homepage = () => {
  return (
    <AppLayout className={classes.container} isDynamic>
      <HomeHero />
      <HomeProductsSummary />
      <HomeProducts />
      <MagnetMagnetTypes />
    </AppLayout>
  );
};

export default Homepage;
