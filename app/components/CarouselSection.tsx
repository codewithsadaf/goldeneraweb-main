import React from "react";
import RegForm from "./RegForm";

const CarouselSection = ({ showText = true }) => {
  return (
    <section className="fst-sec">
      <div className="row vertcl flex flex-wrap items-center justify-between">
        {showText && (
          <div className="columns medium-5 small-12 ldfd mb-6 md:mb-0">
            <h1 className="grayy wow fadeInLeft text-4xl md:text-5xl font-bold">
              One stop Truck <br />
              <span className="redd text-red-500">Insurance solution</span>
            </h1>
          </div>
        )}
        <div className="columns medium-7 small-12 rghtd flex justify-center items-center">
          {/* Include the registration form component here */}
          <RegForm />
        </div>
        <div className="imcontrl wow fadeInUp mt-8 md:mt-0">
          <img
            src="/images/peopls.png"
            alt="People"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
