import React from "react";
import bubble from "../assets/bubble.png"; // Import the image correctly

function Bubbles() {

    return(
     <div>
        <div>
            <img src={bubble} alt="bubble" /> {/* Use the imported image here */}
        </div>
     </div>
    );
}

export default Bubbles;