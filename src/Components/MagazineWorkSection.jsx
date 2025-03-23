import React, { useState } from "react";
import Magazine from "../assets/Magazine/magazine.jpg";
import Posing from "../assets/Magazine/magazineposing.jpg";
import Holding from "../assets/Magazine/magazineholding.jpg";

const images = [
    { src: Magazine, alt: "Magazine", description: "This is the first sketch. My idea was to simply create a group of people enjoying beach volleyball on the beach. The concept was simple, but the execution was not so ideal. After working on it for a while, I decided to scrap the idea." },
    { src: Posing, alt: "The standing magazine with reflection", description: "This is the first official mockup of this project. I wanted it to look exclusive and rare (because it doesn't exist), so I made the mockup to look like it was locked up in a display case with a simple reflection of itself against the ground." },
    { src: Holding, alt: "Someone holding the magazine as if it was real", description: "Since it is a magazine cover design, it should have a mockup of a person holding the product. I think the magazine goes very well with the person, for the person in the mockup has a very classy look with their outfit!" },
];

const MagazineWorkSection = () => {
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
    <div className="relative ml-[4rem] w-[18rem] mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4 w-[17rem] text-blue-400 underline decoration-dashed
      sm:ml-[1rem] 
      md:text-[3rem] md:w-[35rem] md:pb-[2rem]
      lp:text-[5rem] lp:w-[70rem] lp:pb-[2rem] lp:ml-[-3rem]
      lg:justify-center lg:items-center lg:ml-[-1rem] lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]
      ">Sketches & Process:</h2>
      <div className="overflow-x-auto flex space-x-4 py-4 scrollbar-visible 
      // this is where the scroller window is 
      sm:w-[320px] sm:ml-[-4rem]
      md:w-[700px] md:ml-[-4rem]
      lp:w-[55rem] lp:ml-[4rem]
      lg:ml-[2rem] lg:w-[54rem]
      ">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 ml-[2rem] 
          sm:w-[280px]  sm:pl-[2rem]
          md:w-[650px] 
          lp:w-[50rem] 
          ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto hover:cursor-hover"
              onClick={() => openLightbox(index)}
            />
            {/* added a line for separate sections */}
            <div className="border-t-2 border-blue-500 my-10 
               sm:w-[15rem] sm:ml-[0rem]
               md:w-[38rem] md:ml-[0rem] 
               lp:w-[44rem] lp:ml-[2rem]
               
               "></div>
            <p className="mt-2 text-left text-lg text-blue-500 
            font-Dos 
            sm:mb-8 sm:w-[16rem]
            md:text-[2.5rem] md:pr-[4rem] md:leading-[4rem] md:w-[43rem]
            lp:ml-[2rem] lp:w-[49rem]
            lg:ml-[3rem]
            ">{image.description}</p>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 lightbox-overlay" onClick={handleClickOutside}>
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeLightbox}>X</button>
          <div className="relative flex items-center overflow-x-auto scrollbar-visible">
            <div className="flex space-x-4 py-4">
              {images.map((image, index) => (
                <div key={index} 
                // adjustment for the lightbox images
                className="flex-shrink-0 w-[420px] pr-3
                md:w-[750px] md:pr-2
                lp:w-[500px] lp:pr-2
                ">
                  <img src={image.src} alt={image.alt} className="max-w-full max-h-full hover:cursor-hover" />
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

export default MagazineWorkSection;