import React from "react";
import LiabilitySection from "../components/LiabilitySection";
import LiabilityDetailsSection from "../components/LiabilityDetailsSection";
import { InsuranceCoverageSection } from "../components/InsuranceCoverageSection";
import WhyGoldenEraSection from "../components/WhyGoldenEraSection";
import CoveragesStaticSection from "../components/CoveragesStaticSection";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";

const ErrorsAndOmission = () => {
  return (
    <>
      <LiabilitySection
        title="Errors & Omission"
        link="/errors-and-omissions"
      />
      <LiabilityDetailsSection
        title="What is a"
        policyType="Errors and Omissions"
        description="Errors and Omissions Insurance (also called Professional Liability Insurance) does what its name implies: it covers your professional mistakes (errors) and the things you overlook (omissions). If you're sued over a professional mistake or oversight, this policy can help you pay for legal expenses."
        image1Src="images/er1.png"
        image2Src="images/er2.png"
        whoNeedsTitle="Three things in an E&O lawsuit:"
        whoNeedsList={[
          "Professional mistakes",
          "Failure to deliver promised services",
          "Professional negligence",
        ]}
        additionalInfo=""
      />
      <section className="busns-sec2">
        <div className="row bsn2">
          <div className="columns medium-6 small-12 wow fadeInLeft">
            <h2 className="grayy uppercase">
              The Real Cost of an<span className="redd"> E&O </span> Lawsuit
            </h2>
            <p>
              A typical E&O lawsuit costs $140,584, according to the National
              Center for State Courts. And that&#39;s just the amount awarded to
              your client &ndash; It doesn&#39;t include your own legal fees.
              Tack on another five figures for what you&#39;ll pay a lawyer to
              put your case together.
            </p>
          </div>
          <div className="columns medium-6 small-12 wow fadeInRight imcnt">
            <img className="w-[75%]" src="images/er3.png" />
          </div>
        </div>
      </section>
      <InsuranceCoverageSection
        title="Errors and Omissions"
        coveredTitle="Errors and Omissions"
        coveredItems={[
          "Bodily injury",
          "Third party property damage",
          "Personal injury",
          "Advertising injury (libel and slander)",
          "Third party medical expenses",
        ]}
        notCoveredTitle="What&#39;s Not covered?"
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

export default ErrorsAndOmission;
