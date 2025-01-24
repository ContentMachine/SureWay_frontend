import Loader from "@/components/Loader/Loader";
import CarMagnets from "@/containers/CarMagnets/CarMagnets";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <CarMagnets />
    </Suspense>
  );
};

export default page;
