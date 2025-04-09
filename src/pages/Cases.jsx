import React from "react";
import Arrow from '../Components/ArrowSvg';
import BcitCase from "../Components/bcitux";
import PuppyCase from "../Components/puppyux";
import TysnCase from "../Components/tysncase";
import Marketing from "../Components/Marketing";
import Social from "../Components/social";

const Cases = () => {
    const scrollToBcitCase = () => {
        document.getElementById('bcit-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <h1 className="
                justify-center text-center items-center
                sm:text-[2rem] sm:pt-[1rem] sm:pb-[-1rem] sm:mt-[8rem]
                md:text-[4rem] md:mt-[20rem]
                lp:text-[6rem] lp:mt-[5rem]
                lg:text-[6rem] lg:mt-[10rem]
            ">
                UX Case Studies:
            </h1>

            {/* Down arrow */}
            <div className="w-full flex flex-col items-center hover:cursor-hover">
                <Arrow 
                    className="hover:cursor-hover
                    sm:w-6 sm:mb-[1rem] sm:mt-[8rem]
                    md:w-10 md:mt-[12rem] md:mb-[25rem]
                    lp:w-12 lp:mt-[10rem]
                    lg:w-12 lg:mt-[18rem] lg:justify-center lg:text-center lg:items-center"
                    onClick={scrollToBcitCase}
                />
            </div>

            <p>
                This is a testing section.
            </p>

            <div id="bcit-section">
                <BcitCase />
            </div>
            
            <PuppyCase />
            <TysnCase />
            <Marketing />

            {/* Social component */}
            <div className="
                sm:mt-[-4rem]
                md:pt-[1rem] md:mr-[3rem]
                lp:ml-[35rem] lp:mt-[1rem]
                lg:ml-[40rem]
            ">
                <Social />
            </div>
        </div>
    );
}

export default Cases;
