import React, { useState } from "react";

const slides = [
  {
    title: "Mission",
    content:
      "Furrever Pals was designed to bring together two things that make people feel good: movement and animals. The goal was to create a welcoming space where wellness and genuine connection coexist, giving puppies a meaningful path to their forever homes while offering people a yoga experience that feels warm, joyful, and entirely their own.",
  },
  {
    title: "Problem",
    content:
      "For many people, adopting a pet feels like a high-stakes decision made under pressure, while traditional yoga can feel intimidating or socially isolating. There was no low-pressure, feel-good environment where people could organically connect with animals before committing to adoption — and no yoga experience designed to feel genuinely accessible and community-driven from the start.",
  },
  {
    title: "Solution",
    content:
      "Furrever Pals proposes a puppy yoga studio concept where every class doubles as an informal adoption event. By removing the formality of a traditional shelter visit and replacing it with a relaxed, joyful environment, people can connect with puppies naturally and on their own terms. This model lowers the emotional barrier to both yoga and pet adoption, creating a business that is genuinely good for people, animals, and community wellbeing.",
  },
];

const PuppyProcess = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="font-Dos w-full flex flex-col items-center
      sm:px-[1rem]
      md:px-[2rem]
      lg:px-[2rem]">

      {slides.map((slide, idx) => (
        <div key={idx} className="w-full border-b border-purple-300
          sm:max-w-[22rem]
          md:max-w-[50rem]
          lp:max-w-[65rem]
          lg:max-w-[80rem]">

          {/* Dropdown Button */}
          <button
            onClick={() => toggle(idx)}
            className="w-full flex justify-between items-center text-left py-4
              text-purple-400  decoration-dashed hover:text-orange-400 transition-colors duration-300
              sm:text-[1.5rem]
              md:text-[2.5rem]
              lp:text-[3rem]
              lg:text-[3rem] lg:py-6">
            {slide.title}
            <span className={`transition-transform duration-300 no-underline
              sm:text-[1.2rem]
              md:text-[2rem]
              lg:text-[2.5rem]
              ${openIndex === idx ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>

          {/* Dropdown Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
            <p className="text-orange-500 text-left pb-6
              sm:text-[0.95rem] sm:leading-[1.8rem]
              md:text-[1.8rem] md:leading-[3rem]
              lp:text-[2rem] lp:leading-[3.2rem]
              lg:text-[2rem] lg:leading-[3.8rem]">
              {slide.content}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default PuppyProcess;