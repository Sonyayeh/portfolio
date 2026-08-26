import React, { useEffect, useRef, useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";
import moodboard from "../BoardDesignProcess/moodboard.svg";
import styleguide from "../BoardDesignProcess/styleguide.svg";
import team from "../BoardDesignProcess/team.svg";
import applofi from "../BoardDesignProcess/applofi.svg";
import appmock from "../BoardDesignProcess/lofimockup.svg";

const projectImages = [
  { title: "Mood Board", src: moodboard },
  { title: "Style Guide", src: styleguide },
  { title: "Team Members ", src: team },
  { title: "App Lo-Fi", src: applofi },
  { title: "App Mockup", src: appmock },
];

const audience = [
"Young adults (18-30)",
  "Skateboard lovers / beginners",
  "Streetwear enthusiasts",
  "Ourtdoor sports fans",
];



const PixelStar = ({ className = "", size = "text-[2rem]" }) => (
  <div
    className={`pointer-events-none absolute font-Dos ${size} ${className}`}
    style={{ animation: "pixelFloat 4s ease-in-out infinite" }}
  >
     ★
  </div>
);

const PixelStarSpin = ({ className = "", size = "text-[1.5rem]" }) => (
  <div
    className={`pointer-events-none absolute font-Dos ${size} ${className}`}
    style={{ animation: "pixelSpin 10s linear infinite" }}
  >
    ▷
  </div>
);

const SectionLabel = ({ children }) => (
  <p className="mb-4 inline-block border border-[#849ED6] bg-white px-3 py-1 font-Dos text-[0.75rem] text-[#0A3560] shadow-[2px_2px_0_#c2d0ee]">
    {children}
  </p>
);

const BoardwalkCase = () => {
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
        className="px-3 py-1 font-Dos text-[#0A3560] transition hover:text-[#0A3560] hover:underline"
      >
        ← back
      </button>

      
      <PixelStarSpin className="top-[20rem] right-[5rem] text-[#9D0606]" />

      <h1 className="font-vcr text-[2.3rem] text-[#0A3560] md:text-[4rem]">
       Boardwalk Boutique
      </h1>

      <p className="mb-4 inline-block border border-[#849ED6] bg-[#ffffff] px-3 py-1 font-Dos text-[0.85rem] text-[#0A3560] shadow-[2px_2px_0_#c2d0ee]">
        UI/UX APP DESIGN & DEVELOPMENT / ECOMMERCE / MARKETING
      </p>

      {/* SUMMARY */}
      <section className="relative overflow-hidden rounded-[1rem] border-2 border-[#0A3560] bg-[#849ED6] p-6 text-white shadow-[6px_6px_0_#c2d0ee] md:p-10">
        <PixelStar className="top-4 left-10 text-[#0A3560]" />
        <PixelStarSpin className="top-20 right-20 text-[#ffffff]" />

        <h2 className="font-vcr text-[2.3rem] text-[#ffffff] md:text-[4rem]">
          Summary
        </h2>

        <p className="mt-5 max-w-[48rem] font-mono text-[#ffffff]">
         Boardwalk Boutique is an ecommerce platform based in Vancouver, BC, built around two connected functions: renting skateboards and selling skate aesthetic clothing. The site supports browsing a product catalogue, saving items to a wishlist, and completing purchases online, aimed at an 18 to 30 year old audience within the skateboarding and streetwear community.
        </p>
      </section>

      {/* PROBLEM + GOAL */}
      <section className="mt-8 grid gap-6 lp:grid-cols-2 lg:grid-cols-2">
        <div className="relative rounded-[1rem] border-2 border-[#0A3560] bg-[#849ED6] p-6 text-white shadow-[6px_6px_0_#c2d0ee]">
          <PixelStar className="bottom-20 right-6 text-[#0A3560]" />
          <PixelStarSpin className="top-12 left-10 text-white" />

          <SectionLabel>01 / PROBLEM</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#ffffff]">Problem</h2>

          <p className="mt-4 font-mono text-white">
            Skaters looking to rent equipment or shop for aesthetic-specific clothing often have to piece together their options across multiple sites, none of which are built around how they actually browse, compare, or save what they're interested in before committing to a purchase or rental.
          </p>
        </div>

        <div className="relative rounded-[1rem] border-2 border-[#0A3560] bg-[#849ED6] p-6 text-white shadow-[6px_6px_0_#c2d0ee]">
          <PixelStar className="top-5 right-6 text-[#9D0606]" />
          <PixelStar className="bottom-[17rem] left-[1rem] text-white" />

          <SectionLabel>02 / GOAL</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#ffffff]">Goal</h2>

          <p className="mt-4 font-mono text-[0.9rem] leading-relaxed text-white">
            Boardwalk Boutique set out to give Vancouver's skateboarding community a single platform for both renting boards and shopping skate aesthetic clothing, rather than piecing the two together across separate sites. For an 18 to 30 year old audience, that meant clear hourly rental pricing with date selection, a wishlist for saving items across sessions, and a product catalogue built around how skaters actually browse and compare gear before committing.
          </p>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="mt-8 rounded-[1rem] border-2 border-[#0A3560] bg-[#849ED6] p-6 shadow-[4px_4px_0_#c2d0ee]">
        <SectionLabel>03 / TARGET AUDIENCE</SectionLabel>
        
        <PixelStar className="left-[20rem] text-[#9D0606]" />

        <h2 className="font-vcr text-[2rem] text-[#ffffff]">
          Target Audience
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4 lp:grid-cols-4 lg:grid-cols-4">
          {audience.map((item) => (
            <div
              key={item}
              className="rounded-md border border-[#0A3560] bg-[#fff6f8] p-4 font-mono text-[0.85rem] text-[#0A3560] transition lp:hover:-translate-y-1 lp:hover:bg-[#9D0606] lp:hover:text-[#ffffff] lg:hover:-translate-y-1 lg:hover:bg-[#c2d0ee]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

     {/* PROJECT FEATURES */}
<section className="relative mt-8 rounded-[1rem] border-2 border-[#0A3560] bg-[#849ED6] p-6 shadow-[4px_4px_0_#c2d0ee]">
  <PixelStarSpin className="top-6 right-10 text-[#ffffff]" />
  <PixelStarSpin className="top-[7rem] right-[30rem] text-[#9D0606]" />

  <SectionLabel>04 / DESIGN OUTPUTS</SectionLabel>

  <p className="pb-3 font-vcr text-[2.3rem] text-[#ffffff] sm:text-[2rem]">
    Design Process Visuals
  </p>

  <p className="mb-6 mt-3 max-w-[50rem] font-mono text-[0.9rem] leading-relaxed text-white">
    Key UX and visual design elements created for Boardwalk Boutique, including
    product browsing, shopping cart functionality, interface structure, and visual direction
    which are available in the{" "}
    <span
      onClick={() => {
        document
          .getElementById("pdf-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      className="cursor-pointer underline text-[#9D0606]"
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
        <div className="rounded-[1rem] border-2 border-[#0A3560] bg-[#849ED6] p-6 shadow-[4px_4px_0_#c2d0ee]">
          <SectionLabel>05 / CONCLUSION</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#ffffff] sm:text-[2rem]">
            What I Learned
          </h2>

          <p className="mt-4 font-mono text-[0.9rem] text-white">
            This project clarified how differently app and web design need to be approached. On a smaller screen, CTA clarity and accessibility carry disproportionate weight, since there's little room to compensate for a misstep. Every layout choice shapes the relationship between user and designer, and that relationship depends on details easy to overlook precisely because the margin for error is so small.
          </p>
        </div>

         <section className="mt-3 grid gap-6 lp:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-[1rem] border-2 border-[#0A3560] bg-[#849ED6] p-6 shadow-[4px_4px_0_#c2d0ee]">

          <h2 className="mt-4 font-vcr text-[2rem] text-[#ffffff] sm:text-[1.8rem]">
            What I'd Improve
          </h2>

          <p className="mt-4 font-mono text-[0.9rem] text-white">
            If I had more time, I would take this beyond a case study and work toward a genuinely shippable app, applying the same WCAG-driven redesign process across every remaining screen and testing the full flow with real users.
          </p>
          </div>
          </section>

        <div
          id="pdf-section"
          className="relative rounded-[1rem] border-2 border-[#0A3560] bg-[#849ED6] p-6 shadow-[4px_4px_0_#c2d0ee]"
        >
          <PixelStar className="bottom-7 left-6 text-[#9D0606]" />
          <PixelStarSpin className="top-6 right-8 text-white" />

          <SectionLabel>PDF FILE</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#ffffff] sm:text-[1.8rem]">
            Full Case Study PDF
          </h2>

          <p className="mt-3 font-mono text-white">
            View the complete Boardwalk Boutique documentation including research,
            design direction, process work, and final case study details.
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href="/boardwalk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A3560] bg-[#fff6f8] px-4 py-2 font-Dos text-[#0A3560] transition lp:hover:bg-[#9D0606] lg:hover:bg-[#9D0606] hover:text-white"
            >
              Open PDF ↗
            </a>

            <a
              href="/boarddesignguide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A3560] bg-[#fff6f8] px-4 py-2 font-Dos text-[#0A3560] transition lp:hover:bg-[#9D0606] lg:hover:bg-[#9D0606] hover:text-white"
            >
              Open Design Process ↗
            </a>
            <a
              href="/boardwalk.pdf"
              download
              className="border border-[#0A3560] bg-white px-4 py-2 font-Dos text-[#0A3560] transition lp:hover:bg-[#9D0606] lg:hover:bg-[#9D0606] hover:text-white"
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

export default BoardwalkCase;