import React, { useEffect, useRef, useCallback, useState  } from "react";


import { useNavigate } from "react-router-dom";
import empathy from "../BcitDesignProcess/empathyBcit.svg";
import flowchart from "../BcitDesignProcess/FlowchartBcit.svg";
import grid from "../BcitDesignProcess/gridBcit.svg";
import persona1 from "../BcitDesignProcess/personaBcit1.svg";
import persona2 from "../BcitDesignProcess/personaBcit2.svg";
import userstory from "../BcitDesignProcess/userstoryBcit.svg";

const projectImages = [
  { title: "Empathy Map", src: empathy },
  { title: "User Flow", src: flowchart },
  { title: "Journey Map", src: grid },
  { title: "Persona 1", src: persona1 },
  { title: "Persona 2", src: persona2 },
  { title: "User Story", src: userstory },
];


const PixelStar = ({ className = "", size = "text-[2rem]" }) => (
  <div
    className={`pointer-events-none absolute font-Dos ${size} ${className}`}
    style={{ animation: "pixelFloat 4s ease-in-out infinite" }}
  >
    ✦
  </div>
);

const PixelStarSpin = ({ className = "", size = "text-[1.5rem]" }) => (
  <div
    className={`pointer-events-none absolute font-Dos ${size} ${className}`}
    style={{ animation: "pixelSpin 10s linear infinite" }}
  >
    ✧
  </div>
);

const SectionLabel = ({ children }) => (
  <p className="mb-4 inline-block border border-[#E5E5E5] bg-white px-3 py-1 font-Dos text-[0.75rem] text-[#0A345E] shadow-[2px_2px_0_#E5E5E5]">
    {children}
  </p>
);


