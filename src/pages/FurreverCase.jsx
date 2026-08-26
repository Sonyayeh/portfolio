import React, { useEffect, useRef, useCallback, useState  } from "react";
import { useNavigate } from "react-router-dom";

import userflow from "../assets/FurreverPals/userflow.png";
import logo1 from "../assets/FurreverPals/logosketch.jpg";
import logo2 from "../assets/FurreverPals/logosketch2.jpg";
import wireframe from "../assets/FurreverPals/wireframe.png";
import hifi from "../assets/FurreverPals/hifi.png";
import component from "../assets/FurreverPals/components.png";
import mindmap from "../assets/FurreverPals/puppymindmap.png";
import moodboard from "../assets/FurreverPals/puppymood.png";

//need to add the rest of the images
const projectImages = [
  { title: "Website User Flow", src: userflow },
  { title: "HI-Fi components", src: component },
  { title: "Website Wireframe", src: wireframe },
  { title: "Website Hi-fi design", src: hifi },
  { title: "Logo Sketch #1", src: logo1 },
  { title: "Logo Sketch #2", src: logo2 },
  { title: "Mindmap for Furrever Pals", src: mindmap },
  { title: "Moodboard for Furrever Pals", src: moodboard },
];

const audience = [
  "Future pet owners",
  "Animal lovers",
  "Rescue organizations",
  "Families looking to adopt",
];

const PixelStar = ({ className = "", size = "text-[2rem]" }) => (
  <div
    className={`pointer-events-none absolute font-Dos ${size} ${className}`}
    style={{ animation: "pixelFloat 4s ease-in-out infinite" }}
  >
    🐾
  </div>
);

const PixelStarSpin = ({ className = "", size = "text-[1.5rem]" }) => (
  <div
    className={`pointer-events-none absolute font-Dos ${size} ${className}`}
    style={{ animation: "pixelSpin 10s linear infinite" }}
  >
    ♡
  </div>
);

const SectionLabel = ({ children }) => (
  <p className="mb-4 inline-block border border-[#ffd2dc] bg-white px-3 py-1 font-Dos text-[0.75rem] text-[#8b4055] shadow-[2px_2px_0_#ffd2dc]">
    {children}
  </p>
);

const FurreverCase = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

//picture scroller

const ChevronLeft = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const scrollByAmount = useCallback((direction) => {
  const el = scrollRef.current;
  if (!el) return;

  const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
  const atStart = el.scrollLeft <= 5;

  if (direction === "next" && atEnd) {
    el.scrollTo({ left: 0, behavior: "smooth" });
  } else if (direction === "prev" && atStart) {
    el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
  } else {
    el.scrollBy({
      left: direction === "next" ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
      behavior: "smooth",
    });
  }
}, []);

const pauseAutoplay = useCallback(() => {
  setIsPaused(true);
  if (autoplayRef.current) clearTimeout(autoplayRef.current);
  autoplayRef.current = setTimeout(() => setIsPaused(false), RESUME_DELAY);
}, []);

const scrollRef = useRef(null);
const autoplayRef = useRef(null);
const [isPaused, setIsPaused] = useState(false);

const CARD_WIDTH = 280;
const GAP = 20; 
const SCROLL_AMOUNT = CARD_WIDTH + GAP;
const AUTOPLAY_INTERVAL = 3500;
const RESUME_DELAY = 5000; 


const handleNext = () => {
  scrollByAmount("next");
  pauseAutoplay();
};

const handlePrev = () => {
  scrollByAmount("prev");
  pauseAutoplay();
};

useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    scrollByAmount("next");
  }, AUTOPLAY_INTERVAL);

  return () => clearInterval(interval);
}, [isPaused, scrollByAmount]);

