import { productType } from "@/utilities/types";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsListing.module.css";
import { routes } from "@/utilities";

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
          return (
            <ProductCard
              data={data}
              route={`${routes.CUSTOM_MAGNETS}?step=2`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductsListing;
