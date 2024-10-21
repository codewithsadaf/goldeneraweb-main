import React from "react";

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <img
                src="/images/y1.png"
                alt="Trusted Brand"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h5 className="text-red-500 text-xl font-semibold mb-2">
              TRUSTED <br />
              <span className="text-gray-700">BRAND</span>
            </h5>
            <p className="text-gray-600">
              Being one of the best insurance companies in the United States of
              America for over 5 years, we have acquired thousands of loyal
              customers, built on our reputation for providing quality service
              delivery.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <img
                src="/images/y2.png"
                alt="Transparency in Services"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h5 className="text-red-500 text-xl font-semibold mb-2">
              TRANSPARENCY <br />
              <span className="text-gray-700">IN SERVICES</span>
            </h5>
            <p className="text-gray-600">
              Transparency is an important aspect of choosing a general
              insurance company online with effective products, which is why we
              encourage our customers to do their due diligence.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <img
                src="/images/y3.png"
                alt="Ease of Buying"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h5 className="text-red-500 text-xl font-semibold mb-2">
              EASE <br />
              <span className="text-gray-700">OF BUYING</span>
            </h5>
            <p className="text-gray-600">
              Our products are available across a multi-channel network
              including offline channels like agents, brokers and branches, and
              online through our own and our partners&#39; websites.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <img
                src="/images/y4.png"
                alt="Claims Settlement"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h5 className="text-red-500 text-xl font-semibold mb-2">
              CLAIMS <br />
              <span className="text-gray-700">SETTLEMENT</span>
            </h5>
            <p className="text-gray-600">
              Our claims settlement process is prompt, efficient and painless,
              designed to fully assist you in your hour of need and without any
              unnecessary delays.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
