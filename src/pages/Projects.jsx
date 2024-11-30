import React from "react";

import Arrow from '../Components/ArrowSvg';
import Social from "../Components/social";
import Graphic from "../Components/GraphicDesign";
import PuppyProject from "../Components/puppyproject";
import BcitProject from "../Components/bcitproject";
import BoardProject from "../Components/boardproject";
import TysnProject from "../Components/tysnproject";
import OmuMockup from "../Components/omuproject";

import TwoClouds from '../assets/twoclouds.gif';
import Bubble from '../assets/singlebubble.gif';


const Projects = () => {
    return (
        <div >
            <div  />
                {/* page title */}
                <div>
                    {/* cloud gif */}
                 <div className="flex justify-between">
                    <img 
                        src={TwoClouds} 
                        alt="Cloud gif"
                        className="w-auto max-w-full
                        sm:w-[10rem] sm:ml-[10rem]
                        md:w-[15rem] md:ml-[35rem] md:mt-[-2rem]
                        lg:w-[20rem] lg:ml-[10rem] lg:mt-[12rem]
                        " 
                    />
                    </div>

                     {/* bubble */}
                    <div>
                        <div className="flex justify-between ">
                        <img src={Bubble} alt="Bubble gif" className=" 
                        sm:w-1/4 sm:h-1/4 sm:ml-[0rem] sm:mt-[10rem]
                        md:w-1/4 md:h-1/4 md:ml-[-2rem] md:mt-[10rem]
                        lg:w-1/4 lg:h-auto lg:ml-[70rem] lg:mt-[-18rem]
                        max-w-full
                        " />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between ">
                        <img src={Bubble} alt="Bubble gif" className=" 
                        sm:w-2/4 sm:h-1/4 sm:ml-[0rem] sm:mt-[-5rem]
                        md:w-2/4 md:h-1/4 md:ml-[-5rem] md:mt-[-5rem]
                        lg:w-1/5 lg:h-1/5 lg:ml-[80rem] lg:mt-[-25rem]
                        max-w-full
                        " />
                        </div>
                    </div>

                    <div>
                        <h1 className="
                        sm:text-[4rem] sm:mt-[-20rem] sm:ml-[6rem]
                        md:text-[6rem] md:ml-[21rem] md:mt-[-30rem] 
                        lg:text-[7rem] lg:absolute lg:ml-[40rem] lg:mt-[-20rem] 
                        " 
                        >Projects:</h1>
                    </div>

                     


                {/* the down arrow */}
                    <div>
                        <div>
                            <Arrow 
                            className="
                            sm:w-6 sm:mb-[20rem] sm:ml-[10rem] sm:pt-[5rem]
                            md:w-10 md:ml-[27rem] md:py-[10rem] md:pt-[20rem]
                            lg:w-12 lg:ml-[50rem] lg:py-[0rem] lg:pt-[5rem]
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
                   
                    <div>
                        <Social />
                    </div>
                </div>
            
            </div>

    );
}

export default Projects;
