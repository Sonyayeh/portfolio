import React from 'react';

const Values = () => {
  return (
    <section className="w-6xl mx-auto lg:w-8xl">
      <h1 className="text-[4rem] 
      md:text-[5rem]
      lg:text-[6rem] lg:mb-[2rem]
      font-bold text-center text-blue-300 underline">
        My Values:
      </h1>
      <h5 className="text-[3rem] font-bold text-center text-blue-300 mb-6 
      sm:text-[1.8rem]
      md:text-[2.5rem] md:mt-[-3rem]
      lg:text-[3rem] lg:mb-[5rem]
      ">
        What makes <strong className="italic underline text-purple-500">Me</strong> a valuable candidate?
      </h5>

      {/* FIXED FLEX-COL SYSTEM */}
      <div className="grid grid-cols-1 gap-8 pb-[3rem]
      md:grid-cols-3 md:gap-5 
      lg:gap-10 lg:pr-6">

        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-purple-400 mb-3 
          sm:text-[1.7rem] 
          md:text-[3rem] 
          lp:text-[3rem]
          lg:text-[3.5rem]
          ">
            Respect
          </h1>
          <h2 className="text-base text-gray-600 leading-relaxed
          md:text-[1rem]
          lg:text-[1.5rem]
          ">
            Respect is imperative in any sector. It forms the basis for positive relationships and a good work culture. Respect in treating people, listening actively to various points of view, and agreeing to disagree through compromise establishes trust and common ground. Respect-based working enhances a better harmony and coexistence in the workplace. Showing respect to other people earns respect for me, building stronger bonds and collaboration.
          </h2>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-purple-400 mb-4 
          sm:text-[1.7rem] 
          md:text-[3rem] 
          lp:text-[3rem]
          lg:text-[3.5rem]
          ">
            Empathy
          </h1>
          <h2 className="text-base text-gray-600 leading-relaxed
          lg:text-[1.5rem]
          ">
            Empathy is the ability to understand and connect with other people's emotions. It's about putting yourself in their shoes to really see things from their perspective. In any career, one has to be open-minded, not take things personally, and listen without prejudice. Empathizing with others strengthens relationships, improves communication, and creates a sense of belongingness and understanding. Through empathy, I help create a more compassionate and embracing environment.
          </h2>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-purple-400 mb-4 
          sm:text-[1.7rem] 
          md:text-[3rem] 
          lp:text-[3rem]
          lg:text-[3.5rem]
          ">
            Collaboration
          </h1>
          <h2 className="text-base text-gray-600 leading-relaxed
          lg:text-[1.5rem]
          ">
            Collaboration is the act of working together with others to achieve common goals. It requires open communication, respect, and empathy. By collaborating with others, we develop stronger bonds and trust. Effective collaboration combines strengths and knowledge, which can lead to more innovative results and solutions than working individually. With years of experience working collaboratively, I demonstrate adaptability, trustworthiness, and strong communication skills.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Values;
