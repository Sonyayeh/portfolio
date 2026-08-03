import React from "react";
import Arrow from '../Components/ArrowSvg';
import Social from "../Components/social";
import Graphic from "../Components/GraphicDesign";
import Magazine from "../Components/MagazineProject";
import PuppyProject from "../Components/puppyproject";
import BcitProject from "../Components/bcitproject";
import BoardProject from "../Components/boardproject";
import Bing from "../Components/BingProject";
import TwoClouds from '../assets/twoclouds.gif';
import Bubble from '../assets/singlebubble.gif';

const Projects = () => {
    const scrollToUiux = () => {
        document.getElementById('uiux-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <div />
                {/* page title */}
                <div>
                    {/* cloud gif */}
                    <div className="flex justify-between">
                        <img loading="lazy" 
                            src={TwoClouds} 
                            alt="Cloud gif"
                            className="w-auto max-w-full
                            sm:w-[10rem] sm:ml-[12rem]
                            md:w-[15rem] md:ml-[35rem] md:mt-[-2rem]
                            lg:w-[20rem] lg:ml-[-10rem] lg:mt-[10rem]
                            lp:w-[20rem] lp:ml-[55rem] 
                            " 
                        />
                    </div>

                    {/* bubble gifs, same as the other pages but the numbers and positions are different */}
                    <div className="relative
                        sm:h-[500px]
                        md:h-[400px]
                        lp:h-[500px]
                        lg:h-[600px]
                        ">
                        {/* First bubble */}
                        <img 
                            loading="lazy" 
                            src={Bubble} 
                            alt="Bubble gif" 
                            className="w-1/4 h-1/4 max-w-full
                            sm:translate-y-[7rem] sm:translate-x-[3rem] sm:w-[170px]
                            md:translate-y-[10rem] md:translate-x-[-1rem] md:w-[20%] md:h-[27%]
                            lp:translate-y-[5rem]
                            lg:translate-y-[-12rem]
                            " 
                            />
                        
                        {/* Second bubble */}
                        <img 
                            loading="lazy" 
                            src={Bubble} 
                            alt="Bubble gif" 
                            className="absolute w-2/4 h-1/4 max-w-full
                            sm:left-[0rem] sm:top-[10rem]
                            md:left-[-2rem] md:top-[-5rem] md:w-[50%] md:h-[70%]
                            lp:left-[-5rem] lp:top-[-25rem]
                            lg:left-[80rem] lg:top-[-2rem]
                            " 
                        />
                        
                        {/* Your actual content (Projects heading, etc.) */}
                        {/* This stays in normal flow and won't be affected by the bubbles */}
                        </div>

                    <div className="
                            sm:w-[15rem] sm:justify-self-center sm:text-center
                            md:w-[62rem] md:justify-self-center
                            lp:w-[30rem] lp:justify-self-center
                            lg:justify-self-center">
                            <h1 className="flex flex-col relative text-2xl mx-auto
                                sm:text-[2rem] sm:mt-[-27rem] sm:pb-[10rem] sm:w-[15rem]
                                md:text-[5rem] md:w-[35rem] md:pb-[15rem] md:mt-[-10rem]
                                lp:text-[4rem] lp:mt-[-20rem] lp:w-[20rem]
                                lg:text-[4rem] lg:w-[20rem] lg:mt-[-30rem]
                                " 
                            >Projects:</h1>
                            </div>

                    {/* the down arrow */}
                    <div>
                        <div className="w-full flex flex-col items-center 
                        md:justify-self-center md:align-center
                        hover:cursor-hover">
                            <Arrow 
                            className=" hover:cursor-hover
                            sm:w-6 sm:mb-[1rem] 
                            md:w-10
                            lp:w-12  lp:py-[0rem] lp:mt-[-1rem]
                            lg:w-12 lg:justify-center lg:text-center lg:items-center lg:py-[0rem] lg:pt-[20rem]
                            " 
                            onClick={scrollToUiux}
                            />
                        </div>
                    </div>
                </div>

                {/* The project section */}
                {/* I am importing them from the xxxproject.jsx files, which then the project information were imported in */}
                 <div id="uiux-section">
                    <PuppyProject />
                </div>
                <div>
                    <BcitProject />
                </div>
                <div>
                    <BoardProject />
                </div>
                <div>
                    <Bing />
                </div>
                {/* graphic design, but this is volleyball poster */}
                <div>
                    <Graphic />
                </div>
                {/* this section is the UI/UX projects */}
                <div>
                    <Magazine />
                </div>
                
                
            
            </div>
    );
}

export default Projects;