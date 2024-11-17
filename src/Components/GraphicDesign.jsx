import React from "react";
import graphic from "../assets/graphicbox.png"; // Import the image correctly
import styles from "../Components/graphic.module.css";

const GraphicBox = () => {
    return (
        <div className={`${styles.GraphicDesignBox}`}>
            <div className="">
                <img src={graphic} alt="box for graphic design project" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default GraphicBox;
