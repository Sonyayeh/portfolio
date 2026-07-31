import React from "react";
import IonIcon from "@reacticons/ionicons";

const Social = () => {
  return (
    <div 
      className="
        relative justify-center items-center w-full
        py-[2rem] 
      "
    >
      <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        
        {/* GitHub */}
        <a href="https://github.com/Sonyayeh" target="_blank" rel="noopener noreferrer">
          <IonIcon 
            className="text-blue-300 text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[4rem] hover:text-purple-300 transition" 
            name="logo-github" 
          />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/sonya-yeh-63a17a2b0/" target="_blank" rel="noopener noreferrer">
          <IonIcon 
            className="text-blue-300 text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[4rem] hover:text-purple-300 transition" 
            name="logo-linkedin" 
          />
        </a>

        {/* YouTube */}
        <a href="https://www.youtube.com/@sonyayeah" target="_blank" rel="noopener noreferrer">
          <IonIcon 
            className="text-blue-300 text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[4rem] hover:text-purple-300 transition" 
            name="logo-youtube" 
          />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/sooonyeh/" target="_blank" rel="noopener noreferrer">
          <IonIcon 
            className="text-blue-300 text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[4rem] hover:text-purple-300 transition" 
            name="logo-instagram" 
          />
        </a>

      </div>
    </div>
  );
};

export default Social;
