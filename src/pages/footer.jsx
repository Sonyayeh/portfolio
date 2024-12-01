import React from "react";
// here's the footer
// I had a contact me as footer, but I figured it'll be more suitable
// to add that in contact page instead (it's not done yet btw don't look yet plz)
function Footer() {
  return (
    <div className="flex justify-center items-center py-4 lg:pb-[10rem]">
      <div className="text-xl text-center
      sm:text-[1rem] sm:mr-[-1rem] sm:pt-[-50rem] 
      md:text-[3rem] md:justify-center md:pt-[0rem]
      lg:text-[4rem] lg:justify-center lg:pb-[10rem]
      ">
        {/* I used a copyright footer text instead */}
        <p>&copy; 2024 Sonya Yeh, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
