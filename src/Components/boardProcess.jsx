import React, { useState, useRef } from "react";
import mood from "../BoardDesignProcess/moodboard.svg";
import style from "../BoardDesignProcess/styleguide.svg";
import team from "../BoardDesignProcess/team.svg";

const images = [
  { src: team, alt: "Team members!" },
  { src: style, alt: "The style guide we followed" },
  { src: mood, alt: "A simple moodboard we followed for the project!" },
];

const BoardProcess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollRef = useRef(null);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("lightbox-overlay")) {
      closeLightbox();
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative ml-[4rem] w-[19rem] mx-auto md:w-[46rem] md:ml-[-2rem]">
      <h2 className="text-center text-2xl font-bold mb-4 w-[17rem] text-purple-400 underline decoration-dashed
        sm:ml-[1rem] 
        md:text-[3rem] md:w-[35rem] md:pb-[2rem] md:ml-[8rem]
        lp:text-[5rem] lp:w-[60rem] lp:mt-[6rem] lp:pb-[3rem]
        lg:ml-[5rem] lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
        Design Process:
      </h2>
      <h1 className="text-emerald-500
        sm:text-[1rem] sm:w-[23rem] sm:ml-[-1rem]
        md:text-[2rem] md:w-[55rem] md:ml-[3rem]
        lp:text-[2.5rem] lp:w-[60rem] lp:ml-[9rem]
        lg:text-[3rem] lg:w-[80rem] lg:ml-[2rem] lg:mt-[-2rem] lg:mb-[2rem]">
        This section displays the design process of this project. It includes <span className="text-purple-400">the team members and their roles</span>, <span className="text-purple-400">style guide</span> and <span className="text-purple-400">mood board</span>.
      </h1>

      {/* Arrow buttons */}
      <div
        className="hidden lp:block lg:block absolute top-1/2 left-[-5rem] transform -translate-y-1/2 text-5xl text-purple-500 hover:text-green-500 hover:cursor-hover
        lg:left-[-15rem] lp:left-[-1rem] z-10"
        onClick={handlePrev}
      >
        &#8592;
      </div>

      <div
        className="hidden lp:block lg:block absolute top-1/2 right-[-5rem] transform -translate-y-1/2 text-5xl text-purple-500 hover:text-green-500 hover:cursor-hover
        lg:right-[-40rem] lp:right-[-30rem] z-10"
        onClick={handleNext}
      >
        &#8594;
      </div>

      {/* Scrollable image section */}
      <div
        ref={scrollRef}
        className="overflow-x-auto flex space-x-4 py-4 scrollbar-visible
        lp:space-x-[4rem]
        sm:w-[290px]
        md:w-[710px] md:ml-[2rem]
        lp:w-[70rem] 
        lg:w-[70rem] lg:ml-[0rem]"
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 ml-[0rem]
            sm:w-[280px]
            md:w-[700px] md:gap-x-3 md:pl-[3rem]
            lp:w-[30rem]
            lg:w-[40rem]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto hover:cursor-pointer"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 lightbox-overlay hover:cursor-pointer"
          onClick={handleClickOutside}
        >
          <button className="absolute top-4 right-4 text-white text-3xl z-[9999]" onClick={closeLightbox}>X</button>
          <div className="relative flex items-center overflow-x-auto scrollbar-visible">
            <div className="flex space-x-4 py-4">
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-[420px] pr-3 
                  md:w-[750px] md:pr-2
                  lp:w-[500px] lp:h-[40rem]">
                  <img src={image.src} alt={image.alt} className="max-w-full max-h-full hover:cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style>
        {`
          .scrollbar-visible::-webkit-scrollbar {
            height: 8px;
          }
          .scrollbar-visible::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 4px;
          }
          .scrollbar-visible::-webkit-scrollbar-thumb:hover {
            background-color: #555;
          }
        `}
      </style>
    </div>
  );
};

export default BoardProcess;
