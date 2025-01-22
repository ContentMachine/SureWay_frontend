"use client";

import React from "react";
import classes from "./MagnetProducts.module.css";
import HomeProducts from "../HomeProducts/HomeProducts";

const MagnetProducts = () => {
  return (
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
  );
};

export default MagnetProducts;
