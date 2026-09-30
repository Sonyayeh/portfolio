import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AppDes = () => {
  return (
    <section className="w-full">
      <h1 className="flex justify-center text-purple-400 underline decoration-dashed justify-self-center
        sm:text-[1.7rem] sm:w-[23rem] sm:justify-center
                md:text-5xl md:pt-[5rem] md:w-[35rem] md:mb-[2rem]
                 lp:text-[2.8rem] lp:w-[75rem] lp:justify-center lp:items-center lp:pb-[3rem]
                lg:text-[3rem] lg:w-[40rem] lg:mt-[2rem]">
        Boardwalk Boutique App:
      </h1>

      <p
           className="text-purple-500 justify-self-center font-vcr
            sm:text-[0.8rem] sm:w-[22rem] sm:pb-[1.5rem]
            md:text-[1.8rem] md:w-[40rem] md:mb-[2rem]
            lp:text-[1.3rem] lp:w-[60rem] lp:mb-[2rem]
            lg:text-[1.5rem] lg:leading-[2.5rem] lg:w-[80rem]">

                A fully coded, functional prototype that demonstrates Boardwalk Boutique's 
                <span className="text-orange-400"> shopping</span>,
                <span className="text-orange-400"> rental</span>,
                <span className="text-orange-400"> checkout </span>
                and 
                <span className="text-orange-400"> favouriting systems</span>,
                 as they would operate in a live product. Each tab below reveals the source behind that screen, running alongside the deployed build itself.
        </p>
</section>

  );
};

export default AppDes;