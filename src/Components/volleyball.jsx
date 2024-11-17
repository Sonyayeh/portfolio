import React from "react";
import Volleyball from "../mockups/volley.png"
import styles from "../Components/volleyball.module.css"

const VolleyballMockup = () => {
    return (
        <div className={`${styles.Volleyball}`}>
            <div className="">
                <img src={Volleyball} alt="the mockup photo for Volleyball tournament" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default VolleyballMockup;