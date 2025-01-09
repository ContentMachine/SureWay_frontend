import Link from "next/link";
import classes from "./Header.module.css";
import { routeComponents } from "@/utilities/routeComponents";
import Cart from "@/assets/SvgIcons/Cart";
import { routes } from "@/utilities";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import ArrowDown from "@/assets/SvgIcons/ArrowDown";
import { activeToggler } from "@/helpers/activeHandlers";

const headerRoutes = routeComponents?.filter((data) =>
  data?.properties?.includes("isHeaderRoute")
);

const Header = () => {
  // States
  const [navBackground, setNavBackground] = useState("transparent");
  const [navItems, setNavItems] = useState(headerRoutes);

  // Refs
  const optionsRef = useRef<HTMLDivElement | null>(null);

  // Utils
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      return;
    }

    const currentScrollY = (window as any)?.scrollTop as number;

    if ((currentScrollY as number) > 200) {
      setNavBackground("#ffffff");
    } else {
      setNavBackground("transparent");
    }
  };

  // Effects
  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = window;

      if (container) {
        container.addEventListener("scroll", handleScroll);
      }

      // Cleanup function
      return () => {
        if (container) {
          container.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  useEffect(() => {
    // Set all navItems to false so the options dropdown can close if they click outside the box
    if (typeof window !== "undefined") {
      const handleOptionsPopupBlur = (e: any) => {
        if (optionsRef && !optionsRef?.current?.contains(e?.target)) {
          const navItemsCopy = navItems?.map((data) => {
            return { ...data, isActive: false };
          });

          setNavItems(navItemsCopy);
        }
      };

      document?.addEventListener("mousedown", handleOptionsPopupBlur);

      // Remove the function when component unmounts
      return () => {
        document?.removeEventListener("mousedown", handleOptionsPopupBlur);
      };
    }
  }, []);

  return (
    <header
      className={classes.container}
      style={{ backgroundColor: navBackground }}
    >
      <Link href={routes?.BASE_URL}>Logo</Link>

      <nav>
        {navItems?.map((route, i) => {
          if (route.children) {
            return (
              <div
                className={classes.moreOptions}
                onClick={() => activeToggler(i, navItems, setNavItems)}
              >
                <span>{route?.title}</span>
                <ArrowDown />

                {route?.isActive && (
                  <div className={classes.children} ref={optionsRef}>
                    {route?.children?.map((data) => {
                      return <Link href={data?.route}>{data?.title}</Link>;
                    })}
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link key={route?.route} href={route?.route}>
              {route?.title}
            </Link>
          );
        })}
      </nav>
      <Cart />
    </header>
  );
};

export default Header;
