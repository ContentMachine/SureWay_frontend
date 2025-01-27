import LegalNoticesLayout from "@/layouts/LegalNoticesLayout/LegalNoticesLayout";
import { privacyPolicy } from "@/utilities/legalNotices";
import React from "react";

const page = () => {
  return (
    <LegalNoticesLayout
      caption="Privacy Poicy"
      header="Our Privacy Policy"
      data={privacyPolicy}
    />
  );
};

export default page;
