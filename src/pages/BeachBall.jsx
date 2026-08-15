import React, { useState, useEffect } from "react";
import projectData from "../data/project.json";
import SoftwareUsed from "../Components/BeachIcons";
import BeachPSO from "../Components/BeachProblemSolutionOutcome";
import BeachWorkSection from "../Components/BeachWorkSection";
import BeachMock from "../Components/BeachMock";
import BeachDes from "../Components/BeachDes";
import BeachTimeline from "../Components/BeachTimeLine";
import Social from "../Components/social";
import { Link } from "react-router-dom";

const Beachball = () => {

  const project = projectData.find((proj) => proj.id === 1);
  const [activeTab, setActiveTab] = useState("ABOUT");

  useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
   <div className="w-full relative 
    sm:mt-[3rem] sm:px-0 sm:mx-auto 
    md:mt-[1rem]
    lg:pr-[4rem]">

  <div className="text-start w-full">

        {/* Project Heading and Description */}
            <div className="text-start">
                <h1 className="flex justify-self-center underline decoration-dashed text-blue-400 text-center justify-center
          sm:text-[2rem] sm:pb-[1rem] sm:w-[21rem] 
          md:text-[4rem] md:w-[45rem] md:mx-auto md:pt-[5rem]
          lp:text-[4rem] lp:w-[40rem]
          lg:text-[5rem] lg:w-[61rem] lg:pb-[2rem]">
          Beach Volleyball Tournament Poster:
        </h1>

       

        {/* TEXT */}
        
       <BeachDes />

        {/* divider */}
        <div className="border-t-2 border-blue-500 justify-self-center
        sm:w-[20rem] 
        md:w-[40rem] 
        lp:w-[65rem] 
        lg:w-[110rem]"></div>

        {/* SOFTWARE */}
        <SoftwareUsed />

        {/* divider */}
       <div className="border-t-2 border-blue-500 justify-self-center
        sm:w-[20rem] 
        md:w-[40rem] 
        lp:w-[65rem] 
        lg:w-[110rem]"></div>

        {/* TIMELINE COMPONENT */}
        <BeachTimeline />

        {/* divider */} 
        <div className="border-t-2 border-blue-500 justify-self-center
        sm:w-[20rem] 
        md:w-[40rem] 
        lp:w-[65rem] 
        lg:w-[110rem]"></div>

        {/* PROBLEM SOLUTION OUTCOME */}
        <div>
            <BeachPSO />
        </div>

         {/* divider */}
        <div className="border-t-2 border-blue-500 justify-self-center
        sm:w-[20rem] 
        md:w-[40rem] 
        lp:w-[65rem] 
        lg:w-[110rem]"></div>

        {/* WORK PROCESS */}
        <div className="pb-[3rem]">
        <BeachWorkSection />
        </div>

         {/* divider */}
        <div className="border-t-2 border-blue-500 justify-self-center
        sm:w-[20rem] sm:pb-[2rem]
        md:w-[40rem] 
        lp:w-[65rem] 
        lg:w-[110rem]"></div>

       
        {/* MOCKUP */}
        <div className="pb-[3rem]">
        <BeachMock />
        </div>

        {/* divider */}
        <div className="border-t-2 border-blue-500 justify-self-center
        sm:w-[20rem] 
        md:w-[40rem] 
        lp:w-[65rem] 
        lg:w-[110rem]"></div>

         <div className="flex l mt-8 
                                      p:justify-between justify-self-center
                                      sm:w-[22rem] sm:justify-between
                                      md:justify-between md:w-[50rem]
                                      lp:w-[63rem] lp:max-aut
                                      lg:w-[90rem] lg:mx-auto lg:justify-between ">
                          
                                        {/* Back Button */}
                                        <Link 
                                            to="/boardwalk" 
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
                                            to="/magazine" 
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
      </div>


    </div>
  );
};

export default Beachball;

