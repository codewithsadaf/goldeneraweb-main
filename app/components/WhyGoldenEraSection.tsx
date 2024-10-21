import React from "react";

const sectionItems = [
  {
    title: "Curated Choice",
    description:
      "Our data-driven matches allow you to easily compare rates from trusted insurers, meaning you can find the best policy and get back to business ASAP.",
    delay: "300ms",
  },
  {
    title: "Comprehensive Assessment",
    description:
      "We take the time to fully understand your business and its unique needs, so we can recommend the right coverage to protect your business and employees.",
    delay: "600ms",
  },
  {
    title: "Objective Advice",
    description:
      "Our licensed advisors are compensated based on service, not sales commissions. You can count on their impartial advice to select the right coverage.",
    delay: "900ms",
  },
  {
    title: "Value",
    description:
      "We comparison shop, on your behalf, with over 100+ different insurance carriers to ensure you get the best price for the coverage you need.",
    delay: "1200ms",
  },
];

const WhyGoldenEraSection: React.FC = () => {
  return (
    <section className="four-sec busnss">
      <div className="ldfd text-center">
        <h2 className="grayy">
          Why <span className="redd">Golden era?</span>
        </h2>
      </div>
      <div className="row grdd">
        {sectionItems.map((item, index) => (
          <div
            key={index}
            className="columns medium-3 small-12 boxd wow fadeInLeft"
            data-wow-delay={item.delay}
          >
            <div className="rghtarw bxdd">
              <h6 className="grayy">{item.title}</h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyGoldenEraSection;
