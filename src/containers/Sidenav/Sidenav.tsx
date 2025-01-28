import { useState } from "react";
import classes from "./Sidenav.module.css";
import { routeComponents } from "@/utilities/routeComponents";
import { activeToggler } from "@/helpers/activeHandlers";
import ArrowDown from "@/assets/SvgIcons/ArrowDown";
import Link from "next/link";
import Close from "@/assets/SvgIcons/Close";
import { routes } from "@/utilities";

type SidenavTypes = {
  onClose: () => void;
};

const Sidenav = ({ onClose }: SidenavTypes) => {
  // Utils
  const headerRoutes = routeComponents?.filter((data) =>
    data?.properties?.includes("isHeaderRoute")
  );

  // States
  const [navItems, setNavItems] = useState(headerRoutes);

  return (
    <section className={classes.container}>
      <div>
        <Close onClick={onClose} />
      </div>
      <nav>
        <Link href={routes?.BASE_URL}>Home</Link>
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

                <div
                  className={classes.children}
                  style={
                    route?.isActive
                      ? { maxHeight: "500px" }
                      : { maxHeight: "0px" }
                  }
                >
                  {route?.children?.map((data, j) => {
                    return (
                      <Link href={data?.route} key={j}>
                        {data?.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }
          return (
            <Link key={i} href={route?.route}>
              {route?.title}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidenav;
