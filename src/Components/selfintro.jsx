import React, { useState } from "react";
import Photo from "../assets/selfie.svg";

const tabs = [
  {
    id: "intro",
    label: "INTRO",
    title: "Hello, nice to meet you",
    subtitle: "A little introduction to who I am",
    text: "Hello, my name is Sonya. I am a Multi media Designer and a graduate from the New Media Design + Web Development program at BCIT. I care deeply about creating digital experiences that feel thoughtful, engaging, and meaningful in everyday life.",
  },
  {
    id: "background",
    label: "BACKGROUND",
    title: "Where I started",
    subtitle: "My early path into art and design",
    text: "Ever since I was young, I dreamed of entering the art industry. Growing up in a traditional Asian family, it was difficult to openly pursue art and design because it was often seen as a hobby rather than a career path. I was eventually able to convince my family to let me study Fine Arts at the University of Victoria, where I completed my Bachelor of Fine Arts.",
  },
  {
    id: "shift",
    label: "SHIFT",
    title: "The creative shift",
    subtitle: "How I moved toward digital design",
    text: "As time changed and technology became more central to daily life, I realised that a Fine Arts degree on its own was no longer enough for the direction I wanted to grow in. That shift led me toward digital design, where I could combine creativity, visual storytelling, and practical problem solving.",
  },
  {
    id: "interests",
    label: "INTERESTS",
    title: "What I love creating",
    subtitle: "The areas of design I enjoy most",
    text: "My interests span many areas of art and design, including graphic design, UI and UX design, videography, photography, marketing, social media, content creation, and copywriting. I enjoy working across different mediums and finding ways to make ideas feel clear, expressive, and memorable.",
  },
];

const MyPhoto = () => {
  return (
    <div className="flex h-auto w-full items-center justify-center">
      <img
        src={Photo}
        alt="my photo"
        className="
          w-full h-auto object-contain
          sm:max-w-[200px] sm:max-h-[200px]
          md:max-w-[300px] md:max-h-[300px]
          lg:max-w-[400px] lg:max-h-[400px]
        "
        style={{
          animation: "swing 3s ease-in-out infinite",
          transformOrigin: "top center",
        }}
      />
      <style>
        {`
          @keyframes swing {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(4deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>
    </div>
  );
};

const SelfIntro = () => {
  const [activeTab, setActiveTab] = useState("intro");
  const activeContent = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="flex justify-center items-center w-full sm:px-6">
      <div className="mx-auto w-full max-w-[980px]">
        <div className="relative overflow-visible border-2 border-blue-200 border-dashed bg-[#eee6f6] shadow-[4px_4px_0_#d6ccf5]">
          {/* Floating photo */}
          <div className="pointer-events-none absolute right-[-1.2rem] top-[-4.2rem] z-20 rotate-[7deg] w-[7rem] sm:pt-[13rem] sm:mr-[1rem] sm:w-[8rem] md:w-[10rem] md:pt-[12rem] 
          lp:w-[15rem]
          lg:w-[25rem] lg:pt-[7rem] lg:mr-[-3rem]">
            <div>
              <MyPhoto />
            </div>
          </div>


          {/* Window Header */}
          <div className="flex items-center justify-between border-b-2 border-blue-200 bg-blue-300 px-3 py-2 sm:px-4">
            <h5 className="font-Micro text-[1rem] text-white sm:text-[1.2rem] md:text-[1.5rem]">
              about_me.exe
            </h5>
          </div>

          {/* Clickable Tabs */}
          <div className="flex flex-wrap gap-2 border-b-2 border-blue-200 bg-[#f8f4ff] px-4 py-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`border border-blue-200 px-3 py-1 font-Micro text-[0.78rem] transition sm:text-[0.9rem] md:text-[1rem] lp:text-[2rem] ${
                    isActive
                      ? "bg-[#dcd3f7] text-blue-500 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#bfb3f3]"
                      : "bg-[#eee6f6] text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#ddd5f7] hover:bg-[#e4dbfa]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="bg-[#f8f4ff] px-4 py-5 sm:px-6 md:px-8 lg:px-2">
            <div className="border-2 border-blue-200 border-dashed bg-[linear-gradient(180deg,#f8f4ff_0%,#eef7ff_100%)] p-4 shadow-[inset_-2px_-2px_0_#ddd5f7,inset_2px_2px_0_#ffffff] sm:p-5 md:p-6">
              <div className="pr-[4.5rem] sm:pr-[5rem] md:pr-[6rem] lg:pr-[7rem]">
                <div>
                  <h2 className="font-Micro text-[1.5rem] leading-none text-blue-500 sm:text-[1.9rem] md:text-[2.5rem] md:w-[40rem] lg:text-[3rem] lp:text-[3rem]">
                    {activeContent.title}
                  </h2>

                  <p className="mt-3 text-[0.8rem] italic text-[#6fb8da] sm:text-[0.9rem] md:text-[1rem] lp:text-[2rem]">
                    {activeContent.subtitle}
                  </p>

                  <div className="mt-5 border-t-2 border-dashed border-blue-200" />
                </div>

                <p className="mt-5 font-vcr text-[0.95rem] leading-[1.8] tracking-[0.03em] text-blue-500 sm:text-[1rem] sm:w-[16rem] md:text-[1.08rem] md:w-[40rem] lg:text-[1.15rem] lp:text-[2rem] lp:w-[50rem]">
                  {activeContent.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfIntro;