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
      <h2
        className="
          text-center underline decoration-dashed text-purple-400
          sm:text-[2rem] sm:pb-[1rem] sm:w-[23rem] sm:ml-[2rem]
          md:text-[4rem] md:w-[45rem] md:mx-auto md:pt-[5rem] md:ml-[5rem]
          lp:text-[4rem] lp:w-[65rem]
          lg:text-[5rem] lg:w-[61rem] lg:ml-[5rem] lg:pb-[2rem]
        "
      >
        Design Process:
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
        This section highlights the product design process behind the project,
        including
        <span className="text-purple-400"> team structure</span>,
        <span className="text-purple-400"> visual system development</span>,
        <span className="text-purple-400"> user story thinking</span>, and
        <span className="text-purple-400"> journey mapping</span>.
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
            BoardProcess.exe
          </span>

          <div className="flex gap-1">
            <span className="border border-blue-400 bg-[#f8f4ff] text-blue-400 px-1">
              _
            </span>
            <span className="border border-blue-400 bg-[#f8f4ff] text-blue-400 px-1">
              □
            </span>
            <span className="border border-blue-400 bg-[#f8f4ff] text-blue-400 px-1">
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

          <div className="mt-4">
            <div className="border-2 border-blue-200 bg-white p-3">
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

            <div className="mt-5 border-2 border-blue-200 bg-white p-4 md:p-6">
              <p
                className="
                  border-b border-blue-200 pb-3 text-blue-400 font-vcr
                  sm:text-[0.9rem]
                  md:text-[1.1rem]
                  lp:text-[1.25rem]
                  lg:text-[1.5rem]
                "
              >
                File: {currentImage.fileName}
              </p>

              <p
                className="
                  mt-4 text-blue-500 font-vcr
                  sm:text-[0.9rem] sm:leading-8
                  md:text-[1.2rem] md:leading-[2.5rem]
                  lp:text-[1.4rem] lp:leading-[2.8rem]
                  lg:text-[1.7rem] lg:leading-[3.3rem]
                "
              >
                {currentImage.description}
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between border-t-2 border-blue-200 pt-4">
            <button
              onClick={handlePrev}
              className="
                border-2 border-blue-200 bg-[#e8dcf8] px-5 py-2 text-blue-400 font-vcr
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
                border-2 border-blue-200 bg-[#e8dcf8] px-5 py-2 text-blue-400 font-vcr
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
                className="shrink-0 flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400 sm:text-[2rem]"
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

export default BoardProcess;