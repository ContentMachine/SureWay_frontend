import Button from "@/components/Button/Button";
import { productsCta } from "@/utilities/products";
import Image from "next/image";
import classes from "./HomeServices.module.css";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { setModalTrue } from "@/helpers/modalHandlers";

const HomeServices = () => {
  // COntext
  const { setModals } = useContext(AppContext);

  return (
    <section className={classes.container}>
      {productsCta?.map((data) => {
        return (
          <div className={classes.product} key={data?.title}>
            <div>
              <Image src={data?.image} alt={data?.title} />
            </div>
            <h3>{data?.title}</h3>
            <p>{data?.caption}</p>
            <Button
              type="secondary"
              onClick={() => {
                setModalTrue(setModals, "enquiry");
              }}
            >
              Make an inquiry
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default HomeServices;
