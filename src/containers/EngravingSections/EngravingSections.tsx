import EngravingSectionComponent from "@/components/EngravingSectionComponent/EngravingSectionComponent";
import React from "react";
import classes from "./EngravingSections.module.css";
import { engravingSections } from "@/utilities/engravings";

const EngravingSections = () => {
  return (
    <section className={classes.container}>
      {engravingSections?.map((data, i) => {
        return (
          <EngravingSectionComponent
            key={i}
            title={data?.title}
            route={data?.route}
            backgroundImage={data?.backgroundImage}
          />
        );
      })}
    </section>
  );
};

export default EngravingSections;
