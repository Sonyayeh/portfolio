import React, { useState, useRef } from "react";
import Poster from "../assets/volleyball/poster.png";
import First from "../assets/volleyball/firstdesign.png";
import Second from "../assets/volleyball/seconddesign.png";
import Third from "../assets/volleyball/thirddesign.png";
import Final from "../assets/volleyball/Finaldesign.png";
import Flower from "../assets/volleyball/hibiscussketch.png";

const images = [
  {
    src: First,
    alt: "First Design",
    description:
      "This is the first sketch. My idea was to simply create a group of people enjoying beach volleyball on the beach. The concept was simple, but the execution was not so ideal. After working on it for a while, I decided to scrap the idea.",
  },
  {
    src: Second,
    alt: "Second Design",
    description:
      "This is the second sketch. I shifted my idea to having a person reaching for the volleyball, as if they were reaching for the champion position of the volleyball tournament. I thought it would be a nice way to represent the event, only to realize the tournament isn't just about winning, but also enjoying the sport. In the end, I scrapped this idea.",
  },
  {
    src: Third,
    alt: "Third Design",
    description:
      "This is the third sketch. I decided to focus more on volleyball as a sport. Thinking about how it's a beach volleyball tournament, there has to have nature that features the beach. With that in mind, I decided to add palm trees, seagulls, with the ball being in the center and main focus of the poster.",
  },
  {
    src: Final,
    alt: "Final Design",
    description:
      "This is the fourth sketch. After having others looking at the third sketch, I decided to make the ball even larger, with some other elements that features the tropical background of beach volleyball, as it originated in 1915 on Waikiki Beach, Hawaii.",
  },
  {
    src: Flower,
    alt: "Hibiscus Sketch",
    description:
      "This is the hibiscus sketch. Since I decided on pursuing the fourth sketch, I added in some hibiscus since they're the first tropical flower that came into my mind. I sketched them in procreate, and was imported to Adobe Illustrator soon after.",
  },
  {
    src: Poster,
    alt: "Poster",
    description:
      "This is the final product. I took the fourth sketch as a starting point, and produced this poster. The creation of the poster is all done in Adobe Illustrator. I also added some sun rays at the top of the poster to imitate the sun, as well as adding some hibiscus flowers at the bottom. The title includes orange and yellow, which are both tropical colors.",
  },
];

const BeachWorkSection = () => {
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
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative ml-[4rem] w-[19rem] mx-auto md:w-[46rem] md:ml-[-2rem]">
      <h2 className="text-center text-2xl font-bold mb-4 w-[17rem] text-blue-400 underline decoration-dashed
        sm:ml-[0rem] 
        md:text-[3rem] md:w-[35rem] md:pb-[2rem] md:ml-[8rem]
        lp:text-[5rem] lp:w-[60rem] lp:mt-[6rem] lp:pb-[3rem] lp:justify-center lp:items-center lp:text-center 
        lg:justify-center lg:items-center lg:ml-[4rem] lg:text-7xl lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
        Sketches & Process:
      </h2>

      <div className="relative">
        <div
          className="overflow-x-auto flex space-x-4 py-4 scrollbar-visible
          lp:space-x-[4rem]
          sm:w-[290px]
          md:w-[710px] md:ml-[2rem]
          lp:w-[60rem] lp:ml-[8rem]
          lg:w-[80rem] lg:ml-[-5rem] lg:flex lg:items-center"
          ref={scrollRef}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 ml-[0rem] 
              sm:w-[280px]
              md:w-[700px] md:gap-x-3 md:pl-[3rem]
              lp:w-[30rem]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto hover:cursor-pointer"
                onClick={() => openLightbox(index)}
              />

              <div
                className="border-t-2 border-blue-500 my-10 
                 sm:w-[16rem]
                 md:w-[40rem] md:ml-[4rem] 
                 lp:w-[27rem] lp:ml-[0rem]"
              ></div>

              <p
                className="mt-2 text-left text-lg text-blue-500 font-Dos
                md:text-[2.5rem] md:w-[43rem] md:gap-x-3 md:pl-[1rem] md:leading-[4rem]
                lp:w-[30rem] lp:text-[2rem] lp:ml-[0rem]"
              >
                {image.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="hidden lp:block lg:block absolute top-1/2 left-[-5rem] transform -translate-y-1/2 text-5xl text-blue-500 hover:text-orange-500 hover:cursor-pointer
          lg:left-[-15rem]
          lp:left-[-1rem]"
          onClick={() => {
            handlePrev();
            scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
          }}
        >
          &#8592;
        </div>

        <div
          className="hidden lp:block lg:block absolute top-1/2 right-[-5rem] transform -translate-y-1/2 text-5xl text-blue-500 hover:text-orange-500 hover:cursor-pointer
          lg:right-[-40rem]
          lp:right-[-30rem]"
          onClick={() => {
            handleNext();
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
          }}
        >
          &#8594;
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

          <button
            className="absolute left-4 text-white text-5xl z-10"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            &#8592;
          </button>

          <div className="flex flex-col items-center px-4">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-w-[90vw] max-h-[80vh] object-contain"
            />
            <p className="text-white mt-4 max-w-[80vw] text-center">
              {images[currentImageIndex].description}
            </p>
          </div>

          <button
            className="absolute right-4 text-white text-5xl z-10"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            &#8594;
          </button>
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

export default BeachWorkSection;
