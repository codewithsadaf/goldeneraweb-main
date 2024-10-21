import React from "react";
import LiabilitySection from "../components/LiabilitySection";
import LiabilityDetailsSection from "../components/LiabilityDetailsSection";
import { InsuranceCoverageSection } from "../components/InsuranceCoverageSection";
import WhyGoldenEraSection from "../components/WhyGoldenEraSection";
import CoveragesStaticSection from "../components/CoveragesStaticSection";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";

const CyberInsurance = () => {
  return (
    <>
      <LiabilitySection title="Cyber Security" link="/cyber-insurance" />
      <LiabilityDetailsSection
        title="What is a"
        policyType="Cyber Insurance"
        description="There are 2 primary components of comprehensive cyber coverage. First Party Cyber Coverage covers immediate response costs associated with a data breach for losses to the policyholder. Third Party Cyber Coverage covers the policyholder from claims bought by third parties such as customers and clients claiming losses because of policyholder&#39;s actions in the event of a cyber attack."
        image1Src="images/cy1.png"
        image2Src="images/cy2.png"
        whoNeedsTitle="Businesses that:"
        whoNeedsList={[
          "Have a website that interacts with the public",
          "Conduct any portion of their business online",
          "Have customer information stored digitally",
          "Have data handled by a 3rd party online",
        ]}
        additionalInfo=""
      />
      <InsuranceCoverageSection
        title="Cyber Insurance"
        coveredTitle="Cyber Insurance"
        coveredItems={[
          "Data breach response expenses",
          "Identity recovery",
          "Cyber Extortion",
          "Payment card loss",
          "Regulatory fines",
          "Business Interruption Costs",
        ]}
      />
      <WhyGoldenEraSection />
      <CoveragesStaticSection />
      <CustomerFeedbackSection />
    </>
  );
};

export default CyberInsurance;
