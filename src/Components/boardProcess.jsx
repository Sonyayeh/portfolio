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
      "Assigning roles at the outset, project manager, web designer, graphic designer, app designer, gave the team a clear division of ownership before any design work began. That structure proved essential once the project moved into waterfall execution, where ambiguity about who owned what would have slowed everything down.",
  },
  {
    src: style,
    alt: "Style guide",
    fileName: "style_guide.svg",
    description:
      "Typography, colour, and interface patterns were consolidated into a single reference to ensure consistency didn't rely on memory or assumption. Every screen that followed drew from this system directly, which is part of why the final product reads as one coherent experience rather than a set of loosely related screens.",
  },
  {
    src: approach,
    alt: "User story approach",
    fileName: "user_story_approach.jpg",
    description:
      "Rather than designing around assumed features, this stage started by asking what users actually needed to accomplish, and why that task mattered to them in the first place. That distinction, need versus assumption, shaped which features made the final cut.",
  },
  {
    src: example,
    alt: "User story examples",
    fileName: "user_story_examples.jpg",
    description:
      "Translating broad goals into specific, situational scenarios made prioritization possible. A goal like browse available boards easily means little until it's grounded in an actual use case; these examples provided that grounding.",
  },
  {
    src: userjourney,
    alt: "App user journey",
    fileName: "user_journey.png",
    description:
      "Mapping the likely path a user takes through the app surfaced friction points that weren't visible when screens were considered individually. Sequence matters as much as content, a logical flow can fail even when every screen, in isolation, looks correct.",
  },
  {
    src: summary,
    alt: "Brand summary",
    fileName: "brand_summary.jpg",
    description:
      "Establishing tone, goals, and intended experience early gave the project a fixed point to return to whenever a decision felt uncertain. Design work drifts without that anchor; this summary was what kept the product's identity consistent from concept through execution.",
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
      <h1 className="flex justify-center text-purple-400 underline decoration-dashed justify-self-center
        sm:text-[1.7rem] sm:w-[23rem] sm:justify-center
                md:text-5xl md:pt-[5rem] md:w-[35rem] md:mb-[2rem]
                 lp:text-[2.8rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[5rem]
                lg:text-[3rem] lg:w-[40rem] lg:mt-[2rem]">
        Design Process:
      </h1>

      <p
          className=" justify-self-center
            text-purple-500 font-vcr justify-self-center
            sm:text-[1rem] sm:w-[22rem] sm:pb-[1.5rem]
            md:text-[1.8rem] md:w-[40rem] md:mb-[2rem]
            lp:text-[2rem] lp:w-[65rem] lp:ml-[4rem] lp:mb-[2rem]
            lg:text-[2rem] lg:leading-[3.5rem]
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
          sm:w-[22rem] 
          md:w-[45rem] md:p-5 
          lp:w-[65rem] lp:p-6 
          lg:w-[78rem] lg:p-7 
        "
      >
        <div className="flex items-center justify-between border-2 border-orange-200 bg-orange-300 px-2 py-1">
          <span className="text-white font-vcr sm:text-[0.8rem]
              md:text-[1rem]
              lp:text-[1.2rem]
              lg:text-[1.4rem]">
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
                  mt-3 text-orange-500 font-Dos
                  sm:text-[0.8rem] sm:leading-7
                  md:text-[1.05rem] md:leading-8
                  lp:text-[1.25rem] lp:leading-10
                  lg:text-[1.5rem] lg:leading-[3.5rem]
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