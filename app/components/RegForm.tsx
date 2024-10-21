"use client";
import React, { useState } from "react";

const RegForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const [formData, setFormData] = useState({
    my_name: "",
    my_email: "",
    my_num: "",
    my_ask: "",
  });

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
      console.log("Response:", response);

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
    <div className="posrel relative">
      <img
        className="wow fadeInRight animate-fadeInRight"
        src="/images/reg-form.png"
        alt="Registration Form Background"
      />

      <div className="reg-frm wow fadeInRight animate-fadeInRight absolute inset-0 flex flex-col justify-center items-center">
        <h2 className="grayy text-gray-700 text-2xl font-bold mb-4">
          Get your Quotes / Buy
        </h2>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="row flex flex-wrap mb-4">
            <div className="columns medium-4 small-12 porel w-full md:w-1/2 pr-2 mb-4 md:mb-0">
              <div className="input-group">
                <input
                  className="input-group-field w-full p-2 border rounded"
                  type="text"
                  name="my_name"
                  value={formData.my_name}
                  onChange={handleChange}
                  required
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="columns medium-4 small-12 porel w-full md:w-1/2 pl-2">
              <div className="input-group">
                <input
                  className="input-group-field w-full p-2 border rounded"
                  type="email"
                  name="my_email"
                  value={formData.my_email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="columns medium-4 small-12 porel w-full md:w-1/2 pl-2">
              <div className="input-group">
                <input
                  className="input-group-field w-full p-2 border rounded"
                  type="num"
                  name="my_num"
                  value={formData.my_num}
                  onChange={handleChange}
                  required
                  placeholder="Mobile"
                />
              </div>
            </div>
          </div>

          <button
            className="button bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Get Quotes / Buy"}
          </button>
        </form>
        {formStatus && (
          <p className="mt-4 text-gray-800 ml-custom">{formStatus}</p>
        )}{" "}
      </div>
    </div>
  );
};

export default RegForm;
