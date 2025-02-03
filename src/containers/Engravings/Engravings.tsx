"use client";

import SectionsHero from "@/components/SectionsHero/SectionsHero";
import React, { Suspense, useEffect, useState } from "react";
import EngravingSections from "../EngravingSections/EngravingSections";
import { useEngravingCategories } from "@/hooks/useEngravings";
import Loader from "@/components/Loader/Loader";
import EngravingProducts from "../EngravingProducts/EngravingProducts";
import { navItemTypes } from "@/utilities/types";
import { capitalize } from "@/helpers/capitalize";

const Engravings = () => {
  // Requests
  const { isLoading, data: engravingCategoriesData } = useEngravingCategories();

  //   States
  const [navItems, setNavItems] = useState<navItemTypes[]>([]);

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
        <EngravingProducts navItems={navItems} setNavItems={setNavItems} />
      </section>
    </Suspense>
  );
};

export default Engravings;
