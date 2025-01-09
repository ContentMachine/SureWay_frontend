"use client";

import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Homepage.module.css";
import HomeHero from "../HomeHero/HomeHero";
import HomeProductsSummary from "../HomeProductsSummary/HomeProductsSummary";
import HomeProducts from "../HomeProducts/HomeProducts";
import HomeServices from "../HomeServices/HomeServices";
import HomeDiscount from "../HomeDiscount/HomeDiscount";

const Homepage = () => {
  return (
    <AppLayout className={classes.container}>
      <HomeHero />
      <HomeProductsSummary />
      <HomeProducts />
      <HomeServices />
      <HomeDiscount />
    </AppLayout>
  );
};

export default Homepage;
