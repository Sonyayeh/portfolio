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
                            lg:w-[30rem] lg:ml-[-10rem] lg:mt-[12rem]
                            lp:w-[20rem] lp:ml-[55rem] 
                            " 
                        />
                    </div>

                    {/* bubble gifs, same as the other pages but the numbers and positions are different */}
                    <div>
                        <div className="flex justify-between">
                            <img loading="lazy" src={Bubble} alt="Bubble gif" className=" 
                            sm:w-1/4 sm:h-1/4 sm:ml-[0rem] sm:mt-[10rem]
                            md:w-1/4 md:h-1/4 md:ml-[-2rem] md:mt-[10rem]
                            lp:w-[20%] lp:h-1/4 lp:ml-[10rem] lp:mt-[5rem]
                            lg:w-2/4 lg:h-auto lg:ml-[50rem] lg:mt-[-10rem]
                            max-w-full
                            " />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <img loading="lazy" src={Bubble} alt="Bubble gif" className=" 
                            sm:w-2/4 sm:h-1/4 sm:ml-[0rem] sm:mt-[-5rem]
                            md:w-2/4 md:h-1/4 md:ml-[-5rem] md:mt-[-5rem]
                            lp:w-[30%] lp:h-1/4 lp:ml-[-5rem] lp:mt-[-25rem]
                            lg:w-1/5 lg:h-1/5 lg:ml-[80rem] lg:mt-[-10rem]
                            max-w-full
                            " />
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center justify-self-center ">
                        <h1 className="
                        sm:text-[3rem] sm:mt-[-15rem] 
                        md:text-[6rem] 
                        lp:text-[5rem] lp:mt-[-20rem] lp:justify-center lp:items-center
                        lg:text-[7rem] lg:justify-center lg:text-center lg:items-center lg:ml-[4rem] lg:mt-[-45rem] 
                        " 
                        >Projects:</h1>
                    </div>

                    {/* the down arrow */}
                    <div>
                        <div className="w-full flex flex-col items-center hover:cursor-hover">
                            <Arrow 
                            className=" hover:cursor-hover
                            sm:w-6 sm:mb-[5rem] 
                            md:w-10 md:py-[5rem]
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