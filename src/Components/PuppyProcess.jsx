import React, { useState } from "react";
import Arrow from "./ArrowSvg";

const slides = [
  {
    title: "Mission",
    content:
      "Furrever Pals started from a simple idea: movement and animals both make people feel good, so why not combine them. Yoga lowers cortisol and calms the nervous system. Dogs do something similar, physical contact with them raises oxytocin, the hormone tied to trust and bonding. But the puppies in every session aren't just there for the hour, they're all adoptable, sourced from local shelters, free to go home with anyone who connects with them that day. The mission is really two things at once: a wellness space people genuinely want to return to, and a low pressure way for shelter dogs to find a home.",
  },
  {
    title: "Problem",
    content:
      "Adopting a pet is usually treated as a decision, not an experience, something you research, then commit to, often without ever really meeting the animal beforehand under normal circumstances. Yoga has its own barrier: walking into a studio for the first time can feel intimidating, especially if everyone else already seems to know what they're doing. Neither problem is really about the activity itself, they're both about pressure. What was missing was a space where the stakes felt lower on both fronts: a chance to spend real time with a dog before any commitment, and a yoga session where not knowing anything yet was completely fine.",
  },
  {
    title: "Solution",
    content:
      "The solution was to stop treating yoga and adoption as two separate things people had to choose between. Every Furrever Pals class doubles as an informal adoption event, so there's no shelter visit with its usual pressure, no sense of being watched or judged while you decide. People just spend an hour moving, breathing, and sitting with a dog who might become theirs, with no expectation attached either way. That's the whole model: lower the stakes enough that people show up for themselves, and stay open to something more.",
  },
];

const PuppyProcess = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="font-Dos flex flex-col items-center justify-self-center
      sm:w-[23rem] sm:pb-[3rem]
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
              text-purple-400  decoration-dashed hover:text-orange-400 transition-colors duration-300 
              sm:text-[1.5rem] sm:py-5 sm:w-[22rem]
              md:text-[2.5rem] md:w-[45rem]
              lp:text-[2rem]
              lg:text-[3.5rem] lg:py-5 lg:w-[65rem]">
            {slide.title}
            <span className={`transition-transform duration-300 no-underline
              sm:text-[1.2rem]
              md:text-[2rem]
              lp:text-[1.8rem]
              lg:text-[2.5rem]
              ${openIndex === idx ? "rotate-180" : "rotate-0"}`}>
               <Arrow className="w-6 sm:w-[1rem] md:w-[2rem]" />
            </span>
          </button>

          {/* Dropdown Content */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
            <p className="text-orange-500 text-left pb-6
            justify-self-center
              sm:text-[0.95rem] sm:leading-[1.8rem]
              md:text-[1.8rem] md:leading-[3rem]
              lp:text-[1.5rem] lp:leading-[3.2rem] lp:w-[45rem]
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