import React, { useState } from "react";
import Login from "../assets/BCIT/login.png";
import Concept from "../assets/BCIT/one.png";

const images = [
  {
    src: Concept,
    alt: "Rough Concept Sketches",
    description:
      "This is a simple, generalized sketch of each screen with some reasonings. Before I did the sketches, I knew immediately what I want to change and improve on. Each screen specifically mentions features that I wished to implement and believed each improvements would benefit user experience and interface.",
  },
  {
    src: Login,
    alt: "Bus Stop Mockup",
    description:
      "This is a log in mockup. It only made sense if the mockup is to display on a computer/laptop. This mockup was created and edited with Adobe Photoshop.",
  },
];

const BcitWork = () => {
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
    <div
      className="relative ml-[4rem] w-[19rem] mx-auto
    md:w-[46rem] md:ml-[-2rem]"
    >
      <h2
        className="text-center text-2xl font-bold mb-4 w-[17rem] text-purple-400 underline decoration-dashed
      sm:ml-[0rem] 
      md:text-[3rem] md:w-[35rem] md:pb-[2rem] md:ml-[8rem]
      lp:text-[5rem] lp:w-[60rem] lp:mt-[6rem] lp:pb-[3rem] lp:justify-center lp:items-center lp:text-center 
      lg:justify-center lg:items-center lg:ml-[4rem] lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]"
      >
        Sketches & Mockups:
      </h2>

      <div>
        <div
          className="overflow-x-auto flex space-x-4 py-4 scrollbar-visible
        lp:space-x-[4rem]
        sm:w-[290px]
        md:w-[710px] md:ml-[2rem]
        lp:w-[70rem] lg:ml-[-4rem]"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 ml-[0rem] 
              sm:w-[280px]
              md:w-[700px] md:gap-x-3 md:pl-[3rem]
              lp:w-[50rem]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto hover:cursor-pointer"
                onClick={() => openLightbox(index)}
              />

              {/* Divider */}
              <div
                className="border-t-2 border-purple-500 my-10 
               sm:w-[16rem]
               md:w-[40rem] md:ml-[4rem] 
               lp:w-[50rem] lp:ml-[0rem]"
              ></div>

              {/* Description */}
              <p
                className="mt-2 text-left text-lg text-emerald-500 font-Dos
              md:text-[2.5rem] md:w-[43rem] md:gap-x-3 md:pl-[1rem] md:leading-[4rem]
              lp:w-[50rem] lp:ml-[0rem]"
              >
                {image.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 lightbox-overlay"
          onClick={handleClickOutside}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeLightbox}
          >
            X
          </button>
          <div className="relative flex items-center overflow-x-auto scrollbar-visible">
            <div className="flex space-x-3 md:w-[850px] md:pr-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[400px]
                  md:w-[850px] md:pr-2
                  lp:w-[60rem] lp:h-[49rem]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="max-w-full max-h-full pl-[2rem] pr-[2rem] hover:cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scrollbar Styles */}
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

export default BcitWork;
