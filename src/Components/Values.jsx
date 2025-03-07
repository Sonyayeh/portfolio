import React, { useState } from "react";
import Arrow from "./ArrowSvg";

const ValueItem = ({ title, children, textSize = "text-[2rem]" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-purple-300 shadow-lg rounded-lg">
      {/* Button with Arrow */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 font-semibold text-purple-300 hover:text-orange-300 text-2xl  bg-white transition-all rounded-t-lg
        sm:text-[1.7rem] 
        md:text-[4.5rem] 
        lg:text-[3.5rem]"
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
          className={`text-base text-blue-400 leading-relaxed 
          md:text-[3.2rem] lg:text-[3rem] p-4 ${textSize} break-words overflow-wrap-break-word`}
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
            {children.split('').map((char, index) => (
              <span key={index} className="inline-block">
                {char === " " ? "\u00A0" : char} {/* For preserving space */}
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
    <section className="w-6xl mx-auto lg:w-8xl">
      <h1 className="text-[4rem] md:text-[5rem] lg:text-[8rem] lg:mb-[2rem] lg:ml-[-8rem] font-bold text-center text-blue-300 underline">
        My Values:
      </h1>

      <h5 className="text-[3rem] font-bold text-center text-blue-300 mb-6 sm:text-[1.8rem] md:text-[3rem] md:mt-[-3rem] lg:text-[3rem] lg:mb-[5rem] lg:ml-[-8rem]">
        What makes{" "}
        <strong className="italic underline text-purple-500">Me</strong>{" "}
        a valuable candidate?
      </h5>

      <div className="grid grid-cols-1 gap-8 pb-[3rem] lg:ml-[-8rem]">
        <ValueItem title="Respect" textSize="text-[3rem]">
          Respect plays a huge role in any industry. It is a fundamental skill and the foundation of any working environments and relationships. It is necessary to treat people with dignity, listening/taking in other opinions and ideas and compromise each other. It fosters trust and mutual understanding, which creates a harmonious working environment. Through respecting others, I am also getting respected from them too.
        </ValueItem>

        <ValueItem title="Empathy" textSize="text-[2rem]">
          Empathy is the ability to understand and share feelings to other people. It is also important to put yourself in their shoes to understand their emotions. In industries, it is necessary to not take things and opinions too personally, listen without judgments, and validate others' feelings. By showing empathy to others, it strengthens relationships, encourages/enhances communication and establishes a sense of belonging and understanding.
        </ValueItem>

        <ValueItem title="Collaboration" textSize="text-[2rem]">
          Collaboration is the act of working together with others to achieve goals. It requires open communication, respect and empathy. Through collaborating with others, it develops a stronger bond and trust. When people collaborate effectively, they can combine strengths and knowledge, which more innovative results and solutions may appear than working individually. With my skills of working collaboratively with others for years, it shows how adaptive, trustworthy and communicative I can be.
        </ValueItem>
      </div>
    </section>
  );
};

export default Values;
