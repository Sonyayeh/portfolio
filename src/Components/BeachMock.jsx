import React, { useState } from "react";
import Bus from "../assets/volleyball/Busstop.png";
import Flyer from "../assets/volleyball/vollyball.png";

const images = [
    { src: Bus, alt: "Bus Stop Mockup", description: "This is the bus stop mockup. I figured it'll look nice in a larger surface, hense I chose to do a bus stop instead. The mockup is done with Adobe Photoshop, and the mockup background was downloaded from Adobe Stock Images." },
    { src: Flyer, alt: "Flyer Mockup", description: "This is the flyer mockup. I thought doing a flyer mockup would be ideal if event hosters are trying to promote their event. The mockup is done with Adobe Photoshop, and the mockup background was downloaded from Adobe Stock Images." },
];

const BeachMock = () => {
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
    md:w-[46rem] md:ml-[-2rem]
    ">
      <h2 className="text-center text-2xl font-bold mb-4 w-[17rem] text-blue-400 underline decoration-dashed
      sm:ml-[1rem] 
      md:text-[3rem] md:w-[35rem] md:pb-[2rem] md:ml-[8rem] ">Sketches & Process:</h2>
      <div className="overflow-x-auto flex space-x-4 py-4 scrollbar-visible">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 ml-[2rem] 
          sm:w-[280px]
          md:w-[700px] md:gap-x-3 md:pl-[3rem]
          ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto cursor-pointer"
              onClick={() => openLightbox(index)}
            />
            <p className="mt-2 text-left text-lg text-gray-700
            font-Dos leading-[4rem]
            md:text-[2.5rem] md:w-[43rem] md:gap-x-3 md:pl-[1rem]
            
            ">{image.description}</p>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 lightbox-overlay" onClick={handleClickOutside}>
          <div className="relative flex items-center overflow-x-auto scrollbar-visible">
            <div className="flex space-x-3 
            md:w-[850px] md:pr-2
            ">
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-[400px]
                md:w-[850px] md:pr-2
                ">
                  <img src={image.src} alt={image.alt} className="max-w-full max-h-full pl-[2rem] pr-[2rem]" />
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

export default BeachMock;