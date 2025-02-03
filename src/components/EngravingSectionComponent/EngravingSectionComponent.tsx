"use client";

import React from "react";
import classes from "./EngravingSectionComponent.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

type EngravingSectionComponentTypes = {
  title: string;
  route: string;
  backgroundImage?: string;
};

const EngravingSectionComponent = ({
  title,
  route,
  backgroundImage,
}: EngravingSectionComponentTypes) => {
  //   Router
  const router = useRouter();

  return (
    <section
      className={classes.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h4>{title}</h4>
      <Button onClick={() => router.push(route)}>View more</Button>
      <div></div>
    </section>
  );
};

export default EngravingSectionComponent;
