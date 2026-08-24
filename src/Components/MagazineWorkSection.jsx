import React, { useState } from "react";
import Magazine from "../assets/Magazine/magazine.jpg";
import Posing from "../assets/Magazine/magazineposing.jpg";
import Holding from "../assets/Magazine/magazineholding.jpg";

const images = [
  {
    src: Magazine,
    alt: "Magazine",
    fileName: "magazine_cover.jpg",
    description:
     "This is the final magazine cover design. The composition was developed by prioritizing a strong focal point and layering supporting visual elements to create depth and narrative. I focused on balancing imagery and typography to reflect the editorial style of National Geographic while ensuring the layout remains clear and visually engaging.",
  },
  {
    src: Posing,
    alt: "The standing magazine with reflection",
    fileName: "display_mockup.jpg",
    description:
      "This mockup presents the magazine in a controlled display setting to explore how the design would be perceived as a premium, collectible piece. The reflective surface was intentionally used to enhance visual depth and reinforce a sense of exclusivity, allowing the design to feel more elevated and refined.",
  },
  {
    src: Holding,
    alt: "Someone holding the magazine as if it was real",
    fileName: "handheld_mockup.jpg",
    description:
      "This mockup places the magazine in a real-world context to evaluate how the design performs in use. By showing the cover in a handheld format, I was able to assess scale, readability, and overall visual impact, ensuring the design remains effective outside of a digital environment.",
  },
];

const MagazineWorkSection = () => {
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
      <h1 className="flex justify-center text-blue-400 underline decoration-dashed justify-self-center
        sm:text-[1.7rem] sm:w-[23rem] sm:justify-center
                md:text-5xl md:pt-[5rem] md:w-[35rem] md:mb-[2rem]
                 lp:text-[2.8rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[5rem]
                lg:text-[3rem] lg:w-[40rem] lg:mt-[2rem]">
        Sketches &amp; Process:
      </h1>

      <div
        className="
          mx-auto
          border-2 border-blue-200 border-dashed
          bg-[#eee6f6]
          sm:px-2 sm:py-3
          sm:w-[25rem] 
          md:w-[50rem] md:p-5
          lp:w-[65rem] lp:p-6
          lg:w-[78rem] lg:p-7
        "
      >
        {/* Title bar */}
        <div className="flex items-center justify-between border-2 border-blue-200 bg-blue-300 px-2 py-1">
          <span className="text-white font-vcr sm:text-[0.8rem] md:text-[1rem] lp:text-[1.2rem] lg:text-[1.4rem]">
            MagazineViewer.exe
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

        {/* Body */}
        <div className="mt-3 border-2 border-blue-200 bg-[#f8f4ff] p-3 md:p-4 lg:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-6">
            {/* Image panel */}
            <div className="border-2 border-blue-200 bg-white p-3 md:w-[45%]">
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

            {/* Text panel */}
            <div className="border-2 border-blue-200 bg-white p-3 md:w-[55%]">
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

          {/* Controls */}
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

      {/* Lightbox */}
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

export default MagazineWorkSection;