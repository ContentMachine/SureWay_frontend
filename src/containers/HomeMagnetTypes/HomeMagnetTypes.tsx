import MagnetMagnetTypes from "../MagnetsMagnetTypes/MagnetMagnetTypes";
import classes from "./HomeMagnetTypes.module.css";

const HomeMagnetTypes = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h4>What Type of Magnet Would You Like? </h4>
      </div>
      <MagnetMagnetTypes />
    </section>
  );
};

export default HomeMagnetTypes;
