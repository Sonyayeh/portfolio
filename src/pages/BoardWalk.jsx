import React, { useEffect, useRef, useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import BoardDes from "../Components/BoardDes";
import BoardTimeLine from "../Components/BoardTimeline";
import BoardSoftware from "../Components/BoardIcon";
import BoardProcess from "../Components/boardProcess";
import BoardFig from "../Components/BoardFigma";
import Social from '../Components/social';
import { Link } from "react-router-dom";


const BoardWalk = () => {
    // Find the project by id from projectData
    const project = projectData.find((proj) => proj.id === 4);

    // State for the active tab
    const [activeTab, setActiveTab] = useState('ABOUT');

    useEffect(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }, []);

    // If project not found, return a message
    if (!project) {
        return <div>Project not found</div>;
    }

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className=" relative mt-[3rem] justify-center
            sm:mt-[10rem] sm:px-0 sm:mx-auto 
            md:mt-[1rem]">
            {/* Project Heading and Description */}
            <div className="text-start">
               <h1 className="flex justify-self-center text-purple-500 underline decoration-dashed justify-center
                sm:text-[2rem] sm:pb-[2rem] sm:mt-[-5rem] sm:w-[22rem] sm:text-center
                md:text-[4rem] md:pt-[10rem] md:w-[55rem]
                lp:text-[2.8rem] lp:w-[72rem] lp:justify-center lp:items-center lp:pt-[5rem]
                lg:text-[3rem] lg:w-[56rem] lg:mb-[3rem] lg:mt-[2rem]">
                    Boardwalk Project:
                </h1>
                    
                 <div className="w-full justify-self-center">
     <h1 className="flex justify-self-center underline decoration-dashed text-purple-400 text-center justify-center
                sm:text-[1.5rem] sm:pb-[2rem] sm:w-[22rem]
                md:text-[3.5rem] md:pt-[3rem] md:w-[55rem] 
                lp:text-[2.5rem] lp:w-[75rem] lp:justify-center lp:items-center lp:mt-[-3rem]
                lg:text-[3rem] lg:w-[16rem] lg:mb-[2rem]">
                    Overview:
                </h1>
                <div>
                  <BoardDes />
                </div>

                  {/* added a line for separate sections */}
                  <div className="border-t-2 border-orange-500 justify-self-center mt-[2rem]
               sm:w-[20rem]
               md:w-[50rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>

                {/* software used section */}
                <div>
                    <BoardSoftware />
                </div>

                  {/* added a line for separate sections */}
                  <div className="border-t-2 border-orange-500 justify-self-center mb-[2rem]
               sm:w-[20rem]
               md:w-[50rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>
                

                {/* timeline section */}
                <div className="pb-[2rem]">
                    <BoardTimeLine />
                </div>

                 {/* added a line for separate sections */}
                  <div className="border-t-2 border-orange-500 justify-self-center mb-[2rem]
               sm:w-[20rem]
               md:w-[50rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>

              {/* the design process section */}
              <div>
                <BoardProcess />
              </div>


                {/* added a line for separate sections */}
                  <div className="border-t-2 border-orange-500 justify-self-center mt-[2rem]
               sm:w-[20rem]
               md:w-[50rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>

                {/* Mockup section */}
                <div>
                    <BoardFig />
                </div>

                 {/* added a line for separate sections */}
                  <div className="border-t-2 border-orange-500 justify-self-center mt-[2rem]
               sm:w-[20rem]
               md:w-[50rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>

                <div className="flex l mt-8 
                               p:justify-between justify-self-center
                               sm:w-[22rem] sm:justify-between
                               md:justify-between md:w-[50rem]
                               lp:w-[63rem] lp:max-aut
                               lg:w-[75rem] lg:mx-auto lg:justify-between ">
                <Link 
                    to="/bcit" 
                    className="flex items-center text-purple-300 hover:text-orange-500 transition-colors duration-300"
                    onClick={() => window.scrollTo({ top: 0 })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <h3 className="ml-2 text-purple-400 hover:text-orange-500
                    sm:text-[1.5rem]
                    md:text-[2.5rem]
                    lp:text-[3rem]
                    lg:text-[3rem]">Back</h3>
                </Link>

                {/* Next Button */}
                <Link 
                    to="/bing" 
                    className="flex items-center text-purple-300 hover:text-orange-500 transition-colors duration-300"
                    onClick={() => window.scrollTo({ top: 0})}
                >
                     <h3 className="mr-3 text-purple-400 hover:text-orange-500 
                                        sm:text-[1.5rem]
                                         md:text-[2.5rem]
                                         lp:text-[3rem]
                                         lg:text-[3rem]">Next</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>

              

               </div>
               </div>
               </div>
    );
};

export default BoardWalk;