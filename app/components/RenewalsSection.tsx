import React from "react";
import GetStartBtn from "./GetStartBtn";

const RenewalsSection: React.FC = () => {
  return (
    <section className="busns-sec1">
      <div className="row fistgh">
        <h1 className="grayy wow fadeInLeft">
          <span className="redd">renewals </span>
        </h1>

        <p>
          An annual review of commercial insurance policies can be
          time-consuming for small business owners, making it tempting to
          automatically renew existing policies. However, if their business has
          changed over the past year, they run the risk of being underinsured or
          potentially overpaying for coverage.
        </p>

        <p>
          It&#39;s important for commercial insurance coverage to meet a
          company&#39;s evolving needs. The business insurance renewal process
          provides the perfect opportunity for business owners to work with
          their insurance agent to determine if current policies are still
          providing the necessary protection and if they might qualify for
          discounts.
        </p>
      </div>
      <GetStartBtn />
    </section>
  );
};

export default RenewalsSection;
