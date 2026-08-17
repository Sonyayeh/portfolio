import React, { useState } from "react";

const BoardFig = () => {
  const [activeTab, setActiveTab] = useState("design");

  const tabContent = {
    design: {
      title: "DesignFile.exe",
      iframeTitle: "Boardwalk Figma Design File",
      src: "https://embed.figma.com/design/1gCrT0CT3cuodCsgmVOBvB/Broadway-Boutique?node-id=0-1&embed-host=share",
      description:
        "This file documents the full design process, from low fidelity wireframes through high fidelity screens to the finalized style guide, offering a closer examination of the visual system and the interface decisions that shaped the project.",
      externalLink:
        "https://www.figma.com/design/1gCrT0CT3cuodCsgmVOBvB/Broadway-Boutique?node-id=0-1",
    },
    prototype: {
      title: "Prototype.exe",
      iframeTitle: "Boardwalk Figma Prototype",
      src: "https://embed.figma.com/proto/1gCrT0CT3cuodCsgmVOBvB/Broadway-Boutique?page-id=0%3A1&node-id=35-75&p=f&viewport=1686%2C205%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=35%3A75&embed-host=share",
      description:
        "This interactive prototype demonstrates how the project functions as a complete product flow, allowing viewers to engage directly with the screens, navigation, and interactions within a more realistic context.",
      externalLink:
        "https://www.figma.com/proto/1gCrT0CT3cuodCsgmVOBvB/Broadway-Boutique?page-id=0%3A1&node-id=35-75&scaling=scale-down&content-scaling=fixed",
    },
  };

  const current = tabContent[activeTab];

  return (
    <section className="w-full">
      <h2
        className="flex justify-self-center underline decoration-dashed text-purple-400 text-center justify-center
          sm:text-[1.7rem] sm:w-[23rem]
                md:text-[3rem] md:w-[49rem]
                lp:text-[4rem] lp:w-[60rem] lp:items-center
                lg:text-[3rem] lg:pb-[2rem] lg:pt-[2rem] lg:w-[50rem]
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
          sm:w-[22rem] 
          md:w-[45rem] md:p-5 
          lp:w-[65rem] lp:p-6 
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

export default BoardFig;