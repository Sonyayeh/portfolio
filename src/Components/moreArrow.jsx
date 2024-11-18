import React from "react";
import arrow from "../assets/arrow.png"; // Import the image correctly
import styles from "../Components/arrow.module.css";

const MoreInfoArrow = () => {
    return (
        <div className={`${styles.Arrow}`} >
            <div className="">
                <img src={arrow} alt="the more info arrow beside of each project boxes" /> {/* Use the imported image here */}
            </div>
            <div className="hover:underline hover:text-blue-300 cursor-pointer">
            <h5 className={`${styles.ArrowText}`}>More Info</h5>
            </div>
        </div>
    );
}

export default MoreInfoArrow;
