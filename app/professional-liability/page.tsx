import CoveragesStaticSection from "../components/CoveragesStaticSection";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";
import { InsuranceCoverageSection } from "../components/InsuranceCoverageSection";
import LiabilityDetailsSection from "../components/LiabilityDetailsSection";
import LiabilitySection from "../components/LiabilitySection";
import WhyGoldenEraSection from "../components/WhyGoldenEraSection";

const ProfessionalLiability = () => (
  <>
    <LiabilitySection
      title="Professional Liability"
      link="/professional-liability"
    />
    <LiabilityDetailsSection
      title="What is a"
      policyType="Professional"
      description="Professional Liability insurance, also known as Errors and Omissions insurance (E&O), protects you and your small business against client charges of negligence or injury for the professional services you provide. Whether you are at fault or not, you are protected against losses, attorney fees and even court costs."
      image1Src="images/p1.png"
      image2Src="images/p2.png"
      whoNeedsTitle="Businesses that:"
      whoNeedsList={[
        "Provide professional services",
        "Advise clients",
        "Enter into contracts (sometimes required by client)",
      ]}
      additionalInfo=""
    />
    <InsuranceCoverageSection
      title="Professional Liability"
      coveredTitle="Professional Liability"
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

export default ProfessionalLiability;
