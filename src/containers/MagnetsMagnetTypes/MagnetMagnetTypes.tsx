import Button from "@/components/Button/Button";
import classes from "./MagnetMagnetTypes.module.css";
import Image from "next/image";
import { magnetTypes } from "@/utilities/products";
import { useRouter } from "next/navigation";

const MagnetMagnetTypes = () => {
  // Router
  const router = useRouter();
  return (
    <section className={classes.container}>
      {magnetTypes?.map((data) => {
        return (
          <div className={classes.product} key={data?.title}>
            <div>
              <Image src={data?.image} alt={data?.title} />
            </div>
            <h3>{data?.title}</h3>
            <p>{data?.caption}</p>
            <Button type="secondary" onClick={() => router.push(data?.route)}>
              Purchase {data?.title}
            </Button>
          </div>
        );
      })}
    </section>
  );
};

export default MagnetMagnetTypes;
