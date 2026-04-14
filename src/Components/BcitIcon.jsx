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
        className="pl-2 justify-center text-center 
        underline decoration-dashed text-purple-400
        sm:text-[1.7rem] sm:pb-[1rem] sm:w-[25rem]
        md:text-[3rem] md:ml-[15rem]  md:w-[25rem] md:mb-[2rem]
        lp:text-[4rem] lp:w-[35rem] lp:justify-center lp:items-center lp:ml-[18rem]
        lg:text-[5rem] lg:w-[41rem]  lg:mt-[2rem] lg:ml-[10rem]"
      >
        Software Used:
      </h1>

      <ul
        className="flex justify-center space-x-8 pl-[12.5rem]
        sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-x-[1rem] sm:gap-y-[2rem] sm:space-x-0 sm:pl-0 sm:ml-[2.5rem] sm:w-[20rem] sm:pb-[2rem]
        md:grid md:grid-cols-2 md:justify-items-center md:gap-x-[8rem] md:gap-y-[5rem] md:space-x-0 md:pl-0 md:ml-[11rem] md:w-[30rem] md:pb-[4rem]
        lp:flex lp:w-[65rem] lp:ml-[5rem] lp:gap-[2rem]
        lg:items-center lg:w-[96rem] lg:pb-[5rem] lg:mt-[5rem] lg:ml-[-17rem] lg:gap-[2rem]"
      >
        {/* Adobe Stock Images */}
        <li
          className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto"
          ref={(el) => (iconRefs.current[0] = el)}
        >
          <IonIcon
            className="text-orange-400 hover:text-purple-300 
            sm:text-[2.5rem] sm:px-2
            md:text-[6rem] md:px-3
            lg:text-[12rem] lg:px-6 lg:pb-[1rem] lg:pt-[3rem]
            lp:text-[7.5rem] lp:pb-[1rem]"
            name="image-outline"
          />
          <span
            className="mt-2 text-center font-vcr text-purple-400
            sm:text-[.9rem] sm:w-[10rem]
            md:text-[1.5rem] md:w-[22rem]
            lp:text-[2rem] lp:mt-[-1rem] lp:w-[22rem]
            lg:text-[3rem] lg:w-[25rem] lg:mt-[-.5rem]"
          >
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
            lg:text-[12rem] lg:px-6 lg:pb-[2rem]
            lp:text-[7.5rem] lp:px-4 lp:mb-8"
            name="brush-outline"
          />
          <span
            className="mt-2 text-center font-vcr text-purple-400
            sm:text-[.9rem] sm:w-[8rem]
            md:text-[1.5rem] md:w-[11rem]
            lp:text-[2rem] lp:mt-[-2rem] lp:w-[15rem]
            lg:text-[3rem] lg:pb-[2.5rem] lg:w-[18rem]"
          >
            Procreate
          </span>
        </li>

        {/* Figma Icon */}
        <li
          className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto"
          ref={(el) => (iconRefs.current[2] = el)}
        >
          <IonIcon
            className="text-orange-400 hover:text-purple-300 hover:cursor-pointer
            sm:text-[2.5rem] sm:px-2
            md:text-[6rem] md:px-3
            lg:text-[12rem] lg:px-[2rem]
            lp:text-[7.5rem]"
            name="logo-figma"
          />
          <span
            className="mt-2 text-center font-vcr text-purple-400
            sm:text-[.9rem] sm:w-[8rem]
            md:text-[1.5rem] md:w-[11rem]
            lp:text-[2rem] lp:mt-[0rem] lp:w-[13rem]
            lg:text-[3rem] lg:mt-[2rem] lg:pb-[2.5rem] lg:w-[10rem]"
          >
            Figma
          </span>
        </li>

        {/* Canva Icon */}
        <li
          className="flex flex-col items-center icon sm:w-[8rem] md:w-[8rem] lp:w-auto"
          ref={(el) => (iconRefs.current[3] = el)}
        >
          <IonIcon
            className="text-orange-400 hover:text-purple-300 hover:cursor-pointer
            sm:text-[2.5rem] sm:px-2
            md:text-[6rem] md:px-3
            lg:text-[12rem] lg:px-[2rem]
            lp:text-[7.5rem]"
            name="color-palette-outline"
          />
          <span
            className="mt-2 text-center font-vcr text-purple-400
            sm:text-[.9rem] sm:w-[8rem]
            md:text-[1.5rem] md:w-[11rem]
            lp:text-[2rem] lp:mt-[0rem] lp:w-[13rem]
            lg:text-[3rem] lg:mt-[2rem] lg:w-[10rem] lg:pb-10"
          >
            Canva
          </span>
        </li>
      </ul>
    </div>
  );
};

export default BcitSoftware;