import classes from "./MagnetPreviewAndPayment.module.css";
import MagnetPreview from "../MagnetPreview/MagnetPreview";
import Payment from "../Payment/Payment";

const MagnetPreviewAndPayment = () => {
  return (
    <section className={classes.container}>
      <h2>Preview & Payments</h2>
      <p>
        Review your selections and finalize your order with ease. Our secure and
        seamless payment process ensures your custom creations are just a step
        away from becoming reality. Start customizing with confidence and leave
        the rest to us!
      </p>
      <div className={classes.body}>
        <MagnetPreview />
        <Payment />
      </div>
    </section>
  );
};

export default MagnetPreviewAndPayment;
