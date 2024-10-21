import React from "react";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="third-sec py-12">
      <div className="text-center mb-8">
        <h2 className="grayy text-gray-700 text-4xl font-bold">
          Our <span className="redd text-red-500">Services</span>
        </h2>
      </div>

      <div className="row  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-center">
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-17rem">
          <div className=" bgrd p-6">
            <h4 className="grayy text-xl font-semibold mb-4"> Buy/Get Quote</h4>

            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              <img
                src="/images/z1.png"
                alt="Services"
                className="mx-auto mb-4"
              />
            </p>
          </div>
          <div className="p-6 m-1 text-center">
            <Link href="/contact" className="hover:text-red-500">
              Proceed{" "}
              <img src="/images/arww.png" alt="Arrow" className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-17rem">
          <div className=" bgrd p-6">
            <h4 className="grayy text-xl font-semibold mb-4">Renew</h4>

            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              <img
                src="/images/z2.png"
                alt="Services"
                className="mx-auto mb-4"
              />
            </p>
          </div>
          <div className="p-6 m-1 text-center">
            <Link href="/renewals" className="hover:text-red-500">
              Proceed{" "}
              <img src="/images/arww.png" alt="Arrow" className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-17rem">
          <div className=" bgrd p-6">
            <h4 className="grayy text-xl font-semibold mb-4">Claim</h4>

            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              <img
                src="/images/z3.png"
                alt="Services"
                className="mx-auto mb-4"
              />
            </p>
          </div>
          <div className="p-6 m-1 text-center">
            <Link href="/claims" className="hover:text-red-500">
              Proceed{" "}
              <img src="/images/arww.png" alt="Arrow" className="ml-2" />
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-17rem">
          <div className=" bgrd p-6">
            <h4 className="grayy text-xl font-semibold mb-4">Coverage</h4>

            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              <img
                src="/images/z4.png"
                alt="Services"
                className="mx-auto mb-4"
              />
            </p>
          </div>
          <div className="p-6 m-1 text-center">
            <Link href="/coverage" className="hover:text-red-500">
              Proceed{" "}
              <img src="/images/arww.png" alt="Arrow" className="ml-2" />
            </Link>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
