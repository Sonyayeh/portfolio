import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center  
      sm:w-[23rem]
      md:w-[54rem]
      lg:pb-[10rem] lg:justify-center lg:items-center lg:w-[70rem] lg:ml-[2rem]
      lp:w-[70rem] lp:ml-[2rem]"
    >
      <div className="flex flex-col items-center lg:flex-row lg:items-center">
        <div className="text-xl text-center
          sm:text-[1.3rem] sm:justify-center sm:mr-[-1rem] 
          md:text-[4rem] md:pb-[5rem] 
          lg:text-[6rem] lg:pb-[0rem] lg:ml-[1rem]
          lp:text-[4rem] lp:pt-[-1rem] lp:ml-[2rem]"
        >
          <p>&copy; hand coded by Sonya Yeh, 2025 </p>
          {/* this is the footer where it states the author with a copyright icon */}
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
