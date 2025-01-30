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
import { formatCurrency } from "@/helpers/formatAmount";
import { useRouter } from "next/navigation";

type ProductCardTypes = {
  data: productType;
  route?: string;
};

const ProductCard = ({ data, route }: ProductCardTypes) => {
  // State
  const [isHovering, setIsHovering] = useState(false);

  // Router
  const router = useRouter();

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
              isHovering ? data?.hoverImage : data?.hoverImage || productImage
            }
            alt="Product"
            width={100}
            height={380}
            loading="eager"
          />
        ) : (
          <Image
            src={data?.image || productImage}
            alt="Product"
            width={100}
            height={380}
          />
        )}
      </div>

      <div className={classes.textSection}>
        <p>{data?.name}</p>
        <p>₦{formatCurrency(price || 0)}</p>
        <Dropdown
          title="Select a size"
          options={dimensions}
          selected={size}
          setSelected={setSize}
          maxHeight="120px"
          isLoading={magnetDimensionsIsLoading}
        />
      </div>

      <Button
        onClick={() =>
          router.push(`/magnets/custom-magnets?shape=${data?.shape}&step=2`)
        }
        disabled={!price || !size}
      >
        Buy
      </Button>
    </section>
  );
};

export default ProductCard;
