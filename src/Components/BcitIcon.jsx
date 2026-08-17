import React, { useEffect, useRef } from "react";
import IonIcon from "@reacticons/ionicons";

const BcitSoftware = () => {
  const iconRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("icon-visible");
            entry.target.classList.remove("icon-hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    iconRefs.current.forEach((icon) => {
      if (icon) observer.observe(icon);
    });

    return () => {
      iconRefs.current.forEach((icon) => {
        if (icon) observer.unobserve(icon);
      });
    };
  }, []);

  return (
    <div>
      <style>
        {`
          .icon {
            opacity: 0;
            transform: translateX(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .icon-visible {
            opacity: 1 !important;
            transform: translateX(0) !important;
          }
        `}
      </style>

      <h1
        className="flex justify-self-center justify-center
                underline decoration-dashed text-purple-400
                sm:text-[1.7rem] sm:pb-[2rem] sm:w-[23rem] 
                md:text-[3rem] md:pt-[1rem] md:w-[60rem] md:mb-[2rem]
                lp:text-[4rem] lp:w-[75rem] lp:justify-center
                lg:text-[3rem] lg:w-[70rem]"
      >
        Software Used:
      </h1>

       <ul className="grid justify-self-center
                grid-cols-2 gap-y-8 justify-items-center
                sm:grid-cols-2 sm:w-[22rem]
                md:grid-cols-2 md:w-[57rem]
                lp:grid-cols-2 lp:w-[45rem] lp:h-[30rem]
                lg:grid-cols-4 lg:w-[77rem] lg:h-[15rem]
            ">
        {/* Adobe Stock Images */}
        <li
          className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto"
          ref={(el) => (iconRefs.current[0] = el)}
        >
         <IonIcon
                    className="text-orange-400 hover:text-purple-300 
                    sm:text-[2.5rem] sm:px-2
                    md:text-[6rem] md:px-3
                    lg:text-[7rem] lg:px-6 lg:pb-[1.5rem]
                    lp:text-[7.5rem]"
            name="image-outline"
          />
           <span className="mt-2 text-center font-vcr text-purple-400
                    sm:text-[.9rem] sm:w-[10rem]
                    md:text-[1.5rem] md:w-[22rem]
                    lp:text-[2rem] lp:w-[22rem]
                    lg:text-[2rem] lg:w-[20rem]">
            Adobe Stock Images
          </span>
        </li>

        {/* Procreate Icon */}
        <li
          className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto"
          ref={(el) => (iconRefs.current[1] = el)}
        >
         <IonIcon
                    className="text-orange-400 hover:text-purple-300 
                    sm:text-[2.5rem] sm:px-2
                    md:text-[6rem] md:px-3
                    lg:text-[7rem] lg:px-6 lg:pb-[1.5rem]
                    lp:text-[7.5rem]"
            name="brush-outline"
          />
           <span className="mt-2 text-center font-vcr text-purple-400
                    sm:text-[.9rem] sm:w-[10rem]
                    md:text-[1.5rem] md:w-[22rem]
                    lp:text-[2rem] lp:w-[22rem]
                    lg:text-[2rem] lg:w-[20rem]">
            Procreate
          </span>
        </li>

        {/* Figma Icon */}
        <li
          className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto"
          ref={(el) => (iconRefs.current[2] = el)}
        >
         <IonIcon
                    className="text-orange-400 hover:text-purple-300 
                    sm:text-[2.5rem] sm:px-2
                    md:text-[6rem] md:px-3
                    lg:text-[7rem] lg:px-6 lg:pb-[1.5rem]
                    lp:text-[7.5rem]"
            name="logo-figma"
          />
          <span className="mt-2 text-center font-vcr text-purple-400
                    sm:text-[.9rem] sm:w-[10rem]
                    md:text-[1.5rem] md:w-[22rem]
                    lp:text-[2rem] lp:w-[22rem]
                    lg:text-[2rem] lg:w-[25rem]">
            Figma
          </span>
        </li>

        {/* Canva Icon */}
        <li
          className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto"
          ref={(el) => (iconRefs.current[3] = el)}
        >
          <IonIcon
                    className="text-orange-400 hover:text-purple-300 
                    sm:text-[2.5rem] sm:px-2
                    md:text-[6rem] md:px-3
                    lg:text-[7rem] lg:px-6 lg:pb-[1.5rem]
                    lp:text-[7.5rem]"
            name="color-palette-outline"
          />
           <span className="mt-2 text-center font-vcr text-purple-400
                    sm:text-[.9rem] sm:w-[10rem]
                    md:text-[1.5rem] md:w-[22rem]
                    lp:text-[2rem] lp:w-[22rem]
                    lg:text-[2rem] lg:w-[25rem]">
            Canva
          </span>
        </li>
      </ul>
    </div>
  );
};

export default BcitSoftware;