const BcitCase = () => {
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
        className="
            px-3 py-1
            font-Dos text-[#0A345E]
            hover:decoration hover:underline
            hover:text-[#dec13f]
            click:underline click:text-[#dec13f]
            transition
        "
        >
        ← back
        </button>

      <PixelStar className="top-4 right-[3rem] text-[#dec13f]" />
      <PixelStarSpin className="top-[20rem] right-[5rem] text-[#dec13f]" />


      {/* HERO */}
      <h1 className="font-vcr text-[2.3rem] text-[#0A345E] md:text-[4rem]">
          MyBCIT Redesign
        </h1>
        <p className="mb-4 inline-block border border-[#0A345E] bg-[white] px-3 py-1 font-Dos text-[0.85rem] text-[#0A345E] shadow-[2px_2px_0_#E5E5E5]">
          UX CASE STUDY / REDESIGN PROJECT
        </p>
      <section className="relative overflow-hidden rounded-[1rem] border-2 border-[#0A345E] bg-[#0A345E] text-[#ffffff] p-6 shadow-[6px_6px_0_#E5E5E5] md:p-10">
        <PixelStar className="top-4 left-10 text-[#FDEB5B]" />
        <PixelStarSpin className="top-20 right-20 text-[#FDEB5B]" />

        <h1 className="font-vcr text-[2.3rem] text-[#FDEB5B] md:text-[4rem]">
         Summary
        </h1>

        <p className="mt-5 max-w-[45rem] font-mono text-[#ffffff]">
          MyBCIT's existing interface buries essential student tasks, course registration, grades, schedules, under unnecessary steps and unclear navigation. This redesign focuses on simplifying that structure, cutting friction from core workflows, and modernizing the visual interface, so students moving between classes on a tight schedule can find what they need without fighting the platform to get there.
          </p>
      </section>

      {/* PROBLEM + GOAL */}
      <section className="mt-8 grid gap-6 lp:grid-cols-2 lp:items-stretch lg:grid-cols-2 lg:items-stretch">

  {/* LEFT: PROBLEM */}
  <div className="relative rounded-[1rem] border-2 border-[#0A345E] bg-[#0A345E] p-6 shadow-[4px_4px_0_#E5E5E5]">

    <PixelStar className="bottom-20 right-6 text-[#FDEB5B]" />
    <PixelStarSpin className="top-12 left-10 text-[#FDEB5B]" />

    <SectionLabel>01 / PROBLEM</SectionLabel>

    <h2 className="font-vcr text-[2rem] text-[#FDEB5B]">
      Problem
    </h2>

    <p className="mt-4 font-mono text-[#ffffff]">
      MyBCIT feels outdated and difficult to navigate, at odds with BCIT's identity as a fast-paced, hands-on institution. Students consistently struggle to locate essential tools like grades and schedules, tasks that should take seconds, not several clicks through unclear menus.    
      </p>

  </div>

  {/* RIGHT: GOAL */}
  <div className="relative rounded-[1rem] border-2 border-[#0A345E]  bg-[#0A345E] p-6 shadow-[4px_4px_0_#E5E5E5]">

    <PixelStar className="top-5 right-6 text-[#FDEB5B]" />
    <PixelStarSpin className="bottom-[14rem] left-[4rem] text-[#FDEB5B]" />

    <SectionLabel>02 / GOAL</SectionLabel>

    <h2 className="font-vcr text-[2rem] text-[#FDEB5B]">
      Goal
    </h2>

    <p className="mt-4 font-mono text-[0.9rem] leading-relaxed text-[#ffffff]">
    Design a cleaner, more modern interface that shortens the path to essential information like grades and schedules, reduces cognitive load, and improves usability for every student, regardless of technical experience, matching the speed and clarity BCIT students expect from the institution itself.   
    </p>

  </div>

</section>
      
    {/* RESEARCH INSIGHTS */}
      <section className="mt-8 rounded-[1rem] border-2 border-[#0A345E] bg-[#0A345E] p-6 shadow-[4px_4px_0_#E5E5E5]">
        <h2 className="font-vcr text-[2rem] text-[#FDEB5B]">
          User Research Insights
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols- lp:grid-cols-4">
          {[
            "Too many unnecessary tabs and clicks",
            "Hard to find grades and key pages",
            "Outdated UI and confusing layout",
            "Not beginner-friendly for new students",
          ].map((item) => (
            <div
              key={item}
              className="rounded-md border border-[#0A345E] bg-[#F5F5F5] p-4 font-mono text-[0.85rem] text-[#0A345E] lp:hover:bg-[#FDEB5B] lp:hover:text-[#0A345E] lp:hover:-translate-y-1 lg:hover:bg-[#FDEB5B] lg:hover:text-[#0A345E] lg:hover:-translate-y-1"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
     <section className="relative mt-8 rounded-[1rem] border-2 border-[#0A345E] bg-[#0A345E] p-6 shadow-[4px_4px_0_#E5E5E5]">
  <PixelStarSpin className="top-6 right-10 text-[#FDEB5B]" />
  <PixelStarSpin className="top-[10rem] right-[10rem] text-[#FDEB5B]" />

  <SectionLabel>03 / UX ARTIFACTS</SectionLabel>

  <p className="pb-3 font-vcr text-[2.3rem] text-[#FDEB5B] sm:text-[2rem]">
          Design Process Visuals
        </p>

        <p className="mb-6 mt-3 max-w-[50rem] font-mono text-[0.9rem] leading-relaxed text-white">
          This section includes the key UX documentation behind the MyBCIT redesign, including the empathy map, user flow, and journey map, among other process artifacts. Full detail on each is available in the {" "}
          <span
            onClick={() => {
              document
                .getElementById("pdf-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer underline text-[#FDEB5B]"
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

       {/* REFLECTION + PDF COMBINED */}
      <section className="mt-8 grid gap-6 lg:grid-cols-2 lp:grid-cols-2 lp:items-stretch">

  {/* LEFT: CONCLUSION */}
  <div className="rounded-[1rem] border-2 border-[#0A345E] bg-[#0A345E] p-6 shadow-[4px_4px_0_#E5E5E5]">
    <SectionLabel>04 / CONCLUSION</SectionLabel>
    
    <h2 className="font-vcr text-[2rem] text-[#FDEB5B]">
      Conclusion
    </h2>

    <p className="mt-4 font-mono text-[0.9rem] text-[#ffffff]">
    This project reinforced how much clarity and hierarchy matter in complex systems, especially ones students rely on daily under time pressure. Reducing the number of steps between a student and information as basic as their grades or schedule showed me how much frustration accumulates from small, unaddressed friction points, and how deliberate, focused UX changes can meaningfully shrink that gap.    </p>

    <h2 className="mt-4 font-vcr text-[2rem] text-[#FDEB5B]">
      What I'd Improve
    </h2>

    <p className="mt-4 font-mono text-[0.9rem] text-[#ffffff]">
    This project focused on the student experience, but MyBCIT also serves faculty, whose workflows and priorities likely differ in ways this redesign didn't account for. The next step would be structured usability testing with both students and instructors, paired with navigation heatmaps, to validate whether click depth genuinely improved across both groups rather than just the one this redesign was built around.   
     </p>
  </div>

  {/* RIGHT: PDF */}
  <div
  id="pdf-section"
  className="relative rounded-[1rem] border-2 border-[#0A345E] bg-[#0A345E] p-6 shadow-[4px_4px_0_#E5E5E5]">

    <PixelStar className="bottom-7 left-6 text-[#FDEB5B]" />
    <PixelStarSpin className="top-6 right-8 text-[#FDEB5B]" />

    <SectionLabel>PDF FILE</SectionLabel>

    <h2 className="font-vcr text-[2rem] text-[#FDEB5B]">
      Full Case Study PDF
    </h2>

    <p className="mt-3 font-mono text-[#ffffff]">
      View the complete project documentation including detailed slides,
      research notes, and additional visuals.
    </p>

    <div className="mt-5 flex flex-wrap gap-4">
      <a
        href="/bcituxcase.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#0A345E] bg-[#F5F5F5] px-4 py-2 font-Dos text-[#0A345E]  lp:hover:bg-[#FDEB5B] hover:text-[#0A345E] transition"
      >
        Open PDF ↗
      </a>

      <a
        href="/bcituxcase.pdf"
        download
        className="border border-[#0A345E] bg-white px-4 py-2 font-Dos text-[#0A345E] lp:hover:bg-[#FDEB5B] hover:text-[#0A345E] transition"
      >
        Download PDF
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

export default BcitCase;