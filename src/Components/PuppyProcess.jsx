import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedTitle = ({ children, className = "" }) => {
  const titleRef = useRef(null);
  const waveTweenRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (!mediaQuery.matches) return;

    const originalText = children;

    el.innerHTML = String(originalText)
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="inline-block">&nbsp;</span>`
          : `<span class="inline-block">${char}</span>`
      )
      .join("");

    const letters = el.querySelectorAll("span");

    const handleMouseEnter = () => {
      if (waveTweenRef.current) waveTweenRef.current.kill();

      gsap.to(letters, {
        color: "#fb923c",
        duration: 0.3,
        ease: "steps(1)",
      });

      gsap.to(el, {
        scale: 1.05,
        duration: 0.3,
        ease: "steps(1)",
      });

      waveTweenRef.current = gsap.to(letters, {
        y: (i) => -10 + (i % 3) * 5,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        stagger: 0.05,
        ease: "steps(1)",
      });
    };

    const handleMouseLeave = () => {
      if (waveTweenRef.current) waveTweenRef.current.kill();

      gsap.to(letters, {
        y: 0,
        color: "#c084fc",
        duration: 0.3,
        stagger: 0.05,
        ease: "power1.out",
      });

      gsap.to(el, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (waveTweenRef.current) waveTweenRef.current.kill();
      el.textContent = originalText;
    };
  }, [children]);

  return (
    <h1 ref={titleRef} className={className}>
      {children}
    </h1>
  );
};

const PuppyProcess = () => {
  const titleClasses = `
  text-purple-400 underline decoration-dashed
    pl-2 text-center underline decoration-dashed text-blue-400
    sm:text-[1.7rem] sm:pb-[1rem] sm:w-[25rem]
    md:text-5xl md:w-[50rem] md:pb-5 md:ml-[1rem]
    lp:text-[4rem] lp:w-[74rem] lp:ml-[-1rem]
    lg:text-7xl lg:w-[60rem] lg:ml-[2rem] lg:pt-[5rem]
  `;

  return (
    <div className="font-Dos w-full justify-center">
      {/* Mission */}
      <AnimatedTitle className={titleClasses}>Mission:</AnimatedTitle>
     <h3 className="text-left text-orange-500
    sm:text-[1rem] sm:w-[26rem] sm:pl-[2rem]
    md:text-[2rem] md:w-[53rem] md:pb-[5rem] md:leading-[3.5rem]
    lp:text-[2.2rem] lp:w-[70rem] lp:leading-[3.5rem] lp:pl-[5rem]
    lg:text-7xl lg:w-[80rem] lg:leading-[3.5rem] lg:pl-[5rem]">
        Furrever Pals was designed to bring together two things that make people feel good: movement and animals. The goal was to create a welcoming space where wellness and genuine connection coexist, giving puppies a meaningful path to their forever homes while offering people a yoga experience that feels warm, joyful, and entirely their own.
      </h3>

      {/* Problem */}
      <AnimatedTitle className={titleClasses}>Problem:</AnimatedTitle>
      <h3 className="pl-2 text-orange-500
        sm:text-[1rem] sm:w-[23rem] sm:ml-[2rem]
        md:text-4xl md:ml-[5rem] md:w-[45rem] md:pb-[5rem] md:pt-[2rem] md:leading-[3.5rem]
        lp:text-[2.2rem] lp:w-[50rem] lp:ml-[10rem]
        lg:text-[3.5rem] lg:ml-[-10rem] lg:w-[80rem]">
        For many people, adopting a pet feels like a high-stakes decision made under pressure, while traditional yoga can feel intimidating or socially isolating. There was no low-pressure, feel-good environment where people could organically connect with animals before committing to adoption — and no yoga experience designed to feel genuinely accessible and community-driven from the start.
      </h3>

      {/* Solution */}
      <AnimatedTitle className={titleClasses}>Solution:</AnimatedTitle>
      <h3 className="pl-2 text-orange-500
        sm:text-[1rem] sm:w-[23rem] sm:ml-[2rem]
        md:text-4xl md:ml-[5rem] md:w-[45rem] md:pb-[5rem] md:pt-[2rem] md:leading-[3.5rem]
        lp:text-[2.2rem] lp:w-[50rem] lp:ml-[10rem]
        lg:text-[3.5rem] lg:ml-[-10rem] lg:w-[80rem]">
        Furrever Pals proposes a puppy yoga studio concept where every class doubles as an informal adoption event. By removing the formality of a traditional shelter visit and replacing it with a relaxed, joyful environment, people can connect with puppies naturally and on their own terms. This model lowers the emotional barrier to both yoga and pet adoption, creating a business that is genuinely good for people, animals, and community wellbeing.
      </h3>

    </div>
  );
};

export default PuppyProcess;