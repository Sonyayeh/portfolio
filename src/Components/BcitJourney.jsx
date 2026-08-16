import React, { useState } from "react";
import Login from "../assets/BCIT/weblogin.png";
import Home from "../assets/BCIT/home.png";
import Grades from "../assets/BCIT/semester.png";
import Quiz from "../assets/BCIT/quiz.png";

const images = [
  {
    src: Login,
    alt: "Login Page",
    fileName: "login_screen.png",
    description:
      "The user journey begins at the login page. This entry point is critical as it sets the first impression of the system. The redesign focuses on clarity, accessibility, and reducing friction during authentication.",
  },
  {
    src: Home,
    alt: "Home Dashboard",
    fileName: "home_dashboard.png",
    description:
      "After logging in, users land on the dashboard. This screen prioritizes important information such as current semester details and quick access to grades, reducing unnecessary navigation.",
  },
  {
    src: Grades,
    alt: "Course Page",
    fileName: "course_overview.png",
    description:
      "The course overview allows users to quickly scan all enrolled classes. The layout emphasizes readability and hierarchy, making it easier to locate relevant academic information. Students not only can have access to the course information page, but also check their grades by clicking on View Assignment/Exercises and View Quizzes.",
  },
  {
    src: Quiz,
    alt: "Quiz Detail Page",
    fileName: "quiz_detail.png",
    description:
      "The detailed quiz view provides performance insights such as scores and class averages. The design aims to present data clearly while maintaining visual consistency across the platform. By hovering over Show Grade, it will display student's grade.",
  },
];

const BcitJourney = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("lightbox-overlay")) {
      closeLightbox();
    }
  };

  const currentImage = images[currentIndex];

  return (
    <section className="w-full justify-self-center">
      {/* TITLE */}
       <h1 className="flex justify-self-center justify-center text-blue-400 underline decoration-dashed
        sm:text-[1.7rem] sm:w-[23rem]
                md:text-[3rem] md:w-[49rem]
                lp:text-[4rem] lp:w-[60rem] lp:items-center
                lg:text-[3.5rem] lg:w-[60rem]lg:mt-[2rem]">
        User Journey:
      </h1>

      {/* WINDOW */}
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
        
        {/* TITLE BAR */}
        <div className="flex items-center justify-between border-2 border-orange-200 bg-orange-300 px-2 py-1">
          <span className="text-white font-vcr
          lg:text-[2rem]
          ">
            JourneyViewer.exe
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

        {/* BODY */}
         <div className="mt-3 border-2 border-blue-200 bg-[#f8f4ff] p-3 md:p-4 lg:p-5">
           <div className="flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-6">
            
            {/* IMAGE */}
            <div
              className="
                border-2 border-blue-200 bg-white p-3
                md:w-[45%]
              "
            >
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

            {/* TEXT */}
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

          {/* CONTROLS */}
         <div className="mt-4 flex items-center justify-between border-t-2 border-blue-200 pt-3">
            <button
              onClick={handlePrev}
              className="
                border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1 text-blue-400 font-vcr
                hover:bg-[#f8f4ff]
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
              {currentIndex + 1} / {images.length}
            </p>

             <button
              onClick={handleNext}
              className="
                border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1 text-blue-400 font-vcr
                hover:bg-[#f8f4ff]
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

      {/* LIGHTBOX */}
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
      {/* TITLE BAR */}
      <div className="flex items-center justify-between border-b-2 border-orange-200 bg-orange-300 px-2 py-1">
        <span className="text-white font-vcr text-sm">
          {currentImage.fileName}
        </span>

        <button
          onClick={closeLightbox}
                className="shrink-0 flex h-4 w-4 items-center justify-center border border-orange-400 bg-[#f8f4ff] text-[0.65rem] text-orange-400
                sm:text-[2rem] 
          "
        >
          ×
        </button>
      </div>

      {/* BODY */}
      <div className="flex-1 overflow-y-auto bg-[#f8f4ff] p-3 md:p-5">
        <div className="flex flex-col items-center gap-4">

          {/* IMAGE */}
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

          {/* CONTROLS */}
          <div className="flex gap-4 mt-2">
            <button
              onClick={handlePrev}
              className="border-2 border-purple-200 bg-[#e8dcf8] px-3 py-1 text-purple-400 font-vcr hover:bg-white
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
              className="border-2 border-purple-200 bg-[#e8dcf8] px-3 py-1 text-purple-400 font-vcr hover:bg-white
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

export default BcitJourney;