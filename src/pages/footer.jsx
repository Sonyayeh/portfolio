import React from "react";

// Here's the footer
// I had a "contact me" section as the footer, but I figured it’s more suitable

function Footer() {
  return (
    <div className="flex justify-center items-center py-4 
      lg:pb-[10rem] lg:justify-center lg:items-center lg:w-[115rem]
      lp:w-[115rem] lp:justify-center lp:items-center lp:align-center lp:pb-[8rem]"
    >
      <div className="text-xl text-center
        sm:text-[1.5rem] sm:justify-center sm:items-center sm:mr-[0.5rem] sm:pt-[12rem] 
        md:text-[4rem] md:justify-center md:pt-[0rem]
        lg:text-[6rem] lg:justify-center lg:pb-[0rem] lg:ml-[10rem] lg:w-auto
        lp:text-[4rem] lp:w-[60rem] lp:justify-center lp:pb-[2rem] lp:ml-[-10rem]"
      >
        {/* I used a copyright footer text instead */}
        <p>&copy; 2024 Sonya Yeh, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
