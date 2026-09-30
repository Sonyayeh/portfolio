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
                lp:text-[2.8rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[2rem] 
                lg:text-[3rem] lg:w-[70rem] lg:pt-[2rem] lg:pb-[3rem]"
      >
        Software Used:
      </h1>

                <ul className="flex flex-nowrap justify-center items-start
    sm:gap-x-2
    md:gap-x-[1rem]
    lp:gap-x-10 lp:pb-[2rem]
    lg:gap-x-[4rem]
          ">

    {/* Figma */}
    <li className="flex flex-col items-center icon" ref={(el) => iconRefs.current[5] = el}>
        <IonIcon
            className="text-orange-400 hover:text-purple-300 hover:cursor-pointer
            sm:text-[2.5rem] sm:px-2
            md:text-[6rem] md:px-3
            lp:text-[5rem] lp:px-[2rem]
            lg:text-[7rem] lg:px-6 lg:pb-[1.5rem]"
            name="logo-figma"
        />
        <span
            className="mt-2 text-center font-vcr text-purple-400
            sm:text-[.9rem] sm:w-[8rem]
            md:text-[1.5rem] md:w-[12rem]
            lp:text-[1rem] lp:w-[10rem]
            lg:text-[1.5rem] lg:w-[10rem]"
        >
        Figma</span>
    </li>

    {/* Procreate */}
    <li className="flex flex-col items-center icon" ref={(el) => iconRefs.current[4] = el}>
        <IonIcon
            className="text-orange-400 hover:text-purple-300
            sm:text-[2.5rem] sm:px-2
            md:text-[6rem] md:px-3
            lg:text-[7rem] lg:px-6 
            lp:text-[5rem] lp:px-4"
            name="brush-outline"
        />
        <span
            className="mt-2 text-center font-vcr text-purple-400
            sm:text-[.9rem] sm:w-[8rem]
            md:text-[1.5rem] md:w-[12rem]
            lp:text-[1rem] lp:w-[10rem]
            lg:text-[1.5rem] lg:w-[10rem] lg:pt-[1.5rem]
        ">Procreate</span>
    </li>

    {/* Canva Icon */}
    <li className="flex flex-col items-center icon" ref={(el) => (iconRefs.current[3] = el)}>
        <IonIcon
            className="text-orange-400 hover:text-purple-300 hover:cursor-pointer
            sm:text-[2.5rem] sm:px-2
            md:text-[6rem] md:px-3
            lp:text-[5rem]
            lg:text-[7rem] lg:px-6 lg:pb-[1.5rem]"
            name="color-palette-outline"
        />
        <span
            className="mt-2 text-center font-vcr text-purple-400
            sm:text-[.9rem] sm:w-[8rem]
            md:text-[1.5rem] md:w-[12rem]
            lp:text-[1rem] lp:w-[10rem]
            lg:text-[1.5rem] lg:w-[10rem]"
        >
        Canva
        </span>
    </li>
</ul>
    </div>
  );
};

export default BcitSoftware;