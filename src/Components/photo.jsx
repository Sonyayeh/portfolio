import React from "react";
import Photo from "../assets/selfie.png"


const MyPhoto = () => {

    return(
        <div>
            <div className="">
                <img src={Photo} alt="my photo" /> {/* Use the imported image here */}
            </div>
        </div>
    );

}

export default MyPhoto
