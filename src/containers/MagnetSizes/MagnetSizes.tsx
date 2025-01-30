import Dropdown from "@/components/Dropdown/Dropdown";
import classes from "./MagnetSizes.module.css";
import { magnetDataType } from "@/utilities/types";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { magnetSizes } from "@/utilities/products";
import { usePathname } from "next/navigation";

type MagnetSizesTypes = {
  data: magnetDataType;
  setData: Dispatch<SetStateAction<magnetDataType>>;
  sizes: string[];
  loading?: boolean;
};

const MagnetSizes = ({ data, setData, sizes, loading }: MagnetSizesTypes) => {
  // States
  const [dimension, setDimension] = useState("");

  // Router
  const pathname = usePathname();

  // Effects
  useEffect(() => {
    if (dimension) {
      setData((prevState) => {
        return { ...prevState, dimension };
      });
    }
  }, [dimension]);

  return (
    <section className={classes.container} id="magnet-sizes">
      <h2>Select a Magnet Size</h2>
      {pathname.includes("car") && (
        <p>
          10cm x 10cm is about the size of your palm, whereas 30cm x 30cm is
          approximately the size of a large dinner plate.
        </p>
      )}

      <Dropdown
        title="Select a magnet size"
        options={sizes}
        selected={dimension || data?.dimension}
        setSelected={setDimension}
        isLoading={loading}
      />
    </section>
  );
};

export default MagnetSizes;
