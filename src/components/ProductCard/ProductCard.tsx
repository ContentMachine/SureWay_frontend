import Like from "@/assets/SvgIcons/Like";
import classes from "./ProductCard.module.css";
import productImage from "../../assets/Images/productImage.svg";
import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";
import { productType } from "@/utilities/types";
import { useState } from "react";

type ProductCardTypes = {
  data: productType;
  route?: string;
};

const ProductCard = ({ data, route }: ProductCardTypes) => {
  // State
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      className={classes.container}
      href={route || `/products/id`}
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
          <Image src={data?.hoverImage || productImage} alt="Product" />
        ) : (
          <Image src={data?.image || productImage} alt="Product" />
        )}
      </div>

      <div className={classes.textSection}>
        <p>{data?.title}</p>
        <p>Fridge magnets</p>
        <p>₦{data?.price}</p>
      </div>

      <Button>Buy</Button>
    </Link>
  );
};

export default ProductCard;
