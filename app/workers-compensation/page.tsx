import React from "react";
import LiabilitySection from "../components/LiabilitySection";
import LiabilityDetailsSection from "../components/LiabilityDetailsSection";
import { InsuranceCoverageSection } from "../components/InsuranceCoverageSection";
import WhyGoldenEraSection from "../components/WhyGoldenEraSection";
import CoveragesStaticSection from "../components/CoveragesStaticSection";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";

const WorkersCompensation = () => {
  return (
    <>
      <LiabilitySection
        title="Workers Compensation"
        link="/workers-compensation"
      />
      <LiabilityDetailsSection
        title="What is a"
        policyType="Workers Compensation"
        description="This policy protects your employees if they suffer an injury or become ill while on the job. This is mandated by the state if the business employs more than a certain number of employees, and the threshold varies by state. It also protects your company from being sued by employees for workplace conditions that can cause harm."
        image1Src="images/w1.png"
        image2Src="images/w2.png"
        whoNeedsTitle="Business owners who:"
        whoNeedsList={["Have employees!"]}
        additionalInfo="Note: Only Texas allows employers to opt out of carrying workers compensation insurance altogether; however, these employers can still be sued for uncompensated work injuries."
      />
      <InsuranceCoverageSection
        title="Workers Compensation"
        coveredTitle="Workers Compensation"
        coveredItems={[
          "Alleged or actual negligence",
          "Personal injury",
          "Copyright infringement",
          "Punitive damages",
          "Claims against services previously performed",
          "Claims against temporary staff and independent contractors",
          "Your work done anywhere around the world",
          "Related defense costs",
        ]}
        notCoveredTitle="What&#39;s Not covered?"
        notCoveredItems={[
          "Fraudulent acts",
          "Improper employment practices",
          "False advertising",
          "Patent infringement or theft of trade secrets",
          "Failure to protect sensitive information",
        ]}
      />
      <WhyGoldenEraSection />
      <CoveragesStaticSection />
      <CustomerFeedbackSection />
    </>
  );
};

export default WorkersCompensation;
