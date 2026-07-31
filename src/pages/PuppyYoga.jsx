import React, { useEffect, useRef, useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import PuppySoft from "../Components/PuppyIcon";
import PuppyTimeLine from "../Components/PuppyTimeLine";
import PuppyProcess from "../Components/PuppyProcess";
import PuppyWorkSection from "../Components/PuppyWorkSection";
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
        <div className=" relative mt-[30rem] justify-center
         sm:mt-[10rem] sm:px-0 sm:mx-auto 
        md:ml-[3rem] md:mt-[1rem]">
            {/* Project Heading and Description */}
            <div className="text-start ">
                <h1 className="flex justify-center text-purple-500 underline decoration-dashed
                sm:text-[2rem] sm:pb-[2rem] sm:mt-[-5rem] sm:w-[23rem] sm:justify-center sm:items-center sm:text-center
                md:text-[4rem] md:pt-[10rem] md:w-[55rem]
                lp:text-[3.7rem] lp:w-[72rem] lp:justify-center lp:items-center
                lg:text-[3.5rem] lg:w-[70rem] lg:leading-[8rem]">
                    Puppy Yoga Studio: Furrever Pals
                </h1>
                <h1 className="flex justify-center underline decoration-dashed text-purple-400
                sm:text-[1.5rem] sm:pb-[2rem] sm:w-[23rem] 
                md:text-[3.5rem] md:pt-[3rem] md:w-[55rem] 
                lp:text-[4rem] lp:w-[75rem] lp:justify-center lp:items-center
                lg:text-[2rem] lg:w-[70rem] lg:mt-[2rem]">
                    Overview:
                </h1>
                <div className="flex  text-center">
              <h3 className="text-orange-500 text-left justify-center
                sm:text-[1rem] sm:pb-[1rem] sm:w-[25rem]
                md:text-[2rem] md:w-full md:pb-[2rem]
                lp:text-[2.5rem] lp:w-[73rem] lp:leading-[3.5rem] lp:pb-[4rem]
                lg:text-[2rem] lg:w-[75rem] lg:mt-[2rem] lg:leading-[5rem]">
              Furrever Pals is a complete brand and digital service that addresses mental health and community isolation in Vancouver through purposeful design. The project spans comprehensive brand identity, thoughtful UX design, and full-stack web development, creating an accessible wellness experience where users engage with adoptable dogs from local shelters, merging personal wellbeing with animal welfare impact.
                </h3>
                </div>
                  <div className="flex justify-center w-full">
                    <a href="https://sonyayeh.ca/furreverpals" target="_blank" rel="noopener noreferrer">
                      <button className="font-Dos text-purple-500 border border-purple-400 hover:bg-purple-400 hover:text-white transition-colors duration-300 underline decoration-dashed
                        sm:text-[1rem] sm:px-[1.5rem] sm:py-[0.5rem]
                        md:text-[1.5rem] md:px-[2rem] md:py-[0.8rem]
                        lp:text-[2rem] lp:px-[2rem] lp:py-[1rem]
                        lg:text-[2rem] lg:px-[3rem] lg:py-[1rem]">
                        View Live Site
                      </button>
                    </a>
                  </div>

                 {/* added a line for separate sections */}
               <div className="border-t-2 border-purple-500 mx-auto justify-center items-center
                    sm:w-[24rem] sm:pb-[2rem] sm:mt-[3rem]
                    md:w-[50rem]
                    lp:w-[60rem] lp:mt-[5rem]
                    lg:w-[75rem] lg:mt-[5rem]"
                    ></div>

                {/* software used section */}
                <div className="pb-[2rem]">
                    <PuppySoft />
                </div>

                 {/* added a line for separate sections */}
               <div className="border-t-2 border-purple-500 mx-auto justify-center items-center
                    sm:w-[24rem] sm:pb-[2rem] sm:mt-[3rem]
                    md:w-[50rem]
                    lp:w-[60rem] lp:mt-[5rem]
                    lg:w-[75rem] lg:mt-[5rem]"
                    ></div>
                

                {/* timeline section */}
                <div>
                <PuppyTimeLine />
               </div>

                {/* added a line for separate sections */}
                <div className="border-t-2 border-purple-500 mx-auto justify-center items-center
                    sm:w-[24rem] sm:pb-[2rem] sm:mt-[3rem]
                    md:w-[50rem]
                    lp:w-[60rem] lp:mt-[5rem]
                    lg:w-[75rem] lg:mt-[5rem]"
                    ></div>
               {/* process area */}
               <div>
                <h1 className="flex justify-self-center text-purple-400 underline decoration-dashed
                sm:text-[1.7rem] sm:pb-[1rem] sm:w-[17rem]
                md:text-[3rem] md:pt-[1rem] md:w-[55rem]
                lp:text-[4rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[5rem]
                lg:text-[3.5rem] lg:w-[60rem]  lg:mt-[2rem]">
                Design Rationale:
                 </h1>
                <PuppyProcess />
               </div>

                  {/* added a line for separate sections */}
                 <div className="border-t-2 border-purple-500 mx-auto justify-center items-center
                    sm:w-[24rem] sm:pb-[2rem] sm:mt-[3rem]
                    md:w-[50rem]
                    lp:w-[60rem] lp:mt-[5rem]
                    lg:w-[75rem] lg:mt-[5rem]"
                    ></div>

                {/* Mockup section */}
                <div>
                    <PuppyWorkSection />
                </div>

                {/* added a line for separate sections */}
                <div className="border-t-2 border-purple-500 mx-auto justify-center items-center
                    sm:w-[24rem] sm:pb-[2rem] sm:mt-[3rem]
                    md:w-[50rem]
                    lp:w-[60rem] lp:mt-[5rem]
                    lg:w-[75rem] lg:mt-[5rem]"
                    ></div>

                <div className="flex l mt-8 
                               p:justify-between
                               sm:w-[25rem] sm:justify-between sm:ml-[0.6rem]
                               md:justify-between md:w-[50rem] md:ml-[-1rem]
                               lp:w-[63rem] lp:ml-[5rem] lp:max-aut
                                lg:w-[70rem] lg:mx-auto lg:justify-between ">
                <Link 
                    to="/bcit" 
                    className="flex items-center text-purple-300 hover:text-orange-500 transition-colors duration-300"
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
                    className="flex items-center text-purple-300 hover:text-orange-500 transition-colors duration-300"
                    onClick={() => window.scrollTo({ top: 0})}
                >
                    <h3 className="mr-3 text-purple-400 hover:text-purple-500 
                                        sm:text-[1.5rem]
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