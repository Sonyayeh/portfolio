import React, { useEffect, useState } from "react";

const favouriteItems = [
  { icon: "🎨", label: "colour", value: "Baby Blue", type: "text" },
  { icon: "✿", label: "flower", value: "Hydrangea", type: "text" },
  { icon: "🧋", label: "drink", value: "Blackberry Bubly!!!", type: "text" },
  { icon: "✦", label: "aesthetic", value: "Retro + Nostalgic", type: "text" },
  { icon: "✈", label: "city", value: "Amsterdam", type: "text" },
  { icon: "♫", label: "music", value: "Soft + Nostalgic", type: "text" },
  {
    icon: "🎧",
    label: "listening",
    value: "A Sky Full of Stars — Coldplay",
    type: "mp3",
  },
];

const TypeValue = ({ text, delay = 0 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeoutId;
    let intervalId;
    let index = 0;

    const startTyping = () => {
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));

        if (index >= text.length) {
          clearInterval(intervalId);
        }
      }, 22);
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return <span>{displayed}</span>;
};

const Mp3Value = ({ text }) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="
          flex items-center gap-1
          border border-[#b8c5ef]
          bg-[#eef3ff]
          px-2 py-1
          shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#d7def6]
        "
      >
        <span className="text-[0.62rem] text-[#6f8de6]">◁</span>
        <span className="text-[0.62rem] text-[#6f8de6]">▐▐</span>
        <span className="text-[0.62rem] text-[#6f8de6]">▷</span>
      </div>

      <div
        className="
          relative w-[9.5rem] overflow-hidden
          border border-[#b8c5ef]
          bg-[#f8fbff]
          px-2 py-1
          shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#d7def6]
          sm:w-[12rem]
          md:w-[15rem]
        "
      >
        <div className="mp3-marquee whitespace-nowrap text-[#5a6fb8]">
          <span className="pr-8">{text}</span>
          <span className="pr-8">{text}</span>
        </div>
      </div>
    </div>
  );
};

const MiniFavourites = () => {
  return (
    <section className="mx-auto mt-6 w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[42rem] lg:max-w-[54rem]">
      <div className="overflow-hidden border-2 border-[#bcc5ea] bg-[#ece7f7] shadow-[4px_4px_0_#d7d0ef]">
        <div className="flex items-center justify-between border-b-2 border-[#bcc5ea] bg-blue-300 px-3 py-2 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center border border-[#bcc5ea] bg-[#f8f6ff] text-[0.8rem] text-[#6f8de6] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
              ★
            </span>
            <span className="font-Dos text-[0.9rem] text-white sm:text-[1rem] md:text-[1.1rem]">
              favourites.txt
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="flex h-5 w-5 items-center justify-center border border-[#bcc5ea] bg-[#f8f6ff] text-[0.65rem] text-[#5a6fb8] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
              _
            </span>
            <span className="flex h-5 w-5 items-center justify-center border border-[#bcc5ea] bg-[#f8f6ff] text-[0.62rem] text-[#5a6fb8] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
              □
            </span>
            <span className="flex h-5 w-5 items-center justify-center border border-[#bcc5ea] bg-[#f8f6ff] text-[0.65rem] text-[#5a6fb8] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7] transition hover:bg-red-300 hover:text-white">
              ✕
            </span>
          </div>
        </div>

        <div className="border-b border-[#d7def6] bg-[#f4f0fb] px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-[#9aa6df] sm:px-4 sm:text-[0.72rem]">
          file · edit · view · favourites
        </div>

        <div className="bg-[#f8f4ff] p-4 sm:p-5">
          <div className="mb-3 border border-dashed border-[#d7def6]" />

          <div className="space-y-2.5 font-mono text-[0.8rem] text-[#5a6fb8] sm:text-[0.9rem] md:text-[0.98rem]">
            {favouriteItems.map((item, index) => (
              <div
                key={item.label}
                className="group flex items-center gap-2 rounded-sm px-2 py-2 transition duration-200 hover:bg-[#eef3ff] hover:shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#e2dcf8]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#d4dcf7] bg-white text-[0.85rem] text-[#6f8de6] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#ece6fb] sm:h-8 sm:w-8">
                  {item.icon}
                </span>

                <span className="min-w-[5.8rem] shrink-0 text-[#9aa6df] sm:min-w-[7rem]">
                  {item.label}
                </span>

                <span className="flex-1 overflow-hidden whitespace-nowrap text-[#c7cff5] group-hover:text-[#b7c4f6]">
                  ···················································
                </span>

                <span className="min-w-0 text-right text-[#5a6fb8]">
                  {item.type === "mp3" ? (
                    <Mp3Value text={item.value} />
                  ) : (
                    <TypeValue text={item.value} delay={index * 160} />
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 border border-dashed border-[#d7def6]" />

          <div className="mt-3 flex items-center justify-between bg-[#eef3ff] px-3 py-2 font-Dos text-[0.68rem] text-[#8b99d6] shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dfe7fb] sm:text-[0.72rem]">
            <span>{favouriteItems.length} items</span>
            <span>personal favourites loaded</span>
          </div>
        </div>
      </div>

      <style>{`
        .mp3-marquee {
          display: inline-block;
          min-width: max-content;
          animation: mp3Scroll 10s linear infinite;
        }

        @keyframes mp3Scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default MiniFavourites;