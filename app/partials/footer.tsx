"use client"; // Mark this file as a Client Component

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-center text-2xl font-bold mb-2">CONNECT WITH US</h2>
        <h6 className="text-center text-gray-700 mb-6">
          Follow, like, tweet or post. We would love to interact with you
        </h6>

        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img
              src="/images/fb.png"
              alt="Facebook"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img src="/images/tw.png" alt="Twitter" className="w-full h-full" />
          </a>
          <a
            href="https://plus.google.com/discover"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img
              src="/images/gplus.png"
              alt="Google+"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://in.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img
              src="/images/lin.png"
              alt="LinkedIn"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img
              src="/images/ytube.png"
              alt="YouTube"
              className="w-full h-full"
            />
          </a>
        </div> */}

        <div className="text-center mb-6">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {/* <a href="/about" className="text-gray-700 hover:text-gray-900">
              About us
            </a>
            <a href="/coverage" className="text-gray-700 hover:text-gray-900">
              Coverage
            </a>
            <a href="/claims" className="text-gray-700 hover:text-gray-900">
              Claims
            </a>
            <a href="/renewals" className="text-gray-700 hover:text-gray-900">
              Renewals
            </a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a> */}
            <a href="/sitemap" className="text-gray-700 hover:text-gray-900">
              Sitemap
            </a>
            <a
              href="/terms-of-uses"
              className="text-gray-700 hover:text-gray-900"
            >
              Terms of Use
            </a>
            <a
              href="/privacy-security"
              className="text-gray-700 hover:text-gray-900"
            >
              Privacy & Security
            </a>
            <a href="/disclaimer" className="text-gray-700 hover:text-gray-900">
              Disclaimer
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 Golden Era Insurance Agency
            <br />
            With our License Number 0M92371
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
