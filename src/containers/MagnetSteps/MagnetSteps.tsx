import classes from "./MagnetSteps.module.css";

const magnetSteps = [
  "Pick a size, shape, and quantity",
  "Upload a picture, logo, or design of your choice",
  "Pay using our secure payment gateway",
  "A member of our team will reach out and you order with be delivered in 2 - 3 business days",
];

const MagnetSteps = () => {
  return (
    <section className={classes?.container}>
      <div>{/* Image section */}</div>

      <div className={classes.steps}>
        <h4>
          Make the perfect magnets in <br /> <span>{magnetSteps?.length}</span>{" "}
          Simple Steps
        </h4>
        <ol>
          {magnetSteps?.map((data, i) => {
            return <li key={i}>{data}</li>;
          })}
        </ol>
      </div>
    </section>
  );
};

export default MagnetSteps;
