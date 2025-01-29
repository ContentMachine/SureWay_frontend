import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import classes from "./MagnetPreview.module.css";
import Image from "next/image";
import { magnetShapes } from "@/utilities/products";
import { magnetDataType } from "@/utilities/types";
import { formatCurrency } from "@/helpers/formatAmount";
import { useMagnetPriceByQuantity } from "@/hooks/useMagnets";
import { mutate } from "swr";
import Loader from "@/components/Loader/Loader";
import { usePathname } from "next/navigation";
import { capitalize } from "@/helpers/capitalize";

type MagnetPreviewTypes = {
  data: magnetDataType;
  setData: Dispatch<SetStateAction<magnetDataType>>;
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
};

const MagnetPreview = ({
  data: magnetData,
  setData,
  price,
  setPrice,
}: MagnetPreviewTypes) => {
  // States
  const [quantity, setQuantity] = useState(1);
  const [quantityState, setQuantityState] = useState(1);

  // Router
  const pathname = usePathname();
  const type = pathname.split("/")[2].split("-")[0];

  // Requests
  const { isLoading, data: magnetPriceByQuantityData } =
    useMagnetPriceByQuantity(String(price), quantityState);

  // Memos
  const magnetPriceByQuantity = useMemo(
    () => magnetPriceByQuantityData?.data,
    [magnetPriceByQuantityData]
  );

  const selectedShape = magnetShapes?.find(
    (data) => data?.title?.toLowerCase() === magnetData?.shape?.toLowerCase()
  );

  // Effects
  useEffect(() => {
    if (price && quantity) {
      const timeout = setTimeout(() => {
        setQuantityState(quantity);
        mutate(`/api/magnets/price/by-quantity/${price}/${quantity}`);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [price, quantity]);

  useEffect(() => {
    if (magnetPriceByQuantityData) {
      setPrice(magnetPriceByQuantityData?.data?.total);
    }
  }, [magnetPriceByQuantityData]);

  return (
    <div className={classes.productDetails}>
      <h4>Summary</h4>
      <div className={classes.productNameAndPrice}>
        {selectedShape ? (
          <Image
            src={selectedShape?.image}
            alt="Product"
            width={40}
            height={40}
          />
        ) : null}
        <span className={classes.itemName}>
          {magnetData?.dimension}{" "}
          {(magnetData?.shape !== "none" && magnetData?.shape) ||
            capitalize(type) ||
            ""}{" "}
          Magnet
        </span>
        <span className={classes.itemPrice}>
          ₦{formatCurrency(price)} {quantity > 1 && `x ${quantity} pieces`}
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
          <p>{magnetData?.customText || "N/A"}</p>
        </div>

        <div className={classes.info}>
          <p>What you are trying to achieve</p>
          <p>{magnetData?.achievement || "N/A"}</p>
        </div>

        <div className={classes.info}>
          <p>Custom Image</p>
          {magnetData?.image ? (
            <Image
              src={magnetData?.image as string}
              alt={`${magnetData?.dimension} magnet`}
              width={300}
              height={300}
            />
          ) : (
            <p>N/A</p>
          )}
        </div>
      </div>

      <div className={classes.paymentInformation}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={classes.paymentInfo}>
              <p>Subtotal</p>
              <p>₦{formatCurrency(magnetPriceByQuantity?.subTotal) || "N/A"}</p>
            </div>

            <div className={classes.paymentInfo2}>
              <p>Estimated Tax</p>
              <p>
                ₦{formatCurrency(magnetPriceByQuantity?.estimatedTax) || "N?A"}
              </p>
            </div>

            <div className={classes.paymentInfo2}>
              <p>Estimated customization cost</p>
              <p>₦{formatCurrency(magnetPriceByQuantity?.shipping) || "N/A"}</p>
            </div>

            <div className={classes.paymentInfo}>
              <p>Total</p>
              <p>₦{formatCurrency(magnetPriceByQuantity?.total) || "N/A"}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MagnetPreview;
