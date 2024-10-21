import React from "react";

const AboutGoldenEra = () => {
  return (
    <section className="busns-sec2">
      <div className="row bsn2 flex flex-col items-center">
        <h1 className="grayy text-3xl md:text-4xl font-bold text-center">
          About <span className="redd text-red-500">Golden Era</span>
        </h1>
        <p className="text-center mt-4 mx-4 md:mx-8">
          Golden Era Insurance was incorporated to provide a one-stop business
          insurance solution. It has been created to simplify the coverage of
          all business insurance needs. To make complex situations simple with
          quick turnaround time.
        </p>

        <div className="bgimg mt-6">
          <img
            src="/images/about-bg.png"
            alt="About Background"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutGoldenEra;
