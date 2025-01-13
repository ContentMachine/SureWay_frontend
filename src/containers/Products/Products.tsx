import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Products.module.css";
import ProductsListing from "@/components/ProductsListing/ProductsListing";
import ProductsSections from "../ProductsSections/ProductsSections";

const Products = () => {
  return (
    <AppLayout className={classes.container}>
      <ProductsSections />

      <div>
        <ProductsListing />
        <ProductsListing />
        <ProductsListing />
      </div>
    </AppLayout>
  );
};

export default Products;
