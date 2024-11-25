import React from "react";
import Volleyball from "../mockups/volley.png";

const VolleyballMockup = () => {
  return (
    <div className="flex justify-center items-center w-full h-auto">
      <div className="flex justify-center items-center w-full max-w-[50rem] 
      md:ml-[50rem]">
        <img
          src={Volleyball}
          alt="the mockup photo for Volleyball tournament"
          className="w-full h-auto max-w-[50rem]"
        />
      </div>
    </div>
  );
};

export default VolleyballMockup;
