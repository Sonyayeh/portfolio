import React, { useEffect, useRef, useState } from "react";

const Goal = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting); // Set inView based on visibility
        });
      },
      { threshold: 0.5 } // Trigger at 50% visibility
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`max-w-6xl mx-auto transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-[2rem] font-bold text-center text-orange-300 mb-6
      sm:text-[1rem]
      md:text-[2rem] md:w-[70rem] md:ml-[-9rem] md:pb-[1rem]
      lp:text-[2rem] lp:ml-[1rem]
      lg:text-[2.5rem] lg:w-[124rem] lg:ml-[-25rem] lg:mt-[5rem] lg:mb-[5rem]
      ">
        " I aim to use New Media to transform my artistic background into interactive storytelling experiences that connect and engage people. "
      </h2>
    </section>
  );
};

export default Goal;
