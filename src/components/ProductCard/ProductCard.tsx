import Like from "@/assets/SvgIcons/Like";
import classes from "./ProductCard.module.css";
import productImage from "../../assets/Images/productImage.svg";
import Image from "next/image";
import Button from "../Button/Button";
import { productType } from "@/utilities/types";
import { useContext, useEffect, useMemo, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { MagnetContext } from "@/context/MagnetContext";
import { useMagnetPrice } from "@/hooks/useMagnets";
import { mutate } from "swr";
import { formatCurrency } from "@/helpers/formatAmount";

type ProductCardTypes = {
  data: productType;
  route?: string;
};

const ProductCard = ({ data, route }: ProductCardTypes) => {
  // State
  const [isHovering, setIsHovering] = useState(false);

  // States
  const [size, setSize] = useState("10x10");

  // Context
  const { magnetSizes, magnetSizesIsLoading } = useContext(MagnetContext);

  // Request
  const { isLoading: magnetPriceIsLoading, data: magnetPrice } =
    useMagnetPrice(size);

  // Memo
  const price = useMemo(() => magnetPrice?.data?.price, [magnetPrice]);

  // Effects
  useEffect(() => {
    if (size) {
      mutate(`/api/magnets/size/by-size/${size}`);
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
          options={magnetSizes}
          selected={size}
          setSelected={setSize}
          maxHeight="120px"
          isLoading={magnetPriceIsLoading || magnetSizesIsLoading}
        />
      </div>

      <Button disabled={!price || !size}>Buy</Button>
    </section>
  );
};

export default ProductCard;
