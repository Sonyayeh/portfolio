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
      sm:w-[23rem]
      md:w-[40rem] mx-auto
      lp:w-[55rem]
      lg:w-[75rem]
      font-vcr
    ">
      {/* Title */}
       <div className=" justify-self-center"> 
        <h1 className="flex justify-self-center justify-center text-blue-400 underline decoration-dashed
        sm:text-[1.7rem] sm:w-[23rem]
                md:text-[3rem] md:w-[49rem]
                lp:text-[4rem] lp:w-[60rem] lp:items-center
                lg:text-[3.5rem] lg:w-[60rem]lg:mt-[2rem]">
        Work Timeline
      </h1>
      </div>

      <div className=" justify-self-center"> 
      <h2 className="flex text-center text-blue-400 underline decoration-dashed
      sm:text-[1.3rem] sm:pb-[1rem] sm:justify-center
      md:text-[2rem] md:w-[35rem] md:mb-[2rem]
      lp:justify-center lp:text-[2.5rem] lp:w-[50rem]
      lg:text-[3rem] lg:pb-[2rem] lg:w-[65rem]
      ">
        Total hours: <span className="text-red-600">13 hours</span>
      </h2>
      </div>

      <div className="relative flex items-center justify-center 
      sm:w-[20rem]
      md:w-[40rem] md:justify-self-center
      lp:w-[70rem] 
      lg:w-[75rem] 
      ">
        {/* Timeline line */}
        <div className="absolute top-1/2 w-full border-t-[.4rem] border-blue-300 border-dashed -translate-y-1/2
        sm:w-[20rem]
        md:w-[35rem]
        lp:w-[55rem]
        lg:w-[70rem]
        "></div>


        {/* Events */}
      <div className="flex space-x-10 overflow-x-auto py-4
          md:w-[36rem] md:mx-auto 
          lp:w-[54rem] lp:mx-auto
          lg:w-[70rem] lg:gap-[5rem]
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
                className={`w-6 h-6 transform rotate-45 border-4 border-blue-200
                  md:w-[2rem] md:h-[2rem] md:ml-[1rem] 
                  lg:w-[3rem] lg:h-[3rem] lg:ml-[1.5rem] lg:mb-[4rem]
                  ${
                  selectedIndex === idx ? "bg-orange-300" : "bg-white"
                }`}
              ></div>

              {/*This is the note on the bottom part of the diamond */}
             <span
              className={`mt-2 text-sm text-center 
                sm:pt-[2rem] 
                md:text-[1.5rem]
                lp:text-[2rem] 
                lg:text-[2.5rem] lg:mb-[2rem]
                ${
                selectedIndex === idx ? "text-orange-400" : "text-blue-500"
              }`}
            >
              {event.date}
            </span>
              
            </div>
          ))}
        </div>
      </div>

      {/* Event content */}
      <div className="border-t mt-6 pt-4 mx-auto
        sm:w-[20rem]
        md:w-[40rem] md:text-[2rem] 
        lp:w-[55rem]
        lg:w-[75rem]
        ">
        {/* this is the title of what each section is about*/}
       <h2 className="text-xl font-semibold text-blue-500 
    sm:text-[1.3rem] 
    md:text-[2rem] md:pb-5 md:leading-[2.6rem]
    lp:text-[2.5rem] lp:pb-5 lp:leading-[3.2rem]
    lg:text-[3rem] lg:pb-[2rem] lg:pt-[2rem] lg:leading-[3.8rem]
  ">{events[selectedIndex].title}</h2>

  <h3 className="text-sm text-orange-600 
    sm:text-[1.2rem] sm:pt-[1rem]
    md:text-[1.8rem]
    lp:text-[2rem]
    lg:text-[3rem] lg:pb-5
  ">{events[selectedIndex].sub}</h3>

  <p className="mt-2 text-blue-700 font-Dos
  sm:pb-[2rem]
    md:mt-5 md:text-[2rem]
    lp:text-[2rem]
    lg:text-[2.5rem] lg:pb-5 lg:leading-[5rem]
  ">{events[selectedIndex].content}</p>
</div>
    </section>
  );
};

export default BcitTimeline;