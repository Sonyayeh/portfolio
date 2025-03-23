import React, { useEffect, useRef } from "react";

const BeachTimeLine = () => {
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
        Total hours: <span className="text-red-600">15 hours</span>
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
            { date: "November 15", text: "Brainstorming and sketching", hours: "(1 hour)", side: "right" },
            { date: "November 18", text: "Create 3 different sketch variations", hours: "(3 hours)", side: "left" },
            { date: "November 20", text: "Rough concept created and brought into Illustrator, further research about beach and summer were made + sketches", hours: "(2 hours)", side: "right" },
            { date: "November 23", text: "Image collected, hibiscus and volleyball references found, sketches made and brought into Illustrator", hours: "(3 hours)", side: "left" },
            { date: "November 25", text: "Worked on individual elements of the poster: volleyball, hibiscus, texts, banner, starfish, etc.", hours: "(3 hours)", side: "right" },
            { date: "November 28", text: "Finished the rest of the poster and finalized report: background gradient, light rays, shadings, positioning and overall layout", hours: "(3 hours)", side: "left" },
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
                  <div className="w-1/2 text-right pr-8 text-orange-400 font-Dos">
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
                  <div className="w-1/2 text-right pr-8 text-orange-400 font-Dos">
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

export default BeachTimeLine;