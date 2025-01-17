import { productType } from "@/utilities/types";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsListing.module.css";

type ProductsListingType = {
  title?: string;
  products?: productType[];
  id?: string;
};

const ProductsListing = ({ title, products, id }: ProductsListingType) => {
  return (
    <section className={classes.container} id={id}>
      {title && <h4>{title}</h4>}

      <div className={classes.products}>
        {products?.map((data) => {
          return <ProductCard data={data} />;
        })}
      </div>
    </section>
  );
};

export default ProductsListing;
