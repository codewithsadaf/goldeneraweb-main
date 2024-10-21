import CoveragesStaticSection from "../components/CoveragesStaticSection";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";
import { InsuranceCoverageSection } from "../components/InsuranceCoverageSection";
import LiabilityDetailsSection from "../components/LiabilityDetailsSection";
import LiabilitySection from "../components/LiabilitySection";
import WhyGoldenEraSection from "../components/WhyGoldenEraSection";

const GeneralLiability = () => (
  <>
    <LiabilitySection title="General Liability" link="/genaral-liability" />
    <LiabilityDetailsSection
      title="What is a"
      policyType="General"
      description="A General Liability insurance policy is typically the first step in business protection. It&#39;s the most essential piece of your commercial insurance plan that protects your business from a person or business&#39; claims of bodily injury and related medical costs; property damage; data loss and personal injury. If you have business property, you might want to consider a Business Owners Policy instead."
      image1Src="images/g1.png"
      image2Src="images/g2.png"
      whoNeedsTitle="You, if you or your employees..."
      whoNeedsList={[
        "Interact with clients face to face - if you visit a client's workplace, or clients visit yours",
        "Have access to a client's equipment - for example, IT professionals",
        "Use third party locations for any business related activities - e.g. architects",
        "Operate a business without owning or renting any physical property",
        "Are required to have General Liability insurance before entering into a contract",
      ]}
      additionalInfo=""
    />
    <InsuranceCoverageSection
      title="General Liability"
      coveredTitle="General Liability"
      coveredItems={[
        "Bodily injury",
        "Third party property damage",
        "Personal injury",
        "Advertising injury (libel and slander)",
        "Third party medical expenses",
      ]}
      notCoveredTitle="What's Not covered?"
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

export default GeneralLiability;
