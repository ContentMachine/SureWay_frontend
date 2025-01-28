import classes from "./SectionsHero.module.css";

type SectionsHeroTypes = {
  title: string;
  bannerImage?: string;
};

const SectionsHero = ({ title, bannerImage }: SectionsHeroTypes) => {
  return (
    <section
      className={classes.container}
      style={{
        backgroundImage: `url(${
          bannerImage ||
          "https://res.cloudinary.com/dfilepe0f/image/upload/v1737384952/magnets_exiisb.jpg"
        })`,
        // backgroundPosition: "center center",
        // backgroundSize: "cover",
      }}
    >
      <div></div>
      <h2>{title}</h2>
    </section>
  );
};

export default SectionsHero;
