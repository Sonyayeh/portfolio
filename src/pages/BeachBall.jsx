import React, { useState } from "react";
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

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-[12rem] relative mt-[30rem] 
    sm:ml-[-1rem] sm:mt-[10rem] sm:px-0 sm:mx-auto 
    md:ml-[3rem] md:mt-[1rem]
    lg:pl-[4rem] lg:pr-[4rem]">

      <div className="text-start w-[12rem]">

        {/* TITLE */}
        <h1 className="pl-2 justify-center text-center text-blue-500 underline decoration-dashed
        sm:text-[2rem] sm:pb-[5rem] sm:mt-[-5rem] sm:w-[25rem]
        md:text-[2.5rem] md:w-[51rem] md:pt-[8rem] md:ml-[1rem]
        lp:text-[3.5rem] lp:w-[74rem] lp:ml-[-1rem]
        lg:text-7xl lg:ml-[-28rem] lg:w-[120rem] lg:mt-6">
          Beach Volleyball Tournament Poster:
        </h1>

       

        {/* TEXT */}
        
       <BeachDes />

        {/* divider */}
        <div className="border-t-2 border-blue-500 
        sm:w-[20rem] sm:ml-[3rem]
        md:w-[40rem] md:ml-[7rem]
        lp:w-[65rem] lp:ml-[3rem]
        lg:w-[100rem] lg:ml-[-16rem]"></div>

        {/* SOFTWARE */}
        <SoftwareUsed />

        {/* divider */}
        <div className="border-t-2 border-blue-500 
        sm:w-[20rem] sm:ml-[3rem]
        md:w-[40rem] md:ml-[7rem]
        lp:w-[65rem] lp:ml-[3rem]
        lg:w-[100rem] lg:ml-[-16rem]"></div>

        {/* TIMELINE COMPONENT */}
        <BeachTimeline />

        {/* divider */} 
        <div className="border-t-2 border-blue-500 my-10 
        sm:w-[20rem] sm:ml-[3rem]
        md:w-[40rem] md:ml-[7rem] md:mt-[5rem] md:mb-[5rem]
        lp:w-[65rem] lp:ml-[3rem]
        lg:w-[100rem] lg:ml-[-16rem]"></div>

        {/* PROBLEM SOLUTION OUTCOME */}
        <BeachPSO />

         {/* divider */}
        <div className="border-t-2 border-blue-500 
        sm:w-[20rem] sm:ml-[3rem]
        md:w-[40rem] md:ml-[7rem]
        lp:w-[65rem] lp:ml-[3rem]
        lg:w-[100rem] lg:ml-[-16rem]"></div>

        {/* WORK PROCESS */}
        <BeachWorkSection />

       
        {/* MOCKUP */}
        <BeachMock />

        {/* divider */}
        <div className="border-t-2 border-blue-500 my-10 
        sm:w-[20rem] sm:ml-[3rem]
        md:w-[40rem] md:ml-[7rem] md:mt-[5rem]
        lp:w-[65rem] lp:ml-[3rem]
        lg:w-[100rem] lg:ml-[-16rem]"></div>

        {/* NEXT BUTTON */}
        <div className="flex justify-end mt-8 
        sm:w-[25rem]
        md:ml-[20rem]
        lp:ml-[45rem]
        lg:ml-[60rem]">

          <Link
            to="/magazine"
            className="flex items-center text-blue-300 hover:text-orange-500"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <h3 className="mr-2 text-blue-400 hover:text-orange-500
            sm:text-[1.5rem]
            md:text-[2.5rem]
            lp:text-[3rem]
            lg:text-[4rem]">
              Next
            </h3>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor"
              className="w-8 h-8 md:w-12 md:h-12 lg:h-16 lg:w-16">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>

          </Link>
        </div>

      </div>

      <div className="w-full flex flex-col justify-center items-center
      sm:ml-[7rem]
      md:ml-[18rem]
      lp:ml-[40rem]
      lg:ml-[43rem]">
        <Social />
      </div>

    </div>
  );
};

export default Beachball;

