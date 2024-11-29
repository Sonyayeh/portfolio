import React from "react";
import Omurice from "../mockups/omu.png"


const OmuMockup = () => {
    return (
        <div >
            <div className="">
                <img src={Omurice} alt="the mockup photo for Omurice" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default OmuMockup;