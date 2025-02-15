"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import classes from "./StepLayout.module.css";
import useUpdateSearchPRams from "@/hooks/useUpdateSearchParams";
import Loader from "../Loader/Loader";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

  // Router
  const pathname = usePathname();

  // Steps
  const userStep = updateSearchParams("step", undefined, "get");

  // States
  const [carousel, setCarousel] = useState([
    {
      image:
        "https://res.cloudinary.com/dfilepe0f/image/upload/v1738081765/Kia_Rio_T_B_lmkve7.svg",
      isActive: true,
    },
    {
      image:
        "https://res.cloudinary.com/dfilepe0f/image/upload/v1738081764/Kia_Rio_SureWay_wzfvba.svg",
      isActive: false,
    },
    {
      image:
        "https://res.cloudinary.com/dfilepe0f/image/upload/v1738081763/Kia_Rio_Roll_With_Me_bxgkso.svg",
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
            <p>
              Make memorable gifts and souvenirs in {steps?.length} simple steps
            </p>
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
              <div
                className={classes.carouselSection}
                style={
                  pathname?.includes("car") && userStep === "1"
                    ? { display: "flex" }
                    : { display: "none" }
                }
              >
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
                      key={data?.image}
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
