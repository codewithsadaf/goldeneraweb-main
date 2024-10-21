import React from "react";

const MobileAppSection = () => {
  return (
    <section className="fiv-sectn">
      <div className="row smllwith flex flex-wrap">
        {/* Image Section */}
        <div className="columns medium-5 small-12 sm-left wow fadeInLeft flex items-center justify-center">
          <div className="imght">
            <img src="/images/phnn.png" alt="Phone" />
          </div>
        </div>

        {/* Text and Call to Action Section */}
        <div className="columns medium-7 small-12 tx-rght wow fadeInRight flex flex-col justify-center">
          <div className="rigtt">
            <h4 className="grayy text-gray-700 text-2xl font-semibold">
              Help us spread the Word
            </h4>
            <p className="grayy text-gray-600">
              Have any doubt call us, We Would love to interact with you!
            </p>
            <div className="imtxt redd flex items-center">
              <img src="/images/call.png" alt="Call Icon" className="mr-2" />
              <span>Call us : + 1 (510) 270-8141</span>
            </div>
          </div>
          <div className="btmmm mt-6">
            {/* <h4 className="text-xl font-semibold">Download Mobile app</h4> */}
            <div className="imgtwo flex space-x-4 mt-2">
              {/* <a href="#" className="block">
                <img src="/images/gplay.png" alt="Google Play" />
              </a>
              <a href="#" className="block">
                <img src="/images/appstr.png" alt="App Store" />
              </a> */}
            </div>
          </div>

          {/* <div className="btmmm mt-6">
            <h4 className="text-xl font-semibold">Download Mobile app</h4>
            <div className="imgtwo flex space-x-4 mt-2">
              <a href="#" className="block">
                <img src="/images/gplay.png" alt="Google Play" />
              </a>
              <a href="#" className="block">
                <img src="/images/appstr.png" alt="App Store" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
