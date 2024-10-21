import React from "react";
import TermsOfUseSection from "../components/TermsOfUseSection";
import TabNavigation from "../components/TabNavigation";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";

const TermsOfUses = () => {
  return (
    <>
      <TabNavigation />
      <TermsOfUseSection />
      <CustomerFeedbackSection />
    </>
  );
};

export default TermsOfUses;
