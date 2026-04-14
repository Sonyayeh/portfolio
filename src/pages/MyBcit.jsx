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
                <h1 className="pl-2 justify-center text-center text-purple-500 underline decoration-dashed
                sm:text-[2rem] sm:pb-[3rem] sm:mt-[-5rem] sm:w-[20rem] sm:ml-[3rem]
                md:text-[3.5rem] md:ml-[2rem] md:pt-[10rem] md:w-[50rem]
                lp:text-[3.7rem] lp:w-[35rem] lp:justify-center lp:items-center lp:ml-[18rem]
                lg:text-[6rem] lg:ml-[-28rem] lg:w-[120rem] lg:mb-[5rem] lg:mt-[2rem]">
                    MyBCIT Redesign:
                </h1>
               <BcitDes />
                 {/* added a line for separate sections */}
               <div className="border-t-2 border-orange-500 
               sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem]
               md:w-[50rem] md:ml-[3rem]
               lp:w-[75rem] lp:ml-[-1.5rem]
               lg:w-[110rem] lg:ml-[-23rem]
               "></div>

                {/* software used section */}
                <div className="pb-[2rem]">
                    <BcitSoftware />
                </div>

                 {/* added a line for separate sections */}
                                <div className="border-t-2 border-orange-500 
               sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem]
               md:w-[50rem] md:ml-[3rem]
               lp:w-[75rem] lp:ml-[-1.5rem]
               lg:w-[110rem] lg:ml-[-23rem]
               "></div>

              <BcitTimeline />

                {/* timeline section */}
                <div>
                {/* <BcitTimeLine /> */}
               </div>

                {/* added a line for separate sections */}
                <div className="border-t-2 border-orange-500 
               sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem] sm:mt-[3rem]
               md:w-[50rem] md:ml-[3rem]
               lp:w-[75rem] lp:ml-[-1.5rem] lp:mt-[5rem]
               lg:w-[110rem] lg:ml-[-23rem] lg:mt-[5rem]
               "></div>

                {/* work section Section */}
                {/* the working process */}
                <div>
                    <BcitJourney />
                </div>
                
                {/* added a line for separate sections */}
                <div className="border-t-2 border-orange-500 
               sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem] sm:mt-[3rem]
               md:w-[50rem] md:ml-[3rem]
               lp:w-[75rem] lp:ml-[-1.5rem] lp:mt-[5rem]
               lg:w-[110rem] lg:ml-[-23rem] lg:mt-[5rem]
               "></div>


                {/* design process */}
                <div>
                    <BcitProcess />
               </div>


                {/* Mockup section */}
                <div>
                    <BcitiFig />
                </div>

                

                {/* added a line for separate sections */}
               <div className="border-t-2 border-orange-500 
               sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem] sm:mt-[3rem]
               md:w-[50rem] md:ml-[3rem]
               lp:w-[75rem] lp:ml-[-1.5rem] lp:mt-[5rem]
               lg:w-[110rem] lg:ml-[-23rem] lg:mt-[5rem]
               "></div>

               <div className="flex l mt-8 
                               p:justify-between
                               sm:w-[25rem] sm:justify-between sm:ml-[0.6rem]
                               md:justify-between md:w-[50rem] md:ml-[-1rem]
                               lp:w-[63rem] lp:ml-[5rem] lp:max-aut
                               lg:w-[90rem] lg:ml-[-11rem] lg:mx-auto lg:justify-between ">
                   
                                 {/* Back Button */}
                                 <Link 
                                     to="/magazine" 
                                     className="flex items-center text-purple-300 hover:text-orange-500 transition-colors duration-300"
                                     onClick={() => window.scrollTo({ top: 0 })}
                                 >
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                                         className="w-8 h-8 lg:w-16 lg:h-16">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                     </svg>
                                     <h3 className="ml-2 text-purple-400 hover:text-orange-500 
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
                                     className="flex items-center text-purple-300 hover:text-orange-500 transition-colors duration-300"
                                     onClick={() => window.scrollTo({ top: 0 })}
                                 >
                                     <h3 className="mr-3 text-purple-400 hover:text-orange-500 
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
               <div className=" w-full flex flex-col justify-center items-center
               sm:ml-[7rem]
               md:ml-[18rem]
               lp:ml-[42rem]
               ">
                <Social />
               </div>
               </div>
    );
};

export default MyBcit;