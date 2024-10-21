import React from "react";

interface LiabilityDetailsSectionProps {
  title: string;
  policyType: string;
  description: string;
  image1Src: string;
  image2Src: string;
  whoNeedsTitle: string;
  whoNeedsList: string[];
  additionalInfo: string;
}

const LiabilityDetailsSection: React.FC<LiabilityDetailsSectionProps> = ({
  title,
  policyType,
  description,
  image1Src,
  image2Src,
  whoNeedsTitle,
  whoNeedsList,
  additionalInfo,
}) => {
  return (
    <section className="busns-sec2">
      <div className="row bsn2">
        <div className="columns medium-6 small-12 wow fadeInLeft">
          <h2 className="grayy uppercase">
            What is a<span className="redd"> {policyType} Liability </span>{" "}
            <br />
            insurance Policy?
          </h2>
          <p className="grayy">{description}</p>
        </div>
        <div className="columns medium-6 small-12 wow fadeInRight imcnt">
          <img src={image1Src} />
        </div>
      </div>

      <div className="row bsn2">
        <div className="columns medium-6 small-12 wow fadeInUp imcnt">
          <img src={image2Src} />
        </div>
        <div className="columns medium-6 small-12 wow fadeInUp alrght">
          <h2 className="grayy uppercase">
            Who needs a
            <span className="redd">
              {" "}
              {policyType} <br /> Liability{" "}
            </span>
            Policy?
          </h2>
          <p className="grayy bldd">{whoNeedsTitle}</p>
          <ul>
            {whoNeedsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {additionalInfo && <p className="grayy">{additionalInfo}</p>}
        </div>
      </div>
    </section>
  );
};

export default LiabilityDetailsSection;
