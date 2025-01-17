import { useState } from "react";
import classes from "./MagnetDimensions.module.css";
import { magnetShapes } from "@/utilities/products";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { activeToggler } from "@/helpers/activeHandlers";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

const MagnetDimensions = () => {
  // States
  const [shapes, setShapes] = useState(
    magnetShapes?.map((data, i) => {
      if (i === 0) {
        return { shape: data, isActive: true };
      } else {
        return { shape: data, isActive: false };
      }
    })
  );

  // Utils
  const activeShape = shapes?.find((data) => data?.isActive);

  // Hooks
  const updateSearchParams = useUpdateSearchParams();

  return (
    <section className={classes.container}>
      <h2>Select a Magnet Shape</h2>
      <p>
        Our custom fridge magnets come in 8 shapes and 3 sizes, perfect for any
        occasion. Whether you need a single photo magnet as a gift or bulk
        souvenir magnets for an event, SureWay has you covered!
      </p>
      <div className={classes.shapesContainer}>
        {shapes?.map((data, i) => {
          return (
            <div
              key={i}
              className={data?.isActive ? classes.active : classes.inActive}
              onClick={() => activeToggler(i, shapes, setShapes)}
            >
              <Image src={data?.shape} alt="Magnet Shapes" />
            </div>
          );
        })}
      </div>
      <Button
        disabled={!activeShape}
        onClick={() => {
          updateSearchParams("step", "2", "set");
        }}
      >
        Next
      </Button>
    </section>
  );
};

export default MagnetDimensions;
