import React from "react";
import Magazine from "../mockups/magthumb.png";

const MagMockup = () => {
    return (
        <div className="flex justify-center items-center w-full h-auto">
            <img 
                src={Magazine} 
                alt="the mockup photo for Magazine" 
                className="
                    w-full h-auto object-contain
                    sm:max-w-full sm:max-h-[200px] 
                    md:max-w-[35rem] md:max-h-[90rem] 
                    lg:max-w-[65rem] lg:max-h-[500px]
                    lp:max-w-[800px] lp:max-h-[500px]
                " 
            />
        </div>
    );
};

export default MagMockup;
