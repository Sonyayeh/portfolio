import React, { useRef } from "react";

import Hello from "../Components/hello";
import TravelPhotos from "../Components/TravelPhotos";
import Pointercursor from "../Components/photopointer";
import Food from "../Components/Foodslider";
import Photo from "../Components/photo";
import Language from "../Components/language";
import Skills from "../Components/skills";
import PurpleCursor from "../Components/PurplePointer";
import Resume from "../Components/resume";
import SelfIntro from "../Components/selfintro";
import Values from "../Components/Values";
import Goal from "../Components/goal";
import Special from "../Components/specialAboutMe";
import Social from "../Components/social";

const About = () => {
  const specialRef = useRef(null);

  return (
    <div className="container mx-auto sm:w-full lg:ml-[6rem] relative">

      <Hello />

      <div className="relative mt-[30rem] sm:mt-[2rem] sm:ml-[-1rem] sm:w-[25rem] md:mr-[1rem] md:w-[50rem] md:mt-[2rem] lg:w-[100rem] lg:ml-[-15rem] lp:ml-[4rem]">

        {/* Photo */}
        <div className="absolute w-full sm:w-1/4 sm:mt-[3rem] sm:ml-[1rem] md:w-3/4 md:ml-[30rem] md:mt-[-0rem] lg:w-1/3 lg:ml-[72rem] lg:mt-[-5rem] lp:w-1/3 lp:ml-[45rem] lp:mt-[3rem]">
          <Photo />
        </div>

        {/* Pointercursor */}
        <div className="absolute rotate-12 sm:w-1/4 sm:m-[4.2rem] sm:mt-[2rem] md:w-[20rem] md:ml-[50.5rem] md:mt-[-1rem] lg:w-[5rem] lg:ml-[91rem] lg:mt-[-5.5rem] lp:w-1/3 lp:ml-[55.5rem] lp:mt-[2rem]">
          <Pointercursor />
        </div>

        {/* About Me Heading + Tab Bar */}
        <div className="flex flex-col items-end sm:flex-col lg:flex-row w-full lg:mr-[20rem]">

          {/* Heading */}
          <div className="bg-blue-200 px-4 flex justify-between items-center w-full sm:w-[17rem]">
            <h5 className="text-white text-3xl sm:text-2xl md:text-7xl lg:text-6xl">
              About Me:
            </h5>
          </div>

          {/* Tab Bar */}
          <div className="bg-blue-200 p-4 pt-0 sm:w-[17rem] mt-2 sm:mt-0 lg:ml-4">
            <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start sm:px-5">
              <li className="text-blue-200 text-lg sm:text-1xl sm:ml-[-1rem] md:text-3xl lg:text-6xl font-semibold">DISC</li>
              <li className="text-blue-200 text-lg sm:text-1xl sm:ml-[-1rem] md:text-3xl lg:text-6xl font-semibold">OPTION</li>
              <li className="text-blue-200 text-lg sm:text-1xl sm:ml-[1rem] md:text-3xl lg:text-6xl font-semibold">VIEW</li>
              <li className="text-blue-200 text-lg sm:text-1xl sm:ml-[-1rem] md:text-3xl lg:text-6xl font-semibold">HELP</li>
            </ul>
          </div>
        </div>

       {/* About Me Paragraph */}
        <SelfIntro />


        {/* Purple Cursor */}
        <div className="sm:ml-[15rem] sm:w-40 sm:mt-[-5rem] md:ml-[30rem] md:w-[30rem] lg:ml-[87rem] lg:w-[20rem] lg:mb-[2rem]">
          <PurpleCursor />
        </div>

        {/* Resume */}
        <div className="sm:ml-[-1rem] sm:w-[15rem] sm:mt-[-6rem] md:ml-[-5rem] md:w-[40rem] md:mt-[-18rem] lg:ml-[-12rem] lg:w-[50rem] lg:mb-[-18rem] lg:pb-[10rem]">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Resume />
          </a>
        </div>

      </div>

      {/* Other Sections */}
      <Goal />
      <Values />

      <div className="w-50 sm:w-[25rem] sm:mr-[2rem] md:pt-[3rem] md:text-[2rem] md:w-[50rem] lg:ml-[1rem] lg:text-[3rem] lg:w-[68rem] lp:ml-[1rem] lp:text-[3rem] lp:w-[80rem]">
        <Skills />
      </div>

      <div className="my-10 mx-auto w-full border-t-4 border-dashed border-purple-300 lg:ml-[-6rem]" />

      <h5 className="sm:text-[1.628rem] sm:mt-[-1rem] sm:ml-[1rem] md:text-[3.2rem] md:ml-[5rem] lg:text-[5.1rem] lg:ml-[0rem] lp:text-[5rem] lp:ml-[8rem] text-orange-400">
        A little more about me:
      </h5>

      <Food />

      <div className="container mx-auto lg:ml-[6rem]">
        <TravelPhotos />
      </div>

      <div className="md:pb-[1rem] lp:ml-[5rem]">
        <Language />
      </div>

      {/* Special Section */}
      <div
        ref={specialRef}
        className="w-full flex justify-center sm:justify-items-center md:justify-items-center lg:pr-[20rem] lp:mr-[5rem]"
      >
        <Special />
      </div>

      {/* Social */}
      <div className="sm:w-[28rem] sm:ml-[-3rem] sm:mt-[-5rem] mb:w-[40rem] md:max-w-[40rem] md:ml-[10rem] lg:w-[50rem] lg:ml-[30rem] lg:mt-[-5rem] lg:mb-[-7rem] lp:w-[60rem] lp:ml-[36rem] lp:mt-[2rem] lp:pr-[6rem]">
        <Social />
      </div>

    </div>
  );
};

export default About;
