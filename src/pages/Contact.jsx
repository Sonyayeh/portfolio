import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import TwoClouds from '../assets/twoclouds.gif';
import Bubble from '../assets/singlebubble.gif';
import Social from "../Components/social";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the form data
    emailjs
      .send(
        "service_uw6twrk", // Replace with your EmailJS Service ID
        "template_rbr6ouq", // Replace with your EmailJS Template ID
        formData, // Send the form data
        "bPZu7d6EU42O4lpct" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div>
      <img
        src={TwoClouds}
        alt="Cloud gif"
        className="w-auto max-w-full sm:w-[10rem] sm:ml-[16rem] md:w-[15rem] md:ml-[35rem] md:mt-[-2rem] lg:w-[20rem] lg:ml-[70rem] lg:mt-[-2rem]"
      />
      <div>
        <img
          src={Bubble}
          alt="Bubble gif"
          className="sm:w-2/4 sm:h-1/4 sm:ml-[-4.5rem] sm:mt-[-7rem] md:w-2/4 md:h-1/4 md:ml-[-4rem] md:mt-[-13rem] lg:w-1/4 lg:h-auto lg:ml-[3rem] lg:mt-[5rem] max-w-full"
        />
        <img
          src={Bubble}
          alt="Bubble gif"
          className="sm:w-1/4 sm:h-1/4 sm:ml-[-2rem] sm:mt-[5rem] md:w-1/4 md:h-1/4 md:ml-[-4rem] md:mt-[-3rem] lg:w-1/6 lg:h-auto lg:ml-[12rem] lg:mt-[-7rem] max-w-full"
        />
      </div>
      <div className="max-w-lg sm:ml-[0rem] sm:mt-[-5rem] md:ml-[12rem] md:mt-[-18rem] lg:ml-[33rem] lg:mt-[-32rem] p-6 rounded-lg">
        <h5 className="text-[4rem] font-semibold text-center sm:text-[3rem] md:text-[4.1rem] text-purple-400 mb-6">
          Your Opinion Matters!
        </h5>
        <h5 className="text-[2rem] font-semibold text-center sm:text-[1.5rem] sm:mb-[3rem] sm:mt-[-1rem] text-purple-400 mb-6">
          Is there anything you like? Let me know!
        </h5>
        {submitted ? (
          <p className="text-center text-green-500 font-medium">
            Thank you for your message!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-[2rem] font-medium text-blue-400">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[2rem] font-medium text-blue-400">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[2rem] font-medium text-blue-400">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none sm:mb-[2rem] sm:pt-[2rem]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-[3rem] sm:ml-[7rem] md:ml-[9.5rem] ml-[9rem] text-[2rem] bg-blue-300 text-white font-medium py-1 rounded-md hover:bg-purple-300 hover:text-white focus:ring focus:ring-blue-300 focus:outline-none"
            >
              Submit
            </button>
          </form>
        )}
        <div className="lg:mt-[2rem] sm:mt-[2rem]">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
