import Like from "@/assets/SvgIcons/Like";
import classes from "./ProductCard.module.css";
import productImage from "../../assets/Images/productImage.svg";
import Image from "next/image";
import Button from "../Button/Button";

const ProductCard = () => {
  return (
    <div className={classes.container}>
      <div>
        <Like />
      </div>
      <Image src={productImage} alt="Product" />
      <div className={classes.textSection}>
        <p>Magnets</p>
        <p>Fridge magnets</p>
        <p>₦170,000</p>
      </div>

      <Button>Buy now</Button>
    </div>
  );
};

export default ProductCard;
