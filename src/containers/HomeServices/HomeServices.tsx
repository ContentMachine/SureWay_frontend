import Button from "@/components/Button/Button";
import { productsCta } from "@/utilities/products";
import Image from "next/image";
import classes from "./HomeServices.module.css";
import { useRouter } from "next/navigation";

const HomeServices = () => {
  // Router
  const router = useRouter();
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
                router.push(data?.route);
              }}
            >
              Explore
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default HomeServices;
