import React from "react";
import Pointer from "../assets/photopointer.png"
import styles from "../Components/pointer.module.css"

const Pointercursor = () => {
    return (
        <div className={`${styles.Pointer}`}>
            <div className="">
                <img src={Pointer} alt="photo pointer cursor" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default Pointercursor;