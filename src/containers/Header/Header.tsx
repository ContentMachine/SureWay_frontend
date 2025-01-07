import Link from "next/link";
import classes from "./Header.module.css";
import { routeComponents } from "@/utilities/routeComponents";
import Cart from "@/assets/SvgIcons/Cart";
import { routes } from "@/utilities";

const headerRoutes = routeComponents?.filter((data) =>
  data?.properties?.includes("isHeaderRoute")
);

const Header = () => {
  return (
    <header className={classes.container}>
      <Link href={routes?.BASE_URL}>Logo</Link>

      <nav>
        {headerRoutes?.map((route) => {
          return (
            <Link key={route?.route} href={route?.route}>
              {route?.title}
            </Link>
          );
        })}

        <Cart />
      </nav>
    </header>
  );
};

export default Header;
