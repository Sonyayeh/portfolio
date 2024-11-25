import React from "react";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import git from "../assets/github.png";
import youtube from "../assets/youtube.png";

const Social = () => {
  return (
    <div className="flex justify-center items-center mt-6 space-x-10 w-full
     md:pb-[10rem]
    ">
      {/* LinkedIn Icon */}
      <div className="flex items-center">
        <img
          src={linkedin}
          alt="Linkedin logo"
          className="w-[5rem] h-[5rem] 
          sm:w-[6rem] sm:h-[6rem]
          md:w-[5rem] md:h-[5.5rem]"
        />
      </div>

      {/* Instagram Icon */}
      <div className="flex items-center">
        <img
          src={instagram}
          alt="Instagram logo"
          className="w-[5rem] h-[5rem] 
          sm:w-[6rem] sm:h-[6rem] 
          md:w-[5rem] md:h-[5.5rem]"
        />
      </div>

      {/* Github Icon */}
      <div className="flex items-center">
        <img
          src={git}
          alt="Github logo"
          className="w-[5rem] h-[5rem] 
          sm:w-[6rem] sm:h-[6rem] 
          md:w-[5.5rem] md:h-[5.5rem]"
        />
      </div>

      {/* YouTube Icon */}
      <div className="flex items-center">
        <img
          src={youtube}
          alt="Youtube logo"
          className="w-[5rem] h-[5rem] 
          sm:w-[6rem] sm:h-[4.5rem] 
          md:w-[7rem] md:h-[5.5rem]"
        />
      </div>
    </div>
  );
};

export default Social;
