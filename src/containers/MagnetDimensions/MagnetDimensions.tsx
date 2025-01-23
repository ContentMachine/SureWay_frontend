"use client";

import {
  Dispatch,
  SetStateAction,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import classes from "./MagnetDimensions.module.css";
import { magnetShapes } from "@/utilities/products";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { activeToggler } from "@/helpers/activeHandlers";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { magnetDataType, magnetTypeTypes, shapesType } from "@/utilities/types";
import MagnetSizes from "../MagnetSizes/MagnetSizes";
import Loader from "@/components/Loader/Loader";

type MagnetDimensionsTypes = {
  data: magnetDataType;
  setData: Dispatch<SetStateAction<magnetDataType>>;
  magnetInfo: magnetTypeTypes;
};

const MagnetDimensions = ({
  data,
  setData,
  magnetInfo,
}: MagnetDimensionsTypes) => {
  // States
  const [shapes, setShapes] = useState<shapesType[]>([]);

  // Utils
  const activeShape = shapes?.find((data) => data?.isActive);

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Memo
  const memoizeShapes = useCallback(() => {
    if (!magnetInfo?.shapes || !magnetShapes) {
      setShapes([]);
      return;
    }

    const lowerCaseShapes = magnetInfo.shapes.map((shape) =>
      shape.toLowerCase()
    );
    const memoizedShapes = magnetShapes.filter((datum) =>
      lowerCaseShapes.some((shape) => shape.includes(datum.title.toLowerCase()))
    );

    setShapes(memoizedShapes as any);

    console.log(memoizedShapes, "memoo");
  }, [magnetInfo]);

  useEffect(() => memoizeShapes(), [memoizeShapes]);

  // Effects
  useEffect(() => {
    if (activeShape) {
      setData((prevState) => {
        return { ...prevState, shape: activeShape?.title };
      });
    }
  }, [activeShape]);

  useEffect(() => {
    if (magnetInfo?.shapes?.length < 1) {
      setData((prevState) => {
        return { ...prevState, shape: "none" };
      });
    }
  }, [magnetInfo?.shapes]);

  console.log(magnetInfo?.shapes, "Shapes");

  return (
    <Suspense fallback={<Loader />}>
      <section className={classes.container}>
        {shapes?.length > 0 && (
          <>
            <h2>Select a Magnet Shape</h2>
            <p>
              Our custom fridge magnets come in 8 shapes and 3 sizes, perfect
              for any occasion. Whether you need a single photo magnet as a gift
              or bulk souvenir magnets for an event, SureWay has you covered!
            </p>
            <div className={classes.shapesContainer}>
              {shapes?.map((shape, i) => {
                return (
                  <div
                    key={i}
                    className={
                      shape?.title?.toLowerCase() === data?.shape?.toLowerCase()
                        ? classes.active
                        : classes.inActive
                    }
                    onClick={() => activeToggler(i, shapes, setShapes)}
                  >
                    <Image
                      src={shape?.image}
                      alt="Magnet Shapes"
                      fill={false}
                    />
                    <span>{shape?.title}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {data?.shape && (
          <>
            <MagnetSizes
              data={data}
              setData={setData}
              sizes={magnetInfo?.sizes}
            />
          </>
        )}

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
    </Suspense>
  );
};

export default MagnetDimensions;
