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
        className="
          text-center underline decoration-dashed text-purple-400
          sm:text-[2rem] sm:pb-[1rem] sm:w-[23rem] sm:ml-[2rem]
          md:text-[4rem] md:w-[45rem] md:mx-auto md:pt-[5rem] md:ml-[5rem]
          lp:text-[4rem] lp:w-[65rem]
          lg:text-[5rem] lg:w-[61rem] lg:ml-[5rem] lg:pb-[2rem]
        "
      >
        Design Documentation:
      </h2>

      <p
          className="
            text-emerald-500 font-vcr
            sm:text-[1rem] sm:w-[24rem] sm:ml-[2rem] sm:pb-[1.5rem]
            md:text-[2rem] md:w-[50rem] md:ml-[3rem] md:mb-[2rem]
            lp:text-[2rem] lp:w-[65rem] lp:ml-[4rem] lp:mb-[2rem]
            lg:text-[3rem] lg:w-[100rem] lg:ml-[-15rem] lg:mt-[1rem] lg:mb-[2rem]
          "
        >
          This section highlights the design process behind the project,
          including <span className="text-purple-400">flowcharts</span>,
          <span className="text-purple-400"> user personas</span>,
          <span className="text-purple-400"> user stories</span>, and an
          <span className="text-purple-400"> empathy map</span>.
        </p>


      <div
        className="
          mx-auto
          border-2 border-blue-200 border-dashed
          bg-[#eee6f6]
          sm:px-2 sm:py-3
          sm:w-[25rem] sm:ml-[1rem]
          md:w-[50rem] md:p-5 md:ml-[2rem]
          lp:w-[65rem] lp:p-6 lp:ml-[3rem]
          lg:w-[78rem] lg:p-7 lg:ml-[-5rem]
        "
      >
        <div className="flex items-center justify-between border-2 border-blue-200 bg-blue-300 px-2 py-1">
          <span className="text-white font-vcr sm:text-[0.8rem] md:text-[1rem] lp:text-[1.2rem] lg:text-[1.4rem]">
            BcitProcess.exe
          </span>

          <div className="flex gap-1">
            <span className="flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400">
              _
            </span>
            <span className="flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400">
              □
            </span>
            <span className="flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400">
              ×
            </span>
          </div>
        </div>

        <div className="mt-3 border-2 border-blue-200 bg-[#f8f4ff] p-3 md:p-4 lg:p-5">
          <div className="flex flex-wrap gap-2 border-b-2 border-blue-200 pb-3">
            <button
              type="button"
              onClick={() => setActiveTab("work")}
              className={`
                border-2 px-3 py-1 font-vcr
                sm:text-[0.75rem]
                md:text-[0.95rem]
                lg:text-[1.1rem]
                ${
                  activeTab === "work"
                    ? "border-blue-200 bg-[#e8dcf8] text-blue-500"
                    : "border-blue-200 bg-white text-blue-400 hover:bg-[#f3ecfb]"
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
                lg:text-[1.1rem]
                ${
                  activeTab === "process"
                    ? "border-blue-200 bg-[#e8dcf8] text-blue-500"
                    : "border-blue-200 bg-white text-blue-400 hover:bg-[#f3ecfb]"
                }
              `}
            >
              Design Process
            </button>
          </div>

          <div className="mt-3 flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-6">
            <div className="border-2 border-blue-200 bg-white p-3 md:w-[55%]">
              <button
                type="button"
                onClick={openLightbox}
                className="block w-full"
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="
                    mx-auto block w-full object-contain
                    sm:h-[230px]
                    md:h-[350px]
                    lp:h-[430px]
                    lg:h-[520px]
                  "
                />
              </button>
            </div>

            <div className="border-2 border-blue-200 bg-white p-3 md:w-[45%]">
              <p
                className="
                  border-b border-blue-200 pb-2 text-blue-400 font-vcr
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
                  mt-3 text-blue-500 font-vcr
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

          <div className="mt-4 flex items-center justify-between border-t-2 border-blue-200 pt-3">
            <button
              onClick={handlePrev}
              className="
                border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1 text-blue-400 font-vcr
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
                text-center text-blue-400 font-vcr
                sm:text-[0.8rem]
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
                border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1 text-blue-400 font-vcr
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
              border-2 border-blue-200 border-dashed
              bg-[#eee6f6]
              flex flex-col
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b-2 border-blue-200 bg-blue-300 px-2 py-1">
              <span className="text-white font-vcr text-sm">
                {currentImage.fileName}
              </span>

              <button
                onClick={closeLightbox}
                className="shrink-0 flex h-7 w-7 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[1rem] text-blue-400"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-[#f8f4ff] p-3 md:p-5">
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

                <p className="text-center text-blue-500 font-vcr text-sm md:text-base max-w-[60ch]">
                  {currentImage.description}
                </p>

                <div className="flex gap-4 mt-2">
                  <button
                    onClick={handlePrev}
                    className="border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1 text-blue-400 font-vcr hover:bg-white"
                  >
                    &lt; Prev
                  </button>

                  <button
                    onClick={handleNext}
                    className="border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1 text-blue-400 font-vcr hover:bg-white"
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