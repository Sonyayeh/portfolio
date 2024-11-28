import React from "react";
import bluebox from "../assets/bluebox.png"; // Import the image correctly

const BlueWorkBox = () => {
    return (
        <div >
            <div>
                <img src={bluebox} alt="work-bubble" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default BlueWorkBox;
