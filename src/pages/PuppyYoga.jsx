import React, { useEffect, useRef, useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import PuppySoft from "../Components/PuppyIcon";
import PuppyTimeLine from "../Components/PuppyTimeLine";
import PuppyProcess from "../Components/PuppyProcess";
import BingFig from "../Components/BingFigma";
import Social from '../Components/social';
import { Link } from "react-router-dom";

const PuppyYoga = () => {
    // Find the project by id from projectData
    const project = projectData.find((proj) => proj.id === 4);

    // State for the active tab
    const [activeTab, setActiveTab] = useState('ABOUT');

    // If project not found, return a message
    if (!project) {
        return <div>Project not found</div>;
    }

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-[12rem] relative mt-[30rem] 
        sm:ml-[-1rem] sm:mt-[10rem] sm:px-0 sm:mx-auto 
        md:ml-[3rem] md:mt-[1rem]
        lg:pl-[4rem] lg:pr-[4rem]">
            {/* Project Heading and Description */}
            <div className="text-start w-[12rem]">
                <h1 className="justify-center text-center text-purple-500 underline decoration-dashed
                sm:text-[2rem] sm:pb-[5rem] sm:mt-[-5rem] sm:w-[25rem] sm:justify-center sm:items-center sm:text-center
                md:text-[3rem] md:ml-[0rem] md:pt-[10rem] md:w-[50rem]
                lp:text-[3.7rem] lp:w-[75rem] lp:justify-center lp:items-center
                lg:text-7xl lg:ml-[-28rem] lg:w-[120rem] lg:mb-[5rem] lg:mt-[2rem]">
                    Puppy Yoga Studio: Furrever Pals
                </h1>
                <h1 className="justify-center text-center underline decoration-dashed text-purple-400
                sm:text-[1.7rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-1
                md:text-5xl md:pt-[3rem] md:w-[50rem] md:justify-center md:text-center md:items-center
                lp:text-[4rem] lp:w-[75rem] lp:justify-center lp:items-center
                lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
                    Overview:
                </h1>
                <h3 className="text-emerald-500
                sm:text-[1rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-4
                md:text-5xl md:pt-[3rem] md:w-[50rem] md:justify-center md:items-center md:pb-[2rem]
                lp:text-[2.5rem] lp:w-[75rem] lp:justify-center lp:items-center leading-relax
                lg:text-[2.5rem] lg:ml-[-20rem] lg:w-[110rem] lg:mb-[5rem] lg:mt-[2rem] lg:leading-[5.5rem]">
              Furrever Pals is a complete brand and digital service that addresses mental health and community isolation in Vancouver through purposeful design. The project spans comprehensive brand identity, thoughtful UX design, and full-stack web development, creating an accessible wellness experience where users engage with adoptable dogs from local shelters, merging personal wellbeing with animal welfare impact.
                </h3>
                 {/* added a line for separate sections */}
               <div className="border-t-2 border-purple-500 
               sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem]
               md:w-[40rem] md:ml-[4rem]
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-20rem]
               "></div>

                {/* software used section */}
                <div className="pb-[2rem]">
                    <PuppySoft />
                </div>

                 {/* added a line for separate sections */}
                 <div className="border-t-2 border-purple-500 
               sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem]
               md:w-[40rem] md:ml-[4rem]
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem]
               "></div>
                

                {/* timeline section */}
                <div>
                <PuppyTimeLine />
               </div>

                {/* added a line for separate sections */}
                <div className="border-t-2 border-purple-500 my-10 
               sm:w-[20rem] sm:ml-[3rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem] lg:mb-[8rem]
               "></div>

               {/* process area */}
               <div>
                <PuppyProcess />
               </div>

                  {/* added a line for separate sections */}
                  <div className="border-t-2 border-purple-500 my-10 
               sm:w-[20rem] sm:ml-[3rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem] lg:mb-[8rem]
               "></div>

                {/* Mockup section */}
                <div>
                    <BingFig />
                </div>

                {/* added a line for separate sections */}
                <div className="border-t-2 border-purple-500 my-10 
               sm:w-[20rem] sm:ml-[3rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem]
               "></div>

                <div className="flex l mt-8 
                               p:justify-between
                               sm:w-[25rem] sm:justify-between sm:ml-[0.6rem]
                               md:justify-between md:w-[50rem] md:ml-[-1rem]
                               lp:w-[63rem] lp:ml-[5rem] lp:max-aut
                               lg:w-[90rem] lg:ml-[-11rem] lg:mx-auto lg:justify-between ">
                <Link 
                    to="/bcit" 
                    className="flex items-center text-purple-300 hover:text-emerald-500 transition-colors duration-300"
                    onClick={() => window.scrollTo({ top: 0 })}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <h3 className="ml-2 text-purple-400 hover:text-purple-500
                    sm:text-[1.5rem]
                    md:text-[2.5rem]
                    lp:text-[3rem]
                    lg:text-[4rem]">Back</h3>
                </Link>

                {/* Next Button */}
                <Link 
                    to="/beachball" 
                    className="flex items-center text-purple-300 hover:text-emerald-500 transition-colors duration-300"
                    onClick={() => window.scrollTo({ top: 0})}
                >
                    <h3 className="mr-3 text-purple-400 hover:text-purple-500 sm:text-[1.5rem]
                                         md:text-[2.5rem]
                                         lp:text-[3rem]
                                         lg:text-[4rem]">Next</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
               </div>
               </div>
    );
};

export default PuppyYoga;