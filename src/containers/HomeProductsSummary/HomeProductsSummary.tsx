import Button from "@/components/Button/Button";
import { productsSummary } from "@/utilities/products";
import classes from "./HomeProductsSummary.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { routes } from "@/utilities";

const HomeProductsSummary = () => {
  // Router
  const router = useRouter();
  return (
    <section className={classes.container}>
      {/* Left section */}
      <div className={classes.leftSection}>
        {/* Bottom */}
        <div>
          {productsSummary?.slice(0, 1)?.map((data, i) => {
            return (
              <div className={classes.featureCard} key={i}>
                <div>
                  <Image
                    src={data?.image as string}
                    alt={data?.title}
                    objectFit="contain"
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <h3>{data?.title}</h3>
                  <p>{data?.caption}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={classes.featureCard}>
          <div>
            <Image
              src={productsSummary[2]?.image as string}
              alt={productsSummary[2].title}
              objectFit="contain"
              width={200}
              height={200}
            />
          </div>
          <div>
            <h3>{productsSummary[2]?.title}</h3>
            <p>{productsSummary[2]?.caption}</p>
            <Button
              onClick={() => {
                router.push(routes?.MAGNETS);
              }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className={classes.rightSection}>
        <div className={classes.featureCard}>
          <div>
            <Image
              src={productsSummary[3]?.image as string}
              alt={productsSummary[3].title}
              objectFit="contain"
              width={400}
              height={400}
            />
          </div>
          <div>
            <h3>{productsSummary[3]?.title}</h3>
            <p>{productsSummary[3]?.caption}</p>
            <Button>Shop Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProductsSummary;
