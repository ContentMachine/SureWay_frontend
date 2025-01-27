"use client";

import Link from "next/link";
import classes from "./Header.module.css";
import { routeComponents } from "@/utilities/routeComponents";
import Cart from "@/assets/SvgIcons/Cart";
import { routes } from "@/utilities";
import { useEffect, useRef, useState } from "react";
import ArrowDown from "@/assets/SvgIcons/ArrowDown";
import { activeToggler } from "@/helpers/activeHandlers";
import Image from "next/image";
import logo from "../../assets/Images/logo.svg";
import HamburgerIcon from "@/assets/SvgIcons/HamburgerIcon";
import Sidenav from "../Sidenav/Sidenav";

type HeaderTypes = {
  isDynamic?: boolean;
};

const headerRoutes = routeComponents?.filter((data) =>
  data?.properties?.includes("isHeaderRoute")
);

const Header = ({ isDynamic }: HeaderTypes) => {
  // States
  const [navBackground, setNavBackground] = useState(
    isDynamic ? "#000" : "transparent"
  );
  const [navItems, setNavItems] = useState(headerRoutes);

  // Refs
  const optionsRef = useRef<HTMLDivElement | null>(null);
  const sideNavRef = useRef<HTMLDivElement | null>(null);

  // Utils
  const handleScroll = () => {
    if (typeof window === "undefined") {
      return;
    }

    const currentScrollY = window.scrollY;

    if (isDynamic) {
      if ((currentScrollY as number) > 200) {
        setNavBackground("#000");
      } else {
        setNavBackground("transparent");
      }
    } else {
      setNavBackground("#000");
    }
  };

  const handleSidenavOpen = () => {
    if (sideNavRef?.current) {
      sideNavRef.current.style.width = "100vw";
    }
  };

  const handleSidenavClose = () => {
    if (sideNavRef?.current) {
      sideNavRef.current.style.width = "0%";
    }
  };

  // Effects
  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = window;

      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
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
      <Link href={routes?.BASE_URL}>
        <Image src={logo} alt="Sureway Logo" />
      </Link>

      <nav>
        {navItems?.map((route, i) => {
          if (route.children) {
            return (
              <div
                className={classes.moreOptions}
                onClick={() => activeToggler(i, navItems, setNavItems)}
                key={i}
              >
                <span>{route?.title}</span>
                <ArrowDown />

                {route?.isActive && (
                  <div className={classes.children} ref={optionsRef}>
                    {route?.children?.map((data, j) => {
                      return (
                        <Link href={data?.route} key={j}>
                          {data?.title}
                        </Link>
                      );
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

      <HamburgerIcon onClick={handleSidenavOpen} />

      <div className={classes.sidenav} ref={sideNavRef}>
        <Sidenav onClose={handleSidenavClose} />
      </div>
    </header>
  );
};

export default Header;
