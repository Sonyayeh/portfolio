import React from "react";
import purplebox from "../assets/purplebox.png"; // Import the image correctly
import styles from "../Components/Purple.module.css";

const PurpleWorkBox = () => {
    return (
        <div className={`${styles.PurpleWorkBox}`}>
            <div className="">
                <img src={purplebox} alt="work-bubble" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default PurpleWorkBox;
