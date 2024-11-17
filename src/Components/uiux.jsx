import React from "react";
import Uiux from "../assets/uiuxbox.png"; // Import the image correctly
import styles from "../Components/uiux.module.css";

const UiuxBox = () => {
    return (
        <div className={`${styles.uiuxBox}`}>
            <div className="">
                <img src={Uiux} alt="box for UI UX project" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default UiuxBox;
