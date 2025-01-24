import Image from "next/image";
import classes from "./ProductInfo.module.css";
import productImage from "../../assets/Images/productImage.svg";
import ProductInfoDetails from "../ProductInfoDetails/ProductInfoDetails";
import ProductInfoDescription from "../ProductInfoDescription/ProductInfoDescription";

const ProductInfo = () => {
  return (
    <section className={classes.container}>
      <div className={classes.topSection}>
        <div>
          <Image src={productImage} alt="Product Image" />
        </div>
        <div>
          <ProductInfoDetails />
        </div>
      </div>

      <ProductInfoDescription />
    </section>
  );
};

export default ProductInfo;
