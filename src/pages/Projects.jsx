import React from "react";

import Arrow from '../Components/ArrowSvg';
import Footer from "../Components/footer";
import Social from "../Components/social";
import Graphic from "../Components/GraphicDesign";
import PuppyProject from "../Components/puppyproject";
import BcitProject from "../Components/bcitproject";
import BoardProject from "../Components/boardproject";
import TysnProject from "../Components/tysnproject";
import OmuMockup from "../Components/omuproject";


const Projects = () => {
    return (
        <div >
            <div  />
                {/* page title */}
                <div>
                    <div>
                        <h1 className="
                        sm:text-8xl sm:mt-[15rem] sm:ml-[19rem]
                        md:text-7xl md:ml-[26rem] md:mt-[20rem] 
                        lg:text-[6rem] lg:absolute lg:ml-[42.5rem] lg:mt-[0rem] 
                        " 
                        >Projects:</h1>
                    </div>

                {/* the down arrow */}
                    <div>
                        <div>
                            <Arrow 
                            className="
                            sm:w-5 sm:mb-[20rem] sm:ml-[26rem] sm:pt-[15rem]
                            md:w-7 md:ml-[31rem] md:py-[10rem] md:pt-[20rem]
                            lg:w-8 lg:ml-[50rem] lg:py-[0rem] lg:pt-[20rem]
                            "/>
                        </div>
                    </div>
                </div>

                {/* The project section */}
                {/* I am importing them from the xxxproject.jsx files, which then the project information were imported in */}
                {/* graphic design, but this is volleyball poster */}
                <div>
                    <Graphic />
                </div>
                {/* this section is the UI/UX projects */}
                <div>
                    <PuppyProject />
                </div>
                <div>
                    <BcitProject />
                </div>
                <div>
                    <BoardProject />
                </div>
                <div>
                    <TysnProject />
                </div>
                <div>
                    <OmuMockup />
                </div>
                
                <div>
                    <div className="w-full 
                    sm:w-[80%] sm:max-w-[1200px] sm:mt-[8rem] sm:text-[5rem] sm:ml-[19rem]
                    md:ml-[33rem]
                    lg:mt-[230rem] lg:pb-[-20rem] lg:ml-[43rem]">
                        <Footer />
                    </div>
                    <div>
                        <Social />
                    </div>
                </div>

            </div>

    );
}

export default Projects;
