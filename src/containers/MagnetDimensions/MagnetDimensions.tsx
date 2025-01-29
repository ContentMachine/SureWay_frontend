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
import {
  useDimensionsByTypeAndShape,
  useShapesByType,
} from "@/hooks/useMagnets";
import { mutate } from "swr";
import { useParams, useRouter } from "next/navigation";

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
  const router = useRouter();
  const { type } = useParams();

  // Utils
  const activeShape = shapes?.find((data) => data?.isActive);
  const separatedType = (type as string)?.split("-")[0];

  // Requests
  const { isLoading, data: magnetSizesData } = useDimensionsByTypeAndShape(
    separatedType,
    (shape as string) || data?.shape
  );
  const { data: shapesData } = useShapesByType((type as string)?.split("-")[0]);

  // Memo
  const memoizeShapes = useCallback(() => {
    if (!shapesData?.data?.shapes || !magnetShapes) {
      setShapes([]);
      return;
    }

    const lowerCaseShapes = shapesData?.data.shapes.map((shape: string) =>
      shape.toLowerCase()
    );
    const memoizedShapes = magnetShapes.filter((datum) =>
      lowerCaseShapes?.some((shape: any) => shape === datum.title.toLowerCase())
    );

    setShapes(memoizedShapes as any);
  }, [shapesData]);

  const magnetSizes = useMemo(
    () => magnetSizesData?.data?.dimensions,
    [magnetSizesData]
  );

  // Effects
  useEffect(() => memoizeShapes(), [memoizeShapes]);

  useEffect(() => {
    if (activeShape) {
      setData((prevState) => {
        return { ...prevState, shape: activeShape?.title?.toLowerCase() };
      });
    }
  }, [activeShape]);

  useEffect(() => {
    if (shape) {
      mutate(`/api/magnets/size/by-type/${separatedType}/${shape}`);
    } else {
      mutate(`/api/magnets/size/by-type/${separatedType}/${data?.shape}`);
    }
  }, [shape, data?.shape]);

  return (
    <Suspense fallback={<Loader />}>
      <section className={classes.container}>
        {shapes?.length > 0 && type !== "custom-magnets" && (
          <>
            <h2>Select a Magnet Shape</h2>
            <p>
              Our custom fridge magnets come in {shapes?.length || "some"}{" "}
              shapes and {magnetSizes?.length || "several"} sizes, perfect for
              any occasion. Whether you need a single photo magnet as a gift or
              bulk souvenir magnets for an event, SureWay has you covered!
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
                    onClick={() => {
                      activeToggler(i, shapes, setShapes);
                      router.push("#magnet-sizes");
                      setData((prevState) => {
                        return { ...prevState, dimension: "" };
                      });
                    }}
                  >
                    <Image
                      src={shape?.image}
                      alt="Magnet Shapes"
                      fill={false}
                      height={200}
                      width={200}
                    />
                    <span>{shape?.title?.replaceAll("-", " ")}</span>
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
              sizes={magnetSizes}
              loading={isLoading}
            />
          </>
        )}

        {data?.shape && data?.dimension && (
          <Button
            disabled={!data?.shape || !data?.dimension}
            onClick={() => {
              updateSearchParams("step", "2", "set", true);
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
