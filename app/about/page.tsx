import React from "react";
import CarouselSection from "../components/CarouselSection";
import AboutGoldenEra from "../components/AboutGoldenEra";
import CustomerFeedbackSection from "../components/CustomerFeedbackSection";

const About = () => {
  return (
    <>
      <CarouselSection showText={false} />
      <AboutGoldenEra />
      <CustomerFeedbackSection />
    </>
  );
};

export default About;
