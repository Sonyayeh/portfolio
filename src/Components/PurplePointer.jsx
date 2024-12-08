import React from "react";
import Cursor from "../assets/Cursor.png";

const PurpleCursor = () => {
    return (
        <div>
            <div className="">
                <img src={Cursor} alt="photo pointer cursor" /> {/* Use the imported image here */}
            </div>
        </div>
    );
}

export default PurpleCursor;