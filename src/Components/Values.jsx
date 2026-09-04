import React, { useState } from "react";
import Arrow from "./ArrowSvg";

const ValueItem = ({ title, children, textSize = "text-[2rem]" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[60rem] 
    sm:w-[20rem]
    md:w-[35rem]
    lp:w-[40rem]
    lg:w-[50rem]
    border border-purple-300 shadow-lg rounded-lg">
      {/* Button with Arrow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center font-Dos justify-between p-4 font-semibold text-purple-300 hover:text-orange-300 text-2xl  bg-white transition-all rounded-t-lg
        sm:text-[1.3rem] 
        md:text-[1.8rem] 
        lp:text-[2rem]
        lg:text-[2.5rem]"
      >
        {title}
        <Arrow className="w-6 sm:w-[1rem] md:w-[2rem]" />
      </button>

      {/* Collapsible Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-auto opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        {/* Text with individual letter ripple effect */}
        <p
          className={`text-base text-blue-400 leading-relaxed whitespace-normal break-normal
          sm:text-[0.7rem] md:text-[1.5rem] lp:text-[1rem] lg:text-[1rem] p-4 ${textSize}`}
          style={{
            display: 'flex',
            flexWrap: 'wrap', // Makes text wrap when it exceeds the container width
            width: '100%', // Ensures the text container takes full width
            minWidth: '0', // Ensures the text doesn't overflow outside the container
            maxWidth: '100%', // Limits the width of the text container
          }}
        >
          {/* Wrapping the entire content to ensure each letter gets ripple */}
          <span className="ripple-effect">
    {children.split(" ").map((word, wordIndex) => (
      <span key={wordIndex} className="mr-[0.5ch] inline-block">
        {word.split("").map((char, charIndex) => (
          <span key={charIndex} className="inline-block">
            {char}
          </span>
        ))}
      </span>
            ))}
          </span>
        </p>
      </div>
    </div>
  );
};

// Values component to display the list of values
const Values = () => {
  return (
    <section className="w-6xl mx-auto lg:w-8xl justify-self-center">
      <h1 className="text-[4rem] font-pix justify-self-center
      sm:text-[1.4rem] sm:pb-[2rem] sm:w-[25rem]
      md:text-[3rem] md:w-[30rem]
      lg:text-[4rem] lg:pb-[2rem]
      lp:text-[3rem] lp:pb-[2rem]
      lg:mb-[2rem]  text-center text-sky-600 underline">
        My Values:
      </h1>

      <h5 className="text-[3rem] font-pix font-bold text-center text-blue-400 mb-6 justify-self-center
      sm:text-[0.8rem] sm:w-[25rem]
      md:text-[2rem] md:pt-[2rem] md:pb-[2rem] md:w-[40rem]
      lp:text-[2rem] lp:w-[63rem] lp:pt-[2rem]
      lg:text-[2.5rem] lg:mb-[5rem] ">
        What makes{" "}
        <strong className="italic underline text-purple-500">Me</strong>{" "}
        a valuable candidate?
      </h5>

      <div className="flex flex-col text-left items-center gap-8 pb-[3rem]">
        <ValueItem title="Respect" textSize="
        sm:text-[1rem] 
        lg:text-[1.5rem]
        lp:text-[1rem]
        font-vcr">
          Respect plays a huge role in any industry. It is a fundamental skill and the foundation of any working environments and relationships. It is necessary to treat people with dignity, listening/taking in other opinions and ideas and compromise each other. It fosters trust and mutual understanding, which creates a harmonious working environment. Through respecting others, I am also getting respected from them too.
        </ValueItem>

        <ValueItem title="Empathy" textSize="text-[2rem] lp:text-[1rem] lg:text-[1.5rem]
        font-vcr">
          Empathy is the ability to understand and share feelings to other people. It is also important to put yourself in their shoes to understand their emotions. In industries, it is necessary to not take things and opinions too personally, listen without judgments, and validate others' feelings. By showing empathy to others, it strengthens relationships, encourages/enhances communication and establishes a sense of belonging and understanding.
        </ValueItem>

        <ValueItem title="Collaboration" textSize="text-[2rem] lp:text-[1rem] lg:text-[1.5rem]
        font-vcr">
          Collaboration is the act of working together with others to achieve goals. It requires open communication, respect and empathy. Through collaborating with others, it develops a stronger bond and trust. When people collaborate effectively, they can combine strengths and knowledge, which more innovative results and solutions may appear than working individually. With my skills of working collaboratively with others for years, it shows how adaptive, trustworthy and communicative I can be.
        </ValueItem>
      </div>
    </section>
  );
};

export default Values;
