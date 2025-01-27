"use client";

import React, { Suspense } from "react";
import classes from "./MagnetProducts.module.css";
import HomeProducts from "../HomeProducts/HomeProducts";
import Loader from "@/components/Loader/Loader";

const MagnetProducts = () => {
  return (
    <Suspense fallback={<Loader />}>
      <section className={classes.container} id="custom-magnets">
        <HomeProducts />
      </section>
    </Suspense>
  );
};

export default MagnetProducts;
