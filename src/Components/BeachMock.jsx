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
      md:text-[3rem] md:w-[35rem] md:pb-[2rem] md:ml-[8rem]
      lp:text-[5rem] lp:w-[70rem] lp:pb-[2rem] lp:ml-[3rem]
      lg:justify-center lg:items-center lg:ml-[5rem] lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
      Mockups:</h2>
      <div>
        <div className="overflow-x-auto flex space-x-4 py-4 scrollbar-visible
        lp:space-x-[4rem]
        // the scroller window:
        sm:w-[290px]
        md:w-[710px] md:ml-[2rem]
        lp:w-[73rem]
        lg:ml-[0rem]
        ">
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 ml-[0rem] 
            sm:w-[280px] sm:
            md:w-[700px] md:gap-x-3 md:pl-[3rem]
            lp:w-[30rem] 
            ">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto hover:cursor-hover"
                onClick={() => openLightbox(index)}
              />
              {/* added a line for separate sections */}
              <div className="border-t-2 border-blue-500 my-10 
               sm:w-[16rem] sm:ml-[0rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[27rem] lp:ml-[0rem]
               "></div>
              <p className="mt-2 text-left text-lg text-blue-500
              font-Dos 
              md:text-[2.5rem] md:w-[43rem] md:gap-x-3 md:pl-[1rem] md:leading-[4rem]
              lp:ml-[-1rem] lp:w-[30rem] lp:text-[2rem]
              ">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 lightbox-overlay" onClick={handleClickOutside}>
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeLightbox}>X</button>
          <div className="relative flex items-center overflow-x-auto scrollbar-visible">
            <div className="flex space-x-3 
            md:w-[850px] md:pr-2
            ">
              {images.map((image, index) => (
                <div key={index} 
                // lightbox image adjustment
                className="flex-shrink-0 w-[400px]
                md:w-[850px] md:pr-2
                lp:w-[60rem] lp:h-[49rem]
                ">
                  <img src={image.src} alt={image.alt} className="max-w-full max-h-full pl-[2rem] pr-[2rem] hover:cursor-hover" />
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