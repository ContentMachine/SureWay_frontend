import classes from "./SectionsHero.module.css";

type SectionsHeroTypes = {
  title: string;
};

const SectionsHero = ({ title }: SectionsHeroTypes) => {
  return (
    <section className={classes.container}>
      <div></div>
      <h2>{title}</h2>
    </section>
  );
};

export default SectionsHero;
