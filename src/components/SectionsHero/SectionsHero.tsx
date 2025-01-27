import classes from "./SectionsHero.module.css";

type SectionsHeroTypes = {
  title: string;
  bannerImage: string;
};

const SectionsHero = ({ title, bannerImage }: SectionsHeroTypes) => {
  return (
    <section
      className={classes.container}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div></div>
      <h2>{title}</h2>
    </section>
  );
};

export default SectionsHero;
