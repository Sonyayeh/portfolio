import React, { useState } from "react";
import empathy from "../BcitDesignProcess/empathyBcit.svg"
import flow from "../BcitDesignProcess/FlowchartBcit.svg"
import grid from "../BcitDesignProcess/gridBcit.svg"
import persona1 from "../BcitDesignProcess/personaBcit1.svg"
import persona2 from "../BcitDesignProcess/personaBcit2.svg"
import story from "../BcitDesignProcess/userstoryBcit.svg"

const images = [
    { src: flow, alt: "Flowchart" },
    { src: grid, alt: "Grid System" },
    { src: persona1, alt: "User Persona 1" },
    { src: persona2, alt: "User Persona 2" },
    { src: empathy, alt: "Empathy Map" },
    { src: story, alt: "User Story Map" },
];

const BcitProcess = () => {
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
      sm:ml-[0rem] 
      md:text-[3rem] md:w-[35rem] md:pb-[2rem] md:ml-[8rem]
      lp:text-[5rem] lp:w-[60rem] lp:mt-[6rem] lp:pb-[3rem] lp:justify-center lp:items-center lp:text-center 
      lg:justify-center lg:items-center lg:ml-[5rem] lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
     Design Process:</h2>
     <h1 className="text-emerald-500
     sm:text-[1rem] sm:w-[19.5rem]
     md:text-[2rem] md:w-[50rem] md:ml-[3rem]
     lp:text-[2.5rem] lp:w-[60rem] lp:ml-[9rem]
     lg:text-[3rem] lg:w-[80rem] lg:ml-[2rem] lg:mt-[-2rem] lg:mb-[2rem]
     ">
        This section displays the design process of this project. It includes <span className="text-purple-400">flowchart</span>, <span className="text-purple-400">user personas</span>, <span className="text-purple-400">user story</span> and <span className="text-purple-400">empathy map</span>
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

export default BcitProcess;
