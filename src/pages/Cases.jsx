import React from "react";
import BcitCase from "../Components/bcitux";
import PuppyCase from "../Components/puppyux";
import TysnCase from "../Components/tysncase";
import Marketing from "../Components/Marketing";
import Social from "../Components/social";

function Cases() {
   

    return (
       <div>
        <h5 className="
        font-bold
        sm:text-[2rem] sm:pt-[1rem] sm:pb-[-1rem]
        lp:text-[3rem] lp:ml-[2.5rem] lp:text-blue-300 
        ">
            UX Case Studies:
        </h5>
        <p>
            this is a testing
        </p>
        <BcitCase />
        <PuppyCase />
        <TysnCase />
        <Marketing />
            <div
            className="
            sm:mt-[-4rem]
            md:pt-[1rem] md:mr-[3rem]
            lp:ml-[31rem] lp:mt-[1rem]
            "
            >
                <Social />
            </div>
       </div>
    );
}

export default Cases;
