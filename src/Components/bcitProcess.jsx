import React, { useState } from "react";
import Login from "../assets/BCIT/login.png";
import Concept from "../assets/BCIT/one.png";

import empathy from "../BcitDesignProcess/empathyBcit.svg";
import flow from "../BcitDesignProcess/FlowchartBcit.svg";
import grid from "../BcitDesignProcess/gridBcit.svg";
import persona1 from "../BcitDesignProcess/personaBcit1.svg";
import persona2 from "../BcitDesignProcess/personaBcit2.svg";
import story from "../BcitDesignProcess/userstoryBcit.svg";

const workImages = [
  {
    src: Concept,
    alt: "Rough Concept Sketches",
    fileName: "concept_sketches.png",
    description:
      "These concept sketches outline the initial direction of the redesign and highlight key improvements focused on usability, navigation, and interface clarity.",
  },
  {
    src: Login,
    alt: "Login Mockup",
    fileName: "login_mockup.png",
    description:
      "This login mockup presents the redesigned interface in a realistic desktop context, emphasizing clarity and accessibility in a commonly used entry point.",
  },
];

const processImages = [
  {
    src: flow,
    alt: "Flowchart",
    fileName: "flowchart.svg",
    description:
      "This flowchart maps the user journey and system structure, helping define how users move through the redesigned experience and where key interactions occur.",
  },
  {
    src: grid,
    alt: "User Story Opportunities",
    fileName: "user_story_opportunities.svg",
    description:
      "This is a grid chart that discusses the possible improvements based on User Story. The chart includes confusion points, frustrations, improvements, conclusions, and possible solutions that may benefit users.",
  },
  {
    src: persona1,
    alt: "User Persona 1",
    fileName: "user_persona_01.svg",
    description:
      "This persona represents one of the primary user groups and highlights key motivations, needs, and pain points that informed the redesign decisions.",
  },
  {
    src: persona2,
    alt: "User Persona 2",
    fileName: "user_persona_02.svg",
    description:
      "This persona captures an additional user perspective, helping ensure the solution addresses a wider range of needs and usability considerations.",
  },
  {
    src: empathy,
    alt: "Empathy Map",
    fileName: "empathy_map.svg",
    description:
      "This empathy map was used to better understand user behaviors, frustrations, and expectations, supporting a more user-centered design approach.",
  },
  {
    src: story,
    alt: "User Story Map",
    fileName: "user_story_map.svg",
    description:
      "This user story map organizes user goals and task flows, helping prioritize features and structure the redesign around real user actions.",
  },
];

