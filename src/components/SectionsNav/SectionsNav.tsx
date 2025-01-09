import { activeToggler } from "@/helpers/activeHandlers";
import { Dispatch, SetStateAction } from "react";
import classes from "./SectionsNav.module.css";
import { navItemTypes } from "@/utilities/types";

type SectionsNavTypes = {
  navItems: navItemTypes[];
  setNavItems: Dispatch<SetStateAction<navItemTypes[]>>;
  type?: "secondary" | "tertiary";
};

const SectionsNav = ({ navItems, setNavItems, type }: SectionsNavTypes) => {
  return (
    <section className={classes.container}>
      {navItems.map((navItem, index) => {
        return (
          <div
            key={index}
            onClick={() => {
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
