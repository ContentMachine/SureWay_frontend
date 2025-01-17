import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classes from "./MagnetDimensions.module.css";
import { magnetShapes } from "@/utilities/products";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { activeToggler } from "@/helpers/activeHandlers";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { magnetDataType } from "@/utilities/types";
import MagnetSizes from "../MagnetSizes/MagnetSizes";

type MagnetDimensionsTypes = {
  data: magnetDataType;
  setData: Dispatch<SetStateAction<magnetDataType>>;
};

const MagnetDimensions = ({ data, setData }: MagnetDimensionsTypes) => {
  // States
  const [shapes, setShapes] = useState(
    magnetShapes?.map((data) => {
      return { image: data?.image, isActive: false, title: data?.title };
    })
  );

  // Utils
  const activeShape = shapes?.find((data) => data?.isActive);

  // Hooks
  const updateSearchParams = useUpdateSearchParams();

  // Effects
  useEffect(() => {
    if (activeShape) {
      setData((prevState) => {
        return { ...prevState, shape: activeShape?.title };
      });
    }
  }, [activeShape]);

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
              <Image src={data?.image} alt="Magnet Shapes" fill={false} />
              <span>{data?.title}</span>
            </div>
          );
        })}
      </div>

      {data?.shape && <MagnetSizes data={data} setData={setData} />}

      {data?.shape && data?.dimension && (
        <Button
          disabled={!data?.shape || !data?.dimension}
          onClick={() => {
            updateSearchParams("step", "2", "set");
          }}
        >
          Next
        </Button>
      )}
    </section>
  );
};

export default MagnetDimensions;
