import { homeHeroUtils } from "@/utilities/homeHeroUtils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./HomeHero.module.css";
import { activeToggler } from "@/helpers/activeHandlers";

const HomeHero = () => {
  // States
  const [utils, setUtils] = useState(homeHeroUtils);
  const [activeIndex, setActiveIndex] = useState(0);

  //   Effects
  useEffect(() => {
    const timeout = setInterval(() => {
      // Function that automatically sets a header object to true

      // if active index is less than the length of the home utils array
      setActiveIndex((prevState) => {
        if (prevState <= utils?.length) {
          return prevState + 1;
        } else {
          return 0;
        }
      });

      return () => {
        // Clear interval when page unmounts
        clearInterval(timeout);
      };
    }, 5000);
  }, []);

  useEffect(() => {
    if (utils?.length) {
      activeToggler(activeIndex, utils, setUtils);
    }
  }, [activeIndex]);

  console.log(activeIndex, "Active Index");

  return (
    <section className={classes.container}>
      {utils?.map((data) => {
        return (
          <div
            key={data?.text}
            className={data?.isActive ? classes.active : classes.inActive}
          >
            <h1>{data?.text}</h1>
            <Image src={data?.image} alt={data?.text} />
          </div>
        );
      })}
    </section>
  );
};

export default HomeHero;
