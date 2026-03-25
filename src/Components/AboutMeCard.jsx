import React, { useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import Profile from "../assets/simple-drawing.gif";

const AboutMeCard = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [poppedIcon, setPoppedIcon] = useState(null);

  const tabs = useMemo(
    () => [
      { id: "about", label: "About Me" },
      { id: "story", label: "Story" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const handleWindowIconClick = (icon) => {
    setPoppedIcon(icon);
    setTimeout(() => {
      setPoppedIcon(null);
    }, 450);
  };

  const popProfileIcons = (event, clickedSymbol) => {
    const symbols = ["☁︎", "✦", "☾"];
    const colors = ["#b8d4ff", "#9fd4f7", "#c7b8ff", "#b39ddb", "#d7efff"];

    if (event?.currentTarget) {
      gsap.fromTo(
        event.currentTarget,
        { scale: 1, y: 0, rotate: 0 },
        {
          scale: 1.18,
          y: -2,
          rotate: Math.random() * 8 - 4,
          duration: 0.18,
          yoyo: true,
          repeat: 1,
          ease: "power1.out",
        }
      );
    }

    for (let i = 0; i < 18; i++) {
      const pop = document.createElement("span");

      const randomSymbol =
        clickedSymbol || symbols[Math.floor(Math.random() * symbols.length)];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      pop.textContent = randomSymbol;
      pop.className = "pointer-events-none select-none";
      pop.style.position = "fixed";
      pop.style.fontSize = `${Math.random() * 14 + 18}px`;
      pop.style.color = randomColor;
      pop.style.zIndex = "9999";
      pop.style.opacity = "0";
      pop.style.left = `${Math.random() * (window.innerWidth - 40) + 20}px`;
      pop.style.top = `${Math.random() * (window.innerHeight - 40) + 20}px`;
      pop.style.textShadow =
        "0 0 10px rgba(184,212,255,0.8), 0 0 18px rgba(179,157,219,0.45)";

      document.body.appendChild(pop);

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 120 + 40;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      gsap.fromTo(
        pop,
        {
          x: 0,
          y: 0,
          opacity: 0,
          scale: 0.6,
          rotate: 0,
        },
        {
          x,
          y,
          opacity: 1,
          scale: Math.random() * 0.8 + 1.1,
          rotate: Math.random() * 220 - 110,
          duration: 0.55,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(pop, {
              opacity: 0,
              y: y - 16,
              duration: 1.1,
              delay: i * 0.02,
              ease: "power1.out",
              onComplete: () => pop.remove(),
            });
          },
        }
      );
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6 lg:gap-8 items-start">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-[170px] sm:w-[190px] md:w-[210px] aspect-[3/4] border-2 border-blue-200 border-dashed bg-[linear-gradient(180deg,#f8f4ff_0%,#eef7ff_100%)] shadow-[inset_-2px_-2px_0_#ddd5f7,inset_2px_2px_0_#ffffff] overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(126,182,221,0.14)_25%,transparent_25%,transparent_50%,rgba(126,182,221,0.14)_50%,rgba(126,182,221,0.14)_75%,transparent_75%,transparent)] bg-[length:16px_16px]" />

                <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-4">
                  <img
                    src={Profile}
                    alt="Sonya profile drawing"
                    className="
                      h-full w-full
                      object-cover
                      object-center
                      scale-[1.4]
                    "
                  />
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <h2 className="font-Micro text-blue-500 text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-none">
                Sonya Yeh
              </h2>

              <h5 className="mt-2 text-[1.2rem] sm:text-[1.4rem] md:text-[1.7rem] leading-none text-[#6fb8da] italic">
                Multi-Media Designer
              </h5>

              <div className="mt-2 flex justify-center items-center gap-2 text-[#a6982e] text-[1.5rem] pt-2">
                <span>✦•……๑⋆｡‧˚ʚ ✦ ɞ˚‧｡⋆๑……·✦</span>
              </div>

              <div className="mt-5 border-t-2 border-dashed border-blue-200" />

              <div className="mt-5 space-y-5">
                <InfoBlock title="Focus:">
                  <ul className="space-y-2 text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] font-vcr text-blue-500">
                    <li>🩵 UI/UX Design</li>
                    <li>💙 Graphic Design</li>
                    <li>💜 Multi-Media Design</li>
                  </ul>
                </InfoBlock>

                <InfoBlock title="Tools:">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] font-vcr text-blue-500">
                    <p>🎨 Adobe Suite</p>
                    <p>🧩 Figma</p>
                    <p>💻 HTML / CSS</p>
                    <p>⚛️ React</p>
                  </div>
                </InfoBlock>

                <InfoBlock title="Languages:">
                  <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.25rem] font-vcr text-blue-500">
                    🇬🇧 English &nbsp; 🇨🇳 Chinese &nbsp; 🇯🇵 Japanese
                  </p>
                </InfoBlock>

                <div className="space-y-3 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] font-vcr text-blue-500">
                  <p>
                    🤍{" "}
                    <span className="font-semibold text-blue-500">
                      Fav Colour:
                    </span>{" "}
                    <span className="text-blue-400">Baby Blue </span>/{" "}
                    <span className="relative inline-block group align-middle">
                      <span className="text-[#6082B6] cursor-default">
                        Glaucous
                      </span>

                      <span
                        className="
                          absolute left-1/2 top-full -translate-x-1/2 mt-2
                          hidden group-hover:block
                          px-2 py-1
                          text-[0.75rem] font-vcr
                          bg-[#f8f4ff] border border-blue-200
                          shadow-md
                          text-blue-500
                          whitespace-nowrap
                          z-50
                        "
                      >
                        #6082B6
                      </span>
                    </span>
                  </p>

                  <InfoBlock title="Currently Obsessed:">
                    <p className="text-blue-500">Learning Dutch & German</p>
                  </InfoBlock>
                </div>
              </div>
            </div>
          </div>
        );

      case "story":
        return (
          <div className="min-w-0">
            <div className="space-y-5">
              <div>
                <h5 className="font-Micro text-blue-500 text-[1.9rem] sm:text-[2.4rem] md:text-[2.9rem] leading-none">
                  Growing, glowing, creating
                </h5>

                <h5 className="mt-3 text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] italic text-[#6fb8da]">
                  Discover the designer behind the work
                </h5>
              </div>

              <div className="border-t-2 border-dashed border-blue-200" />

              <div className="space-y-5 font-vcr text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-blue-500 leading-[1.8] tracking-[0.05em]">
                <p>
                  I create thoughtful visual work that feels fresh, warm, and
                  intentional. Whether I am designing for branding, social
                  media, or digital experiences, I care deeply about making
                  things that feel meaningful and memorable.
                </p>

                <p>
                  My approach starts with listening. I like understanding the
                  heart of an idea, what someone wants to say, and how that can
                  be translated into visuals that feel clear, expressive, and
                  true to them.
                </p>

                <p>
                  I am especially drawn to design that balances personality with
                  purpose. I love building visuals that are charming and
                  distinctive, but still strategic, polished, and easy for
                  people to connect with.
                </p>

                <p>
                  As I keep growing as a designer, I want my work to not only
                  look beautiful, but also create value, tell a story, and leave
                  a lasting feeling behind.
                </p>
              </div>
            </div>
          </div>
        );

      case "contact":
        return (
          <div>
            <h2 className="font-Micro text-blue-500 text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] leading-none">
              Contact
            </h2>

            <p className="mt-3 text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] text-[#6fb8da] font-vcr">
              ✦ ꒰ა Let’s create together ໒꒱ ✦
            </p>

            <div className="mt-6 space-y-4 text-[1rem] sm:text-[1.08rem] md:text-[1.18rem] font-vcr text-blue-500">
              <ContactRow label="Email" value="hello@sonyayeh.ca" />
              <ContactRow label="Portfolio" value="sonyayeh.ca" />
              <ContactRow label="Location" value="Vancouver, Canada" />
              <ContactRow
                label="Open to"
                value="Graphic Design / Branding / UI Work"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-3 font-vcr">
              <button className="border-2 border-blue-200 bg-[#e8dcf8] px-5 py-2 font-Micro text-blue-500 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#dcd3f7] hover:translate-y-[1px]">
                Email Me
              </button>
              <button className="border-2 border-blue-200 bg-[#e8dcf8] px-5 py-2 font-Micro text-blue-500 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#dcd3f7] hover:translate-y-[1px]">
                View Resume
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-[980px]">
        <div
          className="relative border-2 border-blue-200 border-dashed bg-[#eee6f6] shadow-[4px_4px_0_#d6ccf5] overflow-hidden"
        >
          <div className="relative flex items-center justify-between gap-3 border-b-2 border-blue-200 bg-blue-300 px-3 py-2 sm:px-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-7 w-7 items-center justify-center border border-blue-200 bg-[#f8f4ff] text-sm text-blue-400 shadow-[inset_1px_1px_0_#ffffff,inset_-1px_-1px_0_#dcd3f7]">
                ☁︎
              </div>

              <h5 className="font-Micro text-white text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] truncate">
                sonyayeh.exe
              </h5>
            </div>

            <div className="relative flex items-center gap-2 shrink-0">
              <WindowIconButton
                symbol="☁︎"
                onClick={(e) => {
                  handleWindowIconClick("☁︎");
                  popProfileIcons(e, "☁︎");
                }}
              />
              <WindowIconButton
                symbol="✦"
                onClick={(e) => {
                  handleWindowIconClick("✦");
                  popProfileIcons(e, "✦");
                }}
              />
              <WindowIconButton
                symbol="☾"
                onClick={(e) => {
                  handleWindowIconClick("☾");
                  popProfileIcons(e, "☾");
                }}
              />

              {poppedIcon && (
                <div className="pointer-events-none absolute right-0 -top-10 flex gap-2">
                  <FloatingPop delay="0ms">{poppedIcon}</FloatingPop>
                  <FloatingPop delay="90ms">{poppedIcon}</FloatingPop>
                  <FloatingPop delay="180ms">{poppedIcon}</FloatingPop>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-1 border-b-2 border-blue-200 bg-[#f8f4ff] px-3 pt-3 sm:px-4">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={[
                    "border-2 border-b-0 border-blue-200 px-4 py-2 sm:px-6",
                    "font-Micro text-[0.95rem] sm:text-[1.05rem] md:text-[1.3rem]",
                    "transition-all duration-150",
                    isActive
                      ? "bg-[#dcd3f7] text-blue-500 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#bfb3f3]"
                      : "bg-[#eee6f6] text-blue-400 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#ddd5f7] hover:bg-[#e4dbfa]",
                  ].join(" ")}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="min-h-[520px] bg-[#f8f4ff]">
            <div className="px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoBlock = ({ title, children }) => {
  return (
    <div>
      <div className="bg-[#e4dbfa] px-3 py-1 border border-blue-200">
        <h5 className="font-Micro text-blue-500 text-[1.1rem] sm:text-[1.25rem] md:text-[1.7rem] leading-none">
          {title}
        </h5>
      </div>
      <div className="pt-3">{children}</div>
    </div>
  );
};

const ContactRow = ({ label, value }) => {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-3 border-b border-dashed border-blue-200 pb-2">
      <span className="font-Micro text-blue-500">{label}</span>
      <span className="break-words text-blue-500">{value}</span>
    </div>
  );
};

const WindowIconButton = ({ symbol, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center border-2 border-blue-200 bg-[#f8f4ff] text-[1rem] text-blue-400 shadow-[inset_2px_2px_0_#ffffff,inset_-2px_-2px_0_#dcd3f7] transition-transform hover:translate-y-[1px] active:translate-y-[2px]"
    >
      {symbol}
    </button>
  );
};

const FloatingPop = ({ children, delay }) => {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-[1.1rem] text-[#6f8de6] shadow-md animate-[floatPop_700ms_ease-out_forwards]"
      style={{ animationDelay: delay }}
    >
      {children}
    </span>
  );
};

export default AboutMeCard;