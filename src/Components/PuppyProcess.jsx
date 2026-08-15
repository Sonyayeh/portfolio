import React, { useState } from "react";
import Arrow from "./ArrowSvg";

const slides = [
  {
    title: "Mission",
    content:
      "Furrever Pals started from something almost everyone deals with: stress. Not a niche problem, not something only certain people carry, just a near universal weight that shows up differently for everyone but rarely gets addressed directly. Yoga is one proven way to work through it, it lowers cortisol and calms the nervous system, gives the body somewhere to put tension it's been holding. But there's a second, less talked about effect worth taking seriously: cute things trigger a real dopamine response, the same reward pathway behind why people can't help smiling at a puppy, and few things hit that instinct as reliably as a dog. Combining the two wasn't a novelty pairing, it was two real, separate feel-good mechanisms working at once.",
  },
  {
    title: "Problem 1",
    content:
      "Most people don't seek professional help when they're overwhelmed. More often, they turn to something more accessible, exercise, movement, anything physical that offers some relief, even if the underlying stress never actually gets addressed. That gap, between needing support and actually seeking it, is where Furrever Pals tries to meet people halfway.",
  },
  {
    title: "Problem 2",
    content:
      "The second problem is less visible but just as real. Vancouver's shelters have made genuine progress reducing dog intake over the past two decades, but the dogs still coming in aren't guaranteed safety. According to BC SPCA's 2023 Annual Report, 1,697 animals were euthanized that year, including dogs whose conditions were considered treatable, cases where the outcome came down to space, time, or the absence of a ready home, not the animal's actual health. Furrever Pals treats that as directly connected to the wellness problem, not separate from it: bringing people and dogs into the same low pressure room does something for both. People get a form of stress relief that doesn't require booking a therapist. Dogs get seen by people who might actually take them home. To make that connection more than symbolic, Furrever Pals donates 10 percent of all income to local shelters, regardless of how many adoptions happen in a given month.",
  },
  {
    title: "Solution",
    content:
      "The solution was to merge two genuinely separate things, movement based stress relief and animal adoption, because together they create something neither could offer alone. Every Furrever Pals class doubles as an informal adoption event, so there's no shelter visit with its usual pressure, no sense of being watched or judged while you decide. People just spend an hour moving, being near dogs whose presence alone does something good for their mood, and sitting with one who might become theirs, with no expectation attached either way. That's the whole model: lower the stakes enough that people show up for themselves, and stay open to something more. The shelter side of that model isn't passive either. Ten percent of everything Furrever Pals earns goes directly to local dog shelters, whether or not a single adoption happens that month. The wellness side and the welfare side were never meant to be separate businesses loosely connected by a shared logo, they're the same commitment, pointed in two directions at once.",
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