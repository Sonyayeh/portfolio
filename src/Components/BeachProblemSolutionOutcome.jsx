import React, { useState } from "react";
import Arrow from "./ArrowSvg";

const slides = [
  {
    title: "Problem",
    content:
      "Sports posters are often overly busy to show their excitement, making it hard to convey excitement and theme clearly.",
  },
  {
    title: "Solution",
    content:
      "I designed a balanced composition with a strong focal point and vibrant visuals to communicate both the event and its atmosphere.I designed a balanced composition with a strong focal point and vibrant visuals to communicate both the event and its atmosphere.",
  },
  {
    title: "Outcome",
    content:
      "I used a central volleyball as the focal point, combined with vibrant colours and beach elements, to create a design that feels energetic while maintaining clear hierarchy.",
  },
];

const BeachPSO = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="font-Dos flex flex-col items-center justify-self-center
      sm:w-[25rem] sm:pb-[3rem]
      md:w-[45rem] md:pb-[4rem] 
      lg:w-[70rem]
      ">

      {slides.map((slide, idx) => (
        <div key={idx} className="w-full border-b border-purple-300
          sm:max-w-[22rem]
          md:max-w-[50rem]
          lp:max-w-[65rem]
          lg:max-w-[80rem]">

          {/* Dropdown Button */}
          <button
            onClick={() => toggle(idx)}
            className="flex justify-between items-center text-left
              text-purple-400  decoration-dashed hover:text-blue-400 transition-colors duration-300 
              sm:text-[1.5rem] sm:py-5 sm:w-[22rem]
              md:text-[2.5rem] md:w-[45rem]
              lp:text-[3rem]
              lg:text-[3.5rem] lg:py-5 lg:w-[65rem]">
            {slide.title}
            <span className={`transition-transform duration-300 no-underline
              sm:text-[1.2rem]
              md:text-[2rem]
              lg:text-[2.5rem]
              ${openIndex === idx ? "rotate-180" : "rotate-0"}`}>
               <Arrow className="w-6 sm:w-[1rem] md:w-[2rem]" />
            </span>
          </button>

          {/* Dropdown Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
            <p className="text-blue-500 text-left pb-6
              sm:text-[0.95rem] sm:leading-[1.8rem]
              md:text-[1.8rem] md:leading-[3rem]
              lp:text-[2rem] lp:leading-[3.2rem]
              lg:text-[2.2rem] lg:leading-[3.8rem]">
              {slide.content}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default BeachPSO;