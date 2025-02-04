import Like from "@/assets/SvgIcons/Like";
import classes from "./ProductCard.module.css";
import productImage from "../../assets/Images/productImage.svg";
import Image from "next/image";
import Button from "../Button/Button";
import { productType } from "@/utilities/types";
import { useContext, useEffect, useMemo, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { MagnetContext } from "@/context/MagnetContext";
import {
  useDimensionsByTypeAndShape,
  usePriceByTypeShapeAndDimension,
} from "@/hooks/useMagnets";
import { mutate } from "swr";
import {
  formatCurrency,
  formatCurrencyWithoutTrailingDecimals,
} from "@/helpers/formatAmount";
import { useRouter } from "next/navigation";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";

type ProductCardTypes = {
  data: productType;
  route?: string;
  type?: "magnet" | "product";
};

const ProductCard = ({ data, route, type = "magnet" }: ProductCardTypes) => {
  // State
  const [isHovering, setIsHovering] = useState(false);

  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Router
  const router = useRouter();
  const section = updateSearchParams("section", undefined, "get");

  // States
  const [size, setSize] = useState("");

  // Context
  const { setMagnetData } = useContext(MagnetContext);

  const { isLoading: magnetDimensionsIsLoading, data: magnetDimensionsData } =
    useDimensionsByTypeAndShape("custom", data?.shape);

  const { data: magnetPriceData } = usePriceByTypeShapeAndDimension(
    "custom",
    data?.shape,
    size
  );

  // Memo
  const price = useMemo(() => magnetPriceData?.data?.price, [magnetPriceData]);
  const dimensions = useMemo(
    () => magnetDimensionsData?.data?.dimensions,
    [magnetDimensionsData]
  );

  // Effects
  useEffect(() => {
    if (size) {
      mutate(`/api/magnets/size/by-type/custom/${data?.shape}/${size}`);
    }
  }, [size, data?.shape]);

  useEffect(() => {
    if (size) {
      setMagnetData((prevState) => {
        return {
          ...prevState,
          dimension: size,
          shape: data?.shape || "custom",
        };
      });
    }
  }, [size]);

  useEffect(() => {
    if (dimensions?.length > 0 && !size) {
      setSize(dimensions[0]);
    }
  }, [dimensions]);

  const image =
    (data?.images as string[])?.length > 0
      ? isHovering
        ? (data?.images as string[])[1]
        : (data?.images as string[])[0]
      : isHovering
      ? data?.hoverImage
      : data?.image || productImage;

  let startPrice =
    data?.priceRange &&
    `₦${formatCurrencyWithoutTrailingDecimals(
      data?.priceRange?.split("-")[0]
    )}`;
  let capPrice =
    data?.priceRange &&
    `₦${formatCurrencyWithoutTrailingDecimals(
      data?.priceRange?.split("-")[1]
    )}`;

  return (
    <section
      className={classes.container}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      id="product"
    >
      <div>
        <Like />
      </div>

      <div className={classes.image}>
        {isHovering ? (
          <Image
            src={
              data?.images?.length
                ? isHovering
                  ? data?.images[1]
                  : data?.images[0]
                : isHovering
                ? data?.hoverImage
                : data?.image || productImage
            }
            alt="Product"
            width={100}
            height={380}
            loading="eager"
          />
        ) : (
          <Image
            src={image || productImage}
            alt="Product"
            width={100}
            height={380}
          />
        )}
      </div>

      <div className={classes.textSection}>
        <p>{data?.name}</p>
        <p>
          {data?.priceRange
            ? `${startPrice}-${capPrice}`
            : `₦${formatCurrency(price || 0)}`}
        </p>
        {type === "magnet" && (
          <Dropdown
            title="Select a size"
            options={dimensions}
            selected={size}
            setSelected={setSize}
            maxHeight="120px"
            isLoading={magnetDimensionsIsLoading}
          />
        )}
      </div>

      <Button
        onClick={() => {
          if (type !== "magnet") {
            if (section) {
              router.push(`/engravings/${section}/${data?.slug}`);
            }
          } else {
            router.push(`/magnets/custom-magnets?shape=${data?.shape}&step=2`);
          }
        }}
        disabled={type === "magnet" ? !price || !size : false}
      >
        {type === "magnet" ? "Buy" : "View Details"}
      </Button>
    </section>
  );
};

export default ProductCard;
