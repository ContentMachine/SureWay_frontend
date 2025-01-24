import Loader from "@/components/Loader/Loader";
import ProductInfo from "@/containers/ProductInfo/ProductInfo";
import AppLayout from "@/layouts/AppLayout/AppLayout";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AppLayout>
        <ProductInfo />
      </AppLayout>
    </Suspense>
  );
};

export default page;
