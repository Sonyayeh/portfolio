import React from "react";
import Volleyball from "../mockups/volley.png";

const VolleyballMockup = () => {
  return (
    <div>
      <div>
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
