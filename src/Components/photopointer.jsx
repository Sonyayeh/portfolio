import React from "react";
import Pointer from "../assets/photopointer.svg"

const Pointercursor = () => {
    return (
        <div>
            <div className="">
                <img
                src={Pointer}
                alt="photo pointer cursor"
                className="rotate-[45deg]
                drop-shadow-[4px_-3px_0_rgba(0,0,0,0.25)]"
                />{/* Use the imported image here */}
            </div>
        </div>
    );
}

export default Pointercursor;