import React from "react";
import LiabilitySection from "../components/LiabilitySection";
import LiabilityDetailsSection from "../components/LiabilityDetailsSection";
import { InsuranceCoverageSection } from "../components/InsuranceCoverageSection";
import WhyGoldenEraSection from "../components/WhyGoldenEraSection";
import CoveragesStaticSection from "../components/CoveragesStaticSection";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";

const CommercialAuto = () => {
  return (
    <>
      <LiabilitySection title="Commercial Auto" link="/commercial-auto" />
      <LiabilityDetailsSection
        title="What is a"
        policyType="Commercial Auto"
        description="Commercial Auto insurance protects your business vehicle much in the same way your personal auto insurance protects your personal vehicle. You can&#39;t predict weather or another driver&#39;s behavior, so play it safe with a Commercial Auto insurance policy."
        image1Src="images/c1.png"
        image2Src="images/c2.png"
        whoNeedsTitle="Who needs a Commercial Auto insurance policy?"
        whoNeedsList={[
          "Applicable to any vehicles used for business purposes.",
          "Depending on your business, you may need different levels of liability coverage, plus extra add-ons to ensure that you, your employees, other individuals, the vehicles, and your business are fully protected.",
        ]}
        additionalInfo=""
      />
      <InsuranceCoverageSection
        title="Commercial Autos"
        coveredTitle="General Liability"
        coveredItems={[
          "Bodily injury and property damage to a third party",
          "Accidents caused by uninsured or underinsured drivers",
          "Physical damage to owned, rented, hired or employee vehicles",
          "Medical costs for you, your employees and any other passengers",
          "Theft and damage",
        ]}
      />
      <WhyGoldenEraSection />
      <CoveragesStaticSection />
      <CustomerFeedbackSection />
    </>
  );
};

export default CommercialAuto;
