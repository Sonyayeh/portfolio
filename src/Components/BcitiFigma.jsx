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
        className="flex justify-self-center underline decoration-dashed text-purple-400 text-center justify-center
          sm:text-[2rem] sm:pb-[1rem] sm:w-[18rem] 
          md:text-[4rem] md:w-[45rem] md:mx-auto md:pt-[5rem]
          lp:text-[4rem] lp:w-[30rem] lp:pt-[2rem]
          lg:text-[5rem] lg:w-[61rem] lg:pb-[2rem]
        "
      >
        Figma Access:
      </h2>

      <div
        className="
          mx-auto
          border-2 border-orange-200 border-dashed
          bg-[#eee6f6] justify-self-center
          sm:px-2 sm:py-3
          sm:w-[21rem] 
          md:w-[50rem] md:p-5 
          lp:w-[60rem] lp:p-6 
          lg:w-[78rem] lg:p-7 
        "
      >
        {/* Title bar */}
        <div className="flex items-center justify-between border-2 border-orange-200 bg-orange-300 px-2 py-1">
          <span className="text-white font-vcr sm:text-[0.8rem] md:text-[1rem] lp:text-[1.2rem] lg:text-[1.4rem]">
            FigmaViewer.exe
          </span>

         <div className="flex gap-1
          lg:text-[1.5rem]
          ">
            <span className="border border-orange-400 bg-[#f8f4ff] text-orange-400 px-1">_</span>
            <span className="border border-orange-400 bg-[#f8f4ff] text-orange-400 px-1">□</span>
            <span className="border border-orange-400 bg-[#f8f4ff] text-orange-400 px-1">×</span>
          </div>
        </div>

        {/* Body */}
        <div className="mt-3 border-2 border-orange-200 bg-[#f8f4ff] p-3 md:p-4 lg:p-5">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 pb-3">
            <button
              type="button"
              onClick={() => setActiveTab("design")}
              className={`
                border-2 px-3 py-1 font-vcr
                 sm:text-[0.75rem]
                md:text-[0.95rem]
                lp:text-[1.1rem]
                lg:text-[1.5rem]
                ${
                  activeTab === "design"
                    ? "border-orange-200 bg-[#f8f4ff] text-orange-500"
                    : "border-orange-200 bg-[#eee6f6] text-orange-400 hover:bg-[#f3ecfb]"
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
                lp:text-[1.1rem]
                lg:text-[1.5rem]
                ${
                  activeTab === "prototype"
                    ? "border-orange-200 bg-[#f8f4ff] text-orange-500"
                    : "border-orange-200 bg-[#eee6f6] text-orange-400 hover:bg-[#f3ecfb]"
                }
              `}
            >
              Prototype
            </button>
          </div>

          {/* File name row */}
          <p
            className="
              mt-3 pb-2 text-orange-400 font-vcr
              sm:text-[0.85rem]
              md:text-[1rem]
              lp:text-[1.2rem]
              lg:text-[1.4rem]
            "
          >
            File: {current.title}
          </p>

          {/* Embed */}
          <div className="mt-4 border-2 border-orange-200 bg-white p-2 md:p-3">
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
              mt-4 text-orange-500 font-vcr
               sm:text-[0.85rem]
                  md:text-[1rem]
                  lp:text-[1.2rem]
                  lg:text-[1.4rem]
            "
          >
            {current.description}
          </p>

          {/* Actions */}
          <div className="mt-4 flex justify-between items-center border-t-2 border-orange-200 pt-3">
            <p
              className="
                text-orange-400 font-vcr
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
                border-2 border-orange-200 bg-[#e8dcf8] px-3 py-1
                text-orange-400 font-vcr hover:bg-white
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