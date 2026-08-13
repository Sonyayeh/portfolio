import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import empathy from "../BcitDesignProcess/empathyBcit.svg";
import flowchart from "../BcitDesignProcess/FlowchartBcit.svg";
import grid from "../BcitDesignProcess/gridBcit.svg";
import persona1 from "../BcitDesignProcess/personaBcit1.svg";
import persona2 from "../BcitDesignProcess/personaBcit2.svg";
import userstory from "../BcitDesignProcess/userstoryBcit.svg";

const projectImages = [
  { title: "Empathy Map", src: empathy },
  { title: "User Flowchart", src: flowchart },
  { title: "Grid System", src: grid },
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
           Redesigning MyBCIT to simplify navigation, reduce unnecessary steps, and modernize the interface for students in a fast-paced learning environment.
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
      MyBCIT is outdated, difficult to navigate, and inconsistent with BCIT's identity as a fast-paced, hands-on institution. Students consistently struggle to find grades, schedules, and other essential tools.
    </p>

  </div>

  {/* RIGHT: GOAL */}
  <div className="relative rounded-[1rem] border-2 border-[#0A345E]  bg-[#0A345E] p-6 shadow-[4px_4px_0_#E5E5E5]">

    <PixelStar className="top-5 right-6 text-[#FDEB5B]" />
    <PixelStar className="bottom-[6rem] left-[4rem] text-[#FDEB5B]" />

    <SectionLabel>02 / GOAL</SectionLabel>

    <h2 className="font-vcr text-[2rem] text-[#FDEB5B]">
      Goal
    </h2>

    <p className="mt-4 font-mono text-[0.9rem] leading-relaxed text-[#ffffff]">
Design a cleaner, more modern interface that reduces cognitive load, shortens the path to key information, and improves usability for every student, regardless of experience level.
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

  <p className="font-vcr text-[2.3rem] text-[#FDEB5B]">
    Design Process Visuals
  </p>

  <p className="mt-3 mb-6 max-w-[50rem] font-mono text-[0.9rem] leading-relaxed text-[#ffffff]">
Key UX artifacts developed throughout the redesign process, translating research findings into concrete design decisions.  </p>

  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lp:grid-cols-3">
    {projectImages.map((image) => (
      <div
        key={image.title}
        className="group relative rounded-md border border-[#E5E5E5] bg-white p-3 shadow-[3px_3px_0_#E5E5E5]"
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
      This project reinforced how much clarity and hierarchy matter in complex systems, and how small, deliberate UX changes can meaningfully reduce user frustration.
    </p>

    <h2 className="mt-4 font-vcr text-[2rem] text-[#FDEB5B]">
      What I'd Improve
    </h2>

    <p className="mt-4 font-mono text-[0.9rem] text-[#ffffff]">
The next step would be structured usability testing with real BCIT students, paired with navigation heatmaps to validate whether click depth genuinely improved in practice.    </p>
  </div>

  {/* RIGHT: PDF */}
  <div className="relative rounded-[1rem] border-2 border-[#0A345E] bg-[#0A345E] p-6 shadow-[4px_4px_0_#E5E5E5]">

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