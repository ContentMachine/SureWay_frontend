import classes from "./SectionsHero.module.css";

type SectionsHeroTypes = {
  title: string;
  bannerImage?: string;
  mobileBannerImage?: string;
};

const SectionsHero = ({
  title,
  bannerImage,
  mobileBannerImage,
}: SectionsHeroTypes) => {
  // Utils
  const isMobile = typeof window !== "undefined" && window?.innerHeight;

  const image = isMobile ? mobileBannerImage : bannerImage;

  return (
    <section
      className={classes.container}
      style={{
        backgroundImage: `url(${
          image ||
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
