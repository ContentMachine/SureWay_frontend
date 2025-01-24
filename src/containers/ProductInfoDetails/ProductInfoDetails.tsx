import Button from "@/components/Button/Button";
import classes from "./ProductInfoDetails.module.css";
import Delivery from "@/assets/SvgIcons/Delivery";
import InStock from "@/assets/SvgIcons/InStock";
import Guarantee from "@/assets/SvgIcons/Guarantee";

const ProductInfoDetails = () => {
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
