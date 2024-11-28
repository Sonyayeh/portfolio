import React from "react";
import greenbox from "../assets/greenbox.png"; // Import the image correctly
import styles from "../Components/green.module.css";

const PurpleWorkBox = () => {
    return (
        <div className={`${styles.GreenWorkBox}`}>
            <div className="">
                <img src={greenbox} alt="work-bubble" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default PurpleWorkBox;
