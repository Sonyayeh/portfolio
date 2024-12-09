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
    <div className="text-center my-5" ref={sectionRef}>
      <h5 className="text-black-300 text-3xl mb-4 lg:text-[3rem] lg:mr-[-20rem] md:pt-[2rem] md:text-[3rem] md:pb-[2rem] lg:pt-[2rem] lg:pb-[3rem]">
        I also <strong className="italic underline text-red-500">love</strong> learning languages in my spare time!
      </h5>

      {/* Chinese/Mandarin Bar */}
      <div className="bar-main-container bg-purple-300 text-white rounded-lg w-72 mx-auto mb-4 md:ml-[3rem] md:mb-[2rem] lg:ml-[-2rem]">
        <h5 className="text-3xl">Chinese/Mandarin</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm"
            data-percentage="98"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* English Bar */}
      <div className="bar-main-container bg-sky-300 text-white rounded-lg w-72 mx-auto mb-4 md:ml-[23rem] md:mt-[-8rem] lg:ml-[26rem]">
        <h5 className="text-3xl">English</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm"
            data-percentage="98"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* French Bar */}
      <div className="bar-main-container bg-emerald-300 text-white rounded-lg w-72 mx-auto mb-4 md:ml-[3rem] lg:ml-[54rem] lg:mt-[-7rem]">
        <h5 className="text-3xl">French</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm"
            data-percentage="65"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* Japanese Bar */}
      <div className="bar-main-container bg-yellow-300 text-white rounded-lg w-72 mx-auto mb-4 md:ml-[23rem] md:mt-[-7rem] lg:ml-[-2rem] lg:mt-[3rem]">
        <h5 className="text-3xl">Japanese</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm"
            data-percentage="80"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* Spanish Bar */}
      <div className="bar-main-container bg-orange-300 text-white rounded-lg w-72 mx-auto mb-4 md:ml-[3rem] lg:ml-[26rem] lg:mt-[-7rem]">
        <h5 className="text-3xl">Spanish</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm"
            data-percentage="35"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* German Bar */}
      <div className="bar-main-container bg-red-300 text-white rounded-lg w-72 mx-auto mb-4 md:ml-[23rem] md:mt-[-7rem] lg:ml-[54rem]">
        <h5 className="text-3xl">German</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm"
            data-percentage="20"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* Dutch Bar */}
      <div className="bar-main-container bg-pink-300 text-white rounded-lg w-72 mx-auto mb-4 md:ml-[13rem] lg:ml-[26rem] lg:mt-[3rem]">
        <h5 className="text-3xl">Dutch</h5>
        <div className="p-2">
          <div
            className="bar-percentage bg-black/20 rounded-lg text-center py-1 text-sm"
            data-percentage="10"
          ></div>
          <div className="bar-container bg-black/20 rounded-full h-2 mt-2 overflow-hidden">
            <div className="bar bg-white h-full rounded-l-full transition-all duration-300 ease-linear"></div>
          </div>
        </div>
      </div>

      {/* List of Other Languages */}
      <div>
        <h5 className="text-left text-black-400 text-3xl mb-4 md:ml-[6rem] md:pt-[5rem] lg:ml-[28rem] lg:mt-[-45rem] lg:text-[3rem] lg:pt-[50rem]">
          Some other languages I learned are:
          <ul className="list-disc ml-6 mt-2">
            <li className="text-purple-300 font-bold">Turkish</li>
            <li className="text-purple-300 font-bold">Korean</li>
            <li className="text-purple-300 font-bold">Cantonese</li>
          </ul>
        </h5>
        <h5 className="text-xl text-right md:mr-[15rem] lg:mr-[15rem] lg:mt-[1rem] lg:pb-[20rem]">(but I need to revisit them one day)</h5>
      </div>
    </div>
  );
};

export default Language;
