import React from "react";
import LiabilitySection from "../components/LiabilitySection";
import LiabilityDetailsSection from "../components/LiabilityDetailsSection";
import { InsuranceCoverageSection } from "../components/InsuranceCoverageSection";
import WhyGoldenEraSection from "../components/WhyGoldenEraSection";
import CoveragesStaticSection from "../components/CoveragesStaticSection";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";

const BusinessInsurance = () => {
  return (
    <>
      <LiabilitySection title="Business Liability" link="/business-insurance" />
      <LiabilityDetailsSection
        title="What is a"
        policyType="Business Owners"
        description="This is a general insurance package that offers General Liability and Business Property insurance under one policy. General Liability protects your business from another person or business&#39; claims of bodily injury, and related medical costs, property damage, data loss, and personal injury. Business Property protects damage to a rented property and the equipment inside it."
        image1Src="images/br1.png"
        image2Src="images/br2.png"
        whoNeedsTitle="Business owners who fit any of these situations:"
        whoNeedsList={[
          "Own the building where they work",
          "Rent a physical space",
          "Own and work with large amounts of data",
          "Have employees who could act dishonestly or steal client's property",
          "Have business equipment such as computers, printers, and furniture",
        ]}
        additionalInfo=""
      />
      <InsuranceCoverageSection
        title="Business Insurance"
        coveredTitle="General Liability"
        coveredItems={[
          "Bodily injury",
          "Third party property damage",
          "Personal injury",
          "Advertising injury (libel and slander)",
          "Third party medical expenses",
        ]}
        notCoveredTitle="What is Not covered?"
        notCoveredItems={[
          "Damage to business equipment and rented property",
          "Employee on-the-job injuries",
          "Malpractice",
          "Employee discrimination lawsuits or fraud",
          "Fraud or intentional injury",
          "Failure to protect sensitive information",
        ]}
      />
      <WhyGoldenEraSection />
      <CoveragesStaticSection />
      <CustomerFeedbackSection />
    </>
  );
};

export default BusinessInsurance;
