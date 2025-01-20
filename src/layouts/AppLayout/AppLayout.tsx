"use client";

import Header from "@/containers/Header/Header";
import classes from "./AppLayout.module.css";
import Footer from "@/containers/Footer/Footer";

type AppLayoutTypes = {
  children: React.ReactNode;
  className?: string;
  isDynamic?: boolean;
};

const AppLayout = ({ children, className, isDynamic }: AppLayoutTypes) => {
  return (
    <main className={`${classes.container}`}>
      <Header isDynamic={isDynamic} />
      <section className={className}>{children}</section>
      <Footer />
    </main>
  );
};

export default AppLayout;
