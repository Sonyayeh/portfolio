import React, { useState } from "react";
import Wireframe from "../assets/FurreverPals/wireframe.png";
import Hifi from "../assets/FurreverPals/hifi.png";
import Component from "../assets/FurreverPals/components.png";

const images = [
  {
    src: Wireframe,
    alt: "Furrever Pals Wireframe Design",
    fileName: "wireframe.png",
    description:
      "At the wireframing stage, the priority was clarity. With eight distinct pages to design, the structure needed to guide users naturally from one section to the next. Each page was anchored with a clear header and a brief description to establish context immediately on arrival. To prevent the layout from feeling dense, I leaned on carousels and visuals to carry information that would otherwise require long blocks of text, keeping each page open and scannable while still delivering everything a user would need.",
  },
  {
    src: Hifi,
    alt: "the High Fidelity design for Furrever Pals Design",
    fileName: "Hifi.png",
    description:
      "The high fidelity designs were built around two core goals: readability and visual calm. The cream palette that defines the Furrever Pals brand was carried through as the primary background, creating a warm, unhurried atmosphere that felt true to the studio's identity. Accent colours were used deliberately to create contrast between sections without disrupting the overall softness of the experience, ensuring each page felt distinct but cohesive.",
  },
  {
    src: Component,
    alt: "The Components that were used for Furrever Pals",
    fileName: "components.png",
    description:
      "These components were designed specifically for the Furrever Pals experience, covering everything from the booking flow and date selection to user reviews and the contact form. While minor visual adjustments were made during development, the intent behind each component remained consistent throughout. Responsiveness was a core requirement from the start, which meant components like the review cards needed to be thoughtfully adapted to remain readable and functional across screen sizes.",
  },
];

const PuppyWorkSection = () => {
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
      <h2
        className="
          flex justify-self-center text-center 
                underline decoration-dashed text-purple-400
                sm:text-[1.7rem] sm:pb-[1rem] sm:w-[19rem]
                md:text-5xl md:pt-[5rem] md:w-[35rem] md:mb-[2rem]
                 lp:text-[4rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[5rem]
                lg:text-[3.5rem] lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
        Sketches &amp; Process:
      </h2>

      <div
        className="
          mx-auto
          border-2 border-orange-200 border-dashed
          bg-[#eee6f6]
          sm:px-2 sm:py-3
          sm:w-[25rem] 
          md:w-[50rem] md:py-5 md:px-5 
          lp:w-[65rem] lp:p-6 
          lg:w-[70rem] lg:p-7 
        "
      >
        <div
          className="
            flex items-center justify-between
            border-2 border-orange-200
            bg-orange-300
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
            WorkSection.exe
          </span>

          <div className="flex gap-1">
            <span className="flex h-4 w-4 items-center justify-center border border-orange-400 bg-[#f8f4ff] text-[0.65rem] text-orange-400">
              _
            </span>
            <span className="flex h-4 w-4 items-center justify-center border border-orange-400 bg-[#f8f4ff] text-[0.65rem] text-orange-400">
              □
            </span>
            <span className="flex h-4 w-4 items-center justify-center border border-orange-400 bg-[#f8f4ff] text-[0.65rem] text-orange-400">
              ×
            </span>
          </div>
        </div>

        <div className="mt-3 border-2 border-orange-200 bg-[#f8f4ff] p-3 md:p-4 lg:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-6">
            <div
              className="
                border-2 border-orange-200 bg-white p-3
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
                border-2 border-orange-200 bg-white p-3
                md:w-[55%]
              "
            >
              <p
                className="
                  border-b border-orange-200 pb-2 text-orange-400 font-vcr
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
                  mt-3 text-orange-500 font-vcr
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

          <div className="mt-4 flex items-center justify-between border-t-2 border-orange-200 pt-3">
            <button
              onClick={handlePrev}
              className="
                border-2 border-orange-200 bg-[#e8dcf8] px-3 py-1 text-orange-400 font-vcr
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
                text-center text-orange-400 font-vcr
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
                border-2 border-orange-200 bg-[#e8dcf8] px-3 py-1 text-orange-400 font-vcr
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
              border-2 border-orange-200 border-dashed
              bg-[#eee6f6]
              flex flex-col
              sm:max-w-[94vw]
              md:max-w-[85vw]
              lg:max-w-[78vw]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b-2 border-orange-200 bg-orange-300 px-2 py-1 sm:px-3">
              <span className="min-w-0 truncate text-white font-vcr text-[0.75rem] sm:text-[0.85rem] md:text-[1rem]">
                {currentImage.fileName}
              </span>

              <button
                onClick={closeLightbox}
                className="
                  shrink-0 flex h-7 w-7 items-center justify-center
                  border border-orange-400 bg-[#f8f4ff]
                  text-[1rem] text-orange-400
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

                <p className="mt-4 w-full max-w-[70ch] text-center text-orange-500 font-vcr text-[0.78rem] leading-6 sm:text-[0.85rem] sm:leading-7 md:text-[1rem] md:leading-8 lg:text-[1.15rem]">
                  {currentImage.description}
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="border-2 border-orange-200 bg-[#e8dcf8] px-3 py-1 text-orange-400 font-vcr hover:bg-white text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]"
                  >
                    &lt; Prev
                  </button>
                  <button
                    onClick={handleNext}
                    className="border-2 border-orange-200 bg-[#e8dcf8] px-3 py-1 text-orange-400 font-vcr hover:bg-white text-[0.8rem] sm:text-[0.9rem] md:text-[1rem]"
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

export default PuppyWorkSection;