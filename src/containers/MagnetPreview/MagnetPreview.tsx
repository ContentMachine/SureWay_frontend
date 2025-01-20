import React, { useState } from "react";
import classes from "./MagnetPreview.module.css";
import Image from "next/image";
import { magnetShapes } from "@/utilities/products";

const MagnetPreview = () => {
  // States
  const [quantity, setQuantity] = useState(1);

  //   Utils
  const price = 3000;
  const subTotal = price * quantity;
  const estimatedTax = 0.05 * price;
  const shipping = 0;
  const total = subTotal + estimatedTax + shipping;

  return (
    <div className={classes.productDetails}>
      <h4>Summary</h4>
      <div className={classes.productNameAndPrice}>
        <Image src={magnetShapes[0].image} alt="Product" />
        <span>12 x 12 Circular Magnet</span>
        <span>
          #{price} {quantity > 1 && `x ${quantity} pieces`}
        </span>
      </div>

      <div className={classes.quantityToggle}>
        <p>Quantity</p>
        <button
          onClick={() => {
            setQuantity((prevState) => {
              if (prevState > 1) {
                return prevState - 1;
              } else {
                return 1;
              }
            });
          }}
        >
          -
        </button>
        <div>
          <input
            value={quantity}
            onChange={(e) => {
              setQuantity(Number(e?.target?.value));
            }}
            type="number"
          />
        </div>
        <button
          onClick={() => {
            setQuantity((prevState) => {
              return prevState + 1;
            });
          }}
        >
          +
        </button>
      </div>

      <div className={classes.productInfo}>
        <div className={classes.info}>
          <p>Custom Text</p>
          <p>Ezimorah Tobenna</p>
        </div>

        <div className={classes.info}>
          <p>What you are trying to achieve</p>
          <p>Ezimorah Tobenna</p>
        </div>

        <div className={classes.info}>
          <p>Custom Image</p>
          <p>Ezimorah Tobenna</p>
        </div>
      </div>

      <div className={classes.paymentInformation}>
        <div className={classes.paymentInfo}>
          <p>Subtotal</p>
          <p>#{subTotal}</p>
        </div>

        <div className={classes.paymentInfo2}>
          <p>Estimated Tax</p>
          <p>#{estimatedTax}</p>
        </div>

        <div className={classes.paymentInfo2}>
          <p>Estimated shipping & Handling</p>
          <p>#{shipping}</p>
        </div>

        <div className={classes.paymentInfo}>
          <p>Total</p>
          <p>#{total}</p>
        </div>
      </div>
    </div>
  );
};

export default MagnetPreview;
