import { routeComponents } from "@/utilities/routeComponents";
import classes from "./ProductsSections.module.css";
import Input from "@/components/Input/Input";

const sections = routeComponents?.find(
  (data) => data?.title?.toLowerCase() === "sure things"
);

const ProductsSections = () => {
  return (
    <section className={classes.container}>
      <Input placeholder="Search for any item" />
      {sections?.children?.map((data) => {
        return <p>{data?.title}</p>;
      })}
    </section>
  );
};

export default ProductsSections;
