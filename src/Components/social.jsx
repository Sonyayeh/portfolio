import React from "react";
import IonIcon from "@reacticons/ionicons";

const Social = () => {
  return (
    <div 
      className="flex justify-center items-center 
      sm:mt-[7rem] sm:mb-[-10rem]
      md:pb-[12rem] md:pt-[0rem]
      lg:pt-[8rem] lg:pb-[10rem] lg:w-[45rem]"
    >
      <div className="justify-center items-center">
        {/* GitHub Icon and added the link to my github*/}
        <a 
          href="https://github.com/Sonyayeh" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer sm:px-2 md:text-[3.5rem] md:px-3 lg:text-[7rem] lg:px-2" 
            name="logo-github" 
          />
        </a>
        
        {/* LinkedIn Icon and added the link to my Linkedin*/}
        <a 
          href="https://www.linkedin.com/in/sonya-yeh-63a17a2b0/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer sm:px-2 md:text-[3.5rem] md:px-3 lg:text-[7rem] lg:px-5" 
            name="logo-linkedin" 
          />
        </a>
        
        {/* YouTube Icon and added the link to my Youtube*/}
        <a 
          href="https://www.youtube.com/@sonyayeah" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer sm:px-2 lg:text-[7rem] md:text-[3.5rem] md:px-3 lg:px-5" 
            name="logo-youtube" 
          />
        </a>
        
        {/* Instagram Icon and added the link to my Instgram*/}
        <a 
          href="https://www.instagram.com/sooonyeh/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer sm:px-2 lg:text-[7rem] md:text-[3.5rem] md:px-3 lg:px-5" 
            name="logo-instagram" 
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
