import React, { useEffect, useRef, useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import SoftwareUsed from "./BeachIcons";
import BeachTime from "../Components/beachTimeline";
import BeachWorkSection from "../Components/BeachWorkSection";
import BeachMock from "../Components/BeachMock";
import Social from '../Components/social';

const Beachball = () => {
    // Find the project by id from projectData
    const project = projectData.find((proj) => proj.id === 1);

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
                <h1 className="pl-2 justify-center text-center text-blue-500 underline decoration-dashed
                sm:text-[2rem] sm:pb-[5rem] sm:mt-[-5rem] sm:w-[25rem]
                md:text-[3rem] md:ml-[0rem] md:pt-[10rem] md:w-[50rem]
                lp:text-[3.7rem] lp:w-[75rem] lp:justify-center lp:items-center
                lg:text-7xl lg:ml-[-28rem] lg:w-[120rem] lg:mb-[5rem] lg:mt-[2rem]">
                    Beach Volleyball Tournament Poster:
                </h1>
                <h1 className="pl-2 justify-center text-center underline decoration-dashed text-blue-400
                sm:text-[1.7rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-1
                md:text-5xl md:ml-[0rem] md:pt-[3rem] md:w-[50rem]
                lp:text-[4rem] lp:w-[75rem] lp:justify-center lp:items-center
                lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
                    Overview:
                </h1>
                <h3 className="pl-2 text-orange-500
                sm:text-[1rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-4
                md:text-5xl md:ml-[0rem] md:pt-[5rem] md:w-[50rem] md:mb-[2rem]
                lp:text-[2.5rem] lp:w-[75rem] lp:justify-center lp:items-center
                lg:text-7xl lg:ml-[-20rem] lg:w-[110rem] lg:mb-[5rem] lg:mt-[2rem]">
                The goal was to create a poster about a volleyball tournament. This project requires all the skillsets I have learned in MDIA 1160 and 2260, which are Adobe Illustrator 1 and 2. The main purpose is to make sure students understand course material and the software completely, and able to work under pressure effectively. The volleyball tournament poster project is to create a promotional poster about an upcoming volleyball match in the Town of Shelbyville. 
                
                {/* All the elements on the poster were to be created only with Adobe Illustrator. Other than Adobe Illustrator, I also used Procreate for sketches and took reference images downloaded from Adobe Stock Image */}
                </h3>
                 {/* added a line for separate sections */}
               <div className="border-t-2 border-blue-500 
               sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem]
               md:w-[40rem] md:ml-[4rem]
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem]
               "></div>

                {/* software used section */}
                <div className="pb-[2rem]">
                    <SoftwareUsed />
                </div>

                 {/* added a line for separate sections */}
                 <div className="border-t-2 border-blue-500 
               sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem]
               md:w-[40rem] md:ml-[4rem]
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem]
               "></div>
                

                {/* timeline section */}
                <div>
                <BeachTime />
               </div>

                {/* added a line for separate sections */}
               <div className="border-t-2 border-blue-500 my-10 
               sm:w-[20rem] sm:ml-[3rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem] lg:pb-[5rem] lg:mt-[6rem]
               "></div>

                {/* work section Section */}
                <div>
                <BeachWorkSection />
                </div>

                {/* added a line for separate sections */}
                <div className="border-t-2 border-blue-500 my-10 
               sm:w-[20rem] sm:ml-[3rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem] lg:mb-[8rem]
               "></div>

                {/* Mockup section */}
                <div>
                    <BeachMock />
                </div>

                {/* added a line for separate sections */}
                <div className="border-t-2 border-blue-500 my-10 
               sm:w-[20rem] sm:ml-[3rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem]
               "></div>

               </div>
               <div className=" w-full flex flex-col justify-center items-center
               sm:ml-[7rem]
               md:ml-[18rem]
               lp:ml-[40rem]
               ">
                <Social />
               </div>
               </div>
    );
};

export default Beachball;