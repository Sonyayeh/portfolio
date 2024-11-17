import React from "react";
import Yoga from "../mockups/yoga.png"
import styles from "../Components/puppyyoga.module.css"

const YogaMockup = () => {
    return (
        <div className={`${styles.Yoga}`}>
            <div className="">
                <img src={Yoga} alt="the mockup photo for furrever pals" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default YogaMockup;