import React from "react";

// Here's the footer
// I had a "contact me" section as the footer, but I figured it’s more suitable

function Footer() {
  return (
    <div className="flex justify-center items-center  
      sm:w-[23rem]
      md:w-[54rem]
      lg:pb-[10rem] lg:justify-center lg:items-center lg:w-[70rem] lg:mr-[2rem]
      lp:w-[70rem]"
    >
      <div className="text-xl text-center
        sm:text-[1.5rem] sm:justify-center sm:mr-[-1rem] 
        md:text-[4rem] md:justify-center md:pb-[5rem]
        lg:text-[6rem] lg:pb-[0rem] lg:ml-[-10rem]
        lp:text-[5rem] lp:mr-[-12rem] lp:pt-[-1rem]"
      >
        {/* I used a copyright footer text instead */}
        <p>&copy; 2024 Sonya Yeh, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
