import Dropdown from "@/components/Dropdown/Dropdown";
import classes from "./MagnetSizes.module.css";
import { magnetDataType } from "@/utilities/types";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { magnetSizes } from "@/utilities/products";

type MagnetSizesTypes = {
  data: magnetDataType;
  setData: Dispatch<SetStateAction<magnetDataType>>;
};

const MagnetSizes = ({ data, setData }: MagnetSizesTypes) => {
  // Memos
  const selectedShapeSizes = useMemo(
    () => magnetSizes?.find((size) => size?.shape === data?.shape),
    [data]
  );

  // States
  const [dimension, setDimension] = useState("");

  // Effects
  useEffect(() => {
    if (dimension) {
      setData((prevState) => {
        return { ...prevState, dimension };
      });
    }
  }, [dimension]);

  return (
    <section className={classes.container}>
      <h2>Select a Magnet Size</h2>
      <p>
        Our custom fridge magnets come in 8 shapes and 3 sizes, perfect for any
        occasion. Whether you need a single photo magnet as a gift or bulk
        souvenir magnets for an event, SureWay has you covered!
      </p>

      <Dropdown
        title="Select a magnet size"
        options={selectedShapeSizes?.dimensions}
        selected={dimension}
        setSelected={setDimension}
      />
    </section>
  );
};

export default MagnetSizes;