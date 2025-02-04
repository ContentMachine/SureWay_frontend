"use client";

import SectionsHero from "@/components/SectionsHero/SectionsHero";
import React, { Suspense, useEffect, useMemo, useState } from "react";
import EngravingSections from "../EngravingSections/EngravingSections";
import {
  useEngravingCategories,
  useEngravingProducts,
} from "@/hooks/useEngravings";
import Loader from "@/components/Loader/Loader";
import EngravingProducts from "../EngravingProducts/EngravingProducts";
import { engravedProductType, navItemTypes } from "@/utilities/types";
import { capitalize } from "@/helpers/capitalize";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

const Engravings = () => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Router
  const section = updateSearchParams("section", undefined, "get");

  // Requests
  const { isLoading, data: engravingCategoriesData } = useEngravingCategories();
  const { isLoading: productsIsLoading, data: productsData } =
    useEngravingProducts(section as engravedProductType);

  //   States
  const [navItems, setNavItems] = useState<navItemTypes[]>([]);

  // Memos
  const products = useMemo(
    () => productsData?.data?.engravedProducts,
    [productsData?.data]
  );

  console.log(products);

  // Effects
  useEffect(() => {
    if (engravingCategoriesData?.data?.categories?.length > 0) {
      const engravingCategories: navItemTypes[] =
        engravingCategoriesData?.data?.categories?.map(
          (data: string, i: number) => {
            if (i === 0) {
              return {
                title: capitalize(data?.replaceAll("-", " ")),
                isActive: true,
                route: data?.replace(" ", "-").toLowerCase(),
                id: data?.replace(" ", "-").toLowerCase(),
              };
            }
            return {
              title: capitalize(data?.replaceAll("-", " ")),
              isActive: false,
              route: data?.replace(" ", "-").toLowerCase(),
              id: data?.replace(" ", "-").toLowerCase(),
            };
          }
        );

      setNavItems(engravingCategories);
    }
  }, [engravingCategoriesData?.data?.categories]);

  return (
    <Suspense fallback={<Loader />}>
      <section>
        <SectionsHero title="What would you like to engrave?" />
        <EngravingSections />
        <EngravingProducts
          navItems={navItems}
          setNavItems={setNavItems}
          loading={productsIsLoading}
          products={products}
        />
      </section>
    </Suspense>
  );
};

export default Engravings;
