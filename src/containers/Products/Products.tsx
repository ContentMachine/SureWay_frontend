"use client";

import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Products.module.css";
import ProductsListing from "@/components/ProductsListing/ProductsListing";
import ProductsSections from "../ProductsSections/ProductsSections";
import { useEffect } from "react";

const Products = () => {
  // Utils
  const scrollToSection = (hash: string) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(hash);
      if (element) {
        const topOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - topOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  // Effects
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollToSection(hash);
      }
    };

    handleHashChange();
  }, []);

  return (
    <AppLayout className={classes.container}>
      <ProductsSections />

      <div>
        {/* <ProductsListing title="Cool Stuff" id={"cool-stuff"} />
        <ProductsListing title="Baby Stuff" id={"baby-stuff"} />
        <ProductsListing title="Gadgets & Tech" id={"gadgets-and-tech"} />
        <ProductsListing title="Home Stuff" id={"home-stuff"} /> */}
      </div>
    </AppLayout>
  );
};

export default Products;
