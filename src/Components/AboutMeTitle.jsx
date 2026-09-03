import React from "react";
import Threebubbles from "../assets/threebubbles.gif";

const AboutMeTitle = () => {
  return (
    <div className="w-full flex justify-center pt-[3rem] pb-[2rem]
    lg:pb-[2rem] lg:pt-[2rem]
    ">
      <div className="flex items-center justify-center">
        <h1
          className="text-vcr text-sky-600 justify-self-center
          sm:text-[2.5rem]
          md:text-[3rem] 
          lp:text-[4rem] 
          lg:text-[5rem] "
        >
          About Me
        </h1>
      </div>
    </div>
  );
};

export default AboutMeTitle;