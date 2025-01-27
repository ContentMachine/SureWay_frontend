"use client";

import LegalNoticesBody from "@/containers/LegalNoticesBody/LegalNoticesBody";
import LegalNoticesLayoutHeroSection from "@/containers/LegalNoticesLayoutHeroSection/LegalNoticesLayoutHeroSection";
import LegalNoticesSections from "@/containers/LegalNoticesSections/LegalNoticesSections";
import React, { useRef, useState } from "react";
import AppLayout from "../AppLayout/AppLayout";
import classes from "./LegalNoticesLayout.module.css";
import { legalNoticesType } from "@/utilities/types";
import SectionsHero from "@/components/SectionsHero/SectionsHero";

type LegalNoticesLayoutTypes = {
  header: string;
  caption: string;
  data: legalNoticesType[];
};

const LegalNoticesLayout = ({
  header,
  caption,
  data,
}: LegalNoticesLayoutTypes) => {
  // Refs
  const sectionsRef = useRef([]);

  //   States
  const [activeSection, setActiveSection] = useState("");

  return (
    <AppLayout className={classes.container}>
      <SectionsHero
        title={header}
        bannerImage="https://res.cloudinary.com/dfilepe0f/image/upload/v1737384952/magnets_exiisb.jpg"
      />
      <div className={classes.detailSection}>
        <LegalNoticesSections
          sectionsRef={sectionsRef}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          privacyPolicy={data}
        />
        <LegalNoticesBody sectionsRef={sectionsRef} privacyPolicy={data} />
      </div>
    </AppLayout>
  );
};

export default LegalNoticesLayout;
