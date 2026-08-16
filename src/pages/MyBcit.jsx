import React, { useEffect, useRef, useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import BcitDes from "../Components/BcitDes";
import BcitTimeline from "../Components/BcitTimeline";
import BcitSoftware from "../Components/BcitIcon";
import BcitProcess from "../Components/bcitProcess";
import BcitJourney from "../Components/BcitJourney";
import BcitiFig from "../Components/BcitiFigma";
import Social from '../Components/social';
import { Link } from "react-router-dom";



const MyBcit = () => {
    // Find the project by id from projectData
    const project = projectData.find((proj) => proj.id === 1);

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
        <div className="relative mt-[3rem] justify-center
        sm:mt-[10rem] sm:px-0 sm:mx-auto 
        md:mt-[1rem]
        lg:pl-[4rem] lg:pr-[4rem]">
            {/* Project Heading and Description */}
            <div className="text-start ">
              <h1 className="flex justify-self-center justify-center text-blue-400 underline decoration-dashed
                sm:text-[1.7rem] sm:w-[23rem]
                md:text-[3rem] md:w-[49rem]
                lp:text-[4rem] lp:w-[60rem] lp:items-center
                lg:text-[3.5rem] lg:w-[60rem]lg:mt-[2rem]">
                    MyBCIT Redesign:
                </h1>
                <h1 className="flex justify-self-center justify-center text-blue-400 underline decoration-dashed
                sm:text-[1.7rem] sm:w-[23rem]
                md:text-[3rem] md:w-[49rem]
                lp:text-[3rem] lp:w-[60rem] lp:items-center lp:pb-[2rem]
                lg:text-[3.5rem] lg:w-[60rem]lg:mt-[2rem]">
                    Overview:
                </h1>
               <BcitDes />
                 {/* added a line for separate sections */}
               <div className="border-t-2 border-orange-500 justify-self-center
                sm:w-[22rem]
               md:w-[45rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>


                {/* software used section */}
                <div className="pt-[2rem] pb-[2rem]">
                    <BcitSoftware />
                </div>

                 {/* added a line for separate sections */}
                                <div className="border-t-2 border-orange-500 justify-self-center
                sm:w-[22rem]
               md:w-[45rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>
               
                {/* timeline section */}
                <div className="pb-[2rem] pt-[2rem]">
                    <BcitTimeline />
                </div>

                {/* added a line for separate sections */}
                  <div className="border-t-2 border-orange-500 justify-self-center
                sm:w-[22rem]
               md:w-[45rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>


                {/* work section Section */}
                {/* the working process */}
                <div className="pb-[2rem] pt-[2rem]">
                    <BcitJourney />
                </div>
                
                {/* added a line for separate sections */}
                  <div className="border-t-2 border-orange-500 justify-self-center
                sm:w-[22rem]
               md:w-[45rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>



                {/* design process */}
                <div className="pb-[2rem] pt-[2rem]">
                    <BcitProcess />
               </div>


               {/* added a line for separate sections */}
                <div className="border-t-2 border-orange-500 justify-self-center
               sm:w-[20rem]
               md:w-[50rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>

                {/* Mockup section */}
                <div className="pb-[2rem]">
                    <BcitiFig />
                </div>

                

                {/* added a line for separate sections */}
                 <div className="border-t-2 border-orange-500 justify-self-center
                sm:w-[22rem]
               md:w-[45rem] 
               lp:w-[65rem]
               lg:w-[80rem] lg:mt-[5rem]
               "></div>


              <div className="flex mt-8 justify-self-center
                               p:justify-between
                                sm:w-[22rem] sm:justify-between
                               md:justify-between md:w-[48rem] 
                               lp:w-[63rem] lp:max-aut
                                lg:w-[70rem] lg:mx-auto lg:justify-between ">
                   
                                 {/* Back Button */}
                                 <Link 
                                     to="/magazine" 
                                     className="flex items-center text-orange-300 hover:text-orange-500 transition-colors duration-300"
                                     onClick={() => window.scrollTo({ top: 0 })}
                                 >
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                                         className="w-8 h-8 lg:w-16 lg:h-16">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                     </svg>
                                     <h3 className="ml-2 text-orange-400 hover:text-orange-500 
                                         sm:text-[1.5rem]
                                         md:text-[2.5rem]
                                         lp:text-[3rem]
                                         lg:text-[4rem]">
                                         Back
                                     </h3>
                                 </Link>
               
                                 {/* Next Button */}
                                 <Link 
                                     to="/boardwalk" 
                                     className="flex items-center text-orange-300 hover:text-orange-500 transition-colors duration-300"
                                     onClick={() => window.scrollTo({ top: 0 })}
                                 >
                                     <h3 className="mr-3 text-orange-400 hover:text-orange-500 
                                         sm:text-[1.5rem]
                                         md:text-[2.5rem]
                                         lp:text-[3rem]
                                         lg:text-[4rem]">
                                         Next
                                     </h3>
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                                         className="w-8 h-8 lg:w-16 lg:h-16">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                     </svg>
                                 </Link>
               
                             </div>

               </div>
               
               </div>
    );
};

export default MyBcit;