import React, { useState, useRef, useEffect } from "react";

const events = [
  { date: "11/15/2023", title: "Brainstorming & Sketching", sub: "1 hour", content: "I started this project by sketching our some stereotypical poster designs for beach volleyball. From then, I was able to come up with other possibilities by tweaking the sketches I had." },
  { date: "11/18/2023", title: "Additional Sketch Variations", sub: "3 hours", content: "I created 3 additional different sketches after I had a clear direction of where I want the poster to go." },
  { date: "11/20/2023", title: "Sketches Brought into Adobe Illustrator", sub: "2 hours", content: "After I selected the design I wanted to work with, I brought the sketch into Adobe Illustrator. I also further researched about beach and summer aesthetics, such as coconut trees and fruit punches. I settled with hibiscus flowers." },
  { date: "11/23/2023", title: "Research on Additional References", sub: "3 hours", content: "Because I never drew hibiscus flowers and volleyballs, I had to look up what they looked like and tried to do my own version. As a first time drawing of both objects, I think they turned out pretty nice." },
  { date: "11/25/2023", title: "Worked on Individual Elements of Poster", sub: "3 hours", content: "After I worked on the main portion of the poster, I decided to add in the individual elements of the poster, such as the banner, texts, starfish, and the light rays, which arguably took the longest. I had to make sure the placement of the rays look natural and reasonable." },
  { date: "11/28/2023", title: "Finishing Touches", sub: "3 hours", content: "When everything was done, I further changed and adjusted the background gradient, shadings, positioning and the overall layout to make sure everything is coherent." },
];

const BeachTimeLine = () => {
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
      <h1 className="text-2xl mb-6 text-center sm:text-blue-400 
      underline decoration-dashed
      sm:text-[1.7rem] 
      md:text-[3rem] md:w-full md:ml-[12rem] md:mb-[3rem] md:pt-[5rem]
      lp:justify-center lp:ml-[15rem] lp:text-[4rem] lp:w-[30rem]
      lg:ml-[5rem] lg:w-[50rem] lg:text-[4.5rem]
      ">
        Work Timeline
      </h1>

      <div className="relative flex items-center justify-center md:mr-[-22rem] md:ml-[2rem] 
      lp:w-[70rem] lp:ml-[-3rem]
      lg:w-[80rem] lg:ml-[-12rem]
      ">
        {/* Timeline line */}
        <div className="absolute top-1/2 w-full border-t-[.4rem] border-sky-200 border-dashed -translate-y-1/2
        md:w-[38rem] md:justify-start 
        lp:w-[55rem]
        lg:w-[90rem] lg:ml-[5rem]
        "></div>

        {/* Events */}
      <div className="flex space-x-10 overflow-x-auto py-4
          md:w-[36rem] md:mx-auto md:ml-[1rem]
          lp:w-[55rem] lp:ml-[5rem]
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
                className={`w-6 h-6 transform rotate-45 border-4 border-sky-200
                  md:w-[2rem] md:h-[2rem] md:ml-[1rem] 
                  lg:w-[3rem] lg:h-[3rem] lg:ml-[1.5rem] lg:mb-[4rem]
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
          lp:text-[2.5rem] lp:pb-5 lp:ml-[3rem] lp:leading-[3.2rem] lp:w-[55rem]
          lg:text-[3rem] lg:pb-[2rem] lg:pt-[2rem] lg:ml-[-15rem] lg:leading-[3.8rem] lg:w-[67rem] 
        ">{events[selectedIndex].title}</h2>

        {/* this is the duration of how long it took me to do each process*/}
        <h3 className="text-sm text-orange-600
        md:text-[1.8rem] md:ml-[1rem]
        lg:text-[3rem] lg:pb-5 lg:ml-[-15rem] lg:leading-[3.8rem] lg:w-[67rem]
        ">{events[selectedIndex].sub}</h3>

        {/* this is the content section */}
        <p className="mt-2 text-sky-700
        md:mt-5 md:text-[2rem] md:ml-[1rem] md:w-[43rem]
        lp:w-[60rem]
        lg:text-[3rem] lg:pb-5 lg:ml-[-15rem] lg:leading-[5rem] lg:w-[87rem]
        
        ">{events[selectedIndex].content}</p>
      </div>
    </section>
  );
};

export default BeachTimeLine;