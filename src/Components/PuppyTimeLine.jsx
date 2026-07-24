import React, { useState, useRef, useEffect } from "react";

const events = [
  {
    date: "11/05/2024",
    title: "Assignment Given & Research",
    sub: "2 hours",
    content:
      "The project brief was received and preliminary research into screener candidate questions was conducted, establishing a clear understanding of the project scope and the criteria needed to identify suitable research participants."
  },
  {
    date: "11/12/2024",
    title: "Screener Questions Document Created",
    sub: "1 hour",
    content:
      "A formal screener questions document was developed to define participant eligibility criteria, ensuring that all user research gathered would be relevant, purposeful, and aligned with the project's research objectives."
  },
  {
    date: "11/19/2024",
    title: "Hypothesis Created",
    sub: "1 hour",
    content:
      "A research hypothesis was formulated based on early observations and initial desk research, articulating the assumed usability gaps and user needs that the redesign would seek to validate and address."
  },
  {
    date: "11/28/2024",
    title: "Screener Questions Answered",
    sub: "2 hours",
    content:
      "Screener responses were collected and reviewed, validating participant suitability and providing a structured foundation for the user research phase. Key patterns in responses informed the direction of subsequent interviews."
  },
  {
    date: "11/26/2024",
    title: "User Results Submitted",
    sub: "2 hours",
    content:
      "User research findings were synthesised and formally submitted to the project documentation folder. The compiled results surfaced recurring themes and pain points that would directly shape the design strategy."
  },
  {
    date: "11/27/2024",
    title: "Google Sheet Created",
    sub: "1 hour",
    content:
      "A structured Google Sheet was created to centralise and organise all user research data, enabling efficient cross-referencing of responses and supporting evidence-based decision making throughout the design process."
  },
  {
    date: "12/09/2024",
    title: "System Usability Scale Created",
    sub: "3 hours",
    content:
      "A System Usability Scale evaluation was designed and administered to establish a quantitative baseline for the existing interface's usability, providing measurable benchmarks against which the redesign's improvements could be assessed."
  },
  {
    date: "12/10/2024",
    title: "Figma File Created — Part 1",
    sub: "5 hours",
    content:
      "High-fidelity design work commenced in Figma, with the first phase focusing on translating research insights into refined layouts, establishing visual hierarchy, and defining the typographic and spatial systems for the redesigned interface."
  },
  {
    date: "12/12/2024",
    title: "Figma File Finished — Part 2",
    sub: "5 hours",
    content:
      "The second design phase brought the Figma file to completion, with detailed attention given to component consistency, interaction clarity, and overall visual cohesion across all screens."
  },
  {
    date: "06/03/2026",
    title: "Project Kickoff",
    sub: "3 hours",
    content:
      "The Furrever Pals project was initiated with a focused scoping session, defining the project's goals, target audience, and core design principles that would guide all subsequent decisions."
  },
  {
    date: "06/04/2026",
    title: "Lo-Fi Exploration",
    sub: "1.5 hours",
    content:
      "Initial low-fidelity exploration began, mapping out key user flows and interaction requirements including a class booking system, multi-page navigation architecture, and an autofill login experience to reduce friction for returning users."
  },
  {
    date: "06/08/2026",
    title: "Lo-Fi Iteration",
    sub: "2.5 hours",
    content:
      "The favouriting interaction was resolved and a content carousel was introduced to the class information page. The Our Puppies page was conceptualised and added, further defining the site's content architecture and user journey."
  },
  {
    date: "06/09/2026",
    title: "Lo-Fi Refinement",
    sub: "2.5 hours",
    content:
      "The booking system flow was refined for clarity and ease of use. The Adoption and FAQ pages were introduced to round out the site's core content, and navigation restructuring was initiated to improve overall wayfinding."
  },
  {
    date: "06/12/2026",
    title: "Lo-Fi Completed",
    sub: "2.5 hours",
    content:
      "The low-fidelity prototype was finalised in its entirety, delivering a comprehensive structural blueprint across all pages and establishing a clear, validated foundation for the transition into high-fidelity design."
  },
  {
    date: "07/05/2026",
    title: "Hi-Fi Design Begins",
    sub: "2 hours",
    content:
      "High-fidelity design work commenced alongside dedicated copywriting, defining the brand's visual language, tone of voice, and content strategy that would be carried consistently across the full site experience."
  },
  {
    date: "07/08/2026",
    title: "Development Starts",
    sub: "3 hours",
    content:
      "Front-end development began in parallel with ongoing high-fidelity design work, allowing visual decisions to be validated directly in the browser. The landing page was brought close to completion with core layout and interactive behaviours established."
  },
  {
    date: "07/18/2026",
    title: "Website Completed",
    sub: "5 hours",
    content:
      "All remaining pages were developed and integrated, bringing the full Furrever Pals website to completion. The final build reflects a cohesive, fully responsive experience across the entire site."
  },
  {
    date: "07/19/2026",
    title: "Finalisation",
    sub: "5 hours",
    content:
      "The project was brought to its final state through a comprehensive copywriting review, the creation of custom class icon illustrations, and meticulous refinements across all pages to ensure a polished, portfolio-ready presentation."
  },
];

const PuppyTimeLine = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const eventsRef = useRef([]);

  useEffect(() => {
    if (eventsRef.current[selectedIndex]) {
      eventsRef.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
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
      
      <div className=" justify-center"> 
        <h1 className="flex justify-center text-purple-400 underline decoration-dashed
        sm:text-[1.7rem] sm:w-[25rem] sm:justify-center
      md:text-[3rem] md:w-full md:ml-[12rem] md:mb-[3rem] md:pt-[5rem]
      lp:justify-center lp:text-[4rem] lp:w-[40rem]
      lg:text-[5rem] lg:w-[50rem] lg:pb-[2rem]
      ">
        Working Timeline:
      </h1>
     </div>

      <h2 className="flex text-center text-purple-400 underline decoration-dashed
      sm:text-[1.3rem] sm:pb-[1rem]
      md:text-[2rem] md:w-full md:ml-[12rem] md:mb-[2rem]
      lp:justify-center lp:text-[2.5rem] lp:w-[40rem]
      lg:text-[3rem] lg:pb-[2rem] lg:w-[50rem]
      ">
        Total hours: <span className="text-red-600">49 hours</span>
      </h2>

      <div className="relative flex items-center justify-center md:mr-[-22rem] md:ml-[2rem] 
      lp:w-[70rem] lp:ml-[-3rem]
      lg:w-[70rem] 
      ">
        {/* Timeline line */}
        <div className="absolute top-1/2 w-full border-t-[.4rem] border-purple-300 border-dashed -translate-y-1/2
        md:w-[38rem] md:justify-start 
        lp:w-[55rem]
        lg:w-[70rem] lg:ml-[5rem]
        "></div>

        {/* Events */}
        <div className="flex space-x-10 overflow-x-auto py-4
          md:w-[36rem] md:mx-auto md:ml-[1rem]
          lp:w-[55rem] lp:ml-[5rem] lp:gap-[4rem]
          lg:w-[80rem]  lg:gap-[5rem]
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
                  lg:w-[3rem] lg:h-[3rem] lg:mb-[4rem]
                  ${selectedIndex === idx ? "bg-orange-300" : "bg-white"}`}
              ></div>

              {/* Date label */}
              <span
                className={`mt-2 text-sm text-center 
                  sm:pt-[2rem] sm:ml-2
                  md:text-[1.5rem]
                  lp:text-[2rem] 
                  lg:text-[2.5rem] lg:mb-[2rem]
                  ${selectedIndex === idx ? "text-orange-400" : "text-purple-500"}`}
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
        <h2 className="text-xl font-semibold text-purple-500
          md:text-[2rem] md:pb-5 md:ml-[1rem] md:leading-[2.6rem] md:w-[45rem]
          lp:text-[2.5rem] lp:pb-5 lp:ml-[-1rem] lp:leading-[3.2rem] lp:w-[55rem]
          lg:text-[3rem] lg:pb-[2rem] lg:pt-[2rem] lg:leading-[3.8rem] lg:w-[67rem]
        ">{events[selectedIndex].title}</h2>

        <h3 className="text-sm text-orange-600
          md:text-[1.8rem] md:ml-[1rem]
          lp:ml-[-1rem]
          lg:text-[3rem] lg:pb-5 lg:leading-[3.8rem] lg:w-[67rem]
        ">{events[selectedIndex].sub}</h3>

        <p className="mt-2 text-purple-700 font-Dos
          md:mt-5 md:text-[2rem] md:ml-[1rem] md:w-[43rem]
          lp:w-[70rem] lp:text-[2rem] lp:ml-[-1.5rem]
          lg:text-[2.5rem] lg:pb-5 lg:leading-[5rem] lg:w-[70rem]
        ">{events[selectedIndex].content}</p>
      </div>
    </section>
  );
};

export default PuppyTimeLine;