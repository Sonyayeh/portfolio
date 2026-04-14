import React, { useEffect, useRef, useState } from "react";
// Importing project data
import MagDes from "../Components/MagDes";
import MagTimeline from "../Components/MagTimeline";
import projectData from "../data/project.json"; 
import MagSoftware from "../Components/MagazineIcon";
import MagazineWorkSection from "../Components/MagazineWorkSection";
import { Link } from "react-router-dom";
import Social from '../Components/social';

const MagazineDesign = () => {
  const project = projectData.find((proj) => proj.id === 1);
  const [activeTab, setActiveTab] = useState('ABOUT');

  if (!project) return <div>Project not found</div>;

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="w-[12rem] relative mt-[30rem] sm:ml-[-1rem] sm:mt-[10rem] sm:px-0 sm:mx-auto md:ml-[3rem] md:mt-[1rem] lg:pl-[4rem] lg:pr-[4rem]">
      
      <MagDes />

        <div className="border-t-2 border-blue-500 
        sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem] 
        md:w-[50rem] md:ml-[3rem] 
        lp:w-[70rem] lp:ml-[1rem]
        lg:w-[110rem] lg:ml-[-23rem]"></div>

        <div className="pb-[2rem]">
          <MagSoftware />
        </div>

        <div className="border-t-2 border-blue-500 
        sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem] 
        md:w-[50rem] md:ml-[3rem] 
        lp:w-[70rem] lp:ml-[1rem]
        lg:w-[110rem] lg:ml-[-23rem]"></div>

        <MagTimeline />

        <div className="border-t-2 border-blue-500 my-10 sm:w-[20rem] sm:ml-[3rem] md:w-[50rem] md:ml-[3rem] lp:w-[65rem] lg:w-[110rem] lg:ml-[-23rem] lg:pb-[5rem] lg:mt-[6rem]"></div>

        <div><MagazineWorkSection /></div>

        <div className="border-t-2 border-blue-500 my-10 
        sm:w-[20rem] sm:ml-[3rem] 
        md:w-[50rem] md:ml-[3rem] 
        lp:w-[70rem] lp:ml-[1rem]
        lg:w-[110rem] lg:ml-[-23rem] lg:mb-[8rem]"></div>

        <div className="flex l mt-8 p:justify-between sm:w-[25rem] sm:justify-between sm:ml-[0.6rem] md:justify-between md:w-[50rem] md:ml-[-1rem] lp:w-[63rem] lp:ml-[5rem] lp:max-aut lg:w-[90rem] lg:ml-[-11rem] lg:mx-auto lg:justify-between">
          <Link to="/beachball" className="flex items-center text-blue-300 hover:text-orange-500 transition-colors duration-300" onClick={() => window.scrollTo({ top: 0 })}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 lg:w-16 lg:h-16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <h3 className="ml-2 text-blue-400 hover:text-orange-500 sm:text-[1.5rem] md:text-[2.5rem] lp:text-[3rem] lg:text-[4rem]">Back</h3>
          </Link>

          <Link to="/bcit" className="flex items-center text-blue-300 hover:text-oragne-500 transition-colors duration-300" onClick={() => window.scrollTo({ top: 0 })}>
            <h3 className="mr-3 text-blue-400 hover:text-orange-500 sm:text-[1.5rem] md:text-[2.5rem] lp:text-[3rem] lg:text-[4rem]">Next</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 lg:w-16 lg:h-16">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="w-full flex flex-col justify-center items-center sm:ml-[7rem] md:ml-[18rem] lp:ml-[41rem] lg:ml-[42rem]">
          <Social />
        </div>
      </div>
  );
};

export default MagazineDesign;