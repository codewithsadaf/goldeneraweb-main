import React from "react";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";
import CoveragesSection from "../components/CoveragesSection";
import CoveragePageSection from "../components/CoveragePageSection";

const page = () => {
  return (
    <>
      <section className="busns-sec1">
        <div className="row fistgh">
          <h1 className="grayy wow fadeInLeft">
            <span className="redd">
              Our top recommended <br /> policies Coverages
            </span>
          </h1>
          <p className="wow fadeInRight">
            There&#39;s no single small business insurance policy that covers
            all risks. Different commercial insurance coverages address
            different accidents, lawsuits, and damages that could impact a
            business. These policies address common risks.
          </p>
        </div>
      </section>
      <CoveragePageSection />
      <CustomerFeedbackSection />
    </>
  );
};

export default page;
