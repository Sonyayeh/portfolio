import React, { useEffect, useRef, useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import MagSoftware from "../Components/MagazineIcon";
import MagazineWorkSection from "../Components/MagazineWorkSection";
import { Link } from "react-router-dom";
import Social from '../Components/social';

const MagTimeLine = () => {
  const listItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-visible");
            // Removed the removal of the class so it won't disappear
          }
        });
      },
      { threshold: 0.1 }
    );

    listItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      listItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div>
      <style>
        {`
          .timeline-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .timeline-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            position: relative;
          }
          .timeline-line {
            position: absolute;
            left: 110%;
            top: 0;
            transform: translateX(-50%);
            width: 4px;
            height: 100%;
            background-color: #349beb;
            z-index: 1;
          }
          .timeline-dot {
            position: absolute;
            left: 110%;
            transform: translateX(-50%);
            width: 15px;
            height: 15px;
            background-color: #349beb;
            border-radius: 50%;
            z-index: 2;
            top: -8px;
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            .timeline-dot {
              width: 20px;
              height: 20px;
              top: -10px;
            }
          }
          @media (min-width: 1280px) {
            .timeline-dot {
              width: 25px;
              height: 25px;
              top: -12px;
            }
          }
          @media (min-width: 1920px) {
            .timeline-dot {
              width: 35px;
              height: 35px;
              top: -12px;
            }
          }
        `}
      </style>
      <h1 className="pl-2 justify-center text-center 
      underline decoration-dashed text-blue-400 pt-8
      sm:text-[1.7rem] sm:w-[25rem] sm:ml-1
      md:text-5xl md:ml-[-1rem] md:pt-[5rem] md:w-[50rem]
      lp:text-6xl lp:w-[75rem] lp:justify-center lp:items-center
      lg:text-7xl lg:ml-[3rem] lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
        Working timeline:
      </h1>
      <h1 className="pl-2 justify-center text-center 
      underline decoration-dashed text-blue-400
      sm:text-[1.3rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-1
      md:text-5xl md:ml-[-1rem] md:pt-[5rem] md:w-[50rem] md:mb-[2rem]
      lp:text-4xl lp:w-[75rem] lp:justify-center lp:items-center
      lg:text-7xl lg:ml-[3rem] lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
        Total hours: <span className="text-red-600">11 hours</span>
      </h1>
      <div className="relative md:ml-[12rem]">
        <div className="timeline-line md:ml-[11rem] lp:ml-[25rem] lg:ml-[20rem]"></div>
        <ul className="space-y-10 relative">
          {[
            { date: "March 23", text: "Assignment Given", hours: "(1 hour)", side: "right" },
            { date: "March 28", text: "Cut, pieced everything together and refinement", hours: "(4 hours)", side: "left" },
            { date: "March 30", text: "Redesigned and repositioned project", hours: "(3 hours)", side: "right" },
            { date: "March 31", text: "Finalized and wrapped up project", hours: "(3 hours)", side: "left" },
          ].map((item, index) => (
            <li
              key={index}
              ref={(el) => (listItemsRef.current[index] = el)}
              className="timeline-item flex justify-between items-center w-full transition-all duration-700 ease-in-out"
            >
              <div className="timeline-dot md:ml-[11rem] lp:ml-[25rem] lg:ml-[20rem]"></div>
              {item.side === "right" ? (
                <>
                  <div className="w-1/2 text-right pr-8 text-orange-400 font-Dos">
                    <span className="block text-left ml-[15rem] w-[11rem] sm:text-[1.3rem] md:text-[2rem] md:w-[25rem] md:ml-[15rem] lp:text-[2.5rem] lp:w-[35rem] lp:ml-[28rem] lg:text-[3rem] lg:w-[40rem] lg:ml-[25rem]">
                      <strong>{item.date}</strong><br />
                      {item.text}<br />
                      <em>{item.hours}</em>
                    </span>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </>
              ) : (
                <>
                  <div className="w-1/2"></div>
                  <div className="w-1/2 text-right pr-8 text-orange-400 font-Dos">
                    <span className="block text-left ml-[-5rem] w-[12rem] sm:text-[1.3rem] md:text-[2rem] md:w-[25rem] md:ml-[-14rem] lp:text-[2.5rem] lp:w-[35rem] lp:ml-[-12rem] lg:text-[3rem] lg:w-[45rem] lg:ml-[-25rem]">
                      <strong>{item.date}</strong><br />
                      {item.text}<br />
                      <em>{item.hours}</em>
                    </span>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const MagazineDesign = () => {
  const project = projectData.find((proj) => proj.id === 1);
  const [activeTab, setActiveTab] = useState('ABOUT');

  if (!project) return <div>Project not found</div>;

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="w-[12rem] relative mt-[30rem] sm:ml-[-1rem] sm:mt-[10rem] sm:px-0 sm:mx-auto md:ml-[3rem] md:mt-[1rem] lg:pl-[4rem] lg:pr-[4rem]">
      <div className="text-start w-[12rem]">
        <h1 className="pl-2 justify-center text-center text-blue-500 underline decoration-dashed sm:text-[2rem] sm:pb-[5rem] sm:mt-[-5rem] sm:w-[25rem] md:text-[2.5rem] md:ml-[-8rem] md:pt-[10rem] md:w-[65rem] lp:text-[3.7rem] lp:w-[85rem] lp:justify-center lp:items-center lg:text-7xl lg:ml-[-28rem] lg:w-[120rem] lg:mb-[5rem] lg:mt-[2rem]">
          National Geographic Magazine Design:
        </h1>
        <h1 className="pl-2 justify-center text-center underline decoration-dashed text-blue-400 sm:text-[1.7rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-1 md:text-5xl md:ml-[-2rem] md:pt-[3rem] md:w-[50rem] lp:text-[4rem] lp:w-[75rem] lp:justify-center lp:items-center lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
          Overview:
        </h1>
        <h3 className="pl-2 text-orange-500 sm:text-[1rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-4 md:text-5xl md:ml-[0rem] md:pt-[5rem] md:w-[50rem] md:mb-[2rem] lp:text-[2.5rem] lp:w-[75rem] lp:justify-center lp:items-center lg:text-7xl lg:ml-[-20rem] lg:w-[110rem] lg:mb-[5rem] lg:mt-[2rem]">
          The goal was to create a magazine cover with the selected of required material given by
          the instructor covered in (photoshop class). The main purpose of this project is to be able to
          come up with a creative design despite limited resources and restrictions with Adobe
          Photoshop only.
        </h3>

        <div className="border-t-2 border-blue-500 sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem] md:w-[40rem] md:ml-[4rem] lp:w-[65rem] lg:w-[100rem] lg:ml-[-16rem]"></div>

        <div className="pb-[2rem]"><MagSoftware /></div>

        <div className="border-t-2 border-blue-500 sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem] md:w-[40rem] md:ml-[4rem] lp:w-[65rem] lg:w-[100rem] lg:ml-[-16rem]"></div>

        <div><MagTimeLine /></div>

        <div className="border-t-2 border-blue-500 my-10 sm:w-[20rem] sm:ml-[3rem] md:w-[40rem] md:ml-[4rem] lp:w-[65rem] lg:w-[100rem] lg:ml-[-16rem] lg:pb-[5rem] lg:mt-[6rem]"></div>

        <div><MagazineWorkSection /></div>

        <div className="border-t-2 border-blue-500 my-10 sm:w-[20rem] sm:ml-[3rem] md:w-[40rem] md:ml-[4rem] lp:w-[65rem] lg:w-[100rem] lg:ml-[-16rem] lg:mb-[8rem]"></div>

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
    </div>
  );
};

export default MagazineDesign;