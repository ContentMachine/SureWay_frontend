import { activeToggler } from "@/helpers/activeHandlers";
import { Dispatch, SetStateAction, useEffect } from "react";
import classes from "./SectionsNav.module.css";
import { navItemTypes } from "@/utilities/types";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

type SectionsNavTypes = {
  navItems: navItemTypes[];
  setNavItems: Dispatch<SetStateAction<navItemTypes[]>>;
  type?: "secondary" | "tertiary";
  isRoute?: boolean;
};

const SectionsNav = ({
  navItems,
  setNavItems,
  type,
  isRoute,
}: SectionsNavTypes) => {
  // Hooks
  const updateSearchParams = useUpdateSearchParams();

  return (
    <section className={classes.container}>
      {navItems.map((navItem, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              if (isRoute) {
                updateSearchParams("section", navItem?.id, "set");
              }
              activeToggler(index, navItems, setNavItems);
            }}
            className={`${
              navItem.isActive ? classes.active : classes.inActive
            } ${
              type === "secondary"
                ? classes.button
                : type === "tertiary"
                ? classes.tertiary
                : classes.noButton
            }`}
          >
            {navItem.title}
          </div>
        );
      })}
    </section>
  );
};

export default SectionsNav;
