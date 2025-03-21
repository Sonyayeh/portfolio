import React, { useState } from "react";
import Poster from "../assets/volleyball/poster.png";
import First from "../assets/volleyball/firstdesign.png";
import Second from "../assets/volleyball/seconddesign.png";
import Third from "../assets/volleyball/thirddesign.png";
import Final from "../assets/volleyball/Finaldesign.png";
import Flower from "../assets/volleyball/hibiscussketch.png";

const images = [
    { src: First, alt: "First Design", description: "This is the first sketch. My idea was to simply create a group of people enjoying beach volleyball on the beach. The concept was simple, but the execution was not so ideal. After working on it for a while, I decided to scrap the idea." },
    { src: Second, alt: "Second Design", description: "This is the second sketch. I shifted my idea to having a person reaching for the volleyball, as if they were reaching for the champion position of the volleyball tournament. I thought it would be a nice way to represent the event, only to realize the tournament isn't just about winning, but also enjoying the sport. In the end, I scrapped this idea." },
    { src: Third, alt: "Third Design", description: "This is the third sketch. I decided to focus more on volleyball as a sport. Thinking about how it's a beach volleyball tournament, there has to have nature that features the beach. With that in mind, I decided to add palm trees, seagulls, with the ball being in the center and main focus of the poster." },
    { src: Final, alt: "Final Design", description: "This is the fourth sketch. After having others looking at the third sketch, I decided to make the ball even larger, with some other elements that features the tropical background of beach volleyball, as it originated in 1915 on Waikiki Beach, Hawaii." },
    { src: Flower, alt: "Hibiscus Sketch", description: "This is the hibiscus sketch. Since I decided on persuing the fourth sketch, I added in some hibiscus since they're the first tropical flower that came into my mind. I sketched them in procreate, and was imported to Adobe Illustrator soon after." },
    { src: Poster, alt: "Poster", description: "This is the final product. I took the fourth sketch as a starting point, and produced this poster. The creation of the poster is all done in Adobe Illustrator. I also added some sun rays at the top of the poster to imitate the sun, as well as adding some hibiscus flowers at the bottom. The title includes orange and yellow, which are both tropical colors." },
];

const BeachWorkSection = () => {
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
      ">Sketches & Process:</h2>
      <div className="overflow-x-auto flex space-x-4 py-4 scrollbar-visible 
      md:w-[700px] md:ml-[-4rem]
      ">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 ml-[2rem] 
          sm:w-[280px]
          md:w-[700px] 
          ">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto cursor-pointer"
              onClick={() => openLightbox(index)}
            />
            <p className="mt-2 text-left text-lg text-gray-700 
            font-Dos leading-[4rem]
            md:text-[2.5rem] md:pr-[4rem]
            ">{image.description}</p>
          </div>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 lightbox-overlay" onClick={handleClickOutside}>
          <div className="relative flex items-center overflow-x-auto scrollbar-visible">

            <div className="flex space-x-4 py-4">
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-[420px] pr-3
                md:w-[850px] md:pr-2
                ">
                  <img src={image.src} alt={image.alt} className="max-w-full max-h-full" />
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

export default BeachWorkSection;