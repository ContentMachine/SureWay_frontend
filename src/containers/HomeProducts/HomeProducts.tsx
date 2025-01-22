import ProductCard from "@/components/ProductCard/ProductCard";
import SectionsNav from "@/components/SectionsNav/SectionsNav";
import { magnetDataType, navItemTypes, productType } from "@/utilities/types";
import { useEffect, useMemo, useState } from "react";
import classes from "./HomeProducts.module.css";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { routes } from "@/utilities";
import ProductsListing from "@/components/ProductsListing/ProductsListing";
import { valentinesProducts } from "@/utilities/products";
import { useMagnetCategories, useMagnets } from "@/hooks/useMagnets";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { mutate } from "swr";

const HomeProducts = () => {
  // States
  const [navItems, setNavItems] = useState<navItemTypes[]>([]);

  // Hooks
  const updateSearchParams = useUpdateSearchParams();

  // Router
  const router = useRouter();
  const section = updateSearchParams("section", undefined, "get");

  // Requests
  const { isLoading, data: magnetsData } = useMagnets(section as string);
  const { isLoading: magnetCategoriesIsLoading, data: magnetCategoriesData } =
    useMagnetCategories();

  // Optimization
  const magnets: productType[] = useMemo(
    () => magnetsData?.data,
    [magnetsData]
  );

  const magnetCategories: string[] = useMemo(
    () => magnetCategoriesData?.data,
    [magnetCategoriesData]
  );

  // Effects
  useEffect(() => {
    if (magnetCategories?.length) {
      const navItemsCategories = magnetCategories?.map((data, i) => {
        if (section) {
          if (section === data?.replaceAll(" ", "-").toLowerCase()) {
            return {
              title: data,
              isActive: true,
              id: data?.replaceAll(" ", "-").toLowerCase(),
            };
          } else {
            return {
              title: data,
              isActive: false,
              id: data?.replaceAll(" ", "-").toLowerCase(),
            };
          }
        } else {
          if (i === 0) {
            return { title: data, isActive: true, id: "all" };
          } else {
            return {
              title: data,
              isActive: false,
              id: data?.replaceAll(" ", "-").toLowerCase(),
            };
          }
        }
      });

      setNavItems(navItemsCategories);
    }
  }, [magnetCategories]);

  useEffect(() => {
    if (section) {
      mutate(`/api/magnets/type/${section}`);
    }

    console.log(section);
  }, [section]);

  return (
    <section className={classes.container} id="custom-magnets">
      <SectionsNav navItems={navItems} setNavItems={setNavItems} isRoute />

      <div className={classes.products}>
        <ProductsListing
          products={magnets}
          loading={isLoading || magnetCategoriesIsLoading}
        />
      </div>

      {magnets?.length > 10 && (
        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={() => {
              router.push(routes?.PRODUCTS);
            }}
          >
            Show more
          </Button>
        </div>
      )}
    </section>
  );
};

export default HomeProducts;