useEffect(() => {
  return () => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
  };
}, []);

  return (
    <main className="relative mx-auto w-full max-w-[95rem] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
      <button
        onClick={() => navigate("/cases")}
        className="px-3 py-1 font-Dos text-[#8b4055] transition hover:text-[#ff7f9b] hover:underline"
      >
        ← back
      </button>

      <PixelStar className="top-4 right-[3rem] text-[#ff9eb5]" />
      <PixelStarSpin className="top-[20rem] right-[5rem] text-[#ff9eb5]" />

      <h1 className="font-vcr text-[2.3rem] text-[#8b4055] md:text-[4rem]">
        Furrever Pals
      </h1>

      <p className="mb-4 inline-block border border-[#8b4055] bg-white px-3 py-1 font-Dos text-[0.85rem] text-[#8b4055] shadow-[2px_2px_0_#ffd2dc]">
        UX CASE STUDY / PET ADOPTION PLATFORM
      </p>

      {/* SUMMARY */}
      <section className="relative overflow-hidden rounded-[1rem] border-2 border-[#8b4055] bg-[#f1bb52] p-6 text-white shadow-[6px_6px_0_#ffdc97] md:p-10">
        <PixelStar className="top-4 left-10 text-[#ffffff]" />
        <PixelStarSpin className="top-20 right-20 text-[#8b4055]" />

        <h2 className="font-vcr text-[2.3rem] text-[#8b4055] md:text-[4rem]">
          Summary
        </h2>

        <p className="mt-5 max-w-[48rem] font-mono text-white">
         Furrever Pals is a puppy yoga concept based in Vancouver, BC, built around two connected purposes: guiding participants through wellness sessions and helping shelter puppies find permanent homes. Each session pairs a participant with an adoptable puppy, combining the physical benefits of yoga with the emotional and mental health benefits of human-animal interaction, aimed at Vancouverites seeking an approachable, low-pressure entry point into wellness.
        </p>
      </section>

      {/* PROBLEM + GOAL */}
      <section className="mt-8 grid gap-6 lp:grid-cols-2 lg:grid-cols-2">
        <div className="relative rounded-[1rem] border-2 border-[#8b4055] bg-[#f1bb52] p-6 text-white shadow-[6px_6px_0_#ffdc97]">
          <PixelStar className="bottom-[15rem] right-6 text-[#ffffff]" />
          <PixelStarSpin className="top-12 left-[12rem] text-[#8b4055]" />

          <SectionLabel>01 / PROBLEM</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#8b4055]">Problem</h2>

          <p className="mt-4 font-mono text-white">
            Hundreds of thousands of pets are abandoned each year in Canada, and many never find homes, while traditional adoption experiences remain transactional and disconnected from the people who might otherwise adopt. Existing platforms are often overwhelming or text-heavy, making it hard to quickly understand a pet's personality, adoption requirements, or next steps.
          </p>
        </div>

        <div className="relative rounded-[1rem] border-2 border-[#8b4055] bg-[#f1bb52] p-6 text-white shadow-[6px_6px_0_#ffdc97]">
          <PixelStar className="top-[4.25rem] right-[10.5rem] text-[#ffd2dc]" />
          <PixelStar className="bottom-[0rem] left-[16rem] text-white" />

          <SectionLabel>02 / GOAL</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#8b4055]">Goal</h2>

          <p className="mt-4 font-mono text-[0.9rem] leading-relaxed text-white">
           Furrever Pals set out to close that gap with a format that pairs adoption with an experience people would want to show up for: friendly, low-pressure sessions where participants can get to know a puppy's personality and understand next steps, while making wellness itself feel more approachable to beginners and experienced practitioners alike.
          </p>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="mt-8 rounded-[1rem] border-2 border-[#8b4055] bg-[#f1bb52] p-6 shadow-[4px_4px_0_#ffdc97]">
        <SectionLabel>03 / TARGET AUDIENCE</SectionLabel>

        <h2 className="font-vcr text-[2rem] text-[#8b4055]">
          Target Audience
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-4 lp:grid-cols-4 lg:grid-cols-4">
          {audience.map((item) => (
            <div
              key={item}
              className="rounded-md border border-[#ffd2dc] bg-[#fff6f8] p-4 font-mono text-[0.85rem] text-[#8b4055] transition lp:hover:-translate-y-1 lp:hover:bg-[#ffd2dc] lg:hover:-translate-y-1 lg:hover:bg-[#ffd2dc]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT FEATURES */}
      <section className="relative mt-8 rounded-[1rem] border-2 border-[#8b4055] bg-[#f1bb52] p-6 shadow-[4px_4px_0_#ffdc97]">
        <PixelStarSpin className="top-6 right-[5.5rem] text-[#8b4055]" />
        <PixelStarSpin className="top-[7rem] right-[10rem] text-[#8b4055]" />

        <SectionLabel>04 / DESIGN OUTPUTS</SectionLabel>

        <p className="pb-3 font-vcr text-[2.3rem] text-[#8b4055] sm:text-[2rem]">
          Design Process Visuals
        </p>

        <p className="mb-6 mt-3 max-w-[50rem] font-mono text-[0.9rem] leading-relaxed text-white">
          Key UX and visual design elements created for Furrever Pals, including
          pet browsing, adoption flow, interface structure, and visual direction
          which are available in the{" "}
          <span
            onClick={() => {
              document
                .getElementById("pdf-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer underline text-[#7f32da]"
          >
            PDF
          </span>
          !
        </p>

       <div className="relative">
  <div
    ref={scrollRef}
    onPointerDown={pauseAutoplay}
    className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
  >
    {projectImages.map((image) => (
      <div
        key={image.title}
        className="group relative flex-none w-[280px] snap-start rounded-md border border-[#E5E5E5] bg-white p-3 shadow-[3px_3px_0_#E5E5E5]"
      >
        <PixelStar
          className="top-2 right-2 text-[#0A345E] opacity-70"
          size="text-[0.7rem]"
        />
        <img
          src={image.src}
          alt={image.title}
          className="h-[14rem] w-full object-contain p-2 transition group-hover:scale-105"
        />
        <p className="mt-3 font-Dos text-[#0A345E]">{image.title}</p>
        <p className="mt-1 font-mono text-[0.7rem] text-[#0A345E]">
          process_file.svg
        </p>
      </div>
    ))}
  </div>

  <button
    onClick={handlePrev}
    aria-label="Previous"
    className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 -translate-x-3.5 z-10 transition text-[#ffffff] hover:text-[#0A3560]"
  >
    <ChevronLeft size={18} />
  </button>

  <button
    onClick={handleNext}
    aria-label="Next"
    className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 translate-x-3.5 z-10 transition text-[#ffffff] hover:text-[#0A3560]"
  >
    <ChevronRight size={18} />
  </button>
</div>
</section>


      {/* REFLECTION + PDF */}
      <section className="mt-8 grid gap-6 lp:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-[1rem] border-2 border-[#8b4055] bg-[#f1bb52] p-6 shadow-[4px_4px_0_#ffdc97]">
          <SectionLabel>05 / CONCLUSION</SectionLabel>

          <h2 className="mt-4 font-vcr text-[2rem] text-[#8b4055] sm:text-[1.8rem]">
            What I Learned
          </h2>
          <p className="mt-4 font-mono text-[0.9rem] leading-relaxed text-white">
            This project clarified how emotional design and clear UX depend on each other rather than compete. A pet adoption experience has to feel warm enough to invite someone in, but structured enough that they always know what to do next; losing either half undermines the other.         
            </p>

            <div>
            <h2 className="font-vcr text-[2rem] text-[#8b4055]">  
              What I'd Improve
              </h2>

          <p className="mt-4 font-mono text-[0.9rem] leading-relaxed text-white">
          If I had more time, I would run usability testing with people actively in the process of adopting, and use their feedback to refine the application flow around how real adopters actually make decisions, rather than how the process was designed to work on paper.         
          </p>
            </div>
             </div>



          

          


        <div
          id="pdf-section"
          className="relative rounded-[1rem] border-2 border-[#8b4055] bg-[#f1bb52] p-6 shadow-[4px_4px_0_#ffdc97]"
        >
          <PixelStar className="bottom-[8.75rem] left-6 text-[#ffd2dc]" />
          <PixelStarSpin className="top-6 right-8 text-[#8b4055]" />

          <SectionLabel>PDF FILE</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#8b4055] sm:text-[1.8rem]">
            Full Case Study PDF
          </h2>

          <p className="mt-3 font-mono text-white">
            View the complete Furrever Pals documentation including research,
            design direction, process work, and final case study details.
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href="/furreverpals.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#8b4055] bg-[#fff6f8] px-4 py-2 font-Dos text-[#8b4055] transition lp:hover:bg-[#ffd2dc] lg:hover:bg-[#ffd2dc]"
            >
              Open PDF ↗
            </a>

            <a
              href="/furreverpals.pdf"
              download
              className="border border-[#8b4055] bg-white px-4 py-2 font-Dos text-[#8b4055] transition lp:hover:bg-[#ffd2dc] lg:hover:bg-[#ffd2dc]"
            >
              Download PDF
            </a>
            <a
               href="https://sonyayeh.ca/furreverpals" target="_blank" rel="noopener noreferrer"
              className="border border-[#8b4055] bg-white px-4 py-2 font-Dos text-[#8b4055] transition lp:hover:bg-[#ffd2dc] lg:hover:bg-[#ffd2dc]"
            >
              View Mock Website
            </a>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes pixelFloat {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-6px) rotate(6deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }

          @keyframes pixelSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </main>
  );
};

export default FurreverCase;