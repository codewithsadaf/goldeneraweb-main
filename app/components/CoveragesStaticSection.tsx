import React from "react";

const coverages = [
  {
    imgSrc: "images/s4.png",
    label: "Business liability",
    delay: "300ms",
  },
  {
    imgSrc: "images/s2.png",
    label: "Professional liability",
    delay: "400ms",
  },
  {
    imgSrc: "images/s3.png",
    label: "Cyber Security",
    delay: "500ms",
  },
  {
    imgSrc: "images/s5.png",
    label: "Errors & Omission",
    delay: "600ms",
  },
  {
    imgSrc: "images/s6.png",
    label: "Workers Comp",
    delay: "700ms",
  },
  {
    imgSrc: "images/s7.png",
    label: "Commercial Auto",
    delay: "800ms",
  },
];

const CoveragesStaticSection: React.FC = () => {
  return (
    <section className="busins-sec5">
      <div className="row maxcds">
        <div className="columns medium-4 small-12 cov-lft">
          <h1 className="grayy">
            Our <br />
            <span className="redd">Coverages</span>
          </h1>
          <p>Learn about our other business insurance types</p>
        </div>
        <div className="columns medium-8 small-12 cov-rght m-auto justify-center">
          {coverages.map((coverage, index) => (
            <div
              key={index}
              className="ttl-box wow fadeInRight"
              data-wow-delay={coverage.delay}
            >
              <div className="bordr">
                <img src={coverage.imgSrc} alt={coverage.label} />
                <p>{coverage.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoveragesStaticSection;
