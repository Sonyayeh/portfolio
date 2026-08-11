import React, { useEffect, useRef, useState } from "react";

const languages = [
  { name: "English", level: "NATIVE" },
  { name: "Chinese", level: "NATIVE" },
  { name: "Japanese", level: "INTERMEDIATE" },
  { name: "French", level: "BEGINNER" },
  { name: "German", level: "BEGINNER" },
  { name: "Dutch", level: "BEGINNER" },
  { name: "Spanish", level: "BEGINNER" },
];

const SPLIT_FLAP_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ /";

const SplitFlapText = ({ text, start }) => {
  const [display, setDisplay] = useState(" ".repeat(text.length));

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const totalFrames = text.length * 3 + 8;

    const interval = setInterval(() => {
      frame++;

      const next = text
        .split("")
        .map((char, i) => {
          if (frame > i * 2 + 4) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(next);

      if (frame >= totalFrames) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [start, text]);

  return (
    <span
      className="
        inline-flex min-w-[12ch] justify-center
        px-3 py-1
        font-mono uppercase tracking-[0.18em]
        text-[#5a6fb8]
        
        bg-[#f8f6ff]
        border border-[#bcc5ea]
        shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]
        
        text-[0.75rem]
        sm:text-[0.8rem]
        md:text-[0.85rem]
        lg:text-[0.9rem]
      "
    >
      {display}
    </span>
  );
};

const LanguageRow = ({ name, level, startAnimation }) => {
  return (
    <div
      className="
        flex items-center gap-3
        border border-[#b9c2e3]
        bg-[#f8f6ff]
        px-3 py-3
        shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#d8d2f0]
      "
    >
      <span
        className="
          shrink-0 text-left text-[#5eb3f4]
          text-[0.92rem]
          sm:text-[1rem]
          md:text-[1.08rem]
          lg:text-[1.18rem]
        "
      >
        {name}
      </span>

      <div
        className="
          min-w-0 flex-1 overflow-hidden whitespace-nowrap
          text-[#8ca0dc]
          text-[0.72rem]
          sm:text-[0.8rem]
          md:text-[0.88rem]
          lg:text-[0.95rem]
          tracking-[0.12em]
        "
        aria-hidden="true"
      >
        ................................................................................................
      </div>

      <div className="shrink-0">
        <SplitFlapText text={level} start={startAnimation} />
      </div>
    </div>
  );
};

const HomLanguage = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="my-10 px-4 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1000px]">
        <h5
          className="
            mb-4 text-center text-black
            text-[1.45rem]
            sm:text-[1.5rem] sm:w-[19.5rem]
            md:text-[3rem] md:w-[45rem]
            lp:text-[3rem] lp:w-[64rem]
            lg:text-[3rem]
          "
        >
        Languages has <span className="text-red-500 underline">always</span> been my passion:
        </h5>

        <div
          className="
            overflow-hidden border-2 border-[#bcc5ea]
            bg-[#ece7f7]
            shadow-[4px_4px_0_#d7d0ef]
          "
        >
          <div
            className="
              flex items-center justify-between gap-3 
              border-b-2 border-[#bcc5ea]
              bg-[#7ea9e6]
              px-3 py-2
              sm:px-4
            "
          >
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center border border-[#bcc5ea] bg-[#f8f6ff] text-[0.8rem] text-[#b38af0] ">
                ✦
              </span>
              <span
                className=" font-vcr
                  text-white 
                  text-[0.95rem] 
                  sm:text-[1rem]
                  md:text-[1.1rem]
                  lg:text-[1.2rem]
                "
              >
                language_levels.exe
              </span>
            </div>

           <div className="flex items-center gap-1">
  {/* Minimize */}
  <span className="
    flex items-center justify-center
    h-5 w-5
    border border-[#bcc5ea]
    bg-[#f8f6ff]
    text-[#5a6fb8]
    text-[0.7rem]
    shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]
  ">
    _
  </span>

  {/* Maximize */}
  <span className="
    flex items-center justify-center
    h-5 w-5
    border border-[#bcc5ea]
    bg-[#f8f6ff]
    text-[#5a6fb8]
    text-[0.65rem]
    shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]
  ">
    □
  </span>

  {/* Close */}
  <span className="
    flex items-center justify-center
    h-5 w-5
    border border-[#bcc5ea]
    bg-[#f8f6ff]
    text-[#5a6fb8]
    text-[0.7rem]
    shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]
    hover:bg-red-300 hover:text-white transition
  ">
    ✕
  </span>
</div>
          </div>

          <div className="bg-[#f4f0fb] px-4 py-5 sm:px-5 sm:py-6 font-vcr">
            <div className="mb-4 border border-dashed border-[#c9d1ef] " />

            <div className="space-y-3">
              {languages.map((lang) => (
                <LanguageRow
                  key={lang.name}
                  name={lang.name}
                  level={lang.level}
                  startAnimation={startAnimation}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomLanguage;