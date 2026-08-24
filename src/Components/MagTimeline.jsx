import React, { useState, useRef, useEffect } from "react";

const events = [
 {
  date: "03/23/2023",
  title: "Reference Analysis & Direction",
  sub: "1 hour",
  content:
    "I began the project by analyzing existing National Geographic covers to understand their visual structure and editorial style. Instead of sketching, I focused on identifying key design patterns such as strong focal imagery, environmental storytelling, and structured typography."
},
{
  date: "03/28/2023",
  title: "Composition Building & Asset Gathering",
  sub: "4 hours",
  content:
    "I moved directly into the design phase by assembling visual elements and building the composition in Adobe Photoshop. I selected and combined imagery that reflects exploration and nature, experimenting with placement and scale to establish a strong focal point."
},
{
  date: "03/30/2023",
  title: "Layout Refinement & Hierarchy",
  sub: "3 hours",
  content:
    "After creating the initial layout, I refined the composition to improve balance and readability. I adjusted positioning, spacing, and typography to better match editorial hierarchy and ensure the design communicates clearly."
},
{
  date: "03/31/2023",
  title: "Finalization & Visual Polish",
  sub: "3 hours",
  content:
    "In the final stage, I focused on polishing the overall design. I refined details across typography, alignment, and composition to create a cohesive and visually engaging magazine cover."
}
];

const MagTimeline = () => {
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
    sm:w-[25rem]
    md:w-[25rem] 
    font-vcr
    ">
      {/* Title */}
      <h1 className="flex justify-center text-blue-400 underline decoration-dashed justify-self-center
        sm:text-[1.7rem] sm:w-[23rem] sm:justify-center
                md:text-5xl md:pt-[5rem] md:w-[35rem] md:mb-[2rem]
                 lp:text-[2.8rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[5rem]
                lg:text-[3rem] lg:w-[40rem] lg:mt-[2rem]">
        Work Timeline
      </h1>

      <div className="relative flex items-center justify-center
      lp:w-[70rem] 
      lg:w-[80rem] 
      ">
        {/* Timeline line */}
        <div className="absolute top-1/2 w-full border-t-[.4rem] border-sky-200 border-dashed -translate-y-1/2
        md:w-[38rem] md:justify-start 
        lp:w-[55rem]
        lg:w-[90rem] 
        "></div>

        {/* Events */}
      <div className="flex space-x-10 overflow-x-auto py-4
          md:w-[36rem] md:mx-auto 
          lp:w-[55rem] lp:gap-[4rem]
          lg:w-[80rem] lg:gap-[5rem]
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
                className={`w-6 h-6 transform rotate-45 border-4 border-sky-200
                  md:w-[2rem] md:h-[2rem] 
                  lg:w-[3rem] lg:h-[3rem] lg:mb-[4rem]
                  ${
                  selectedIndex === idx ? "bg-purple-300" : "bg-white"
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
                selectedIndex === idx ? "text-purple-400" : "text-blue-500"
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
        <h2 className="text-xl font-semibold text-blue-500
        md:text-[2rem] md:pb-5 md:ml-[1rem] md:leading-[2.6rem] md:w-[45rem]
          lp:text-[2.5rem] lp:pb-5 lp:leading-[3.2rem] lp:w-[55rem]
          lg:text-[3rem] lg:pb-[2rem] lg:pt-[2rem] lg:leading-[3.8rem] lg:w-[67rem] 
        ">{events[selectedIndex].title}</h2>

        {/* this is the duration of how long it took me to do each process*/}
        <h3 className="text-sm text-orange-600
        md:text-[1.8rem] 
        lg:text-[3rem] lg:pb-5 lg:leading-[3.8rem] lg:w-[67rem]
        ">{events[selectedIndex].sub}</h3>

        {/* this is the content section */}
        <p className="mt-2 text-sky-700
        md:mt-5 md:text-[2rem] md:w-[43rem]
        lp:w-[65rem] lp:text-[2rem]
        lg:text-[3rem] lg:pb-5 lg:leading-[5rem] lg:w-[87rem]
        
        ">{events[selectedIndex].content}</p>
      </div>
    </section>
  );
};

export default MagTimeline;