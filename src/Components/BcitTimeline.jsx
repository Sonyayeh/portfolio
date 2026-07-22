import React, { useState, useRef, useEffect } from "react";

const events = [
 {
  date: "07/04/2024",
  title: "Concept Development & Research",
  sub: "2 hour",
  content:
    "I began the project by exploring potential directions for the redesign, gathering reference materials and analyzing existing design patterns. This included reviewing similar platforms and collecting visual inspiration to better understand how educational interfaces communicate information effectively."
},
{
  date: "07/25/2024",
  title: "User Research & Problem Definition",
  sub: "1 hours",
  content:
    "I conducted initial user research to identify key pain points within the existing BCIT website experience. By breaking down user frustrations and usability issues, I was able to define core problems that the redesign needed to address."
},
{
  date: "08/01/2024",
  title: "Low-Fidelity Design",
  sub: "2 hours",
  content:
    "I created low-fidelity wireframes to quickly explore layout structures and user flows. This stage focused on organizing content, improving navigation, and testing different interface structures before moving into visual design."
},
{
  date: "08/05/2024",
  title: "High-Fidelity Design (Phase 1)",
  sub: "2.5 hours",
  content:
    "I began translating wireframes into high-fidelity designs, focusing on visual hierarchy, typography, and layout consistency. The goal was to create a clean and structured interface that improves readability and usability."
},
{
  date: "08/10/2024",
  title: "High-Fidelity Design (Phase 2)",
  sub: "2.5 hours",
  content:
    "I refined the high-fidelity designs by adjusting spacing, alignment, and visual balance. Additional attention was given to consistency across components and improving overall user experience through clearer interactions."
},
{
  date: "08/12/2024",
  title: "UX Case Study Development",
  sub: "2 hours",
  content:
    "I documented the design process into a structured UX case study, outlining the problem, design decisions, and outcomes. This helped communicate the rationale behind the redesign and demonstrate my design thinking process."
},
{
  date: "08/15/2024",
  title: "Finalization & Presentation",
  sub: "1 hours",
  content:
    "I finalized the project by refining visuals and preparing presentation materials in Figma. This included organizing the work for clear communication and ensuring the final design effectively showcases both the solution and process."
},
];

const BcitTimeline = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const eventsRef = useRef([]);

  // Scroll to selected event (horizontal only, no vertical jump)
  useEffect(() => {
    if (eventsRef.current[selectedIndex]) {
      eventsRef.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest", // prevents vertical scrolling
      });
    }
  }, [selectedIndex]);

  return (
    <section className="w-full p-3 
    sm:w-[21rem] sm:ml-[2.5rem]
    md:w-[25rem] 
    font-vcr
    ">
      {/* Title */}
      <h1 className="text-2xl mb-6 text-center sm:text-purple-400 
      underline decoration-dashed
      sm:text-[1.7rem] 
      md:text-[3rem] md:w-full md:ml-[12rem] md:mb-[3rem] md:pt-[5rem]
      lp:justify-center lp:text-[4rem] lp:w-[40rem]
      lg:text-[5rem] lg:w-[38rem] lg:ml-[10rem] lg:pb-[2rem]
      ">
        Work Timeline
      </h1>

      <div className="relative flex items-center justify-center md:mr-[-22rem] md:ml-[2rem] 
      lp:w-[70rem] lp:ml-[-3rem]
      lg:w-[80rem] lg:ml-[-12rem]
      ">
        {/* Timeline line */}
        <div className="absolute top-1/2 w-full border-t-[.4rem] border-purple-300 border-dashed -translate-y-1/2
        md:w-[38rem] md:justify-start 
        lp:w-[55rem]
        lg:w-[90rem] lg:ml-[5rem]
        "></div>

        {/* Events */}
      <div className="flex space-x-10 overflow-x-auto py-4
          md:w-[36rem] md:mx-auto md:ml-[1rem]
          lp:w-[55rem] lp:ml-[5rem] lp:gap-[4rem]
          lg:w-[80rem] lg:ml-[-2rem] lg:gap-[5rem]
          ">
          {events.map((event, idx) => (
            <div
              key={idx}
              ref={(el) => (eventsRef.current[idx] = el)}
              onClick={() => setSelectedIndex(idx)}
              className={`flex flex-col items-center cursor-pointer transition-transform duration-300 ${
                selectedIndex === idx ? "scale-110" : "scale-100"
              }`}
            >
              {/* Diamond shape */}
              <div
                className={`w-6 h-6 transform rotate-45 border-4 border-purple-200
                  md:w-[2rem] md:h-[2rem] md:ml-[1rem] 
                  lg:w-[3rem] lg:h-[3rem] lg:ml-[1.5rem] lg:mb-[4rem]
                  ${
                  selectedIndex === idx ? "bg-orange-300" : "bg-white"
                }`}
              ></div>

              {/*This is the note on the bottom part of the diamond */}
             <span
              className={`mt-2 text-sm text-center 
                sm:pt-[2rem] sm:ml-2
                md:text-[1.5rem]
                lp:text-[2rem] 
                lg:text-[2.5rem] lg:mb-[2rem]
                ${
                selectedIndex === idx ? "text-orange-400" : "text-purple-500"
              }`}
            >
              {event.date}
            </span>
              
            </div>
          ))}
        </div>
      </div>

      {/* Event content */}
      <div className="border-t mt-6 pt-4
      md:ml-[2rem] md:w-[40rem] md:text-[2rem] 
      ">
        {/* this is the title of what each section is about*/}
        <h2 className="text-xl font-semibold text-purple-500
        md:text-[2rem] md:pb-5 md:ml-[1rem] md:leading-[2.6rem] md:w-[45rem]
          lp:text-[2.5rem] lp:pb-5 lp:ml-[-1rem] lp:leading-[3.2rem] lp:w-[55rem]
          lg:text-[3rem] lg:pb-[2rem] lg:pt-[2rem] lg:ml-[-15rem] lg:leading-[3.8rem] lg:w-[67rem] 
        ">{events[selectedIndex].title}</h2>

        {/* this is the duration of how long it took me to do each process*/}
        <h3 className="text-sm text-orange-600
        md:text-[1.8rem] md:ml-[1rem]
        lp:ml-[-1rem]
        lg:text-[3rem] lg:pb-5 lg:ml-[-15rem] lg:leading-[3.8rem] lg:w-[67rem]
        ">{events[selectedIndex].sub}</h3>

        {/* this is the content section */}
        <p className="mt-2 text-purple-700
        md:mt-5 md:text-[2rem] md:ml-[1rem] md:w-[43rem]
        lp:w-[70rem] lp:text-[2rem] lp:ml-[-1.5rem]
        lg:text-[3rem] lg:pb-5 lg:ml-[-15rem] lg:leading-[5rem] lg:w-[87rem]
        
        ">{events[selectedIndex].content}</p>
      </div>
    </section>
  );
};

export default BcitTimeline;