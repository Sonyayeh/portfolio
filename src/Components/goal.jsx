import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Goal = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 40, // starts slightly lower
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // when section enters viewport
          toggleActions: "play none none none", // play once, never reverse
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="max-w-6xl mx-auto">
      <h2
        className="text-[2rem] font-bold text-center text-orange-300 mb-6
        sm:text-[1rem]
        md:text-[2rem] md:w-[70rem] md:ml-[-9rem] md:pb-[1rem]
        lp:text-[2rem] lp:ml-[1rem]
        lg:text-[2.5rem] lg:w-[120rem] lg:ml-[-30rem] lg:mt-[5rem] lg:mb-[5rem]
        "
      >
        " I aim to use New Media to transform my artistic background into interactive storytelling experiences that connect and engage people. "
      </h2>
    </section>
  );
};

export default Goal;
