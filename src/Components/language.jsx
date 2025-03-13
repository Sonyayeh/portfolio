import React, { useEffect, useRef } from "react";

const Language = () => {
  const sectionRef = useRef(null);

  // Function to reset and animate the percentage bars
  const animateBars = () => {
    document.querySelectorAll(".bar-percentage[data-percentage]").forEach((progress) => {
      const percentage = Math.ceil(progress.getAttribute("data-percentage"));
      const bar = progress.nextElementSibling.querySelector(".bar");

      // Reset the progress bar before animating
      progress.textContent = "0%";
      bar.style.width = "0%";

      let count = 0;
      const interval = setInterval(() => {
        if (count >= percentage) {
          clearInterval(interval);
        } else {
          count++;
          progress.textContent = `${count}%`;
          bar.style.width = `${count}%`;
        }
      }, 20); // Adjust speed here (20ms for 2000ms total duration)
    });
  };

  useEffect(() => {
    // Intersection Observer callback to trigger animation only when section is visible
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animation when section is visible (scroll into view)
          animateBars();
          // Once section is in view, stop observing it
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer when component is unmounted
      }
    };
  }, []);

  return (
    <div className="text-center my-5 pl-[2rem]" ref={sectionRef}>
      <h5 className="text-black-300 text-3xl mb-4 
      sm:text-[1.5rem] sm:ml-[-2rem]
      lg:text-[4rem] lg:ml-[-17rem] lg:pt-[2rem] lg:pb-[3rem] lg:w-[100rem]
      lp:text-[3rem] lp:pt-[2rem] lp:pb-[3rem]
      md:pt-[2rem] md:text-[2rem] md:pb-[2rem] ">
        I also learning languages in my spare time:
      </h5>

      {/* Chinese/Mandarin Bar */}
      <div className="bar-main-container bg-purple-300 text-white rounded-lg w-72 mx-auto mb-4 
      sm:ml-[0.7rem]
      md:ml-[3rem] md:mb-[0.6rem] 
      lg:ml-[-5rem] lg:w-full
      lp:ml-[-2rem] lp:w-full lp:pb-[2rem]
      ">
        <h5 className="text-3xl 
        sm:text-[1.8rem] 
        md:text-[1.6rem]
        lg:text-[3rem] lg:pt-[1rem]
        lp:text-[3rem] lp:pt-[1rem]">
          Chinese/Mandarin
        </h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm sm:text-[2rem] 
            lg:text-[3rem]
            lp:text-[2.5rem]"
            data-percentage="98"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* English Bar */}
      <div className="bar-main-container bg-sky-300 text-white rounded-lg w-72 mx-auto mb-4 
      sm:ml-[0.7rem]
      md:ml-[24rem] md:mt-[-6.5rem] 
      lg:ml-[-5rem]  lg:mt-[3rem]
      lp:ml-[-2rem] lp:w-full lp:pb-[2rem] lp:mt-[3rem]">
        <h5 className="text-3xl sm:text-[2rem] md:text-[2rem] lg:text-[3rem] lp:text-[3rem] lg:pt-[1rem] lp:pt-[1rem]">
          English
        </h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm sm:text-[2rem] 
            lg:text-[3rem]
            lp:text-[2.5rem]"
            data-percentage="98"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* French Bar */}
      <div className="bar-main-container bg-emerald-300 text-white rounded-lg w-72 mx-auto mb-4 
      sm:ml-[0.7rem]
      md:ml-[3rem] 
      lg:ml-[-5rem]  lg:mt-[5rem]
      lp:ml-[-2rem] lp:w-full lp:pb-[2rem] lp:mt-[3rem]">
        <h5 className="text-3xl sm:text-[2rem] md:text-[2rem] md:mt-[0.5rem] lg:text-[3rem] lp:text-[3rem] lg:pt-[1rem] lp:pt-[1rem]">
          French</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm sm:text-[2rem] 
            lg:text-[3rem]
            lp:text-[2.5rem]"
            data-percentage="65"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* Japanese Bar */}
      <div className="bar-main-container bg-yellow-300 text-white rounded-lg w-72 mx-auto mb-4
      sm:ml-[0.7rem]
      md:mt-[-7rem] md:ml-[24rem]
      lg:ml-[-5rem] lg:mt-[5rem]
      lp:ml-[-2rem] lp:w-full lp:pb-[2rem] lp:mt-[3rem]">
        <h5 className="text-3xl sm:text-[2rem] lg:text-[3rem] lp:text-[3rem] lg:pt-[1rem] lp:pt-[1rem]">
          Japanese</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm
            sm:text-[2rem]
            lg:text-[2.2rem]
            lp:text-[2.5rem]"
            data-percentage="80"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* Spanish Bar */}
      <div className="bar-main-container bg-orange-300 text-white rounded-lg w-72 mx-auto mb-4 
      sm:ml-[0.7rem]
      md:ml-[3rem] 
      lg:ml-[-5rem]  lg:mt-[5rem]
      lp:ml-[-2rem] lp:w-full lp:pb-[2rem] lp:mt-[3rem]">
        <h5 className="text-3xl sm:text-[2rem] lg:text-[3rem] lp:text-[3rem] lg:pt-[1rem] lp:pt-[1rem]">
          Spanish</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm sm:text-[2rem] lg:text-[3rem] lp:text-[2.5rem]"
            data-percentage="35"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* German Bar */}
      <div className="bar-main-container bg-red-300 text-white rounded-lg w-72 mx-auto mb-4 
      sm:ml-[0.7rem]
      md:ml-[24rem] md:mt-[-7rem] 
      lg:ml-[-5rem]  lg:mt-[5rem]
      lp:ml-[-2rem] lp:w-full lp:pb-[2rem] lp:mt-[3rem]">
        <h5 className="text-3xl sm:text-[2rem] lg:text-[3rem] lp:text-[3rem] lg:pt-[1rem] lp:pt-[1rem]">German</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm sm:text-[2rem] lg:text-[3rem] lp:text-[2.5rem]"
            data-percentage="20"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* Dutch Bar */}
      <div className="bar-main-container bg-pink-300 text-white rounded-lg w-72 mx-auto mb-4 
      sm:ml-[0.7rem]
      md:ml-[14rem] md:mt-[1rem]
      lg:ml-[-5rem] lg:mt-[5rem]
      lp:ml-[-2rem] lp:w-full lp:pb-[2rem] lp:mt-[3rem]">
        <h5 className="text-3xl sm:text-[2rem] lg:text-[3rem] lp:text-[3rem] lg:pt-[1rem] lp:pt-[1rem]">Dutch</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm sm:text-[2rem] lg:text-[3rem] lp:text-[2.5rem]"
            data-percentage="10"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* List of Other Languages */}
      {/* <div>
        <h5 className="text-left text-black-400 text-3xl mb-4 
        md:ml-[1rem] md:pt-[5rem] md:text-[3rem] md:pb-[3rem]
        lg:ml-[-5rem] lg:mt-[-45rem] lg:text-[4rem] lg:pt-[50rem]">
          Some other languages I learned are:
          <ul className="list-disc ml-6 mt-2">
            <li className="text-purple-300 font-bold">Turkish</li>
            <li className="text-purple-300 font-bold">Korean</li>
            <li className="text-purple-300 font-bold">Cantonese</li>
          </ul>
        </h5>
      </div> */}
    </div>
  );
};

export default Language;
