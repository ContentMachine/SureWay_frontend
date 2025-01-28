import { magnetShapes } from "@/utilities/products";
import classes from "./Payment.module.css";
import Image from "next/image";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { magnetDataType } from "@/utilities/types";
import { Dispatch, SetStateAction, useMemo } from "react";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { useMagnetPriceByQuantity } from "@/hooks/useMagnets";
import { useRouter } from "next/navigation";
import { routes } from "@/utilities";
import dynamic from "next/dynamic";
import { useToast } from "@/context/ToastContext";

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

type PaymentTypes = {
  data: magnetDataType;
  setData: Dispatch<SetStateAction<magnetDataType>>;
  price: number;
};

const Payment = ({ data, setData, price }: PaymentTypes) => {
  // Hooks
  const { updateSearchParams } = useUpdateSearchParams();
  const { showToast } = useToast();

  // Router
  const router = useRouter();
  const orderId = updateSearchParams("order-id", undefined, "get");

  const selectedShape = magnetShapes?.find(
    (shape) => shape?.title?.toLowerCase() === data?.shape?.toLowerCase()
  );

  // Utils
  const componentProps = {
    email: data?.email,
    amount: price * 100,
    metadata: {
      name: data?.fullName,
      phone: data?.phone,
      custom_fields: [],
      orderId: orderId,
    },
    text: "Pay",
    onSuccess: () => {
      showToast("Thanks for buying your magnet from Sureway", "success");
      router.push(`${routes.MAGNETS}#custom-magnets`);
    },
    publicKey: process?.env?.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY as string,
  };

  return (
    <div className={classes.container}>
      {selectedShape && (
        <div className={classes.imageContainer}>
          <Image
            src={selectedShape?.image}
            alt={selectedShape?.title as string}
            width={337}
            height={337}
          />
          <span>12 x 12</span>
        </div>
      )}

      <form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Fullname"
          placeholder="Input your full name"
          value={data?.fullName}
          onChange={(e) => inputChangeHandler(e, setData)}
          name="fullName"
          readOnly
        />
        <Input
          label="Email"
          placeholder="Input your email"
          value={data?.email}
          onChange={(e) => inputChangeHandler(e, setData)}
          name="email"
          readOnly
        />
        <div className={classes.buttonSection}>
          <Button
            type="secondary"
            onClick={(e) => {
              e.preventDefault();
              updateSearchParams("step", "2", "set");
            }}
          >
            Back
          </Button>
          <PaystackButton
            {...componentProps}
            disabled={!data?.fullName || !data?.email}
          />
        </div>
      </form>
    </div>
  );
};

export default Payment;
