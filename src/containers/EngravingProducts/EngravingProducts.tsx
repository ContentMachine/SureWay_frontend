import SectionsNav from "@/components/SectionsNav/SectionsNav";
import { navItemTypes } from "@/utilities/types";
import React, { Dispatch, SetStateAction } from "react";
import classes from "./EngravingProducts.module.css";

type EngravingProductsTypes = {
  navItems: navItemTypes[];
  setNavItems: Dispatch<SetStateAction<navItemTypes[]>>;
};

const EngravingProducts = ({
  navItems,
  setNavItems,
}: EngravingProductsTypes) => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Our Ready-Made Engraved Items</h4>
        <p>
          Discover high-quality custom magnets to decorate your space or gift to
          someone special. Shop unique designs or personalise your own today!
        </p>
      </div>
      <SectionsNav navItems={navItems} setNavItems={setNavItems} />
    </section>
  );
};

export default EngravingProducts;
