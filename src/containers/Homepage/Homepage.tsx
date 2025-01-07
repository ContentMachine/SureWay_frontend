"use client";

import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Homepage.module.css";
import HomeHero from "../HomeHero/HomeHero";

const Homepage = () => {
  return (
    <AppLayout className={classes.container}>
      <HomeHero />
    </AppLayout>
  );
};

export default Homepage;
