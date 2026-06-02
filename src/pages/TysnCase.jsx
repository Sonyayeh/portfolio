import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import detailHiFi from "../assets/TYSN/detailpagehifi.jpg";
import detailWire from "../assets/TYSN/detailpagewireframe.jpg";
import menuHiFi from "../assets/TYSN/menupagehifi.jpg";
import menuWire from "../assets/TYSN/menupagewireframe.jpg";
import homepageHiFi from "../assets/TYSN/homepagehifi.jpg";
import homepageWire from "../assets/TYSN/homepagewireframe.jpg";
import hostHiFi from "../assets/TYSN/hostpagehifi.jpg";
import hostWire from "../assets/TYSN/hostpagewireframe.jpg";

const tysnImages = [

  { src: homepageWire, title: "Homepage Wireframe" },
  { src: homepageHiFi, title: "Homepage Hi-Fi" },

  { src: detailWire, title: "Event Detail Wireframe" },
  { src: detailHiFi, title: "Event Detail Hi-Fi" },

  { src: menuWire, title: "Menu Page Wireframe" },
  { src: menuHiFi, title: "Menu Page Hi-Fi" },

  { src: hostWire, title: "Host Page Wireframe" },
  { src: hostHiFi, title: "Host Page Hi-Fi" },
];

const campaignMaterials = [
  "Event posters",
  "Social media ad",
  "Website wireframes",
  "High-fidelity website mockups",
  "Brand style guide",
];

const audience = [
  "Business professionals",
  "Event planners",
  "Tea and dessert enthusiasts",
  "Vancouver residents and tourists",
];

const PixelStar = ({ className = "", size = "text-[2rem]" }) => (
  <div
    className={`pointer-events-none absolute font-Dos ${size} ${className}`}
    style={{ animation: "pixelFloat 4s ease-in-out infinite" }}
  >
    ✿
  </div>
);

const PixelStarSpin = ({ className = "", size = "text-[1.5rem]" }) => (
  <div
    className={`pointer-events-none absolute font-Dos ${size} ${className}`}
    style={{ animation: "pixelSpin 10s linear infinite" }}
  >
    ❀
  </div>
);

const SectionLabel = ({ children }) => (
  <p className="mb-4 inline-block border border-[#d9d8ff] bg-white px-3 py-1 font-Dos text-[0.75rem] text-[#242B75] shadow-[2px_2px_0_#d9d8ff]">
    {children}
  </p>
);

