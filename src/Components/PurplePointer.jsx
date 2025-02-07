import React from "react";
import Cursor from "../assets/Cursor.png";

const PurpleCursor = () => {
    return (
        <div className="flex justify-center items-center w-full h-auto">
            <img 
                src={Cursor} 
                alt="photo pointer cursor" 
                className="animate-float"
                style={{
                    animation: "floatUpDown 2s ease-in-out infinite",
                }}
            />
            <style>
                {`
                    @keyframes floatUpDown {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                        100% { transform: translateY(0); }
                    }
                `}

                {/* added an animation so the purple pointer at the bottom of the about me page is moving slightly up and down */}
            </style>
        </div>
    );
}

export default PurpleCursor;
