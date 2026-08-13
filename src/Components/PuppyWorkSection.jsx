import React, { useState } from "react";
import Wireframe from "../assets/FurreverPals/wireframe.png";
import Hifi from "../assets/FurreverPals/hifi.png";
import Component from "../assets/FurreverPals/components.png";
import Userflow from "../assets/FurreverPals/userflow.png";
import Sketch from "../assets/FurreverPals/logosketch.jpg";
import Sketch2 from "../assets/FurreverPals/logosketch2.jpg";
import Graphics from "../assets/FurreverPals/graphicsketches.jpg";

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
      "Moving into high fidelity, I kept coming back to one tension: how do you make pages feel distinct from each other without breaking the calm the brand was built on? Too much contrast between sections risked feeling busy, which worked against everything the wellness angle was trying to say. I kept the cream background constant across every page, since changing it page to page would've undercut that unhurried feeling, and let accent colours do the work of signalling new section instead. It meant every page had its own identity, but none of them ever felt like they'd wandered off from the rest.",
  },
  {
    src: Component,
    alt: "The Components that were used for Furrever Pals",
    fileName: "components.png",
    description:
      "Every component here, booking flow, date selection, review cards, the contact form, was built specifically for how Furrever Pals actually works, not pulled from a generic UI kit. The review cards ended up needing the most rework: what looked clean as three columns on desktop turned into a cramped mess on mobile, text overlapping, star ratings squeezed too small to read. I restructured them to stack vertically on smaller screens, which meant rethinking the spacing and hierarchy rather than just shrinking everything proportionally.",
  },
  {
    src: Userflow,
    alt: "The User Flow for the Furrever Pals website",
    fileName: "userflow.png",
    description:
      "I mapped the flow across five core paths, Classes, Adoption, Our Mission, About Us, and login, asking the same question at every branch: if someone changes their mind here, can they back out cleanly, or do they hit a dead end? The booking flow got the most attention, since it's the one place a mistake actually costs something. I split it into two steps, date and time selection first, confirmation second, rather than one long form, so people could double check what they picked before committing, instead of realizing an error only after submitting.",
  },
  {
    src: Sketch,
    alt: "The User Flow for the Furrever Pals website",
    fileName: "logosketch.jpg",
    description:
      "Every logo direction started from the same two letters, F and P, but I pushed them three different ways to see what actually felt right. A cursive version leaned elegant and fluid, closer to a signature than a mark. A more structural version treated the letters as building blocks, clean but a little cold. The third direction combined an F with a mirrored P, and when they met in the middle, they formed a heart almost by accident. That felt like the obvious choice the moment I saw it, since the mark wasn't just initials anymore, it was actually saying something about what the brand stood for, without needing any text to explain it.",
  },
  {
    src: Sketch2,
    alt: "The graphics design for Furrever Pals",
    fileName: "logosketch2.png",
    description:
      "The character came from a simple mismatch: a soft, floppy eared, slightly clumsy dog attempting calm, controlled yoga poses. That contrast did the humour on its own, no tagline needed. I built the base around a rounded head and body with oversized ears, since the ears could stretch and fold to suggest movement without redrawing the whole figure each time. I pushed that base through four postures, cover boy, neck stretch front, neck stretch side, and bagel position, mostly to find the point where the shape stopped reading as a puppy and started looking like an abstract blob. Loose, hand drawn linework and consistent wordmark placement kept all four feeling like one family, even as the poses got more extreme.",
  },
  {
    src: Graphics,
    alt: "The User Flow for the Furrever Pals website",
    fileName: "graphicsketches.jpg",
    description:
      "This sheet pushed the exploration wider instead of narrowing in too early. A simplified paw print icon came out of it, meant for small applications like app icons where the full mark wouldn't hold up at that size. A puppy mid stretch on a yoga mat tested the yoga motif from a new angle. I also tried a bold wordmark and a ribbon style badge, both eventually set aside, they felt more generic, closer to a typical pet brand than something specific to Furrever Pals. The heart doodle kept reappearing throughout this sheet too, which wasn't an accident. By that point I'd already half decided the F and P mark was the strongest direction, and kept sketching it just to be sure.",
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
    <section className="w-full justify-self-center">

      <h1 className="flex justify-center text-purple-400 underline decoration-dashed
        sm:text-[1.7rem] sm:w-[23rem] sm:justify-center
                md:text-5xl md:pt-[5rem] md:w-[35rem] md:mb-[2rem]
                 lp:text-[2.8rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[5rem]
                lg:text-[3.5rem] lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
        Sketches &amp; Process:
      </h1>


      <div
        className="
          mx-auto
          border-2 border-orange-200 border-dashed
          bg-[#eee6f6]
          sm:px-2 sm:py-3
          sm:w-[22rem] 
          md:w-[50rem] md:p-5 
          lp:w-[70rem] lp:p-6 
          lg:w-[78rem] lg:p-7 
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