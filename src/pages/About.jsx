import React, { useRef } from "react";

import AboutMeTitle from "../Components/AboutMeTitle";
import Hello from "../Components/hello";
import TravelPhotos from "../Components/TravelPhotos";
import Food from "../Components/Foodslider";
import Skills from "../Components/skills";
import PurpleCursor from "../Components/PurplePointer";
import Resume from "../Components/resume";
import SelfIntro from "../Components/selfintro";
import Values from "../Components/Values";
import Goal from "../Components/goal";
import Special from "../Components/specialAboutMe";
import MiniFavourites from "../Components/MiniFavs";
import Social from "../Components/social";

const About = () => {
  const specialRef = useRef(null);

  return (


      <div>
        <AboutMeTitle />

        <div className="container mx-auto sm:w-full relative lg:pt-[8rem]">
          <Hello />

          <div className="relative mt-[30rem] sm:mt-[2rem] sm:ml-[-1rem] sm:w-[25rem] md:mr-[1rem] md:w-[53rem] md:mt-[2rem] lg:w-[80rem] lp:w-[80rem]">
            <SelfIntro />

            <div
              className="sm:ml-[15rem] sm:w-40 sm:mt-[-5rem] md:ml-[30rem] md:w-[20rem] 
              lp:ml-[55rem]
              lg:ml-[55rem] lg:w-[20rem] lg:mb-[2rem]"
            >
              <PurpleCursor />
            </div>

            <div
              className="sm:ml-[-1rem] sm:w-[15rem] sm:mt-[-6rem] md:ml-[-5rem] md:w-[40rem] md:mt-[-18rem]
              lp:pt-[2rem] lp:w-[35rem]
              lg:w-[50rem] lg:mb-[-3rem]"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Resume />
              </a>
            </div>
          </div>

          <div className="flex text-center justify-center">
            <Goal />
          </div>

          <div className="flex text-center justify-center pb-[5rem]">
            <Values />
          </div>

          <div className="flex text-items-center pb-[5rem] justify-centerw-50 sm:w-[25rem] md:pt-[3rem] md:text-[2rem] md:w-[50rem] lg:text-[3rem] lg:w-[80rem] lp:text-[3rem] lp:w-[80rem]">
            <Skills />
          </div>

          <div className="flex justify-center items-centermy-10 mx-auto w-full border-t-4 pb-[3rem] border-dashed border-purple-300" />

          <h5 className=" flex justify-center sm:text-[1.628rem] sm:mt-[-1rem] md:text-[3.2rem] lg:text-[5.1rem] lp:text-[5rem] lg:pt-[3rem] text-orange-400">
            A little more about me:
          </h5>

          <div className="pb-[5rem]">
            <Food />
          </div>

          <div className="container flex justify-center items-center pb-[5rem]">
            <TravelPhotos />
          </div>

          <div className="py-[2rem]">
            <MiniFavourites />
          </div>

          <div
            ref={specialRef}
            className="w-full flex justify-center sm:justify-items-center md:justify-items-center md:pt-[2rem]"
          >
            <Special />
          </div>

          <div>
            <Social />
          </div>
        </div>
    </div>
  );
};

export default About;