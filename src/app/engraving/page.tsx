import Loader from "@/components/Loader/Loader";
import SectionsHero from "@/components/SectionsHero/SectionsHero";
import Engravings from "@/containers/Engravings/Engravings";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppLayout isDynamic>
        <Engravings />
      </AppLayout>
    </Suspense>
  );
};

export default page;
