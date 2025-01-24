"use client";

import React, { Suspense } from "react";
import classes from "./MagnetProducts.module.css";
import HomeProducts from "../HomeProducts/HomeProducts";
import Loader from "@/components/Loader/Loader";

const MagnetProducts = () => {
  return (
    <Suspense fallback={<Loader />}>
      <section className={classes.container} id="custom-magnets">
        <h4>Our Custom Magnets</h4>
        <p>
          Whether you're a DIY enthusiast, a professional, or simply looking to
          add a touch of functionality to your space, our collection ensures
          reliability and style. Browse our selection today and experience the
          magic of magnets!
        </p>

        <HomeProducts />
      </section>
    </Suspense>
  );
};

export default MagnetProducts;
