import Loader from "@/components/Loader/Loader";
import Products from "@/containers/Products/Products";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Products />
    </Suspense>
  );
};

export default page;
