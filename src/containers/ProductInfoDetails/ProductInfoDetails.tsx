"use client";

import Button from "@/components/Button/Button";
import classes from "./ProductInfoDetails.module.css";
import Delivery from "@/assets/SvgIcons/Delivery";
import InStock from "@/assets/SvgIcons/InStock";
import Guarantee from "@/assets/SvgIcons/Guarantee";
import { useEngravingProductById } from "@/hooks/useEngravings";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { useParams } from "next/navigation";
import { engravedProductType } from "@/utilities/types";

const ProductInfoDetails = () => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();

  // Router
  const { productId, type } = useParams();

  // Request
  const { isLoading, data: productData } = useEngravingProductById(
    type as engravedProductType,
    productId as string
  );

  console.log(productData, "Data");

  return (
    <section className={classes.container}>
      <h4>Product Name</h4>
      <p>₦20,000</p>
      <p>
        Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work
        without rechargingthroughout the day. Incredible photosas in weak,
        yesand in bright lightusing the new systemwith two cameras more...
      </p>

      <Button>Add to Cart</Button>

      <div className={classes.infoSection}>
        <div>
          <div>
            <Delivery />
          </div>
          <div>
            <span>Free Delivery</span>
            <span>1-2 Days</span>
          </div>
        </div>

        <div>
          <div>
            <InStock />
          </div>
          <div>
            <span>In Stock</span>
            <span>Today</span>
          </div>
        </div>

        <div>
          <div>
            <Guarantee />
          </div>
          <div>
            <span>Guarantee</span>
            <span>1 Year</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfoDetails;
