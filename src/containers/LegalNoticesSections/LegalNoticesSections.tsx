"use client";

import { AppContext } from "@/context/AppContext";
import { legalNoticesType } from "@/utilities/types";
import Link from "next/link";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import classes from "./LegalNoticesSections.module.css";

type LegalNoticesSectionsTypes = {
  sectionsRef: any;
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
  privacyPolicy: legalNoticesType[];
};

const LegalNoticesSections = ({
  sectionsRef,
  activeSection,
  setActiveSection,
  privacyPolicy,
}: LegalNoticesSectionsTypes) => {
  // Context
  const { containerRef } = useContext(AppContext);

  // Utils
  const handleScroll = (e: any) => {
    e.preventDefault();
    const targetId = (e.target as HTMLElement)
      .getAttribute("href")
      ?.substring(1);
    const targetElement = document.getElementById(targetId as string);

    if (targetElement && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();

      // Calculate the scroll position relative to the container
      const yOffset = -(containerRect.height / 2 - targetRect.height / 2);
      const y =
        targetRect.top -
        containerRect.top +
        containerRef.current.scrollTop +
        yOffset;

      containerRef.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  //   Effects
  useEffect(() => {
    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 1,
    });

    sectionsRef.current.forEach((section: any) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section: any) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className={classes.container}>
      {privacyPolicy.map((data, i) => {
        return (
          <Link
            href={`#${data.title.toLowerCase()}`}
            key={i}
            onClick={handleScroll}
            className={
              activeSection === data.title.toLowerCase()
                ? classes.active
                : undefined
            }
          >
            {data.title}
          </Link>
        );
      })}
    </section>
  );
};

export default LegalNoticesSections;
