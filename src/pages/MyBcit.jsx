import React, { useEffect, useRef, useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import BcitSoftware from "../Components/BcitIcon";
import BcitWork from "../Components/BcitMock";
import BcitiFig from "../Components/BcitiFigma";
import Social from '../Components/social';
import { Link } from "react-router-dom";

const BcitTimeLine = () => {
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
        Total hours: <span className="text-red-600">13 hours</span>
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
            { date: "July 4", text: "Concepts were made, including reference pictures and downloaded free images and questionnaire", hours: "(2 hour)", side: "right" },
            { date: "July 25", text: "Started with user research and breaking down the user pains", hours: "(1 hours)", side: "left" },
            { date: "August 1", text: "Finished low-fidelity design", hours: "(2 hours)", side: "right" },
            { date: "August 5", text: "Worked on high-fidelity part 1", hours: "(2.5 hours)", side: "left" },
            { date: "August 10", text: "Worked on high fidelity part 2 ", hours: "(2.5 hours)", side: "right" },
            { date: "August 12", text: "Created UX case study ", hours: "(2 hours)", side: "left" },
            { date: "August 15", text: "Finalized project and created slides on Figma", hours: "(1 hours)", side: "right" },
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
                sm:text-[2rem] sm:pb-[5rem] sm:mt-[-5rem] sm:w-[25rem]
                md:text-[3rem] md:ml-[0rem] md:pt-[10rem] md:w-[50rem]
                lp:text-[3.7rem] lp:w-[75rem] lp:justify-center lp:items-center
                lg:text-7xl lg:ml-[-28rem] lg:w-[120rem] lg:mb-[5rem] lg:mt-[2rem]">
                    MyBCIT Redesign:
                </h1>
                <h1 className="pl-2 justify-center text-center underline decoration-dashed text-purple-400
                sm:text-[1.7rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-1
                md:text-5xl md:ml-[0rem] md:pt-[3rem] md:w-[50rem]
                lp:text-[4rem] lp:w-[75rem] lp:justify-center lp:items-center
                lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
                    Overview:
                </h1>
                <h3 className="pl-2 text-emerald-500
                sm:text-[1rem] sm:pb-[1rem] sm:w-[25rem] sm:ml-4
                md:text-5xl md:ml-[0rem] md:pt-[5rem] md:w-[50rem] md:mb-[2rem]
                lp:text-[2.5rem] lp:w-[75rem] lp:justify-center lp:items-center
                lg:text-7xl lg:ml-[-20rem] lg:w-[110rem] lg:mb-[5rem] lg:mt-[2rem] lg:leading-[7rem]">
                I overhauled MyBCIT to create a simpler, more user-friendly interface and reduce the learning curve for new students for the MDIA 2540 UI/UX final project. The project involved using my UI/UX and technical skillset in Figma, along with fundamental UX elements comprehension. As a student in real-time. I was determined to make MyBCIT appear brand new and simpler to navigate for students and administrators. My restructuring not only makes it easier to navigate but also introduces valuable features for the new user, such as putting the student ID on the front page, not having to excavate through several pages to find it.  
                
                {/* All the elements on the poster were to be created only with Adobe Illustrator. Other than Adobe Illustrator, I also used Procreate for sketches and took reference images downloaded from Adobe Stock Image */}
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
                    <BcitSoftware />
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
                <BcitTimeLine />
               </div>

                {/* added a line for separate sections */}
                <div className="border-t-2 border-purple-500 my-10 
               sm:w-[20rem] sm:ml-[3rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[65rem]
               lg:w-[100rem] lg:ml-[-16rem] lg:pb-[5rem] lg:mt-[6rem]
               "></div>

                {/* work section Section */}
                {/* the working process */}
                <div>
                <BcitWork />
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
                    <BcitiFig />
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
                   
                                 {/* Back Button */}
                                 <Link 
                                     to="/magazine" 
                                     className="flex items-center text-purple-300 hover:text-emerald-500 transition-colors duration-300"
                                     onClick={() => window.scrollTo({ top: 0 })}
                                 >
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                                         className="w-8 h-8 lg:w-16 lg:h-16">
                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                     </svg>
                                     <h3 className="ml-2 text-purple-400 hover:text-emerald-500 
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
                                     className="flex items-center text-purple-300 hover:text-emerald-500 transition-colors duration-300"
                                     onClick={() => window.scrollTo({ top: 0 })}
                                 >
                                     <h3 className="mr-3 text-purple-400 hover:text-emerald-500 
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
               lp:ml-[40rem]
               ">
                <Social />
               </div>
               </div>
    );
};

export default MyBcit;