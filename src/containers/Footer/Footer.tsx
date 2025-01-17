import { routeComponents } from "@/utilities/routeComponents";
import classes from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Images/logo.svg";

const footerNavItems = routeComponents?.filter((data) => data?.children);

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div>
        <Image src={logo} alt="Sureway Logo" />
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
