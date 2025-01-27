"use client";

import Header from "@/containers/Header/Header";
import classes from "./AppLayout.module.css";
import Footer from "@/containers/Footer/Footer";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

type AppLayoutTypes = {
  children: React.ReactNode;
  className?: string;
  isDynamic?: boolean;
};

const AppLayout = ({ children, className, isDynamic }: AppLayoutTypes) => {
  // Context
  const { containerRef } = useContext(AppContext);
  return (
    <main className={`${classes.container}`}>
      <Header isDynamic={isDynamic} />
      <section className={className} ref={containerRef}>
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default AppLayout;
