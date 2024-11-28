import React from "react";
import Omurice from "../mockups/omu.png"
import styles from "../Components/omurice.module.css"

const OmuMockup = () => {
    return (
        <div className={`${styles.Omu}`}>
            <div className="">
                <img src={Omurice} alt="the mockup photo for Omurice" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default OmuMockup;