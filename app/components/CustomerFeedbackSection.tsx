"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerFeedbackSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="businss-last mb-10">
      <div className="row disflx flex flex-wrap">
        <div className="w-full md:w-1/2 p-6  ">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We&#39;re here to find the{" "}
            <span className="text-red-500">
              best <br />
              Business Owners
            </span>{" "}
            Policy for you.
          </h3>
          <p className="text-gray-700 mb-4">
            Why shop just one insurance carrier, when in reality the best policy
            for you could be through a different carrier? Comparison shopping
            through Golden Era makes this process simple, fast, and reliable.
          </p>
          <h6 className="text-lg font-semibold text-gray-800 mt-4">
            Want more information?
          </h6>
          <p className="text-gray-700 mt-2">
            No problem! Call to speak with one of our licensed insurance
            advisors. We&#39;re here to help!
          </p>
          <p className="text-gray-700 mt-2">
            If you&#39;re ready to get a Business Owners Policy, give us a call
            now!
          </p>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <img src="/images/call.png" alt="Call" className="w-6 h-6 mr-2" />
              <span className="text-gray-700">
                Toll free: + 1 (510) 270-8141
              </span>
            </div>
            <div className="flex items-center">
              <i
                className="fa fa-envelope-o mr-2 text-gray-700"
                aria-hidden="true"
              ></i>
              <span className="text-gray-700">info@goldenerainsurance.com</span>
            </div>
            <div className="mt-4">
              <p className="text-white bg-gray-600 p-2 rounded text-center">
                Mon - Fri: 9:00 AM - 9:00 PM ET
                <br />
                Sat: 10:30 AM - 6:30 PM ET
              </p>
            </div>
          </div>
        </div>
        <div className="columns medium-6 small-12 redful">
          <div className="poall">
            <div className="flrtht">
              <h3 className="grayy text-3xl md:text-4xl font-bold">
                <span className="redd text-red-500">Customers</span> say
              </h3>
              <Slider {...settings}>
                <div className="item">
                  <div className="p-4 shadow-lg rounded-lg">
                    <p className="text-white">
                      My Golden Era Rep, Chris, was extremely helpful and
                      knowledgeable of my needs. We discussed in detail what my
                      business needs were and found great coverage at an
                      affordable premium.
                    </p>
                    <p className="font-bold mt-2 text-white">
                      - Stephanie R., Houston
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="p-4 shadow-lg rounded-lg">
                    <p className="text-white">
                      Appreciate your quick response to my recent follow up for
                      my insurance policy. I got my policy certificate within
                      hours of the same day.
                    </p>
                    <p className="font-bold mt-2 text-white">
                      - Belson Coutinho
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="p-4 shadow-lg rounded-lg">
                    <p className="text-white">
                      Good experience as positive and prompt response received.
                      Expect to maintain and further improvement in meeting
                      needs.
                    </p>
                    <p className="font-bold mt-2 text-white">
                      - - James Mackay
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedbackSection;