const TysnCase = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative mx-auto w-full max-w-[95rem] px-4 py-10 sm:px-5 md:px-8 lg:px-10">
      <button
        onClick={() => navigate("/cases")}
        className="px-3 py-1 font-Dos text-[#242B75] transition hover:text-[#F79BB9] hover:underline"
      >
        ← back
      </button>

      <PixelStar className="top-4 right-[3rem] text-[#F79BB9]" />
      <PixelStarSpin className="top-[20rem] right-[5rem] text-[#f9f9f9]" />

      <h1 className="font-vcr text-[2.3rem] text-[#242B75] md:text-[4rem]">
        TYSN: Celestial Tea Ceremony
      </h1>

      <p className="mb-4 inline-block border border-[#242B75] bg-white px-3 py-1 font-Dos text-[0.85rem] text-[#242B75] shadow-[2px_2px_0_#d9d8ff]">
        CASE STUDY / BRAND CAMPAIGN
      </p>

      {/* SUMMARY */}
      <section className="relative overflow-hidden rounded-[1rem] border-2 border-[#3370A8] bg-[#3370A8] p-6 text-white shadow-[6px_6px_0_#242B75] md:p-10">
        <PixelStar className="top-4 left-10 text-[#F79BB9]" />
        <PixelStarSpin className="top-20 right-20 text-[#f9f9f9]" />

        <h2 className="font-vcr text-[2.3rem] text-[#F79BB9] md:text-[4rem]">
          Summary
        </h2>

        <p className="mt-5 max-w-[48rem] font-mono text-white">
          A celestial-themed brand campaign and event website for Stardust Tea
          Lounge’s Celestial Tea Ceremony, combining Japanese tea, wagashi,
          storytelling, posters, tickets, social media, and website design.
        </p>
      </section>

      {/* PROBLEM + GOAL */}
      <section className="mt-8 grid gap-6 lp:grid-cols-2 lg:grid-cols-2">
        <div className="relative rounded-[1rem] border-2  border-[#3370A8] bg-[#3370A8] p-6 text-white shadow-[6px_6px_0_#242B75]">
          <PixelStar className="bottom-20 right-6 text-[#F79BB9]" />
          <PixelStarSpin className="top-12 left-10 text-white" />

          <SectionLabel>01 / PROBLEM</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#F79BB9]">Problem</h2>

          <p className="mt-4 font-mono text-white">
            Stardust Tea Lounge needed a campaign that could promote an exclusive
            Japanese tea and wagashi event while making the experience feel
            elegant, memorable, and easy to understand.
          </p>
        </div>

        <div className="relative rounded-[1rem] border-2  border-[#3370A8] bg-[#3370A8] p-6 text-white shadow-[6px_6px_0_#242B75]">
          <PixelStar className="top-5 right-6 text-[#F79BB9]" />
          <PixelStar className="bottom-[9rem] left-[4rem] text-white" />

          <SectionLabel>02 / GOAL</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#F79BB9]">Goal</h2>

          <p className="mt-4 font-mono text-[0.9rem] leading-relaxed text-white">
            Increase attraction and traffic, promote Japanese tea culture, and
            strengthen Stardust Tea Lounge’s connection with the local Vancouver
            community through a cohesive campaign.
          </p>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="mt-8 rounded-[1rem] border-2 border-[#3370A8] bg-[#3370A8] p-6 shadow-[4px_4px_0_#242B75]">
        <SectionLabel>03 / TARGET AUDIENCE</SectionLabel>

        <h2 className="font-vcr text-[2rem] text-[#F79BB9]">
          Target Audience
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-4 lp:grid-cols-4 lg:grid-cols-4">
          {audience.map((item) => (
            <div
              key={item}
              className="rounded-md border border-[#d9d8ff] bg-[#f9f9f9] p-4 font-mono text-[0.85rem] text-[#242B75] transition lp:hover:-translate-y-1 lp:hover:bg-[#F79BB9] lg:hover:-translate-y-1 lg:hover:bg-[#F79BB9]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CAMPAIGN MATERIALS */}
      <section className="relative mt-8 rounded-[1rem] border-2 border-[#3370A8] bg-[#3370A8] p-6 shadow-[4px_4px_0_#242B75]">
        <PixelStarSpin className="top-6 right-10 text-[#F79BB9]" />
        <PixelStarSpin className="top-[8rem] right-[10rem] text-white" />

        <SectionLabel>04 / CAMPAIGN OUTPUTS</SectionLabel>

        <p className="font-vcr text-[2.3rem] sm:text-[2rem] pb-3 text-[#F79BB9]">
          Design Process Visuals
        </p>
        <section>

  <p className="max-w-[40rem] mb-3 font-mono text-[0.85rem] text-[#ffffff]">
    A collection of final visuals, wireframes, and design explorations
    for the Celestial Tea Ceremony campaign.
  </p>

  <p className="mb-6 mt-3 max-w-[50rem] font-mono text-[0.9rem] leading-relaxed text-white">
  Key campaign materials created for the Celestial Tea Ceremony,
  including posters, ticket concepts, social ads, brand direction, and
  website design (which are all available in the {" "}
  <span
    onClick={() => {
      document
        .getElementById("pdf-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
    className="cursor-pointer underline text-[#F79BB9]"
  >
     PDF
  </span>
  )!
</p>
  <div className="mt-6 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {tysnImages.map((img) => (
      <div
        key={img.title}
        className="group rounded-md border border-[#d9d8ff] bg-white p-3 shadow-[3px_3px_0_#242B75] transition lg:hover:-translate-y-1"
      >
        <div className="overflow-hidden rounded-md">
          <img
            src={img.src}
            alt={img.title}
            className="w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <p className="mt-3 font-Dos text-[0.9rem] text-[#242B75]">
          {img.title}
        </p>
      </div>
    ))}
  </div>
</section>

        

      </section>

      {/* REFLECTION + PDF */}
      <section className="mt-8 grid gap-6 lp:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-[1rem] border-2 border-[#3370A8] bg-[#3370A8] p-6 shadow-[4px_4px_0_#242B75]">
          <SectionLabel>05 / CONCLUSION</SectionLabel>

          <h2 className="font-vcr text-[2rem] sm:text-[2rem] text-[#F79BB9]">
            What I Learned
          </h2>

          <p className="mt-4 font-mono text-[0.9rem] text-white">
            This project helped me understand how branding, campaign planning,
            and website design need to work together as one complete experience.
          </p>

          <h2 className="mt-4 font-vcr text-[2rem] sm:text-[1.8rem] text-[#F79BB9]">
            What I'd Improve
          </h2>

          <p className="mt-4 font-mono text-[0.9rem] text-white">
            If I had more time, I would test the website ticket flow with users
            and refine the event registration experience.
          </p>
        </div>

        <div className="relative rounded-[1rem] border-2 border-[#3370A8] bg-[#3370A8] p-6 shadow-[4px_4px_0_#242B75]" id="pdf-section">
          <PixelStar className="bottom-7 left-6 text-[#F79BB9]" />
          <PixelStarSpin className="top-6 right-8 text-white" />

          <SectionLabel>PDF FILE</SectionLabel>

          <h2 className="font-vcr text-[2rem] sm:text-[1.8rem] text-[#F79BB9]">
            Full Brandbook PDF
          </h2>

          <p className="mt-3 font-mono text-white">
            View the complete brandbook including personas, moodboard, style
            guide, posters, ticket concepts, and website mockups.
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href="/tysn.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#242B75] bg-[#f9f9f9] px-4 py-2 font-Dos text-[#242B75] transition lp:hover:bg-[#F79BB9] lg:hover:bg-[#F79BB9]"
            >
              Open PDF ↗
            </a>

            <a
              href="/tysn.pdf"
              download
              className="border border-[#242B75] bg-white px-4 py-2 font-Dos text-[#242B75] transition lp:hover:bg-[#F79BB9] lg:hover:bg-[#F79BB9]"
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="relative rounded-[1rem] border-2 border-[#3370A8] bg-[#3370A8] p-6 shadow-[4px_4px_0_#242B75]">
          <PixelStar className="bottom-7 left-6 text-[#F79BB9]" />
          <PixelStarSpin className="top-6 right-8 text-white" />

          <SectionLabel>Figma Link</SectionLabel>

          <h2 className="font-vcr text-[2rem] text-[#F79BB9]">
            Figma Link
          </h2>

          <p className="mt-3 font-mono text-white">
            View the complete brandbook including personas, moodboard, style
            guide, posters, ticket concepts, and website mockups.
          </p>

          <div className="mt-5 flex flex-wrap gap-4">
            <a
              href="https://www.figma.com/design/XnxeqKUNnSsRcOGRtBuqFK/pages?node-id=0-1&t=qahiC711SUUCTs0m-1"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#242B75] bg-[#f9f9f9] px-4 py-2 font-Dos text-[#242B75] transition lp:hover:bg-[#F79BB9] lg:hover:bg-[#F79BB9]"
            >
              Open Figma Link ↗
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

export default TysnCase;