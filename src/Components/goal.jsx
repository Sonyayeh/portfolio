import React, { useEffect, useRef, useState } from "react";

const Goal = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    // Create an intersection observer to detect when the section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);  // Set inView to true when the section comes into view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (section) {
      observer.observe(section);
    }

    // Clean up observer when the component is unmounted
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`max-w-6xl mx-auto opacity-0 transition-opacity duration-1000 ${inView ? 'opacity-100 animate-fadeIn' : ''}`}
      style={{
        animation: inView ? 'fadeIn 1s ease-out forwards' : 'none',  // Fade in when in view
      }}
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
