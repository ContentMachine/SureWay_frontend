"use client";

import { routeComponents } from "@/utilities/routeComponents";
import classes from "./ProductsSections.module.css";
import Input from "@/components/Input/Input";
import { useRouter } from "next/navigation";
import useHash from "@/hooks/useHash";

const sections = routeComponents?.find(
  (data) => data?.title?.toLowerCase() === "sure things"
);

const ProductsSections = () => {
  // Router
  const router = useRouter();

  // Hooks
  const hash = useHash()?.substring(1);

  const handleNavigation = (section: string) => {
    if (typeof window !== "undefined") {
      router.push(`#${section}`);
    }
  };

  return (
    <section className={classes.container}>
      <Input placeholder="Search for any item" />
      {sections?.children?.map((data, i) => {
        const id = data?.route?.replace("/", "");

        return (
          <p
            onClick={() => handleNavigation(id)}
            className={
              data?.route?.includes(hash) ? classes.active : classes.inActive
            }
            key={i}
          >
            {data?.title}
          </p>
        );
      })}
    </section>
  );
};

export default ProductsSections;
