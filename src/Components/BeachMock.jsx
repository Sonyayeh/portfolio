import React, { useState, useRef, useEffect } from "react";
import Bus from "../assets/volleyball/Busstop.png";
import Flyer from "../assets/volleyball/vollyball.png";

const images = [
  {
    src: Bus,
    alt: "Bus Stop Mockup",
    fileName: "bus_stop_mockup.png",
    description:
      "This bus stop mockup demonstrates how the design performs in a large-scale public setting. The format was selected to assess readability, visual hierarchy, and attention-grabbing potential in a real-world context. The composition was created in Adobe Photoshop, with the mockup background sourced from Adobe Stock Images.",
  },
  {
    src: Flyer,
    alt: "Flyer Mockup",
    fileName: "flyer_mockup.png",
    description:
      "This flyer mockup presents the design in a smaller, handheld format commonly used for event promotion. This format was chosen to evaluate readability, hierarchy, and visual clarity at a closer viewing distance. The mockup was created in Adobe Photoshop, using a background sourced from Adobe Stock Images.",
  },
];

const BeachMock = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imageOrientations, setImageOrientations] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const orientations = new Array(images.length);

    images.forEach((img, index) => {
      const tempImg = new Image();
      tempImg.src = img.src;
      tempImg.onload = () => {
        orientations[index] =
          tempImg.width >= tempImg.height ? "horizontal" : "vertical";

        if (orientations.every(Boolean)) {
          setImageOrientations([...orientations]);
        }
      };
    });
  }, []);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const handleClickOutside = (e) =>
    e.target.classList.contains("lightbox-overlay") && closeLightbox();

  return (
    <section className="">
      <h2
        className="
          text-center justify-self-center
          underline decoration-dashed text-blue-400
          sm:text-[2rem] sm:pb-[1rem] sm:w-full sm:pt-[3rem]
          md:text-[4rem] md:w-[35rem] md:mx-auto md:pt-[5rem]
          lp:text-[4rem] lp:w-[19rem]
          lg:text-7xl lg:w-[60rem] lg:mb-[3rem] lg:mt-[2rem] lg:mx-auto
        "
      >
        Mockups:
      </h2>

      <div
        className="
          mx-auto justify-self-center
          border-2 border-blue-200 border-dashed
          bg-[#eee6f6]
          sm:px-2 sm:py-3 sm:w-[25rem]
          md:w-[50rem] md:p-5
          lp:w-[65rem] lp:p-6
          lg:w-[78rem] lg:p-7
        "
      >
        <div className="flex items-center justify-between border-2 border-blue-200 bg-blue-300 px-2 py-1">
          <span className="text-white font-vcr sm:text-[0.8rem] md:text-[1rem] lp:text-[1.2rem] lg:text-[1.4rem]">
            MockupViewer.exe
          </span>

          <div className="flex gap-1">
            <span className="flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400">
              _
            </span>
            <span className="flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400">
              □
            </span>
            <span className="flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400
            
            ">
              ×
            </span>
          </div>
        </div>

        <div className="mt-3 border-2 border-blue-200 bg-[#f8f4ff] p-3 md:p-4 lg:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-6">
            <div className="border-2 border-blue-200 bg-white p-3 md:w-[55%]">
              <div className="overflow-hidden relative w-full">
                <div
                  ref={sliderRef}
                  className="flex flex-row"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {images.map((image, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-full flex justify-center items-center"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        onClick={() => openLightbox(idx)}
                        className={`cursor-pointer object-contain w-full ${
                          imageOrientations[idx] === "horizontal"
                            ? "sm:h-[220px] md:h-[300px] lp:h-[360px] lg:h-[420px]"
                            : "sm:h-[280px] md:h-[360px] lp:h-[430px] lg:h-[500px]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-200 bg-white p-3 md:w-[45%]">
              <p
                className="
                  border-b border-blue-200 pb-2 text-blue-400 font-vcr
                  sm:text-[0.85rem]
                  md:text-[1rem]
                  lp:text-[1.2rem]
                  lg:text-[1.4rem]
                "
              >
                File: {images[currentIndex].fileName}
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
                {images[currentIndex].description}
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

      {isOpen && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4"
          onClick={handleClickOutside}
        >
          <div
            className="
              w-full max-w-[96vw]
              max-h-[96vh]
              overflow-hidden
              border-2 border-blue-200 border-dashed
              bg-[#eee6f6]
              flex flex-col
              sm:max-w-[92vw]
              md:max-w-[85vw]
              lg:max-w-[80vw]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b-2 border-blue-200 bg-blue-300 px-2 py-1 sm:px-3">
              <span className="min-w-0 truncate text-white font-vcr text-[0.75rem] sm:text-[0.8rem] md:text-[1rem]">
                {images[currentIndex].fileName}
              </span>

              <button
                onClick={closeLightbox}
                className="shrink-0 flex h-4 w-4 items-center justify-center border border-blue-400 bg-[#f8f4ff] text-[0.65rem] text-blue-400
                sm:text-[2rem]
                "
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-[#f8f4ff] p-3 sm:p-4">
              <div className="flex flex-col items-center">
                <div className="w-full flex justify-center items-center min-h-[40vh] sm:min-h-[48vh] md:min-h-[56vh]">
                  <img
                    key={currentIndex}
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className={`
                      object-contain
                      w-full
                      ${
                        imageOrientations[currentIndex] === "horizontal"
                          ? "max-h-[36vh] sm:max-h-[42vh] md:max-h-[50vh] lg:max-h-[58vh]"
                          : "max-h-[52vh] sm:max-h-[60vh] md:max-h-[68vh] lg:max-h-[74vh]"
                      }
                    `}
                  />
                </div>

                <p className="mt-4 w-full max-w-[70ch] text-center text-blue-500 font-vcr text-[0.78rem] leading-6 sm:text-[0.8rem] sm:leading-7 md:text-[1rem] md:leading-8 lg:text-[1.2rem]">
                  {images[currentIndex].description}
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

export default BeachMock;