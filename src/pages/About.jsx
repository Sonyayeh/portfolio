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
        <div className="container mx-auto justify-self-center sm:w-full relative ">
          <Hello />


          <div className="relative mt-[30rem] justify-center
          sm:mt-[4rem] sm:w-[24rem] 
          md:w-[45rem] md:mt-[2rem] 
          lp:w-[80rem]
          lg:w-[80rem] 
          ">
            <SelfIntro />

            <div
              className="
              sm:ml-[17rem] sm:w-[8rem] sm:mt-[-3rem] 
              md:ml-[30rem] md:w-[12rem] 
              lp:ml-[55rem] lp:mt-[-9rem]
              lg:ml-[55rem] lg:w-[20rem] lg:mb-[2rem]"
            >
              <PurpleCursor />
            </div>

            <div
              className="
              sm:ml-[-1rem] sm:w-[15rem] sm:mt-[-6rem] 
              md:w-[30rem] md:mt-[-13rem] md:pl-[2rem]
              lp:pt-[8rem] lp:w-[35rem] lp:ml-[2rem]
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

          <div className="flex text-center justify-center  pt-[2rem]
          sm:pb-[2rem]
          ">
            <Values />
          </div>

          <h5
        className=" justify-self-center text-center
        text-sky-600 italic underline font-pix
        sm:text-[1.4rem] sm:pb-[2rem] sm:w-[25rem]
        md:pb-[3rem] md:text-[2.5rem] md:w-[50rem]
        lg:text-[4rem] lg:w-[78rem] lg:pb-[4rem] lg:pt-[2rem]
        lp:text-[3rem] lp:w-[75rem]
        "
        >Some of my skills being:</h5>

          <div className="flex text-items-center justify-self-center w-50 sm:w-[23rem] sm:text-[1rem] sm:pb-[2rem]
          md:pt-[3rem] md:text-[2rem] md:w-[50rem] 
          lg:text-[3rem] lg:w-[65rem] 
          lp:text-[3rem] lp:w-[60rem] lp:pb-[2rem]">
            
            <Skills />
          </div>

          <div className="flex justify-center items-centermy-10 mx-auto w-full border-t-4 pb-[3rem] 
          lp:w-[60rem]
          border-dashed border-purple-300" />

          <h5 className=" flex justify-self-center text-center 
          sm:text-[1.4rem] sm:pb-[1rem] sm:w-[23rem]
          md:text-[3rem] md:w-[48rem]
          lg:text-[4rem] lp:w-[48rem]
          lp:text-[3rem] lg:w-[63rem] lg:pt-[3rem] text-sky-600 font-pix">
            A little more about me:
          </h5>

          <div className="
          sm:pb-[2rem]
          md:pb-[2rem]
          ">
            <Food />
          </div>

          <div className="container flex justify-center items-center 
          sm:pb-[2rem]
          md:pb-[2rem]
          ">
            <TravelPhotos />
          </div>

          <div className=" container flex justify-center items-center 
          sm:pb-[2rem]
          md:pb-[2rem]
          ">
            <MiniFavourites />
          </div>

          <div
            ref={specialRef}
            className="w-full flex justify-center 
            sm:justify-items-center 
            md:justify-items-center md:pt-[2rem]"
          >
            <Special />
          </div>
        </div>
    </div>
  );
};

export default About;