import React from "react";
import DevelopBox from "../assets/developbox.png"; // Import the image correctly
import styles from "../Components/dev.module.css";

const DevBox = () => {
    return (
        <div className={`${styles.devBox}`}>
            <div className="">
                <img src={DevelopBox} alt="box for Development project" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default DevBox;
