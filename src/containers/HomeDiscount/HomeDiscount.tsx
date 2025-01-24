import Button from "@/components/Button/Button";
import classes from "./HomeDiscount.module.css";

const HomeDiscount = () => {
  return (
    <section className={classes.container}>
      <h3>Big Summer Sale</h3>
      <p>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>

      <Button type="secondary">Shop Now</Button>
    </section>
  );
};

export default HomeDiscount;
