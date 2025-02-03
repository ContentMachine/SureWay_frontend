import SectionsHero from "@/components/SectionsHero/SectionsHero";
import Engravings from "@/containers/Engravings/Engravings";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import React from "react";

const page = () => {
  return (
    <AppLayout isDynamic>
      <Engravings />
    </AppLayout>
  );
};

export default page;
