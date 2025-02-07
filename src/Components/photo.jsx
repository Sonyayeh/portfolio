import React from "react";
import Photo from "../assets/selfie.svg";

const MyPhoto = () => {
    return (
        <div className="flex justify-center items-center w-full h-auto">
            <img 
                src={Photo} 
                alt="my photo" 
                className="
                    w-full h-auto object-contain
                    sm:max-w-[200px] sm:max-h-[200px]
                    md:max-w-[300px] md:max-h-[300px]
                    lg:max-w-[400px] lg:max-h-[400px]
                "
                style={{
                    animation: "swing 3s ease-in-out infinite",
                    transformOrigin: "top center" 
                }}
            />
            <style>
                {`
                    @keyframes swing {
                        0% { transform: rotate(0deg); }
                        50% { transform: rotate(4deg); }
                        100% { transform: rotate(0deg); }
                    }
                `}
                {/* animation to make the photo swing around as if it is hanging in a light breeze! */}
            </style>
        </div>
    );
};

export default MyPhoto;
