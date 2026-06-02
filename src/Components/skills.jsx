import IonIcon from "@reacticons/ionicons";
import React, { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(
      `@keyframes scroll {
        to {
          transform: translate(calc(-50% - 0.5rem));
        }
      }`,
      styleSheet.cssRules.length
    );
    styleSheet.insertRule(
      `[data-direction="right"] {
        --_animation-direction: reverse;
      }`,
      styleSheet.cssRules.length
    );
    styleSheet.insertRule(
      `[data-direction="left"] {
        --_animation-direction: forwards;
      }`,
      styleSheet.cssRules.length
    );

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);


  const addAnimation = () => {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  return (
    <div
      className="scroller relative overflow-hidden w-full"
      data-speed="fast"
      style={{
        WebkitMask:
          "linear-gradient(90deg, transparent, white 15%, white 94%, transparent)",
        mask: "linear-gradient(90deg, transparent, white 15%, white 94%, transparent)",
      }}
    >
      <h5
        className=" flex justify-center text-center
        text-sky-400 italic underline font-vcr
        sm:text-[1.5rem] sm:pb-[1rem] sm:w-[24rem]
        md:pb-[3rem] md:text-[3rem]
        lg:text-[4.5rem] lg:w-[78rem] lg:pb-[4rem]
        lp:text-[4rem] lp:w-[75rem]
        "
        >Some of my skills being:</h5>

      <ul
  className="
    scroller__inner 
    flex 
    gap-[3rem] 
    sm:gap-[2rem]
    py-4
    w-max
    min-w-full
  "
  style={{
    animation:
      "scroll var(--_animation-duration, 100s) var(--_animation-direction, forwards) linear infinite",
  }}
>  
        <li className="flex flex-col items-center">
          <IonIcon 
            className="text-blue-300  hover:text-purple-300 hover:cursor-pointer 
            sm:text-[2.5rem] sm:px-4 
            md:text-[6rem] md:px-3 
            lg:text-[10rem] lg:px-3
            lp:text-[6rem] lp:px-4" 
            name="logo-figma" 
          />
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Figma</span> {/* Added spacing and centering */}
        </li>

        <li className="flex flex-col items-center">
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer 
            sm:px-2 
            md:text-[6rem] md:px-3 
            lg:text-[10rem] lg:px-2 
            lp:text-[6rem] lp:px-4" 
            name="color-palette-outline" 
          />
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Graphic Design</span> {/* Added spacing and centering */}
        </li>

        <li className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[6rem] md:h-[6rem] lg:w-[10rem] lg:h-[10rem] hover:cursor-pointer">
            <rect width="24" height="24" fill="#330000" rx="4" /> {/* Darker background for Illustrator */}
            <text x="12" y="16" fill="#FF9A01" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">Ai</text> {/* Illustrator color for text */}
          </svg>
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Adobe Illustrator</span>
        </li>

        <li className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[6rem] md:h-[6rem] lg:w-[10rem] lg:h-[10rem] hover:cursor-pointer">
            <rect width="24" height="24" fill="#49021F" rx="4" /> {/* Darker background for InDesign */}
            <text x="12" y="16" fill="#FF3366" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">Id</text> {/* InDesign color for text */}
          </svg>
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Adobe InDesign</span>
        </li>

        <li className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[6rem] md:h-[6rem] lg:w-[10rem] lg:h-[10rem] hover:cursor-pointer">
            <rect width="24" height="24" fill="#001E36" rx="4" /> {/* Darker background for Photoshop */}
            <text x="12" y="16" fill="#31A8FF" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">Ps</text> {/* Photoshop color for text */}
          </svg>
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Adobe Photoshop</span>
        </li>

        <li className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[6rem] md:h-[6rem] lg:w-[10rem] lg:h-[10rem] hover:cursor-pointer">
            <rect width="24" height="24" fill="#013301" rx="4" /> {/* Darker background for Dimension */}
            <text x="12" y="16" fill="#33FF66" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">Dn</text> {/* Dimension color for text */}
          </svg>
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Adobe Dimension</span>
        </li>

        <li className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[6rem] md:h-[6rem] lg:w-[10rem] lg:h-[10rem] hover:cursor-pointer">
            <rect width="24" height="24" fill="#1E3101" rx="4" /> {/* Darker background for Aero */}
            <text x="12" y="16" fill="#99E83F" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">Ae</text> {/* Aero color for text */}
          </svg>
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Adobe Aero</span>
        </li>

        <li className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            className="sm:w-[2.5rem] sm:h-[2.5rem] md:w-[6rem] md:h-[6rem] lg:w-[10rem] lg:h-[10rem] hover:cursor-pointer">
            <rect width="24" height="24" fill="#00005B" rx="4" /> {/* Darker background for Premiere Pro */}
            <text x="12" y="16" fill="#9999FF" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" textAnchor="middle">Pr</text> {/* Premiere Pro color for text */}
          </svg>
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Adobe Premiere Pro</span>
        </li>

        <li className="flex flex-col items-center">
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer 
            sm:px-2 md:text-[6rem] md:px-3 lg:text-[10rem] lg:px-2 lp:text-[6rem] lp:px-4" 
            name="film-outline" 
          />
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Video Editing</span> {/* Added spacing and centering */}
        </li>
        
        <li className="flex flex-col items-center">
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer 
            sm:px-2 md:text-[6rem] md:px-3 lg:text-[10rem] lg:px-2 lp:text-[6rem] lp:px-4" 
            name="videocam-outline" 
          />
          <span className="mt-2 text-center  font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Videotography</span> {/* Added spacing and centering */}
        </li>
        <li className="flex flex-col items-center">
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer 
            sm:px-2 md:text-[6rem] md:px-3 lg:text-[10rem] lg:px-2 lp:text-[6rem] lp:px-4" 
            name="image-outline" 
          />
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">Photography</span> {/* Added spacing and centering */}
        </li>
        <li className="flex flex-col items-center">
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer 
            sm:px-2 md:text-[6rem] md:px-3 lg:text-[10rem] lg:px-2 lp:text-[6rem] lp:px-4" 
            name="logo-html5" 
          />
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">HTML</span> {/* Added spacing and centering */}
        </li>
        <li className="flex flex-col items-center">
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer 
            sm:px-2 md:text-[6rem] md:px-3 lg:text-[10rem] lg:px-2 lp:text-[6rem] lp:px-4" 
            name="logo-css3" 
          />
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2.5rem]">CSS</span> {/* Added spacing and centering */}
        </li>
        <li className="flex flex-col items-center">
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer 
            sm:px-2 md:text-[6rem] md:px-3 lg:text-[10rem] lg:px-2 lp:text-[6rem] lp:px-4" 
            name="logo-javascript" 
          />
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">JavaScript</span> {/* Added spacing and centering */}
        </li>
        <li className="flex flex-col items-center">
          <IonIcon 
            className="text-blue-300 sm:text-[2.5rem] hover:text-purple-300 hover:cursor-pointer 
            sm:px-2 md:text-[6rem] md:px-3 lg:text-[10rem] lg:px-2 lp:text-[6rem] lp:px-4" 
            name="logo-react" 
          />
          <span className="mt-2 text-center font-vcr text-[0.5rem] lp:text-[1.5rem] lg:text-[2rem]">React</span> {/* Added spacing and centering */}
        </li>

      </ul>
    </div>
  );
};

export default Skills;

<style>
{`
@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}

[data-direction="right"] {
  --_animation-direction: reverse;
}

[data-direction="left"] {
  --_animation-direction: forwards;
}
`}
</style>
