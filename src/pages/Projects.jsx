import React from "react";

import Arrow from '../Components/ArrowSvg';
import Footer from "./footer";
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
                        sm:w-[10rem] sm:ml-[20rem]
                        md:w-[15rem] md:ml-[35rem] md:mt-[-2rem]
                        lg:w-[20rem] lg:ml-[0rem] lg:mt-[12rem]
                        " 
                    />
                    </div>

                     {/* bubble */}
                    <div>
                        <div className="flex justify-between ">
                        <img src={Bubble} alt="Bubble gif" className=" 
                        sm:w-1/4 sm:h-1/4 sm:ml-[0rem] sm:mt-[10rem]
                        md:w-1/4 md:h-1/4 md:ml-[-7rem] md:mt-[10rem]
                        lg:w-2/4 lg:h-auto lg:ml-[50rem]
                        max-w-full
                        " />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between ">
                        <img src={Bubble} alt="Bubble gif" className=" 
                        sm:w-2/4 sm:h-1/4 sm:ml-[0rem] sm:mt-[-5rem]
                        md:w-1/4 md:h-1/4 md:ml-[-7rem] md:mt-[10rem]
                        lg:w-2/4 lg:h-auto lg:ml-[50rem]
                        max-w-full
                        " />
                        </div>
                    </div>

                    <div>
                        <h1 className="
                        sm:text-[4rem] sm:mt-[-20rem] sm:ml-[11rem]
                        md:text-[5rem] md:ml-[26rem] md:mt-[20rem] 
                        lg:text-[7rem] lg:absolute lg:ml-[42.5rem] lg:mt-[0rem] 
                        " 
                        >Projects:</h1>
                    </div>

                     


                {/* the down arrow */}
                    <div>
                        <div>
                            <Arrow 
                            className="
                            sm:w-6 sm:mb-[20rem] sm:ml-[15rem] sm:pt-[5rem]
                            md:w-10 md:ml-[31rem] md:py-[10rem] md:pt-[20rem]
                            lg:w-12 lg:ml-[50rem] lg:py-[0rem] lg:pt-[20rem]
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
