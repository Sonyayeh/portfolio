import React, { useEffect, useRef, useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import PuppySoft from "../Components/PuppyIcon";
import BingProcess from "../Components/bingProcess";
import BingFig from "../Components/BingFigma";
import Social from '../Components/social';
import { Link } from "react-router-dom";

const BingTimeLine = () => {
  const listItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-visible");
          } else {
            entry.target.classList.remove("timeline-visible");
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
            background-color: #c084fc;
            z-index: 1;
          }
          .timeline-dot {
            position: absolute;
            left: 110%;
            transform: translateX(-50%);
            width: 15px;
            height: 15px;
            background-color: #c084fc;
            border-radius: 50%;
            z-index: 2;
            top: -8px; /* Adjust this value to position the dot on top of the line */
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            .timeline-dot {
              width: 20px; /* Adjusted size for medium screens */
              height: 20px; /* Adjusted size for medium screens */
              top: -10px; /* Adjust this value to position the dot on top of the line */
            }
          }
          @media (min-width: 1280px) {
            .timeline-dot {
              width: 25px; /* Adjusted size for large screens */
              height: 25px; /* Adjusted size for large screens */
              top: -12px; /* Adjust this value to position the dot on top of the line */
            }
          }
          @media (min-width: 1920px) {
            .timeline-dot {
              width: 35px; /* Adjusted size for large screens */
              height: 35px; /* Adjusted size for large screens */
              top: -12px; /* Adjust this value to position the dot on top of the line */
            }
          }
        `}
      </style>
      <h1 className="pl-2 justify-center text-center 
      underline decoration-dashed text-purple-400 pt-8
      sm:text-[1.7rem] sm:w-[25rem] sm:ml-1
      md:text-5xl md:ml-[-1rem] md:pt-[5rem] md:w-[50rem]
      lp:text-6xl lp:w-[75rem] lp:justify-center lp:items-center
      lg:text-7xl lg:ml-[3rem] lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
        Working timeline:
      </h1>
      <h1 className="pl-2 justify-center text-center 
      underline decoration-dashed text-purple-400
      sm:text-[1.3rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-1
      md:text-5xl md:ml-[-1rem] md:pt-[5rem] md:w-[50rem] md:mb-[2rem]
      lp:text-4xl lp:w-[75rem] lp:justify-center lp:items-center
      lg:text-7xl lg:ml-[3rem] lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
        Total hours: <span className="text-red-600">20 hours</span>
      </h1>
      <div className="relative md:ml-[12rem]">
        {/* the timeline itself */}
        <div className="timeline-line 
        md:ml-[11rem]
        lp:ml-[25rem]
        lg:ml-[20rem]
        "></div>
        <ul className="space-y-10 relative">
          {[
            { date: "November 5", text: "Assignment given and screener candidate questions researched", hours: "(2 hours)", side: "right" },
            { date: "November 12", text: "Screener questions document created", hours: "(1 hour)", side: "left" },
            { date: "November 18", text: "Screener questions answered", hours: "(2 hours)", side: "right" },
            { date: "November 19", text: "Hypothesis created", hours: "(1 hour)", side: "left" },
            { date: "November 26", text: "User result and submitted to document folder", hours: "(2 hours)", side: "right" },
            { date: "November 27", text: "Google Sheet created", hours: "(1 hour)", side: "left" },
            { date: "December 9", text: "SUS, System Usability Scale, created", hours: "(3 hours)", side: "right" },
            { date: "December 10", text: "Figma file created and finished part 1", hours: "(5 hours)", side: "left" },
            { date: "December 12", text: "Figma file created and finished part 2", hours: "(5 hours)", side: "right" },
          ].map((item, index) => (
            <li
              key={index}
              ref={(el) => (listItemsRef.current[index] = el)}
              className="timeline-item flex justify-between items-center w-full transition-all duration-700 ease-in-out"
            >
              {/* the timeline dot section */}
              <div className="timeline-dot 
              md:ml-[11rem]
              lp:ml-[25rem]
              lg:ml-[20rem]
              "></div>
              {item.side === "right" ? (
                <>
                {/* right side */}
                  <div className="w-1/2 text-right pr-8 text-emerald-400 font-Dos">
                    <span className="block text-left ml-[15rem] w-[11rem] sm:text-[1.3rem]
                    md:text-[2rem] md:w-[25rem] md:ml-[15rem]
                    lp:text-[2.5rem] lp:w-[35rem] lp:ml-[28rem]
                    lg:text-[3rem] lg:w-[40rem] lg:ml-[25rem]
                    ">
                      <strong>{item.date}</strong><br />
                      {item.text}<br />
                      <em>{item.hours}</em>
                    </span>
                  </div>
                  <div className="w-1/2 pl-8"></div>
                </>
              ) : (
                <>
                {/* left side */}
                  <div className="w-1/2"></div>
                  <div className="w-1/2 text-right pr-8 text-emerald-400 font-Dos">
                    <span className="block text-left ml-[-5rem] w-[12rem] 
                    sm:text-[1.3rem] 
                    md:text-[2rem] md:w-[25rem] md:ml-[-14rem]
                    lp:text-[2.5rem] lp:w-[35rem] lp:ml-[-12rem]
                    lg:text-[3rem] lg:w-[45rem] lg:ml-[-25rem]
                    ">
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
                lp:text-[2.5rem] lp:w-[75rem] lp:justify-center lp:items-center
                lg:text-7xl lg:ml-[-20rem] lg:w-[110rem] lg:mb-[5rem] lg:mt-[2rem]">
               A UI/UX project dedicated for a fictional puppy yoga studio, Furrever Pals. Everything for the project was created within Figma, as well as Adobe softwares. The goal was to create a website and service that not only attracts people, but provides a community within the city.
                </h3>
                 {/* added a line for separate sections */}
               <div className="border-t-2 border-purple-500 
               sm:w-[20rem] sm:ml-[3rem] sm:pb-[2rem]
               md:w-[40rem] md:ml-[4rem]
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem]
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
                <BingTimeLine />
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
                <BingProcess />
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
               <div className=" w-full flex flex-col justify-center items-center
               sm:ml-[7rem]
               md:ml-[18rem]
               lp:ml-[42rem]
               lg:ml-[44rem]
               ">
                <Social />
               </div>
               </div>
    );
};

export default PuppyYoga;