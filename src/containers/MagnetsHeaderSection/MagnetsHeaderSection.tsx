import Button from "@/components/Button/Button";
import classes from "./MagnetsHeaderSection.module.css";
import Image from "next/image";
import fridgeMagnet2 from "../../assets/Images/fridgeMagnet2.svg";

const magnetSteps = [
  "Pick a size, shape, and quantity",
  "Upload a picture, logo, or design of your choice",
  "Pay using our secure payment gateway",
  "A member of our team will reach out and you to complete the order",
];

const MagnetsHeaderSection = () => {
  return (
    <section className={classes.container}>
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

      <Image src={fridgeMagnet2} alt="Magnet" />
    </section>
  );
};

export default MagnetsHeaderSection;
