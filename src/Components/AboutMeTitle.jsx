import React from "react";
import Threebubbles from "../assets/threebubbles.gif";

const AboutMeTitle = () => {
  return (
    <div className="w-full flex justify-center pt-[3rem] pb-[2rem]">
      <div className="flex items-center justify-center">
        <h1
          className="text-vcr text-[#6082B6] font-bold
          text-[2rem] md:text-[2.5rem] lp:text-[5rem] lg:text-[3rem]"
        >
          About Me
        </h1>

        <div className="ml-[-0.4rem] -mt-3 w-[4rem] h-[4rem] overflow-hidden flex items-center justify-center">
          <img
            src={Threebubbles}
            alt="three bubbles"
            className="scale-[10] origin-center shrink-0
            lp:scale-[10] lp:w-[6rem]
            "
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeTitle;