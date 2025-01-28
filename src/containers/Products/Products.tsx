"use client";

import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Products.module.css";
import ProductsListing from "@/components/ProductsListing/ProductsListing";
import { useEffect, useMemo, useState } from "react";
import { useMagnets } from "@/hooks/useMagnets";
import { productType } from "@/utilities/types";
import { capitalizeEachWord } from "@/helpers/capitalize";
import Loader from "@/components/Loader/Loader";

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

  // States
  const [magnetsByCategory, setMagnetBuCategory] = useState([]);

  // Requests
  const { isLoading, data } = useMagnets();

  // Utils
  const groupMagnetsByCategory = (magnets: productType[]) => {
    return magnets.reduce((acc: any, magnet) => {
      const { category } = magnet;

      const existingCategory = acc.find(
        (group: productType) => group.category === category
      );

      if (existingCategory) {
        (existingCategory as any)?.magnets.push(magnet);
      } else {
        acc.push({
          category: category,
          magnets: [magnet],
        });
      }

      return acc;
    }, []);
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

  useEffect(() => {
    if (data) {
      setMagnetBuCategory(groupMagnetsByCategory(data?.data));
    }
  }, [data?.data]);

  console.log(data?.data, magnetsByCategory);

  return (
    <AppLayout className={classes.container}>
      {/* <ProductsSections /> */}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {magnetsByCategory?.map((data: any) => {
            return (
              <ProductsListing
                key={data?.category}
                products={data?.magnets}
                title={capitalizeEachWord(data?.category?.replaceAll("-", " "))}
                loading={false}
              />
            );
          })}
        </div>
      )}
    </AppLayout>
  );
};

export default Products;
