import Button from "@/components/Button/Button";
import { productsSummary } from "@/utilities/products";
import classes from "./HomeProductsSummary.module.css";

const HomeProductsSummary = () => {
  return (
    <section className={classes.container}>
      {/* Left section */}
      <div className={classes.leftSection}>
        <div className={classes.featureCard}>
          <div>{/* Image */}</div>
          <div>
            <h3>{productsSummary[0]?.title}</h3>
            <p>{productsSummary[0]?.caption}</p>
          </div>
        </div>

        {/* Bottom */}
        <div>
          {productsSummary?.slice(1, 3)?.map((data) => {
            return (
              <div className={classes.featureCard} key={data?.title}>
                <div>{/* Image */}</div>
                <div>
                  <h3>{data?.title}</h3>
                  <p>{data?.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right section */}
      <div className={classes.rightSection}>
        <div className={classes.featureCard}>
          <div>{/* Image */}</div>
          <div>
            <h3>{productsSummary[3]?.title}</h3>
            <p>{productsSummary[3]?.caption}</p>
            <Button type="secondary">Shop Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProductsSummary;
