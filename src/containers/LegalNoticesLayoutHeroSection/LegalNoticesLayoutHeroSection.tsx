import classes from "./LegalNoticesLayoutHeroSection.module.css";

type LegalNoticesLayoutHeroSectionTypes = {
  caption: string;
  header: string;
};

const LegalNoticesLayoutHeroSection = ({
  caption = "PRIVACY POLICY",
  header = "We care more about your privacy than ever!",
}: LegalNoticesLayoutHeroSectionTypes) => {
  return (
    <section className={classes.container}>
      <p>{caption}</p>
      <h1>{header}</h1>
    </section>
  );
};

export default LegalNoticesLayoutHeroSection;
