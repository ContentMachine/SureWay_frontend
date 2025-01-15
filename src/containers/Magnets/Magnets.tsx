import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Magnets.module.css";
import SectionsHero from "@/components/SectionsHero/SectionsHero";
import MagnetsHeaderSection from "../MagnetsHeaderSection/MagnetsHeaderSection";

const Magnets = () => {
  return (
    <AppLayout className={classes.container}>
      <SectionsHero title="Magnets" />
      <MagnetsHeaderSection />
    </AppLayout>
  );
};

export default Magnets;
