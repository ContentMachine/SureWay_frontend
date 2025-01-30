import { homeHeroUtils } from "@/utilities/homeHeroUtils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import classes from "./HomeHero.module.css";
import { activeToggler, activeTogglerRestAll } from "@/helpers/activeHandlers";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const HomeHero = () => {
  // States
  const [utils, setUtils] = useState(homeHeroUtils);
  const [activeIndex, setActiveIndex] = useState(0);

  // Router
  const router = useRouter();

  //   Effects
  useEffect(() => {
    const timeout = setInterval(() => {
      // Function that automatically sets a header object to true

      // if active index is less than the length of the home utils array
      setActiveIndex((prevState) => {
        if (prevState < utils?.length - 1) {
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
      activeTogglerRestAll(activeIndex, utils, setUtils);
    }
  }, [activeIndex]);

  return (
    <section className={classes.outerContainer}>
      <div className={classes.container}>
        {utils?.map((data, i) => {
          return (
            <div
              key={i}
              className={data?.isActive ? classes.active : classes.inActive}
            >
              <h1>{data?.text}</h1>
              <Image
                src={data?.image}
                width={1000}
                height={1000}
                alt={data?.text}
              />

              <Button
                onClick={() => router.push("#custom-magnets")}
                id="shop-button"
              >
                Shop
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeHero;
