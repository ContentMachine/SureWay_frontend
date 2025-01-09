import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsListing.module.css";

type ProductsListingType = {
  title: string;
  caption: string;
  products: any[];
};

const ProductsListing = () => {
  return (
    <section className={classes.container}>
      <h4>Title</h4>
      <p>Caption</p>

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
