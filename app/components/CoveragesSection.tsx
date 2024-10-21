"use client";
import React from "react";
import Link from "next/link";
import Script from "next/script";

const CoveragesSection = () => {
  return (
    <>
      <Script
        src="/js/circle.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("circle.js script has been loaded.");
        }}
      />
      <section className="sec-sectn">
        <div className="row maxdwx">
          <div className="columns medium-4 small-12 ldfd">
            <h2 className="grayy wow fadeInLeft">
              Our <br />
              <span className="redd">Coverages</span>
            </h2>
          </div>

          <div className="columns medium-8 small-12 rotatn">
            <div className="holderCircle wow fadeInRight">
              <div className="round"></div>
              <div className="dotCircle">
                <a href="genaral-liability">
                  <span className="itemDot itemDot1">
                    <div className="hidde">
                      <img src="images/s1.png" alt="General Liability" />
                      <img
                        className="absn"
                        src="images/ss1.png"
                        alt="General Liability"
                      />
                    </div>
                    <p>General liability</p>
                  </span>
                </a>

                <a href="professional-liability">
                  <span className="itemDot itemDot2">
                    <div className="hidde">
                      <img src="images/s2.png" alt="Professional Liability" />
                      <img
                        className="absn"
                        src="images/ss2.png"
                        alt="Professional Liability"
                      />
                    </div>
                    <p>Professional liability</p>
                  </span>
                </a>

                <a href="cyber-insurance">
                  <span className="itemDot itemDot3">
                    <div className="hidde">
                      <img src="images/s3.png" alt="Cyber Security" />
                      <img
                        className="absn"
                        src="images/ss3.png"
                        alt="Cyber Security"
                      />
                    </div>
                    <p>Cyber Security</p>
                  </span>
                </a>

                <a href="business-insurance">
                  <span className="itemDot itemDot4">
                    <div className="hidde">
                      <img src="images/s4.png" alt="Business Liability" />
                      <img
                        className="absn"
                        src="images/ss4.png"
                        alt="Business Liability"
                      />
                    </div>
                    <p>Business liability</p>
                  </span>
                </a>

                <a href="errors-and-omissions">
                  <span className="itemDot itemDot5 active">
                    <div className="hidde">
                      <img src="images/s5.png" alt="Errors & Omission" />
                      <img
                        className="absn"
                        src="images/ss5.png"
                        alt="Errors & Omission"
                      />
                    </div>
                    <p>Errors & Omission</p>
                  </span>
                </a>

                <a href="workers-compensation">
                  <span className="itemDot itemDot6">
                    <div className="hidde">
                      <img src="images/s6.png" alt="Workers Comp" />
                      <img
                        className="absn"
                        src="images/ss6.png"
                        alt="Workers Comp"
                      />
                    </div>
                    <p>Workers Comp</p>
                  </span>
                </a>

                <a href="commercial-auto">
                  <span className="itemDot itemDot7">
                    <div className="hidde">
                      <img src="images/s7.png" alt="Commercial Auto" />
                      <img
                        className="absn"
                        src="images/ss7.png"
                        alt="Commercial Auto"
                      />
                    </div>
                    <p>Commercial Auto</p>
                  </span>
                </a>
              </div>
              <div className="contentCircle">
                <img src="images/globl.png" alt="Global" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoveragesSection;
