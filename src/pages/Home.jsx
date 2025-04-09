import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import Social from '../Components/social';
import CatGif from '../Components/CatSvg';
import PurpleWorkBox from '../Components/purpleworkbox';
import BlueWorkBox from '../Components/blueworkbox';
import Arrow from '../Components/ArrowSvg';
import VolleyballMockup from '../Components/volleyball';
import YogaMockup from '../Components/puppyyoga';
import MagMockup from '../Components/magazine';
import TwoClouds from '../assets/twoclouds.gif';
import Bubble from '../assets/singlebubble.gif';
import TextBubble from "../assets/text-bubble.png";

const Home = () => {
  const scrollToPurpleBox = () => {
    document.getElementById('purplebox-section').scrollIntoView({ behavior: 'smooth' });
};
  return (
    <div className="container flex flex-col">
      {/* the "I am" Text */}
      <div className="flex justify-center items-center lg:mt-[10rem] lg:w-[20rem]">
        <h1 className="
          sm:text-[2rem] sm:mt-[-0.5rem] sm:ml-[-1rem] sm:pr-[3rem]
          md:text-[3.5rem] md:ml-[-0.5rem] md:mt-[10rem]
          lg:text-[8rem] lg:ml-[-57rem] lg:mt-[-10rem]
          lp:text-[5.5rem] lp:ml-[-20rem] lp:mt-[-3rem]
          font-Micro">
          I am a 
        </h1>
        <img src={TextBubble} alt="Text bubble for the cat section" 
          className="w-full max-w-[80rem] h-[16rem] bg-contain bg-no-repeat 
          sm:ml-[-2rem] sm:h-[2.5rem] sm:w-[15rem] sm:mb-[10rem] sm:mt-[10rem] 
          md:ml-[-2rem] md:h-[6rem] md:w-[35rem] md:mb-[9rem] md:mt-[20rem]
          lg:h-[9rem] lg:w-[55rem] lg:mr-[-115rem] lg:mt-[-1rem]
          lp:h-[7.5rem] lp:w-[55rem] lp:mt-[7rem] lp:mr-[-18rem]"
        />
      </div>

      {/* Bubble Container with ReactTyped */}
      <div className="flex justify-center mt-10 relative">
        <div>
          <img 
            src={TwoClouds} 
            alt="Cloud gif"
            className="w-auto max-w-full
              sm:w-[8rem] sm:mr-[11rem] sm:mt-[-25rem] sm:pb-[12.5rem]
              md:w-[15rem] md:mr-[35rem] md:mt-[-30rem]
              lg:w-[20rem] lg:ml-[5rem] lg:mt-[-35rem] lg:mb-[-9.5rem]
              lp:w-[20rem] lp:ml-[1rem] lp:mt-[-32rem] lp:mb-[-5rem]"
          />
        </div>
        <div className='flex w-10 container lg:w-[60rem] lp:w-[60rem]'>
          <ReactTyped
            strings={["UI/UX Designer", "Graphic Designer", "Video Editor", "Illustrator", "Front End Developer"]}
            typeSpeed={100}
            backSpeed={100}
            backDelay={1000}
            startDelay={500}
            loop
            showCursor
            className="text-black font-Micro
              sm:text-[2rem] sm:mt-[-15.5rem] sm:ml-[-11.5rem]
              md:text-[4rem] md:ml-[-32rem] md:mt-[-18rem]
              lg:text-[7rem] lg:ml-[-12rem] lg:mt-[-21.6rem]
              lp:text-[4.8rem] lp:ml-[-15rem] lp:mt-[-19.5rem]"
          />
        </div>
      </div>

      {/* CatGif Section */}
      <div className="flex justify-center mt-12">
        <CatGif className="w-40 
          sm:w-[5rem] sm:mr-[-20rem] sm:mb-[25rem] sm:mt-[-13rem]
          md:w-[10rem] md:mr-[-45rem] md:pb-[-5rem] md:pt-[3rem]
          lg:w-[12rem] lg:ml-[35rem] lg:mt-[-15rem] lg:mb-[20rem]
          lp:w-[12rem] lp:ml-[20rem] lp:mt-[-15rem] lp:mb-[20rem]"
        />
      </div>

      {/* Arrow */}
      <div className="text-center mt-[-21rem]
      hover:cursor-hover
      
      ">
        <Arrow className="w-8 
          sm:w-6 sm:pb-[0rem] sm:mt-[5rem] sm:ml-[12rem]
          md:w-10 md:ml-[27rem] md:mt-[22rem]
          lg:w-12 lg:ml-[40rem] lg:mt-[10rem] lg:mb-[10rem]
          lp:w-12 lp:ml-[38rem] lp:mt-[1rem] lp:mb-[10rem]"
          onClick={scrollToPurpleBox}
        />
      </div>

      {/* Sample Work Title */}
      <div className="flex justify-center w-full mt-20 text-center"
      
      >
        <h5 className="text-3xl 
          sm:text-[2rem] sm:mt-[3rem] sm:ml-[2rem] sm:mb-[20rem]
          md:text-[5rem] md:ml-[5rem] md:mt-[11rem] md:pb-[2rem]
          lg:text-[10rem] lg:mt-[1rem] lg:mr-[-1rem]
          lp:text-[7rem] lp:mt-[-5rem] lp:mr-[5rem]">
          Sample Work:
        </h5>
      </div>

      {/* Cloud GIFs */}
      <div>
        <img src={TwoClouds} alt="Cloud gif" className="transform scale-x-[-1] w-16 
          sm:w-[8rem] sm:mt-[-80rem] sm:ml-[15rem] sm:pt-[58rem]
          md:w-[20rem] md:mt-[-73rem] md:ml-[35rem] md:pt-[48rem]
          lg:w-[30rem] lg:ml-[65rem] lg:mt-[-78rem]
          lp:w-[25rem] lp:ml-[50rem] lp:mt-[-65rem]"
        />
      </div>

      {/* Work Showcase (Flex and Grid Layouts) */}
      <div className="mt-8 space-y-8">
        {/* Furrever Pals */}
        <div className="grid sm:h-auto 
          sm:w-[20rem] sm:mt-[-20rem] sm:pb-[35rem] sm:ml-[2.5rem] 
          md:w-[40rem] md:ml-[7rem] md:mb-[2rem] md:mt-[-15rem]
          lg:w-[70rem] lg:ml-[-10rem] lg:mt-[-10rem]
          lp:w-[50rem] lp:ml-[0rem] lp:mt-[-10rem]"
          id = "purplebox-section"
          >
          <PurpleWorkBox />
          <div className="flex w-full justify-center items-center 
            sm:w-[18rem] sm:ml-[1rem] sm:mt-[-15rem] 
            md:w-[35rem] md:ml-[2.5rem] md:mt-[-30rem]
            lg:w-[55rem] lg:ml-[3.5rem] lg:mt-[-45rem]
            lp:w-[45rem] lp:ml-[2.5rem] lp:mt-[-37rem]">
            <YogaMockup />
          </div>
        </div>
        <div className="text-center">
          <h5 className="text-xl 
            sm:text-[1.3rem] sm:mr-[-2rem] sm:mt-[-51.5rem] sm:pt-[-10rem] 
            md:text-[2.5rem] md:mr-[-3rem] md:mt-[-65rem]
            lg:text-[3.6rem] lg:ml-[-5rem] lg:mt-[-79rem]
            lp:text-[3.2rem] lp:ml-[0rem] lp:mt-[-71rem] lp:w-[50rem]">
            Furrever Pals Puppy Yoga
          </h5>
        </div>

        {/* large bubble */}
        <div>
          <div className="flex justify-between">
            <img src={Bubble} alt="Bubble gif" className=" 
              sm:w-1/4 sm:h-1/4 sm:ml-[20rem] sm:mt-[-42rem]
              md:w-1/4 md:h-1/4 md:ml-[-5rem] md:mt-[1rem]
              lg:w-2/4 lg:h-auto lg:ml-[50rem] lg:mt-[10rem]
              lp:w-2/4 lp:h-auto lp:ml-[40rem] lp:mt-[12rem] max-w-full"
            />
          </div>
          <div>
            {/* small bubble */}
            <img src={Bubble} alt="Bubble gif" className="
              sm:w-1/3 sm:h-1/3 sm:ml-[12rem] sm:mt-[-46rem]
              md:w-1/3 md:h-1/3 md:mt-[-5rem] md:ml-[-6rem]
              lg:w-1/4 lg:mt-[-35rem] lg:ml-[50rem]
              lp:w-1.5/4 lp:mt-[-40rem] lp:ml-[50rem]"
            />
          </div>
        </div>

        {/* Beach Volleyball */}
        <div className="grid grid-cols-1 hover:cursor-pointer
          sm:w-[20rem] sm:ml-[2.5rem] 
          md:w-[40rem] md:ml-[7rem] md:mt-[-10rem]
          lg:pb-[-2rem] lg:pt-[-20rem] lg:mr-[-2rem]
          lp:pb-[-2rem] lp:pt-[-10rem] lp:mr-[20rem] relative z-10">
          <div className="relative 
            sm:w-[20rem] sm:ml-[0rem] sm:mt-[10rem] 
            md:w-[40rem] md:ml-[1rem] md:mt-[-3rem] 
            lg:w-[60rem] lg:ml-[18.5rem] lg:mt-[15rem] 
            lp:w-[50rem] lp:ml-[21rem] lp:mt-[7rem] flex justify-center items-center">
            <Link to="/beachball" className="w-full h-auto flex justify-center items-center md:pt-[13rem]">
              <BlueWorkBox />
              <div className="absolute
                sm:mt-[0rem] sm:w-[18rem]
                md:ml-[0rem] md:mt-[-1rem] md:w-[35rem]
                lg:mt-[0.5rem] lg:w-[55rem]
                lp:mt-[0.5rem] lp:w-[45rem]">
                <VolleyballMockup />
              </div>
            </Link>
          </div>
          <div className="text-center mt-4">
            <h5 className="text-xl 
              sm:text-[0.9rem] sm:mr-[0rem] sm:mt-[-15.5rem]
              md:text-[1.8rem] md:ml-[2rem] md:mt-[-29rem]
              lg:text-[2.8rem] lg:mt-[-42rem] lg:ml-[21.5rem] lg:w-[55rem]
              lp:text-[2.3rem] lp:mt-[-35rem] lp:ml-[21rem] lp:w-[50rem]">
              Beach Volleyball Tournament Poster
            </h5>
          </div>
        </div>

        {/* bubble */}
        <div>
          <div>
            <img src={Bubble} alt="Bubble gif" className="w-16 
              sm:w-1/4 sm:ml-[-2rem] sm:mt-[-50rem]
              md:w-2/5 md:ml-[40rem] md:mt-[3rem]
              lg:w-1/4 lg:ml-[60rem] lg:mt-[20rem]
              lp:w-2/4 lp:ml-[-5rem] lp:mt-[-17rem] lp:mb-[22rem]"
            />
          </div>
          <div>
            <img src={Bubble} alt="Bubble gif" className="w-32 
              sm:w-1/4 sm:ml-[20rem] sm:mt-[17rem] 
              md:w-1/5 md:ml-[-1rem] md:mb-[-44rem]
              lg:w-2/4 lg:ml-[59rem] lg:mt-[-57rem]
              lp:w-1/4 lp:ml-[55rem] lp:mt-[12rem]"
            />
          </div>
        </div>

        {/* National Geographic Magazine Cover */}
        
        <div className="grid grid-cols-1 
          transform scale-x-[-1] 
          sm:w-[20rem] sm:ml-[2.5rem] sm:pt-[22rem]
          md:w-[40rem] md:ml-[7rem] md:pb-[1rem] md:pt-[5rem]
          lg:w-[65rem] lg:ml-[-15rem] lg:pt-[25rem]
          lp:w-[50rem] lp:ml-[0rem] lp:pt-[5rem] relative z-0">
          <BlueWorkBox />
          {/* I flipped it back! */}
          <Link to="/magazine" className="w-full h-auto flex justify-center items-center md:pt-[13rem]">
          <div className="absolute 
            transform scale-x-[-1] 
            sm:w-[18rem] sm:ml-[0rem] sm:mt-[-16rem] 
            md:w-[60rem] md:ml-[0rem] md:mt-[-57rem]
            lg:w-[60rem] lg:ml-[-3rem] lg:mt-[-73rem]
            lp:w-[45rem] lp:ml-[0rem] lp:mt-[-65rem]">
            <MagMockup />
          </div>
            </Link>
        </div>
        <div className="text-center mt-4">
          <h5 className="text-xl 
            sm:text-[0.93rem] sm:ml-[1.8rem] sm:mt-[-16.8rem] 
            md:text-[1.8rem] md:mr-[-1rem] md:mt-[-44.5rem]
            lg:text-[2.8rem] lg:ml-[-8rem] lg:mt-[-59rem] lg:w-[55rem]
            lp:text-[2.3rem] lp:ml-[0.5rem] lp:mt-[-51rem] lp:w-[50rem]">
            National Geographic Magazine Cover
          </h5>
        </div>
      </div>

      {/* Footer and Social Sections */}
      <div className="mt-6 
        sm:w-[40rem] sm:max-w-[20rem] sm:ml-[2rem] sm:mt-[10rem] 
        md:w-[40rem] md:ml-[17rem] md:mt-[25rem] md:mb-[3rem]
        lg:w-[80rem] lg:ml-[39rem] lg:mb-[-2rem] lg:mt-[35rem]
        lp:w-[80rem] lp:ml-[35rem] lp:mt-[30rem]">
        <Social />
      </div>
    </div>
  );
};

export default Home;