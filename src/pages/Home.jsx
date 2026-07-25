import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import CatGif from "../Components/CatSvg";
import PurpleWorkBox from "../Components/purpleworkbox";
import BlueWorkBox from "../Components/blueworkbox";
import Arrow from "../Components/ArrowSvg";
import VolleyballMockup from "../Components/volleyball";
import YogaMockup from "../Components/puppyyoga";
import MagMockup from "../Components/magazine";
import AboutMeCard from "../Components/AboutMeCard";
import TwoClouds from "../assets/twoclouds.gif";
import Bubble from "../assets/singlebubble.gif";
import TextBubble from "../assets/text-bubble.png";
import HomLanguage from "../Components/homelanguage";
import GlitchText from "../Components/GlitchText";


gsap.registerPlugin(ScrollTrigger);


const Home = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
      const letters = card.querySelectorAll(".lift-letter");

      let interval;

      const startRandomLift = () => {
        interval = setInterval(() => {
          letters.forEach((l) => l.classList.remove("lifted"));

          const count = Math.floor(Math.random() * 6) + 3;

          for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * letters.length);
            letters[randomIndex].classList.add("lifted");
          }
        }, 120);
      };

      const stopRandomLift = () => {
        clearInterval(interval);
        letters.forEach((l) => l.classList.remove("lifted"));
      };

      card.addEventListener("mouseenter", startRandomLift);
      card.addEventListener("mouseleave", stopRandomLift);

      return () => {
        card.removeEventListener("mouseenter", startRandomLift);
        card.removeEventListener("mouseleave", stopRandomLift);
      };
    });
  }, []);

  const scrollToPurpleBox = () => {
    document
      .getElementById("WorkTitleSection")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };
  

  return (
    <div className="w-full overflow-x-hidden flex flex-col">
      {/* HERO */}
      <section className="relative w-full">
        <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div
            className="
              relative
              h-[34rem]
              sm:h-[36rem]
              md:h-[75rem]
              lg:h-[52rem]
              lp:h-[46rem]
            "
          >
            <div
              className="
                absolute z-20
                top-[3.5rem] left-1/2 -translate-x-1/2
                w-[18rem]
                sm:top-[15rem]
                md:w-[40rem] md:top-[29rem]
                lg:w-[62rem] lg:top-[5rem]
                lp:w-[54rem] lp:top-[5.5rem]
              "
            >
              <div className="relative flex items-center justify-center">
                <h1
                  className="
                    font-Micro leading-none relative z-10
                    whitespace-nowrap w-max

                    text-[1.8rem]
                    sm:text-[1.5rem] sm:top-[-4rem]
                    md:text-[3.2rem] md:top-[-10rem]
                    lg:text-[4.2rem] lg:top-[5rem]
                    lp:text-[4rem] lp:top-[-1rem]

                    tracking-wide
                    md:tracking-wider
                    lg:tracking-[0.08em]
                  "
                >
                  My name is <span className="text-blue-400">Sonya</span>, and I
                  am a
                </h1>

                <img
                  src={TextBubble}
                  alt="Text bubble"
                  loading="eager"
                  className="
                    absolute z-0
                    left-1/2 -translate-x-1/2
                    w-full
                    sm:top-1
                    md:top-[3rem]
                    lp:top-[8rem] lp:w-3/4
                    lg:top-[12.5rem] lg:w-[55rem]
                  "
                />
              </div>
            </div>

            <img
              src={TwoClouds}
              alt="Decorative clouds"
              loading="eager"
              className="
                absolute z-10 pointer-events-none
                top-[7rem] left-[1rem]
                w-[7rem]
                sm:top-[1rem] sm:left-[-1rem] sm:w-[8rem]
                md:top-[1rem] md:left-[2rem] md:w-[14rem]
                lg:top-[-2rem] lg:left-[57rem] lg:w-[18rem]
                lp:top-[5rem] lp:left-[60rem] lp:w-[16rem]
              "
            />

            <div
              className="
                absolute z-20
                top-[11rem] left-1/2 -translate-x-1/2
                w-full text-center
                sm:top-[15.5rem]
                md:top-[32.5rem]
                lg:top-[18rem]
                lp:top-[14rem]
              "
            >
              <ReactTyped
                strings={[
                  "UI/UX Designer",
                  "Product Designer",
                  "Graphic Designer",
                  "Video Editor",
                  "Illustrator",
                  "Front End Developer",
                  "Motion Graphics Designer",
                ]}
                typeSpeed={100}
                backSpeed={100}
                backDelay={1000}
                startDelay={500}
                loop
                showCursor
                className="
                  font-Micro text-black leading-none inline-block
                  text-[1.8rem]
                  sm:text-[2rem]
                  md:text-[4.2rem]
                  lg:text-[6.5rem]
                  lp:text-[4.9rem]
                "
              />
            </div>

            <div
              className="
                absolute z-20
                top-[18rem] left-1/2 -translate-x-1/2
                sm:top-[20rem] sm:left-[70%] sm:-translate-x-1/2
                md:top-[45rem] md:left-[77%]
                lg:top-[30rem] lg:left-[82%]
                lp:top-[23rem] lp:left-[73%]
              "
            >
              <CatGif
                className="
                  w-[5rem]
                  sm:w-[5.5rem] sm:ml-[4rem]
                  md:w-[9rem]
                  lg:w-[11rem]
                  lp:w-[10rem]
                "
              />
            </div>

            <button
              onClick={scrollToPurpleBox}
              className="
                absolute z-20
                left-1/2 -translate-x-1/2
                bottom-[2rem]
                md:bottom-[-1rem] md:mb-[5rem]
                lg:bottom-[2rem]
                lp:bottom-[3rem]
                hover:cursor-hover
              "
              aria-label="Scroll to sample work"
            >
              <Arrow
                className="
                  w-6
                  sm:w-7
                  md:w-10
                  lg:w-12
                "
              />
            </button>
          </div>
        </div>
      </section>

      <section id="WorkTitleSection" className="relative w-full">
        <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div
            className="
              relative
              pt-[1rem]
              sm:pt-[1rem]
              md:pt-[8rem] pb-[5rem]
              lg:pt-[0rem]
              lp:pt-[0rem]
            "
          >
            {/* FIXED: was h5, now h2 for correct heading hierarchy */}
            <h2
              className="
                relative z-20
                text-center leading-none
                text-[2rem]
                sm:text-[2rem]
                md:text-[5rem]
                lg:text-[6.5rem]
                lp:text-[6.8rem]
              "
            >
              A Few Things I Love
            </h2>

            <img
              src={TwoClouds}
              alt="Decorative clouds"
              loading="lazy"
              className="
                absolute z-0 pointer-events-none scale-x-[-1]
                right-[0rem] top-[1rem]
                w-[8rem]
                sm:right-[1rem] sm:top-[3rem] sm:w-[8rem]
                md:right-[1rem] md:top-[10rem] md:w-[18rem]
                lg:right-[48rem] lg:top-[2rem] lg:w-[26rem]
                lp:right-[2rem] lp:top-[2rem] lp:w-[22rem]
              "
            />
          </div>
        </div>
      </section>

      <section
        id="purplebox-section"
        className="relative w-full mt-8 sm:mt-10 md:mt-8 lg:mt-4"
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-1">
          <div className="relative flex flex-col gap-10 md:gap-14 lg:gap-16">
            <div
              ref={(el) => (projectRefs.current[0] = el)}
              className="
                relative mx-auto
                project-card
                w-[20rem]
                sm:w-[20rem]
                md:w-[40rem]
                lg:w-[70rem] lg:ml-[8rem] lg:pt-[4rem]
                lp:w-[50rem]
              "
            >
              <PurpleWorkBox />
              <div
                className="
                  absolute inset-0 flex items-center justify-center
                  px-3
                  sm:px-3
                  md:px-5
                  lg:ml-[-8rem] 
                "
              >
               <Link
                  to="/furreverpals"
                  onClick={goToTop}
                  className="relative block w-full hover:cursor-pointer"
                  aria-label="View Furrever Pals Puppy Yoga project"
                >

           
                <div
                  className="
                    w-[18rem] justify-self-center
                    sm:w-[18rem] sm:pt-10
                    md:w-[35rem]
                    lg:w-[55rem] lg:pt-[6rem]
                    lp:w-[45rem] lp:hover:scale-[1.02] lp:transition-transform lp:duration-300
                  "
                >
                  <YogaMockup />
                </div>

                
                {/* FIXED: was h5, now h3 for correct heading hierarchy */}
                <h3
                  className="
                    absolute z-20
                    left-1/2 -translate-x-1/2
                    bottom-[0.8rem]
                    sm:bottom-[10rem]
                    md:bottom-[20rem]
                    lp:bottom-[25rem]
                    lg:bottom-[30rem]

                    w-full
                    text-center
                    font-Micro
                    leading-none
                    whitespace-nowrap

                    text-[1rem]
                    sm:text-[1rem]
                    md:text-[2.5rem]
                    lp:text-[3rem]
                    lg:text-[4rem]

                     
                  "
                >
                  <span className="lift-text">
                    {"Furrever Pals Puppy Yoga".split(" ").map((word, i) => (
                      <span key={i} className="inline-block mr-[0.3em]">
                        {word.split("").map((char, j) => (
                          <span key={j} className="lift-letter">
                            {char}
                          </span>
                        ))}
                      </span>
                    ))}
                  </span>
                </h3>
              </Link>
              </div>
            </div>

            <div className="relative h-0">
              <img
                src={Bubble}
                alt="Decorative bubble"
                loading="lazy"
                className="
                  absolute pointer-events-none
                  right-[5%]

                  w-[6rem]
                  sm:w-[7rem] sm:top-[-5rem]
                  md:w-[15rem] md:right-[-2rem] md:top-[-13rem]
                  lg:w-[16rem]
                  lp:w-[14rem]

                  opacity-90
                "
              />

              <img
                src={Bubble}
                alt="Decorative bubble"
                loading="lazy"
                className="
                  absolute pointer-events-none
                  left-[8%]

                  w-[5rem]
                  sm:w-[6rem] sm:top-[-2rem]
                  md:w-[20rem] md:left-[-7rem]
                  lg:w-[12rem]
                  lp:w-[10rem] lp:left-[2rem]

                  opacity-90
                "
              />
            </div>

            <div
              ref={(el) => (projectRefs.current[1] = el)}
              className="
                relative mx-auto
                project-card 
                w-[20rem]
                sm:w-[20rem]
                md:w-[40rem]
                lg:w-[60rem]
                lp:w-[50rem]
              "
            >
               <Link
                to="/beachball"
                onClick={goToTop}
                className="relative block w-full hover:cursor-pointer"
                aria-label="View Beach Volleyball Tournament Poster project"
              >
                <BlueWorkBox />

                <div
                  className="
                    absolute inset-0 flex items-center justify-center
                    px-3
                    sm:px-3
                    md:px-5
                    lg:px-6
                  "
                >
                  <div
                    className="
                      w-[18rem]
                      sm:w-[18rem]
                      md:w-[35rem]
                      lg:w-[55rem]
                      lp:w-[45rem] lp:hover:scale-[1.02] lp:transition-transform lp:duration-300
                    "
                  >
                    <VolleyballMockup />
                  </div>

                  {/* FIXED: was h5, now h3 for correct heading hierarchy */}
                  <h3
                    className="
                      absolute z-20
                      left-1/2 -translate-x-1/2
                      bottom-[0.8rem]
                      sm:bottom-[13rem]
                      md:bottom-[26rem]
                      lg:bottom-[40rem]
                      lp:bottom-[32.5rem]

                      w-full
                      text-center
                      font-Micro
                      leading-none
                      whitespace-nowrap

                      text-[0.9rem]
                      sm:text-[0.9rem]
                      md:text-[1.9rem]
                      lg:text-[2.7rem]
                      lp:text-[2.4rem]

                      
                    "
                  >
                    <span className="lift-text">
                      {"Beach Volleyball Tournament Poster".split(" ").map((word, i) => (
                        <span key={i} className="inline-block mr-[0.3em]">
                          {word.split("").map((char, j) => (
                            <span key={j} className="lift-letter">
                              {char}
                            </span>
                          ))}
                        </span>
                      ))}
                    </span>
                  </h3>
                </div>
              </Link>
            </div>

            <div className="relative h-0">
              <img
                src={Bubble}
                alt="Decorative bubble"
                loading="lazy"
                className="
                  absolute pointer-events-none
                  left-[6%]
                  w-[4.5rem]
                  sm:w-[5rem] sm:bottom-2 sm:left-8
                  md:w-[17rem] md:bottom-[-2rem] md:left-[45rem]
                  lg:w-[8rem]
                  lp:w-[7rem]
                  opacity-90
                "
              />
              <img
                src={Bubble}
                alt="Decorative bubble"
                loading="lazy"
                className="
                  absolute pointer-events-none
                  right-[10%]
                  w-[4rem]
                  sm:w-[8rem] sm:bottom-[-2rem]
                  md:w-[8rem]
                  lg:w-[7rem]
                  lp:w-[6rem]
                  opacity-90
                "
              />
            </div>

            <div
              ref={(el) => (projectRefs.current[2] = el)}
              className="
                project-card 
                relative mx-auto
                w-[20rem]
                sm:w-[20rem] sm:pb-20
                md:w-[40rem]
                lg:w-[65rem]
                lp:w-[50rem]
              "
            >
              <Link
                to="/magazine"
                onClick={goToTop}
                className="relative block w-full hover:cursor-pointer"
                aria-label="View National Geographic Magazine Cover project"
              >
                <div className="relative scale-x-[-1]">
                  <BlueWorkBox />

                  <div
                    className="
                      absolute inset-0 flex items-center justify-center
                      px-3
                      md:px-5
                      lg:px-6
                      scale-x-[-1]
                    "
                  >
                    <div
                      className="
                        w-[18rem]
                        sm:w-[18rem]
                        md:w-[35rem]
                        lg:w-[55rem] lg:ml-[3rem]
                        lp:w-[45rem] lp:hover:scale-[1.02] lp:transition-transform lp:duration-300
                      "
                    >
                      <MagMockup />
                    </div>

                    {/* FIXED: was h5, now h3 for correct heading hierarchy */}
                    <h3
                      className="
                        absolute z-20
                        left-1/2 -translate-x-1/2
                        bottom-[0.8rem]
                        sm:bottom-[13rem]
                        md:bottom-[26.5rem]
                        lg:bottom-[40rem] lg:ml-[2rem]
                        lp:bottom-[33rem]

                        w-full
                        text-center
                        font-Micro
                        leading-none
                        whitespace-nowrap
                        text-[0.9rem]
                        sm:text-[0.9rem]
                        md:text-[1.8rem]
                        lg:text-[3rem]
                        lp:text-[2.3rem]
                      "
                    >
                      <span className="lift-text">
                        {"National Geographic Magazine Cover".split(" ").map((word, i) => (
                          <span key={i} className="inline-block mr-[0.3em]">
                            {word.split("").map((char, j) => (
                              <span key={j} className="lift-letter">
                                {char}
                              </span>
                            ))}
                          </span>
                        ))}
                      </span>
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div>
        <HomLanguage />
      </div>

      <div>
        {/* FIXED: was h5, now h2 for correct heading hierarchy */}
        <h2
          className="
            relative z-20
            text-center leading-none
            text-[2rem]
            sm:text-[2.1rem] sm:pb-5
            md:text-[5rem]
            lg:text-[9rem]
            lp:text-[6.8rem]
          "
        >
          User Profile:
        </h2>
        <AboutMeCard />
      </div>

     
    </div>
  );
};

export default Home;