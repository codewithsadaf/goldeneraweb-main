import React from "react";
import ClaimProcessSection from "../components/ClaimProcessSection";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";
import GetStartBtn from "../components/GetStartBtn";
import TabNavigation from "../components/TabNavigation";

const Claims = () => {
  return (
    <>
      {/* <TabNavigation /> */}

      <div className="row txt-part lft-aln wow fadeInDown mt-12">
        <h1>Claims</h1>
        <p>
          <b>
            Has your business or business property sustained damage? We&#39;re
            here to help.
          </b>
        </p>
        <p>
          Regardless of the cause of damage to your business, we&#39;re ready to
          assist you. Please contact us as soon as possible to report your
          commercial property claim. We&#39;re here to walk you through the
          steps you should take to protect your business and get you on the path
          to recovery. In addition, we&#39;re committed to helping you prevent
          future property damage.
        </p>

        <GetStartBtn />
      </div>
      <ClaimProcessSection />
      <CustomerFeedbackSection />
    </>
  );
};

export default Claims;
