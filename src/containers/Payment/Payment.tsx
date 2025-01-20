import { magnetShapes } from "@/utilities/products";
import classes from "./Payment.module.css";
import Image from "next/image";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

const Payment = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image src={magnetShapes[0]?.image} alt="Product" />
        <span>12 x 12</span>
      </div>

      <form>
        <Input label="Fullname" placeholder="Input your full name" />
        <Input label="Email" placeholder="Input your email" />
        <div className={classes.buttonSection}>
          <Button type="secondary">Back</Button>
          <Button>Pay</Button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
