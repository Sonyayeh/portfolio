import React from "react";
import bluebox from "../assets/bluebox.png"; // Import the image correctly
import styles from "../Components/blue.module.css";

const PurpleWorkBox = () => {
    return (
        <div className={`${styles.BlueWorkBox}`}>
            <div className="">
                <img src={bluebox} alt="work-bubble" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default PurpleWorkBox;
