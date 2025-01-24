import classes from "./MagnetPreviewAndPayment.module.css";
import MagnetPreview from "../MagnetPreview/MagnetPreview";
import Payment from "../Payment/Payment";
import { magnetDataType } from "@/utilities/types";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { useMagnetPrice } from "@/hooks/useMagnets";
import Loader from "@/components/Loader/Loader";

type MagnetPreviewAndPaymentTypes = {
  data: magnetDataType;
  setData: Dispatch<SetStateAction<magnetDataType>>;
};

const MagnetPreviewAndPayment = ({
  data: magnetFormData,
  setData,
}: MagnetPreviewAndPaymentTypes) => {
  // Requests
  const { isLoading, data } = useMagnetPrice(magnetFormData?.dimension);

  // Memo
  const magnetPrice = useMemo(() => data?.data, [data]);

  // States
  const [price, setPrice] = useState(0);

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
        {isLoading ? (
          <div className={classes.loader}>
            <Loader />
          </div>
        ) : (
          <>
            <MagnetPreview
              data={magnetFormData}
              setData={setData}
              price={magnetPrice?.price}
              setPrice={setPrice}
            />
            <Payment data={magnetFormData} setData={setData} price={price} />
          </>
        )}
      </div>
    </section>
  );
};

export default MagnetPreviewAndPayment;
