import ProductCard from "@/components/ProductCard/ProductCard";
import SectionsNav from "@/components/SectionsNav/SectionsNav";
import { navItemTypes } from "@/utilities/types";
import { useState } from "react";
import classes from "./HomeProducts.module.css";

const HomeProducts = () => {
  // States
  const [navItems, setNavItems] = useState<navItemTypes[]>([
    {
      title: "Gadgets & Tech",
      isActive: true,
    },
    {
      title: "Home Stuff",
      isActive: false,
    },
    {
      title: "Cool Stuff",
      isActive: false,
    },

    {
      title: "Baby Stuff",
      isActive: false,
    },
  ]);

  return (
    <section className={classes.container}>
      <SectionsNav navItems={navItems} setNavItems={setNavItems} />

      <div className={classes.products}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default HomeProducts;
