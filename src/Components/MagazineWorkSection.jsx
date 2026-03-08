import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Magazine from "../assets/Magazine/magazine.jpg";
import Posing from "../assets/Magazine/magazineposing.jpg";
import Holding from "../assets/Magazine/magazineholding.jpg";

const images = [
  {
    src: Magazine,
    alt: "Magazine",
    description:
      "This is the first sketch. My idea was to simply create a group of people enjoying beach volleyball on the beach. The concept was simple, but the execution was not so ideal. After working on it for a while, I decided to scrap the idea.",
  },
  {
    src: Posing,
    alt: "The standing magazine with reflection",
    description:
      "This is the first official mockup of this project. I wanted it to look exclusive and rare (because it doesn't exist), so I made the mockup to look like it was locked up in a display case with a simple reflection of itself against the ground.",
  },
  {
    src: Holding,
    alt: "Someone holding the magazine as if it was real",
    description:
      "Since it is a magazine cover design, it should have a mockup of a person holding the product. I think the magazine goes very well with the person, for the person in the mockup has a very classy look with their outfit!",
  },
];

const MagazineWorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Slide images using the actual slide width for proper alignment
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.children[0].offsetWidth;
      gsap.to(sliderRef.current, {
        x: -currentIndex * slideWidth,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [currentIndex]);

  const goToImage = (index) => setCurrentIndex(index);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full mx-auto">
      <h2
        className="text-center text-2xl font-bold mb-4 text-blue-400 underline decoration-dashed
        sm:text-3xl sm:w-[21rem] sm:ml-[3rem] md:text-4xl lp:text-5xl lg:text-6xl"
      >
        Sketches & Process:
      </h2>

      {/* Purple container */}
      <div
        className="relative bg-purple-100 p-4 pt-0 w-full sm:w-[25rem] sm:pt-[1rem] sm:ml-[1rem]
        md:w-[50rem] lp:w-[60rem] lg:w-[80rem] mx-auto"
      >
        
        {/* Slider + description */}
        <div className="flex flex-row mt-6 relative">
          <div
            className="overflow-hidden relative
            sm:w-[10rem] md:w-[60%] lp:w-[60%] lg:w-[55%]"
          >
            <div
              ref={sliderRef}
              className="flex flex-row"
              style={{ width: `${images.length * 100}%` }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[10rem] flex justify-center"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="ml-4 sm:w-[12rem] w-[40%] md:w-[30%] lp:w-[35%] lg:w-[40%]">
            <p className="text-left text-lg sm:text-[1rem] md:text-2xl lp:text-3xl text-blue-500 font-Dos">
              {images[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Pagination + arrows container */}
        <div className="relative flex justify-center mt-6">
          {/* LEFT ARROW */}
          <button
            onClick={handlePrev}
            className="absolute left-0 -top-8 text-3xl text-blue-500 click:text-orange-500"
          >
            {"<"}
          </button>

          {/* Pagination dots */}
          <div className="flex gap-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToImage(idx)}
                className={`w-3 aspect-square rounded-full p-0 ${
                  idx === currentIndex ? "bg-sky-300" : "bg-white"
                }`}
              />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={handleNext}
            className="absolute right-0 -top-8 text-3xl text-blue-500 hover:text-orange-500"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MagazineWorkSection;