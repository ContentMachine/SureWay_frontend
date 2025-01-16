import AppLayout from "@/layouts/AppLayout/AppLayout";
import classes from "./Magnets.module.css";
import SectionsHero from "@/components/SectionsHero/SectionsHero";
import MagnetsHeaderSection from "../MagnetsHeaderSection/MagnetsHeaderSection";
import HomeProductsSummary from "../HomeProductsSummary/HomeProductsSummary";

const Magnets = () => {
  return (
    <AppLayout className={classes.container}>
      <SectionsHero title="Magnets" />
      <HomeProductsSummary />
      <MagnetsHeaderSection />
    </AppLayout>
  );
};

export default Magnets;
