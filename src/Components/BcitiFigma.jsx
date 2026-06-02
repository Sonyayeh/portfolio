import React, { useState } from "react";

const BcitiFig = () => {
  const [activeTab, setActiveTab] = useState("design");

  const tabContent = {
    design: {
      title: "DesignFile.exe",
      iframeTitle: "Figma Design File",
      src: "https://embed.figma.com/design/QZRxtL2jsXw5Q4ojCa3RyZ/MyBcit-edit?node-id=2-3&embed-host=share",
      description:
        "This file contains the full design process, including low-fidelity wireframes, high-fidelity screens, and the style guide. It provides a closer look at the visual system and interface decisions behind the redesign.",
      externalLink:
        "https://www.figma.com/design/QZRxtL2jsXw5Q4ojCa3RyZ/MyBcit-edit?node-id=2-3",
    },
    prototype: {
      title: "Prototype.exe",
      iframeTitle: "Figma Prototype",
      src: "https://embed.figma.com/proto/QZRxtL2jsXw5Q4ojCa3RyZ/MyBcit-edit?page-id=2%3A3&node-id=134-3101&node-type=canvas&viewport=-255%2C344%2C0.11&scaling=min-zoom&content-scaling=fixed&embed-host=share",
      description:
        "This interactive prototype demonstrates how the redesigned experience functions as a real product flow. It allows viewers to explore the screens, navigation, and interactions in a more realistic context.",
      externalLink:
        "https://www.figma.com/proto/QZRxtL2jsXw5Q4ojCa3RyZ/MyBcit-edit?page-id=2%3A3&node-id=134-3101&scaling=min-zoom&content-scaling=fixed",
    },
  };

  const current = tabContent[activeTab];

  return (
    <section className="w-full">
      <h2
        className="
          text-center underline decoration-dashed text-blue-400
          sm:text-[2rem] sm:pb-[1rem] sm:w-[23rem] sm:pt-[3rem] sm:ml-[2rem]
          md:text-[4rem] md:w-[45rem] md:mx-auto md:pt-[5rem] md:ml-[5rem]
          lp:text-[4rem] lp:w-[65rem]
          lg:text-7xl lg:w-[60rem] lg:mb-[3rem] lg:mt-[2rem] lg:mx-auto lg:ml-[4rem]
        "
      >
        Figma Access:
      </h2>

      <div
        className="
          mx-auto
          border-2 border-blue-200 border-dashed
          bg-[#eee6f6]
          sm:px-2 sm:py-3
          sm:w-[25rem] sm:ml-[1rem]
          md:w-[50rem] md:p-5 md:ml-[2rem]
          lp:w-[65rem] lp:p-6 lp:ml-[3rem]
          lg:w-[78rem] lg:p-7 lg:ml-[-5rem]
        "
      >
        {/* Title bar */}
        <div className="flex items-center justify-between border-2 border-blue-200 bg-blue-300 px-2 py-1">
          <span className="text-white font-vcr sm:text-[0.8rem] md:text-[1rem] lp:text-[1.2rem] lg:text-[1.4rem]">
            FigmaViewer.exe
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
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b-2 border-blue-200 pb-3">
            <button
              type="button"
              onClick={() => setActiveTab("design")}
              className={`
                border-2 px-3 py-1 font-vcr
                sm:text-[0.75rem]
                md:text-[0.95rem]
                lg:text-[1.1rem]
                ${
                  activeTab === "design"
                    ? "border-blue-200 bg-[#e8dcf8] text-blue-500"
                    : "border-blue-200 bg-white text-blue-400 hover:bg-[#f3ecfb]"
                }
              `}
            >
              Design File
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("prototype")}
              className={`
                border-2 px-3 py-1 font-vcr
                sm:text-[0.75rem]
                md:text-[0.95rem]
                lg:text-[1.1rem]
                ${
                  activeTab === "prototype"
                    ? "border-blue-200 bg-[#e8dcf8] text-blue-500"
                    : "border-blue-200 bg-white text-blue-400 hover:bg-[#f3ecfb]"
                }
              `}
            >
              Prototype
            </button>
          </div>

          {/* File name row */}
          <p
            className="
              mt-3 border-b border-blue-200 pb-2 text-blue-400 font-vcr
              sm:text-[0.85rem]
              md:text-[1rem]
              lp:text-[1.2rem]
              lg:text-[1.4rem]
            "
          >
            File: {current.title}
          </p>

          {/* Embed */}
          <div className="mt-4 border-2 border-blue-200 bg-white p-2 md:p-3">
            <iframe
              src={current.src}
              allowFullScreen
              title={current.iframeTitle}
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
             className={`
            w-full
            ${activeTab === "prototype"
                ? "h-[26rem] sm:h-[30rem] md:h-[38rem] lp:h-[45rem] lg:h-[48rem]"
                : "h-[18rem] sm:h-[20rem] md:h-[38rem] lp:h-[45rem] lg:h-[48rem]"
            }
            `}
            />
          </div>

          {/* Description */}
          <p
            className="
              mt-4 text-emerald-500 font-vcr
              sm:text-[0.9rem] sm:leading-7
              md:text-[1.4rem] md:leading-[2.4rem]
              lp:text-[1.8rem] lp:leading-[3rem]
              lg:text-[2.2rem] lg:leading-[3.5rem]
            "
          >
            {current.description}
          </p>

          {/* Actions */}
          <div className="mt-4 flex justify-between items-center border-t-2 border-blue-200 pt-3">
            <p
              className="
                text-blue-400 font-vcr
                sm:text-[0.8rem]
                md:text-[0.95rem]
                lg:text-[1.1rem]
              "
            >
              Viewing: {activeTab === "design" ? "Design File" : "Prototype"}
            </p>

            <a
              href={current.externalLink}
              target="_blank"
              rel="noreferrer"
              className="
                border-2 border-blue-200 bg-[#e8dcf8] px-3 py-1
                text-blue-400 font-vcr hover:bg-white
                sm:text-[0.8rem]
                md:text-[0.95rem]
                lg:text-[1.1rem]
              "
            >
              Open in Figma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BcitiFig;