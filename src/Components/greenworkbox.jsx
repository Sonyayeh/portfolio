import React from "react";
import greenbox from "../assets/greenbox.png"; // Import the image correctly


const PurpleWorkBox = () => {
    return (
        <div>
            <div className="">
                <img src={greenbox} alt="work-bubble" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default PurpleWorkBox;
