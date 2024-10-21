import React from "react";
import TabNavigation from "../components/TabNavigation";

const Sitemap = () => {
  return (
    <>
      <TabNavigation />
      <div>
        <div className="row txt-part wow fadeInDown">
          <h1>Site Map</h1>
        </div>
        <section className="sitemap-wrapper">
          <ul id="menu-sitemap-menu" className="sitemap-navigation">
            <li className="menu-item menu-item-has-children">
              <a href="/">Home</a>
              <ul className="sub-menu">
                <li className="menu-item menu-item-has-children">
                  <a href="/about">About us</a>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="/#">Coverage</a>
                  <ul className="sub-menu ssmenu">
                    <li className="menu-item">
                      <a href="/genaral-liability">General liability</a>
                    </li>
                    <li className="menu-item">
                      <a href="/professional-liability">
                        Professional liability
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="/cyber-insurance">Cyber Security</a>
                    </li>
                    <li className="menu-item">
                      <a href="/business-insurance">Business liability</a>
                    </li>
                    <li className="menu-item">
                      <a href="/errors-and-omissions">Errors & Omission</a>
                    </li>
                    <li className="menu-item">
                      <a href="/workers-compensation">Workers Comp</a>
                    </li>
                    <li className="menu-item">
                      <a href="/commercial-auto">Commercial Auto</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="">Our Services</a>
                  {/* Uncomment if needed
                <ul className="sub-menu">
                  <li className="menu-item"><a href="/">Buy/get Quote</a></li>
                  <li className="menu-item"><a href="/">Renew</a></li>
                  <li className="menu-item"><a href="/">Claim</a></li>
                  <li className="menu-item"><a href="/">Services</a></li>
                </ul>
                */}
                </li>
                <li className="menu-item">
                  <a href="/renewals">Renewals</a>
                </li>
                <li className="menu-item">
                  <a href="/claims">Claims</a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Sitemap;
