import SectionsNav from "@/components/SectionsNav/SectionsNav";
import { navItemTypes, productType } from "@/utilities/types";
import React, { Dispatch, SetStateAction } from "react";
import classes from "./EngravingProducts.module.css";
import ProductsListing from "@/components/ProductsListing/ProductsListing";
import Loader from "@/components/Loader/Loader";

type EngravingProductsTypes = {
  navItems: navItemTypes[];
  setNavItems: Dispatch<SetStateAction<navItemTypes[]>>;
  loading: boolean;
  products: productType[];
};

const EngravingProducts = ({
  navItems,
  setNavItems,
  loading,
  products,
}: EngravingProductsTypes) => {
  if (loading) {
    <Loader />;
  }

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>Our Ready-Made Engraved Items</h4>
        <p>
          Discover high-quality custom magnets to decorate your space or gift to
          someone special. Shop unique designs or personalise your own today!
        </p>
      </div>
      <SectionsNav navItems={navItems} setNavItems={setNavItems} isRoute />

      <ProductsListing products={products} loading={false} type="product" />
    </section>
  );
};

export default EngravingProducts;
