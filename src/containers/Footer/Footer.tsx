import { routeComponents } from "@/utilities/routeComponents";
import classes from "./Footer.module.css";
import Link from "next/link";

const footerNavItems = routeComponents?.filter((data) => data?.children);

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div>
        <h1>Logo</h1>
        <p>We help brands to amplify and inspire people.</p>
      </div>

      {footerNavItems?.map((data) => {
        return (
          <div key={data?.title}>
            <h3>{data?.title}</h3>
            {data?.children?.map((child) => {
              return (
                <Link href={child.route} key={child?.title}>
                  {child?.title}
                </Link>
              );
            })}
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
