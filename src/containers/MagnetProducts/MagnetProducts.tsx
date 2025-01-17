import { navItemTypes } from "@/utilities/types";
import React, { useMemo, useState } from "react";
import classes from "./MagnetProducts.module.css";
import SectionsNav from "@/components/SectionsNav/SectionsNav";
import ProductCard from "@/components/ProductCard/ProductCard";
import { useRouter } from "next/navigation";
import ProductsListing from "@/components/ProductsListing/ProductsListing";
import { valentinesProducts } from "@/utilities/products";

const MagnetProducts = () => {
  // States
  const [navItems, setNavItems] = useState<navItemTypes[]>([
    {
      title: "Valentine's Day Magnets",
      isActive: true,
      description:
        "Valentine's Day is the perfect moment to show your loved ones how much they mean to you.",
    },
    {
      title: "Birthday Magnets",
      isActive: false,
      description:
        "Our birthday magnet designs are perfect as personalised gifts for the birthday star. Easily customise them with your favorite photos and create a keepsake they'll treasure forever.",
    },
    {
      title: "Mother's Day",
      isActive: false,
      description:
        "Our birthday magnet designs are perfect as personalised gifts for the birthday star. Easily customise them with your favorite photos and create a keepsake they'll treasure forever.",
    },
    {
      title: "Father's Day",
      isActive: false,
      description:
        "Our birthday magnet designs are perfect as personalised gifts for the birthday star. Easily customise them with your favorite photos and create a keepsake they'll treasure forever.",
    },
    {
      title: "Other Occasions",
      isActive: false,
      description:
        "Our other occasion magnet designs are perfect as personalised gifts for the birthday star. Easily customise them with your favorite photos and create a keepsake they'll treasure forever.",
    },
  ]);

  // Router
  const router = useRouter();

  //   Memo
  const activeNav = useMemo(
    () => navItems?.find((data) => data?.isActive),
    [navItems]
  );

  return (
    <section className={classes.container}>
      <h4>Our Magnetic Products</h4>
      <p>
        Whether you're a DIY enthusiast, a professional, or simply looking to
        add a touch of functionality to your space, our collection ensures
        reliability and style. Browse our selection today and experience the
        magic of magnets!
      </p>

      <SectionsNav navItems={navItems} setNavItems={setNavItems} />

      <ProductsListing products={valentinesProducts} />
    </section>
  );
};

export default MagnetProducts;
