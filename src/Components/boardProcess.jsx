import React, { useState } from "react";
import mood from "../BoardDesignProcess/moodboard.svg";
import style from "../BoardDesignProcess/styleguide.svg";
import team from "../BoardDesignProcess/team.svg";
import summary from "../assets/Boardwalk/BrandSummary.jpg";
import approach from "../assets/Boardwalk/UserStoryApproach.jpg";
import example from "../assets/Boardwalk/UserStoryExample.jpg";
import userjourney from "../assets/Boardwalk/BoardUserJourney.png";

const workImages = [
  {
    src: team,
    alt: "Team members and roles",
    fileName: "team_roles.svg",
    description:
      "This document outlines the team structure and responsibilities for the project. Defining roles early helped organize collaboration, clarify ownership, and support a smoother product design workflow from planning to execution.",
  },
  {
    src: style,
    alt: "Style guide",
    fileName: "style_guide.svg",
    description:
      "This style guide established the visual system for the project, including typography, colour choices, and interface patterns. It helped maintain consistency across screens and supported a more cohesive product experience.",
  },
  {
    src: approach,
    alt: "User story approach",
    fileName: "user_story_approach.jpg",
    description:
      "This user story approach helped define what users needed to accomplish and why those tasks mattered. Framing features around user goals supported more intentional design decisions and kept the experience focused on usability.",
  },
  {
    src: example,
    alt: "User story examples",
    fileName: "user_story_examples.jpg",
    description:
      "These user story examples translated broader goals into specific scenarios and actions. Breaking the experience into practical use cases made it easier to prioritize features and shape interactions around real user needs.",
  },
  {
    src: userjourney,
    alt: "App user journey",
    fileName: "user_journey.png",
    description:
      "This user journey maps the steps a person may take while moving through the app. It helped visualize touchpoints, identify potential friction, and ensure the overall flow felt logical, clear, and user-centred.",
  },
  {
    src: summary,
    alt: "Brand summary",
    fileName: "brand_summary.jpg",
    description:
      "This summary captures the project's overall direction, including its tone, goals, and intended experience. It acted as a reference point throughout the design process to keep the product aligned with its purpose and identity.",
  },
];

const processImages = [
  {
    src: mood,
    alt: "Mood board",
    fileName: "mood_board.svg",
    description:
      "This mood board helped establish the project's visual tone by gathering references for colour, atmosphere, and overall aesthetic direction. It supported early concept development and helped guide later interface decisions.",
  },
];

const BoardProcess = () => {
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

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("lightbox-overlay")) {
      closeLightbox();
    }
  };

  return (
    <section className="w-full">
      <h1 className="flex justify-self-center justify-center
                underline decoration-dashed text-purple-400
                sm:text-[1.7rem] sm:pb-[2rem] sm:w-[22rem] 
                md:text-[3rem] md:pt-[1rem] md:w-[60rem] md:mb-[2rem]
                lp:text-[2.8rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[2rem] lp:pt-[3rem]
                lg:text-[4.5rem] lg:w-[70rem]">
        Design Process:
      </h1>

      <p
          className=" justify-self-center
            text-purple-500 font-vcr 
            sm:text-[1rem] sm:w-[22rem] sm:pb-[1.5rem]
            md:text-[2rem] md:w-[50rem] md:mb-[2rem]
            lp:text-[2rem] lp:w-[65rem] lp:mb-[2rem]
            lg:text-[2rem] lg:w-[60rem] lg:mt-[1rem] lg:mb-[2rem]
          "
        >
        This section highlights the product design process behind the project,
        including
        <span className="text-orange-400"> team structure</span>,
        <span className="text-orange-400"> visual system development</span>,
        <span className="text-orange-400"> user story thinking</span>, and
        <span className="text-orange-400"> journey mapping</span>.
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

export default BoardProcess;