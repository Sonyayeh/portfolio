// this page has a lot of things, please bare with me
// all you need to know is that every project containers are the same
// but with differnt color coordination
// I have every projects made into components and the imported
// into this file
// this was a last minute decision, so I dont know if it was properly
// made, but at least something's there

// I will make a comment in GraphicDesign.jsx because the others are mostly the same
// just the positioning and numbers are slightly differnt because there are slightly bigger images
import React from "react";

import Arrow from '../Components/ArrowSvg';
import Social from "../Components/social";
// here are the project sections
import Graphic from "../Components/GraphicDesign";
import PuppyProject from "../Components/puppyproject";
import BcitProject from "../Components/bcitproject";
import BoardProject from "../Components/boardproject";
import TysnProject from "../Components/tysnproject";
import OmuMockup from "../Components/omuproject";
// and ofc here are the gifs, i think i forgot to add them in about me page
// that was my mistake
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

                     {/* bubbl gifs, same as the other pages but the numbers and positions are differnt */}
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
                {/* I named this one the OmuMockup instead of OmuProject because I didn't have my
                old files sorted, that's why it's called a different name */}
                <div>
                    <OmuMockup />
                </div>
                
                <div>
                   
                   {/* no position adjustments for medium and large screens */}
                    <div className="
                    sm:pt-[2rem]
                    ">
                        <Social />
                    </div>
                </div>
            
            </div>

    );
}

export default Projects;
