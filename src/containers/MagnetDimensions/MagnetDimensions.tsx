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
import { useMagnetSizes } from "@/hooks/useMagnets";
import { mutate } from "swr";

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

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Router
  const shape = updateSearchParams("shape", undefined, "get");

  // Utils
  const activeShape = shapes?.find((data) => data?.isActive);

  // Requests
  const { isLoading, data: magnetSizesData } = useMagnetSizes(shape as string);

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
      lowerCaseShapes.some((shape) => shape === datum.title.toLowerCase())
    );

    setShapes(memoizedShapes as any);
  }, [magnetInfo]);

  const magnetSizes = useMemo(() => magnetSizesData?.data, [magnetSizesData]);

  // Effects
  useEffect(() => memoizeShapes(), [memoizeShapes]);

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

  useEffect(() => {
    if (shape) {
      mutate(`/api/magnets/size/sizes/${shape}`);
    }
  }, [shape]);

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
              sizes={shape ? magnetSizes : magnetInfo?.sizes}
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
