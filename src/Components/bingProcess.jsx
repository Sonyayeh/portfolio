import React, { useState } from "react";
import takeaway from "../BingDesignProcess/takeaway.svg"
import method from "../BingDesignProcess/methodology.svg"
import sus from "../BingDesignProcess/sus.svg"
import user1 from "../BingDesignProcess/user1.svg"
import user2 from "../BingDesignProcess/user2.svg"
import user3 from "../BingDesignProcess/user3.svg"
import user4 from "../BingDesignProcess/user4.svg"
import user5 from "../BingDesignProcess/user5.svg"
import task1 from "../BingDesignProcess/task1.svg"
import task1res from "../BingDesignProcess/task1res.svg"
import task2 from "../BingDesignProcess/task2.svg"
import task2res from "../BingDesignProcess/task2res.svg"
import task3 from "../BingDesignProcess/task3.svg"
import task3res from "../BingDesignProcess/task3res.svg"
import rec1 from "../BingDesignProcess/rec1.svg"
import rec2 from "../BingDesignProcess/rec2.svg"
import rec3 from "../BingDesignProcess/rec3.svg"
import rec4 from "../BingDesignProcess/rec4.svg"
import rec5 from "../BingDesignProcess/rec5.svg"
import beforenafter1 from "../BingDesignProcess/beforenafter1.svg"
import beforenafter2 from "../BingDesignProcess/beforenafter2.svg"
import beforenafter3 from "../BingDesignProcess/beforenafter3.svg"
import conclusion from "../BingDesignProcess/conclusion.svg"

const images = [
    { src: takeaway, alt: "Takeaway of the project" },
    { src: method, alt: "Methodology used in the project" },
    { src: sus, alt: "SUS score results" },
    { src: user1, alt: "User interview 1" },
    { src: user2, alt: "User interview 2" },
    { src: user3, alt: "User interview 3" },
    { src: user4, alt: "User interview 4" },
    { src: user5, alt: "User interview 5" },
    { src: task1, alt: "Task 1 layout" },
    { src: task1res, alt: "Task 1 results" },
    { src: task2, alt: "Task 2 layout" },
    { src: task2res, alt: "Task 2 results" },
    { src: task3, alt: "Task 3 layout" },
    { src: task3res, alt: "Task 3 results" },
    { src: rec1, alt: "Recommendation 1" },
    { src: rec2, alt: "Recommendation 2" },
    { src: rec3, alt: "Recommendation 3" },
    { src: rec4, alt: "Recommendation 4" },
    { src: rec5, alt: "Recommendation 5" },
    { src: beforenafter1, alt: "Before and After 1" },
    { src: beforenafter2, alt: "Before and After 2" },
    { src: beforenafter3, alt: "Before and After 3" },
    { src: conclusion, alt: "Conclusion of the design process" },
  ];
  
const BingProcess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  return (
    <div className="relative ml-[4rem] w-[19rem] mx-auto
    md:w-[46rem] md:ml-[-2rem]">
      <h2 className="text-center text-2xl font-bold mb-4 w-[17rem] text-purple-400 underline decoration-dashed
      sm:ml-[1rem] 
      md:text-[3rem] md:w-[35rem] md:pb-[2rem] md:ml-[8rem]
      lp:text-[5rem] lp:w-[60rem] lp:mt-[6rem] lp:pb-[3rem] lp:justify-center lp:items-center lp:text-center 
      lg:justify-center lg:items-center lg:ml-[5rem] lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
     Design Process:</h2>
     <h1 className="text-emerald-500
     sm:text-[1rem] sm:w-[23rem] sm:ml-[-2rem]
     md:text-[2rem] md:w-[55rem] md:ml-[3rem]
     lp:text-[2.5rem] lp:w-[60rem] lp:ml-[9rem]
     lg:text-[3rem] lg:w-[80rem] lg:ml-[2rem] lg:mt-[-2rem] lg:mb-[2rem]
     ">
        This section displays the design process of this project. It includes everything, from <span className="text-purple-400">
            the takeaways of the projects </span> to <span className="text-purple-400">tasks</span>, <span className="text-purple-400"> recommendations </span>, <span className="text-purple-400">before and after comparisons </span> and <span className="text-purple-400">
            conclusions </span>.
     </h1>

      <div className="overflow-x-auto flex space-x-4 py-4 scrollbar-visible
        lp:space-x-[4rem]
        sm:w-[290px]
        md:w-[710px] md:ml-[2rem]
        lp:w-[70rem] 
        lg:w-[70rem] lg:ml-[0rem]
      ">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 ml-[0rem] 
            sm:w-[280px]
            md:w-[700px] md:gap-x-3 md:pl-[3rem]
            lp:w-[30rem] 
            lg:w-[40rem]
          ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto hover:cursor-pointer"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

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
                  lp:w-[500px] lp:h-[40rem]
                ">
                  <img src={image.src} alt={image.alt} className="max-w-full max-h-full hover:cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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

export default BingProcess;
