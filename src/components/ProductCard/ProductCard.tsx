import Like from "@/assets/SvgIcons/Like";
import classes from "./ProductCard.module.css";
import productImage from "../../assets/Images/productImage.svg";
import Image from "next/image";
import Button from "../Button/Button";
import { productType } from "@/utilities/types";
import { useContext, useEffect, useMemo, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { MagnetContext } from "@/context/MagnetContext";
import { useMagnetPrice, useMagnetSizes } from "@/hooks/useMagnets";
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
  const [size, setSize] = useState("10cmx10cm");

  // Context
  const { setMagnetData } = useContext(MagnetContext);

  // Request
  const { isLoading: magnetPriceIsLoading, data: magnetPrice } =
    useMagnetPrice(size);

  const { isLoading: magnetShapeIsLoading, data: magnetShapeData } =
    useMagnetSizes(data?.shape);

  // Memo
  const price = useMemo(() => magnetPrice?.data?.price, [magnetPrice]);
  const shapes = useMemo(() => magnetShapeData?.data, [magnetShapeData]);

  // Effects
  useEffect(() => {
    if (size) {
      mutate(`/api/magnets/size/by-size/${size}`);
    }

    if (data?.shape) {
      mutate(`/api/magnets/size/sizes/${data?.shape}`);
    }
  }, [size, data?.shape]);

  useEffect(() => {
    if (size) {
      setMagnetData((prevState) => {
        return { ...prevState, dimension: size, shape: data?.shape || "" };
      });
    }
  }, [size]);

  return (
    <section
      className={classes.container}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <div>
        <Like />
      </div>

      <div className={classes.image}>
        {isHovering ? (
          <Image
            src={data?.hoverImage || productImage}
            alt="Product"
            width={100}
            height={380}
          />
        ) : (
          <Image
            src={data?.image || productImage}
            alt="Product"
            // layout="responsive"
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
          options={shapes}
          selected={size}
          setSelected={setSize}
          maxHeight="120px"
          isLoading={magnetPriceIsLoading || magnetShapeIsLoading}
        />
      </div>

      <Button
        onClick={() =>
          router.push(`/magnets/custom-magnets?shape=${data?.shape}`)
        }
        disabled={!price || !size}
      >
        Buy
      </Button>
    </section>
  );
};

export default ProductCard;
