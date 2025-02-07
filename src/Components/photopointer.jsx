import React from "react";
import Pointer from "../assets/photopointer.svg"

const Pointercursor = () => {
    return (
        <div>
            <div className="">
                <img src={Pointer} alt="photo pointer cursor" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default Pointercursor;