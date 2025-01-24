import Loader from "@/components/Loader/Loader";
import Magnets from "@/containers/Magnets/Magnets";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Magnets />
    </Suspense>
  );
};

export default page;
