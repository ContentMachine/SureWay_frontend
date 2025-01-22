"use client";

import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Magnets.module.css";
import MagnetsHeaderSection from "../MagnetsHeaderSection/MagnetsHeaderSection";
import MagnetMagnetTypes from "../MagnetsMagnetTypes/MagnetMagnetTypes";
import MagnetProducts from "../MagnetProducts/MagnetProducts";
import MagnetsCustomMagnets from "../MagnetsCustomMagnets/MagnetsCustomMagnets";

const Magnets = () => {
  return (
    <AppLayout className={classes.container}>
      <MagnetMagnetTypes />
      <MagnetsHeaderSection />
      <MagnetProducts />
      <MagnetsCustomMagnets />
    </AppLayout>
  );
};

export default Magnets;
