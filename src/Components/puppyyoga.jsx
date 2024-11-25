import React from "react";
import Puppy from "../mockups/yoga.png"
import styles from "../Components/puppyyoga.module.css"

const YogaMockup = () => {
    return (
        <div className={`${styles.Puppy}`}>
            <div className="">
                <img src={Puppy} alt="the mockup photo for furrever pals" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default YogaMockup;