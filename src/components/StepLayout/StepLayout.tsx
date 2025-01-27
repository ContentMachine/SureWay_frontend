"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import classes from "./StepLayout.module.css";
import useUpdateSearchPRams from "@/hooks/useUpdateSearchParams";
import Loader from "../Loader/Loader";
import carousel1 from "../../assets/Images/fridgeMagnetHeader.svg";
import Image from "next/image";

type UserOnboardingLayoutProps = {
  children: React.ReactNode;
  notShowHeader?: boolean;
  steps: number[];
  caption: string;
};

const StepLayout = ({
  children,
  steps,
  caption,
}: UserOnboardingLayoutProps) => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchPRams();

  // Steps
  const userStep = updateSearchParams("step", undefined, "get");

  // States
  const [carousel, setCarousel] = useState([
    {
      image:
        "https://res.cloudinary.com/dfilepe0f/image/upload/v1737737989/Rio_SureWay_ztc8i3.svg",
      isActive: true,
    },
    {
      image:
        "https://res.cloudinary.com/dfilepe0f/image/upload/v1737737989/Rio_T_B_poahfh.svg",
      isActive: false,
    },
    {
      image:
        "https://res.cloudinary.com/dfilepe0f/image/upload/v1737737989/Rio_RWM_j2uauz.svg",
      isActive: false,
    },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Effects
  useEffect(() => {
    const timeout = setInterval(() => {
      setActiveIndex((prevState) => {
        if (prevState < carousel.length - 1) {
          return prevState + 1;
        } else {
          return 0;
        }
      });
    }, 3000);

    return () => {
      clearInterval(timeout);
    };
  });

  useEffect(() => {
    setCarousel((prevState) => {
      return prevState.map((data, i) => {
        if (i === activeIndex) {
          return { ...data, isActive: true };
        } else {
          return { ...data, isActive: false };
        }
      });
    });
  }, [activeIndex]);

  return (
    <Suspense fallback={<Loader />}>
      <section className={classes.container}>
        <div className={classes.innerContainer}>
          <div className={classes.body}>
            <p>{caption}</p>
            <div className={classes.stepIndicator}>
              {steps.map((data) => {
                return (
                  <div
                    className={`${classes.step} ${
                      userStep && userStep >= data.toString()
                        ? classes.active
                        : classes.inActive
                    }`}
                    key={data}
                  >
                    <hr />
                    <span>{data}</span>
                  </div>
                );
              })}
            </div>
            <div className={classes.children}>
              <div className={classes.carouselSection}>
                {carousel?.map((data) => {
                  return (
                    <Image
                      src={data?.image as string}
                      alt="Carousel Image"
                      width={500}
                      height={500}
                      className={
                        data?.isActive ? classes.active : classes.inActive
                      }
                    />
                  );
                })}
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default StepLayout;
