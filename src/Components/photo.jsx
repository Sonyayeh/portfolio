import React from "react";
import Photo from "../assets/selfie.png"
import styles from "../Components/photo.module.css"

const MyPhoto = () => {

    return(
        <div className={`${styles.photo}`}>
            <div className="">
                <img src={Photo} alt="my photo" /> {/* Use the imported image here */}
            </div>
        </div>
    );

}

export default MyPhoto
