import React, { useState } from "react";
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
    fileName: "first_sketch.png",
    description:
      "This first sketch explored a social, lifestyle-oriented concept, depicting a group of people playing beach volleyball. While the idea aligned with the event’s theme, it lacked a clear focal point and strong visual hierarchy. As a result, this direction was not pursued further.",
  },
  {
    src: Second,
    alt: "Second Design",
    fileName: "second_sketch.png",
    description:
      "This second sketch explored a more symbolic approach, featuring a player reaching for the volleyball to represent striving for a championship position. While the concept introduced a stronger focal point, it placed too much emphasis on competition, which did not fully align with the event’s focus on enjoyment and participation. As a result, this direction was not pursued further.",
  },
  {
    src: Third,
    alt: "Third Design",
    fileName: "third_sketch.png",
    description:
      "This sketch focuses on the volleyball as the central element, supported by beach-related visuals such as palm trees and seagulls. This direction improved visual hierarchy and better reflected the event’s setting.",
  },
  {
    src: Final,
    alt: "Fourth Design",
    fileName: "fourth_sketch.png",
    description:
      "This fourth sketch builds on the previous iteration through peer feedback. The volleyball was scaled up further to strengthen its role as the primary focal point, while additional tropical elements were introduced to enhance the visual context. These elements reference the origins of beach volleyball in Waikiki Beach, Hawaii, helping to reinforce both the theme and environment of the event.",
  },
  {
    src: Flower,
    alt: "Hibiscus Sketch",
    fileName: "hibiscus_sketch.png",
    description:
      "This hibiscus sketch was developed to support the final direction established in the fourth iteration. As a recognizable tropical element, hibiscus flowers were introduced to further reinforce the beach environment and visual theme. The illustrations were initially created in Procreate and later refined in Adobe Illustrator for integration into the final design.",
  },
  {
    src: Poster,
    alt: "Final Poster",
    fileName: "final_poster.png",
    description:
      "This final poster builds upon the fourth sketch, refining the established concept into a cohesive design. The composition emphasizes the volleyball as the central focal point, supported by tropical elements such as hibiscus flowers and sun rays to reinforce the beach setting. Warm tones of orange and yellow were used in the title to enhance the tropical atmosphere and visual appeal. The final design was created in Adobe Illustrator.",
  },
];

const BeachWorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("lightbox-overlay")) {
      closeLightbox();
    }
  };

  const currentImage = images[currentIndex];

  return (
    <section className="w-full">
      <h1 className="flex justify-self-center justify-center
                        underline decoration-dashed text-blue-400
                        sm:text-[1.7rem] sm:pb-[1rem] sm:pt-[1rem] sm:w-[20rem]
                        md:text-5xl md:pt-[5rem] md:w-[55rem] md:mb-[2rem]
                        lp:text-[4rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[5rem]
                        lg:text-7xl lg:w-[70rem] lg:mt-[2rem]">
        Sketches &amp; Process:
      </h1>

      <div
        className="
          mx-auto justify-self-center
          border-2 border-blue-200 border-dashed
          bg-[#eee6f6]
          sm:px-2 sm:py-3
          sm:w-[20rem] 
          md:w-[50rem] md:p-5
          lp:w-[65rem] lp:p-6
          lg:w-[78rem] lg:p-7
        "
      >
        <div
          className="
            flex items-center justify-between
            border-2 border-blue-200
            bg-blue-300
            px-2 py-1
          "
        >
          <span
            className="
              text-white font-vcr
              sm:text-[0.8rem]
              md:text-[1rem]
              lp:text-[1.2rem]
              lg:text-[1.4rem]
            "
          >
            SketchViewer.exe
          </span>

          <div className="flex gap-1">
            <span className="flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400">
              _
            </span>
            <span className="flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400">
              □
            </span>
            <span className="flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400">
              ×
            </span>
          </div>
        </div>

        <div className="mt-3 border-2 border-blue-200 bg-[#f8f4ff] p-3 md:p-4 lg:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-6">
            <div
              className="
                border-2 border-blue-200 bg-white p-3
                md:w-[45%]
              "
            >
              <button
                type="button"
                onClick={openLightbox}
                className="block w-full"
              >
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="
                    mx-auto block w-full object-contain
                    sm:h-[230px]
                    md:h-[350px]
                    lp:h-[430px]
                    lg:h-[520px]
                  "
                />
              </button>
            </div>

            <div
              className="
                border-2 border-blue-200 bg-white p-3
                md:w-[55%]
              "
            >
              <p
                className="
                  border-b border-blue-200 pb-2 text-blue-400 font-vcr
                  sm:text-[0.85rem]
                  md:text-[1rem]
                  lp:text-[1.2rem]
                  lg:text-[1.4rem]
                "
              >
                File: {currentImage.fileName}
              </p>

              <p
                className="
                  mt-3 text-blue-500 font-vcr
                  sm:text-[0.8rem] sm:leading-7
                  md:text-[1.05rem] md:leading-8
                  lp:text-[1.25rem] lp:leading-10
                  lg:text-[1.55rem] lg:leading-[3rem]
                "
              >
                {currentImage.description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t-2 border-blue-200 pt-3">
            <button
              onClick={handlePrev}
              className="
                border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1 text-blue-400 font-vcr
                hover:bg-[#f8f4ff]
                sm:text-[0.8rem]
                md:text-[0.95rem]
                lp:text-[1.1rem]
                lg:text-[1.25rem]
              "
            >
              &lt; Prev
            </button>

            <p
              className="
                text-center text-blue-400 font-vcr
                sm:text-[0.8rem]
                md:text-[0.95rem]
                lp:text-[1.1rem]
                lg:text-[1.25rem]
              "
            >
              {currentIndex + 1} / {images.length}
            </p>

            <button
              onClick={handleNext}
              className="
                border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1 text-blue-400 font-vcr
                hover:bg-[#f8f4ff]
                sm:text-[0.8rem]
                md:text-[0.95rem]
                lp:text-[1.1rem]
                lg:text-[1.25rem]
              "
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4"
          onClick={handleClickOutside}
        >
          <div
            className="
              w-full max-w-[96vw]
              max-h-[94vh]
              overflow-hidden
              border-2 border-blue-200 border-dashed
              bg-[#eee6f6]
              flex flex-col
              sm:max-w-[94vw]
              md:max-w-[85vw]
              lg:max-w-[78vw]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b-2 border-blue-200 bg-blue-300 px-2 py-1 sm:px-3">
              <span className="min-w-0 truncate text-white font-vcr text-[0.75rem] sm:text-[0.85rem] md:text-[1rem]">
                {currentImage.fileName}
              </span>

              <button
                onClick={closeLightbox}
                className="
                  shrink-0 flex h-7 w-7 items-center justify-center
                  border border-blue-400 bg-[#f8f4ff]
                  text-[1rem] text-blue-400
                  sm:h-8 sm:w-8 sm:text-[1.1rem]
                "
                aria-label="Close lightbox"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-[#f8f4ff] p-3 sm:p-4 md:p-5">
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-center items-center min-h-[30vh] sm:min-h-[36vh] md:min-h-[44vh]">
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="
                      object-contain w-full
                      max-h-[42vh]
                      sm:max-h-[48vh]
                      md:max-h-[56vh]
                      lg:max-h-[62vh]
                    "
                  />
                </div>

                <p className="mt-4 w-full max-w-[70ch] text-center text-blue-500 font-vcr text-[0.78rem] leading-6 sm:text-[0.85rem] sm:leading-7 md:text-[1rem] md:leading-8 lg:text-[1.15rem]">
                  {currentImage.description}
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1 text-blue-400 font-vcr hover:bg-white text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]"
                  >
                    &lt; Prev
                  </button>
                  <button
                    onClick={handleNext}
                    className="border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1 text-blue-400 font-vcr hover:bg-white text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]"
                  >
                    Next &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BeachWorkSection;