const BcitProcess = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [workIndex, setWorkIndex] = useState(0);
  const [processIndex, setProcessIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const currentImages = activeTab === "work" ? workImages : processImages;
  const currentIndex = activeTab === "work" ? workIndex : processIndex;
  const currentImage = currentImages[currentIndex];

  const setCurrentIndex = (updater) => {
    if (activeTab === "work") {
      setWorkIndex((prev) =>
        typeof updater === "function" ? updater(prev) : updater
      );
    } else {
      setProcessIndex((prev) =>
        typeof updater === "function" ? updater(prev) : updater
      );
    }
  };

  const handlePrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );

  const handleNext = () =>
    setCurrentIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("lightbox-overlay")) {
      closeLightbox();
    }
  };

  return (
    <section className="w-full">
      <h2
        className="flex justify-self-center underline decoration-dashed text-purple-400 text-center justify-center
          sm:text-[2rem] sm:pb-[1rem] sm:w-[18rem] 
          md:text-[4rem] md:w-[45rem] md:mx-auto md:pt-[5rem]
          lp:text-[4rem] lp:w-[35rem] lp:pt-[2rem]
          lg:text-[5rem] lg:w-[61rem] lg:pb-[2rem]
        "
      >
        Design Process:
      </h2>

      <p
          className=" justify-self-center
            text-purple-500 font-vcr 
            sm:text-[1rem] sm:w-[21rem] sm:pb-[1.5rem]
            md:text-[2rem] md:w-[50rem] md:mb-[2rem]
            lp:text-[1.5rem] lp:w-[65rem] lp:mb-[2rem]
            lg:text-[2rem] lg:w-[60rem] lg:mt-[1rem] lg:mb-[2rem]
          "
        >
          This section highlights the design process behind the project,
          including <span className="text-orange-400">flowcharts</span>,
          <span className="text-orange-400"> user personas</span>,
          <span className="text-orange-400"> user stories</span>, and an
          <span className="text-orange-400"> empathy map</span>.
        </p>


      <div
        className="
          mx-auto justify-self-center
          border-2 border-orange-200 border-dashed
          bg-[#eee6f6]
          sm:px-2 sm:py-3
          sm:w-[21rem] 
          md:w-[50rem] md:p-5
          lp:w-[60rem] lp:p-6
          lg:w-[78rem] lg:p-7 
        "
      >
        <div className="flex items-center justify-between border-2 border-orange-200 bg-orange-300 px-2 py-1">
          <span className="text-white font-vcr sm:text-[0.8rem] md:text-[1rem] lp:text-[1.2rem] lg:text-[2rem]">
            BcitProcess.exe
          </span>

          <div className="flex gap-1
          lg:text-[1.5rem]
          ">
            <span className="border border-orange-400 bg-[#f8f4ff] text-orange-400 px-1">_</span>
            <span className="border border-orange-400 bg-[#f8f4ff] text-orange-400 px-1">□</span>
            <span className="border border-orange-400 bg-[#f8f4ff] text-orange-400 px-1">×</span>
          </div>
        </div>

        <div className="mt-3 bg-[#f8f4ff]">
          <div className="flex flex-wrap gap-2 border-orange-200 pb-3">
            <button
              type="button"
              onClick={() => setActiveTab("work")}
              className={`
                border-2 px-3 py-1 font-vcr  text-purple-400
                sm:text-[0.75rem]
                md:text-[0.95rem]
                lg:text-[1.5rem]
                ${
                  activeTab === "work"
                    ? "border-orange-200 bg-[#f8f4ff] text-orange-500"
                    : "border-orange-200 bg-[#eee6f6] text-orange-400 hover:bg-[#f3ecfb]"
                }
              `}
            >
              Sketches & Mockups
            </button>
            

            <button
              type="button"
              onClick={() => setActiveTab("process")}
              className={`
                border-2 px-3 py-1 font-vcr
                sm:text-[0.75rem]
                md:text-[0.95rem]
                lp:text-[1.1rem]
                lg:text-[1.5rem]
                ${
                  activeTab === "process"
                    ? "border-orange-200 bg-[#f8f4ff] text-orange-500"
                    : "border-orange-200 bg-[#eee6f6] text-orange-400 hover:bg-[#f3ecfb]"
                }
              `}
            >
              Design Process
            </button>
          </div>

          {/* Image + file info: stacked on sm, side by side on md and up */}
          <div className="justify-self-center mt-3 flex flex-col gap-4 md:flex-row md:w-[95%]">
            <div className=" mx auto block w-full object-contain min-w-0
              border-2 border-orange-200 bg-white p-3
              sm:h-[230px]
              md:h-[390px] md:w-[45%]
              lp:h-[430px]
              lg:h-[520px]
            ">
              <button type="button" onClick={openLightbox} className="block w-full h-full">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="mx-auto block w-full h-full object-contain"
                />
              </button>
            </div>

            <div className="border-2 border-orange-200 bg-white p-3 min-w-0 md:w-[55%]">
              <p
                className="
                  border-b border-orange-200 pb-2 text-orange-400 font-vcr
                  sm:text-[0.85rem]
                  md:text-[1rem]
                  lp:text-[1.2rem]
                  lg:text-[1.4rem]
                "
              >
                File: {currentImage.fileName}
              </p>

              <p
                className="
                  mt-3 text-orange-500 font-vcr
                  sm:text-[0.8rem] sm:leading-7
                  md:text-[1.05rem] md:leading-8
                  lp:text-[1.25rem] lp:leading-10
                  lg:text-[1.55rem] lg:leading-[3rem]
                "
              >
                {currentImage.description}
              </p>
            </div>
          </div>

          <div className=" flex justify-center gap-[3rem] p-2 border-orange-200 pt-3">
            <button
              onClick={handlePrev}
              className="
                border-2 border-orange-200 bg-[#e8dcf8] px-3 py-1 text-orange-400 font-vcr
                hover:bg-white
                sm:text-[0.8rem]
                md:text-[0.95rem]
                lp:text-[1.1rem]
                lg:text-[1.25rem]
              "
            >
              &lt; Prev
            </button>

            <p
              className="
                text-center text-orange-400 font-vcr
                sm:text-[1rem]
                md:text-[0.95rem]
                lp:text-[1.1rem]
                lg:text-[1.25rem]
              "
            >
              {currentIndex + 1} / {currentImages.length}
            </p>

            <button
              onClick={handleNext}
              className="
                border-2 border-orange-200 bg-[#e8dcf8] px-3 py-1 text-orange-400 font-vcr
                hover:bg-white
                sm:text-[0.8rem]
                md:text-[0.95rem]
                lp:text-[1.1rem]
                lg:text-[1.25rem]
              "
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4"
          onClick={handleClickOutside}
        >
          <div
            className="
              w-full max-w-[95vw]
              max-h-[92vh]
              border-2 border-orange-200 border-dashed
              bg-[#eee6f6]
              flex flex-col
              lg:w-[60rem]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-orange-200 bg-orange-300 px-2 py-1 ">
              <span className="text-white font-vcr text-sm">
                {currentImage.fileName}
              </span>

              <button
                onClick={closeLightbox}
                className="shrink-0 flex h-7 w-7 items-center justify-center border border-orange-400 bg-[#f8f4ff] text-[1rem] text-orange-400"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-[#f8f4ff] p-3 md:p-5
            
            ">
              <div className="flex flex-col items-center gap-4">
                <div className="w-full flex justify-center">
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="
                      object-contain
                      w-full
                      max-h-[50vh]
                      md:max-h-[60vh]
                    "
                  />
                </div>

                <div className="flex gap-4 mt-2">
                  <button
                    onClick={handlePrev}
                    className="border-2 border-orange-200 bg-[#e8dcf8] px-3 py-1 text-orange-400 font-vcr hover:bg-white
                    sm:text-[0.8rem]
                md:text-[0.95rem]
                lp:text-[1.1rem]
                lg:text-[1.25rem]
                    "
                  >
                    &lt; Prev
                  </button>

                  <button
                    onClick={handleNext}
                    className="border-2 border-orange-200 bg-[#e8dcf8] px-3 py-1 text-orange-400 font-vcr hover:bg-white
                    sm:text-[0.8rem]
                md:text-[0.95rem]
                lp:text-[1.1rem]
                lg:text-[1.25rem]
                    "
                  >
                    Next &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BcitProcess;