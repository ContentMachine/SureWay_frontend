import { productType } from "@/utilities/types";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./ProductsListing.module.css";
import { routes } from "@/utilities";
import Loader from "../Loader/Loader";

type ProductsListingType = {
  title?: string;
  products?: productType[];
  id?: string;
  loading?: boolean;
  type?: "magnet" | "product";
};

const ProductsListing = ({
  title,
  products,
  id,
  loading,
  type,
}: ProductsListingType) => {
  return (
    <section className={classes.container} id={id}>
      {title && <h4>{title}</h4>}

      {loading ? (
        <Loader />
      ) : (products as productType[])?.length < 1 ? (
        <p className={classes.noProducts}>
          No products available at the moment
        </p>
      ) : (
        <div className={classes.products}>
          {products?.map((data) => {
            return (
              <ProductCard
                data={data}
                route={`${routes.CUSTOM_MAGNETS}?step=2`}
                key={data?._id}
                type={type}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProductsListing;
