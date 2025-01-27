import LegalNoticesLayout from "@/layouts/LegalNoticesLayout/LegalNoticesLayout";
import { termsAndConditions } from "@/utilities/legalNotices";
import React from "react";

const page = () => {
  return (
    <LegalNoticesLayout
      caption="Terms and Conditions"
      header="Terms and Conditions"
      data={termsAndConditions}
    />
  );
};

export default page;
