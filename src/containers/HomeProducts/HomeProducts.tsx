import ProductCard from "@/components/ProductCard/ProductCard";
import SectionsNav from "@/components/SectionsNav/SectionsNav";
import { navItemTypes } from "@/utilities/types";
import { useState } from "react";
import classes from "./HomeProducts.module.css";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { routes } from "@/utilities";

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

  // Router
  const router = useRouter();

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
    </section>
  );
};

export default HomeProducts;
