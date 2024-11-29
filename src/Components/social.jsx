import React from "react";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import git from "../assets/github.png";
import youtube from "../assets/youtube.png";

const Social = () => {
  return (
    <div className="flex justify-center items-center space-x-10 
     md:pb-[10rem]
    ">
      {/* LinkedIn Icon */}
      <div className="flex items-center">
        <img
          src={linkedin}
          alt="Linkedin logo"
          className="w-[5rem] h-[5rem] 
          sm:w-3/4 sm:h-[3rem]
          md:w-[5rem] md:h-[5.5rem]"
        />
      </div>

      {/* Instagram Icon */}
      <div className="flex items-center">
        <img
          src={instagram}
          alt="Instagram logo"
          className="w-[5rem] h-[5rem] 
          sm:w-3/4 sm:h-[3rem] 
          md:w-[5rem] md:h-[5.5rem]"
        />
      </div>

      {/* Github Icon */}
      <div className="flex items-center">
        <img
          src={git}
          alt="Github logo"
          className="w-[5rem] h-[5rem] 
          sm:w-4/5 sm:h-[4rem] 
          md:w-[5.5rem] md:h-[5.5rem]"
        />
      </div>

      {/* YouTube Icon */}
      <div className="flex items-center">
        <img
          src={youtube}
          alt="Youtube logo"
          className="w-[5rem] h-[5rem] 
          sm:w-3/4 sm:h-[3rem] 
          md:w-[7rem] md:h-[5.5rem]"
        />
      </div>
    </div>
  );
};

export default Social;
