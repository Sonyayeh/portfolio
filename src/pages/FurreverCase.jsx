import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const projectFeatures = [
  "Pet profile browsing",
  "Adoption application flow",
  "Rescue organization information",
  "User-friendly pet matching",
  "Warm and approachable visual design",
  "Mobile-friendly experience",
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
      <section className="relative overflow-hidden rounded-[1rem] border-2 border-[#8b4055] bg-[#8b4055] p-6 text-white shadow-[6px_6px_0_#ffd2dc] md:p-10">
        <PixelStar className="top-4 left-10 text-[#ffd2dc]" />
        <PixelStarSpin className="top-20 right-20 text-[#fff6f8]" />

        <h2 className="font-vcr text-[2.3rem] text-[#ffd2dc] md:text-[4rem]">
          Summary
        </h2>

        <p className="mt-5 max-w-[48rem] font-mono text-white">
          Furrever Pals is a pet adoption case study focused on making the
          adoption process feel warmer, easier, and more approachable for future
          pet owners while helping rescue animals find loving homes.
        </p>
      </section>

      {/* PROBLEM + GOAL */}
      <section className="mt-8 grid gap-6 lp:grid-cols-2 lg:grid-cols-2">
        <div className="relative rounded-[1rem] border-2 border-[#8b4055] bg-[#8b4055] p-6 text-white shadow-[6px_6px_0_#ffd2dc]">
          <PixelStar className="bottom-20 right-6 text-[#ffd2dc]" />
          <PixelStarSpin className="top-12 left-10 text-white" />

          <SectionLabel>01 / PROBLEM</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#ffd2dc]">Problem</h2>

          <p className="mt-4 font-mono text-white">
            Pet adoption websites can feel overwhelming, text-heavy, or
            emotionally disconnected. Users may struggle to quickly understand a
            pet’s personality, adoption requirements, and next steps.
          </p>
        </div>

        <div className="relative rounded-[1rem] border-2 border-[#8b4055] bg-[#8b4055] p-6 text-white shadow-[6px_6px_0_#ffd2dc]">
          <PixelStar className="top-5 right-6 text-[#ffd2dc]" />
          <PixelStar className="bottom-[9rem] left-[4rem] text-white" />

          <SectionLabel>02 / GOAL</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#ffd2dc]">Goal</h2>

          <p className="mt-4 font-mono text-[0.9rem] leading-relaxed text-white">
            Create a friendly and clear adoption experience that helps users
            browse pets, understand key information, and feel confident about
            starting the adoption process.
          </p>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="mt-8 rounded-[1rem] border-2 border-[#8b4055] bg-[#8b4055] p-6 shadow-[4px_4px_0_#ffd2dc]">
        <SectionLabel>03 / TARGET AUDIENCE</SectionLabel>

        <h2 className="font-vcr text-[2rem] text-[#ffd2dc]">
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
      <section className="relative mt-8 rounded-[1rem] border-2 border-[#8b4055] bg-[#8b4055] p-6 shadow-[4px_4px_0_#ffd2dc]">
        <PixelStarSpin className="top-6 right-10 text-[#ffd2dc]" />
        <PixelStarSpin className="top-[8rem] right-[10rem] text-white" />

        <SectionLabel>04 / DESIGN OUTPUTS</SectionLabel>

        <p className="pb-3 font-vcr text-[2.3rem] text-[#ffd2dc] sm:text-[2rem]">
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
            className="cursor-pointer underline text-[#ffd2dc]"
          >
            PDF
          </span>
          !
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectFeatures.map((item) => (
            <div
              key={item}
              className="group rounded-md border border-[#ffd2dc] bg-white p-5 shadow-[3px_3px_0_#ffd2dc] transition lg:hover:-translate-y-1"
            >
              <PixelStar size="text-[0.8rem]" className="right-3 top-3 text-[#ff9eb5]" />

              <p className="font-Dos text-[1rem] text-[#8b4055]">
                {item}
              </p>

              <p className="mt-2 font-mono text-[0.7rem] text-[#b56576]">
                design_file.svg
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REFLECTION + PDF */}
      <section className="mt-8 grid gap-6 lp:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-[1rem] border-2 border-[#8b4055] bg-[#8b4055] p-6 shadow-[4px_4px_0_#ffd2dc]">
          <SectionLabel>05 / CONCLUSION</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#ffd2dc] sm:text-[2rem]">
            What I Learned
          </h2>

          <p className="mt-4 font-mono text-[0.9rem] text-white">
            This project helped me think about how emotional design and clear UX
            can work together. A pet adoption experience needs to feel friendly,
            trustworthy, and easy to follow.
          </p>

          <h2 className="mt-4 font-vcr text-[2rem] text-[#ffd2dc] sm:text-[1.8rem]">
            What I'd Improve
          </h2>

          <p className="mt-4 font-mono text-[0.9rem] text-white">
            If I had more time, I would conduct usability testing with users who
            are actively looking to adopt pets and refine the application flow
            based on their feedback.
          </p>
        </div>

        <div
          id="pdf-section"
          className="relative rounded-[1rem] border-2 border-[#8b4055] bg-[#8b4055] p-6 shadow-[4px_4px_0_#ffd2dc]"
        >
          <PixelStar className="bottom-7 left-6 text-[#ffd2dc]" />
          <PixelStarSpin className="top-6 right-8 text-white" />

          <SectionLabel>PDF FILE</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#ffd2dc] sm:text-[1.8rem]">
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