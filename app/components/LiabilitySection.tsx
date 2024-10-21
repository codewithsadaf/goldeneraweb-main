import React from "react";
import GetStartBtn from "./GetStartBtn";

interface LiabilitySectionProps {
  title: string;
  link: string;
}

const LiabilitySection: React.FC<LiabilitySectionProps> = ({ title, link }) => {
  return (
    <section className="busns-sec1">
      <div className="row fistgh">
        <h1 className="grayy wow fadeInLeft uppercase">
          Let&apos;s find you the right <br />
          <span className="redd">{title}</span> Policy
          <GetStartBtn />
        </h1>

        <p className="wow fadeInRight font-bold">
          Call: + 1 (510) 270-8141 to speak with a licensed advisor.
        </p>
      </div>
    </section>
  );
};

export default LiabilitySection;
