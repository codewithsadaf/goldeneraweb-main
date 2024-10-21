"use client";

import React, { useState } from "react";

const ContactSliderSection = () => {
  const [activeTab, setActiveTab] = useState("panel1");
  const [formData, setFormData] = useState({
    my_name: "",
    my_email: "",
    my_ask: "",
    my_num: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleTabClick = (panel: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveTab(panel);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("Response:", response); // Check response in console

      if (response.ok) {
        setFormStatus("Email sent successfully!");
        setFormData({ my_name: "", my_email: "", my_ask: "", my_num: "" });
      } else {
        setFormStatus("Failed to send email");
      }
    } catch (error) {
      setFormStatus("Failed to send email");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section className="contact-sec py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <ul className="flex space-x-6 list-none p-5">
              <li
                className={`cursor-pointer flex flex-col items-center transition-transform duration-300 ease-in-out ${
                  activeTab === "panel1"
                    ? "text-red-500 transform scale-110"
                    : "text-gray-700"
                }`}
                onClick={(e) => handleTabClick("panel1", e)}
              >
                <img
                  src="images/cn1.png"
                  alt="Ask Question"
                  className="w-16 h-16 transition-transform duration-300 ease-in-out"
                />
                <div className="text-center mt-2">
                  <p className="text-sm font-medium">Ask Question</p>
                </div>
              </li>
              <li
                className={`cursor-pointer flex flex-col items-center transition-transform duration-300 ease-in-out ${
                  activeTab === "panel2"
                    ? "text-red-500 transform scale-110"
                    : "text-gray-700"
                }`}
                onClick={(e) => handleTabClick("panel2", e)}
              >
                <img
                  src="images/cn2.png"
                  alt="Location"
                  className="w-16 h-16 transition-transform duration-300 ease-in-out"
                />
                <div className="text-center mt-2">
                  <p className="text-sm font-medium">Location</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="busns-sec2 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {activeTab === "panel1" && (
              <div className="w-full max-w-lg p-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  How can we <span className="text-red-500">Help?</span>
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-gray-700">My Name</label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      name="my_name"
                      value={formData.my_name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700">My Email ID</label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="email"
                      name="my_email"
                      value={formData.my_email}
                      onChange={handleChange}
                      required
                      placeholder="Type your email id"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700">
                      My Mobile Number
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="tel"
                      name="my_num"
                      value={formData.my_num}
                      onChange={handleChange}
                      required
                      placeholder="Type your mobile number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700">I want to ask</label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      name="my_ask"
                      value={formData.my_ask}
                      onChange={handleChange}
                      required
                      placeholder="Type your query (limit 255 char)"
                    />
                  </div>

                  <button
                    className="bg-red-500 text-white p-2 rounded"
                    type="submit"
                    disabled={isLoading} // Disabled while loading
                  >
                    {isLoading ? "Sending..." : "Send"}{" "}
                    {/* Button text changes based on loading state */}
                  </button>
                </form>
                {formStatus && (
                  <p className="mt-4 text-gray-800 ml-custom">{formStatus}</p>
                )}
              </div>
            )}
            {activeTab === "panel2" && (
              <div className="w-full p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb="
                  width="100%"
                  height="600"
                  frameBorder="0"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSliderSection;
