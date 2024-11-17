import React from "react";
import aboutbox from "../assets/About.png"; // Import the image correctly


const AboutBox = () => {
    return (
        <div>
            <div className="">
                <img src={aboutbox} alt="About me box" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default AboutBox;
