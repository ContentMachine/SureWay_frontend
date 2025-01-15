import Button from "@/components/Button/Button";
import classes from "./MagnetsHeaderSection.module.css";
import Image from "next/image";
import magnetHeader from "../../assets/Images/magnetHeader.svg";

const MagnetsHeaderSection = () => {
  return (
    <section className={classes.container}>
      <h4>
        Make you grow, <br />
        together
      </h4>
      <p>
        Vous avez beaucoup à nous apprendre sur votre marché et votre offre. Des
        infos précieuses qui méritent toute notre attention : parce qu’une
        solution digitale, ça se construit ensemble. C’est pour cela qu’un
        projet ne démarre jamais sans un vrai kick-off et que nous avons
        développés des méthodologies de co-construction. Vous impliquer dans
        chaque étape du projet, c’est vous en donner une maîtrise.
      </p>

      <Button>Create your Custom Magnet</Button>
      <Image src={magnetHeader} alt="Magnet" />
    </section>
  );
};

export default MagnetsHeaderSection;
