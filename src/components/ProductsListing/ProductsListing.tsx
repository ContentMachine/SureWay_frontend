import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsListing.module.css";

type ProductsListingType = {
  title: string;
  products?: any[];
  id: string;
};

const ProductsListing = ({ title, products, id }: ProductsListingType) => {
  return (
    <section className={classes.container} id={id}>
      <h4>{title || "Title"}</h4>

      <div className={classes.products}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default ProductsListing;
