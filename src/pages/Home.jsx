import React from 'react';
import { ReactTyped } from 'react-typed';
import Social from '../Components/social';
import CatGif from '../Components/CatSvg';
import PurpleWorkBox from '../Components/purpleworkbox';
import BlueWorkBox from '../Components/blueworkbox';
import GreenWorkBox from '../Components/greenworkbox';
import Arrow from '../Components/ArrowSvg';
import VolleyballMockup from '../Components/volleyball';
import YogaMockup from '../Components/puppyyoga';
import OmuMockup from '../Components/omurice';
import TwoClouds from '../assets/twoclouds.gif';
import Bubble from '../assets/singlebubble.gif';

const Home = () => {
  return (
    
    <div className="container mx-auto flex flex-col misn-h-screen">
     
     {/* cloud gif */}
     <div className="flex justify-between">
        <img src={TwoClouds} alt="Cloud gif" 
        className="
        sm:w-[20rem] sm:ml-[10rem] sm:mt-[10rem]
        md:w-[20rem] md:ml-[40rem] md:mt-[-2rem]
        lg:w-[20rem] lg:ml-[60rem]
        " />
      </div>

      {/* I am Text */}
      <div className="flex justify-center items-center mt-20">
        <h1 className="text-4xl 
        sm:text-[8rem] sm:mt-[0rem] sm:mr-[-20rem] 
        md:text-[6rem] md:mr-[40rem] md:mt-[3rem]
        lg:text-[7rem] lg:ml-[-20rem] lg:mt-[-3rem]
        font-Micro">
          I am a&nbsp;
        </h1>

      </div>

      {/* Bubble Container with ReactTyped */}
      <div className="flex justify-center mt-10 relative">
        <div
          className="w-full max-w-[80rem] h-[16rem] bg-contain bg-no-repeat 
          sm:mr-[-105rem] sm:h-[12rem] sm:w-[60rem] sm:mb-[-10rem] sm:mt-[-8rem]
          md:mr-[-25rem] md:h-[7rem] md:w-[45rem] md:mt-[-6.5rem]
          lg:h-[20rem] lg:w-[50rem] lg:mr-[-10rem] lg:mt-[-8rem]"
          style={{ backgroundImage: 'url(/src/assets/text-bubble.png)' }}
        >
          <ReactTyped
            strings={["UI/UX Designer", "Graphic Designer", "Video Editor", "Illustrator", "Front End Developer"]}
            typeSpeed={100}
            backSpeed={100}
            backDelay={1000}
            startDelay={500}
            loop
            showCursor
            className="text-black font-Micro text-3xl 
            sm:text-[6rem] sm:ml-[10rem] sm:leading-none 
            md:text-[5.5rem] md:ml-[3rem]
            lg:text-[6.5rem] mx-6 mt-[-1rem]"
          />
        </div>
      </div>

      {/* CatGif Section */}
      <div className="flex justify-center mt-12">
        <CatGif className="w-40 
        sm:w-[20rem] sm:mr-[-150rem] sm:mb-[-10rem] sm:mt-[10rem]
        md:w-[10rem] md:mr-[-55rem] md:mt-[0rem] md:mb-[10rem]
        lg:w-[20rem] lg:mr-[-65rem] lg:mt-[-2rem]" />
      </div>

      {/* Arrow */}
      <div className="text-center mt-10">
        <Arrow className="w-8 
        sm:w-8 sm:pb-[0rem] sm:mt-[40rem] sm:ml-[50rem]
        md:w-10 md:ml-[28rem] md:mt-[20rem]
        lg:w-16 lg:ml-[35rem] lg:mt-[-15rem]" />
      </div>

      {/* Sample Work Title */}
      <div className="flex justify-center w-full mt-20">
        <p className="text-3xl 
        sm:text-[10rem] sm:mt-[20rem] sm:mr-[-80rem] sm:mb-[20rem]
        md:text-[10rem] md:ml-[-80rem] md:mt-[11rem]
        lg:text-[10rem] text-center">
          Sample Work:</p>
      </div>

         {/* Cloud GIFs */}
         <div>
        <img src={TwoClouds} alt="Cloud gif" className="transform scale-x-[-1] w-16 
        sm:w-[20rem] sm:mt-[-80rem] sm:ml-[80rem] sm:pt-[50rem]
        md:w-[20rem] md:mt-[-70rem] md:ml-[43rem] md:pt-[45rem]
        lg:w-[20rem] lg:ml-[60rem] " />
      </div>

      {/* Work Showcase (Flex and Grid Layouts) */}
      <div className="mt-8 space-y-8 ">
        {/* Furrever Pals */}
        <div className="grid sm:h-auto 
        sm:w-[100rem] sm:mt-[-14rem] sm:pb-[60rem] sm:ml-[20rem] 
        md:w-[90rem] md:ml-[-2.5rem]
        lg:w-[90rem] lg:ml-[-5rem]
        ">
          <PurpleWorkBox />
          <div className="flex w-full justify-center items-center 
          sm:w-[50rem] sm:ml-[6rem] sm:mt-[-47rem] md:w-[50rem]">
            <YogaMockup />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl 
          sm:text-[5rem] sm:mr-[-75rem] sm:mt-[-104rem] sm:pb-[50rem] 
          md:text-[5rem] md:mr-[3rem]
          lg:text-[5.5rem] lg:mr-[23rem]">
            Furrever Pals Puppy Yoga
          </p>
        </div>

        {/* bubble */}
        <div>
          <div className="flex justify-between ">
          <img src={Bubble} alt="Bubble gif" className=" 
          sm:w-[40rem] sm:h-auto sm:ml-[-3.5rem] sm:mt-[-20rem]
          md:w-[25rem] md:h-auto md:ml-[-15rem] md:mb-[9rem]
          lg:w-[25rem] lg:h-auto lg:ml-[-20rem]
          " />
          </div>
          <div>
          <img src={Bubble} alt="Bubble gif" className="
          sm:w-[15rem] sm:h-auto sm:ml-[-3rem] sm:mt-[-25rem]
          md:w-30 md:mt-[-30rem] md:ml-[-12rem]
          lg:w-30 lg:mt-[-15rem] lg:ml-[-10rem]
          " />
          </div>
        </div>
        



          {/* Beach Volleyball */}
          <div className="grid grid-cols-1 
            sm:w-[60rem] sm:ml-[20rem] sm:pb-[100rem] 
            md:w-[90rem] md:ml-[-17rem] md:mt-[-10rem]">
            {/* BlueWorkBox */}
            <div className="relative 
            sm:h-[30rem] sm:pb-[-20rem]
            md:h-[40rem] 
            lg:h-[50rem] lg:w-[90rem] lg:ml-[20rem] lg:mt-[-5rem]
            flex justify-center items-center">
              <BlueWorkBox />
              {/* VolleyballMockup inside the box */}
              <div className="absolute 
              sm:top-[-0rem]
              md:ml-[0rem] md:mt-[7rem]
              lg:mt-[12rem]
              ">
                <VolleyballMockup />
              </div>
            </div>
          </div>
          {/* Title */}
          <div className="text-center mt-4">
            <p className="text-xl 
            sm:text-[4rem] sm:mr-[-65rem] sm:mt-[-136rem] sm:pb-[50rem] 
            md:text-[4.5rem] md:mr-[5rem] md:mt-[-140rem]
            lg:text-[4rem] lg:mt-[-145rem] lg:mr-[-20rem]
            "> Beach Volleyball Tournament Poster</p>
          </div>

        {/* bubble */}
        <div>
        <div>
        <img src={Bubble} alt="Bubble gif" className="w-16 
        sm:w-[20rem] sm:ml-[72rem] sm:mt-[-20rem]
        md:w-50 md:ml-[50rem] md:mt-[-22rem]
        lg:w-[30rem] lg:ml-[64rem]
        " />
        </div>
        <div>
          <img src={Bubble} alt="Bubble gif" className="w-32 
          sm:w-[40rem] sm:ml-[75rem] sm:mt-[-30rem]
          md:w-24
          lg:w-[15rem] lg:ml-[74rem] lg:mt-[-5rem]
          " />
        </div>
        </div>




        {/* North Star Omurice */}
        <div className="grid grid-cols-1 
        sm:w-[60rem] sm:ml-[20rem] sm:pt-[93rem]
        md:w-[60rem] md:ml-[-2rem] md:pt-[100rem]
        lg:w-[60rem] lg:ml-[-5rem]
        ">
          <GreenWorkBox />
          <div className="w-full 
            sm:w-[72rem] sm:ml-[6rem] sm:mt-[1rem] 
            md:w-[80rem] md:ml-[3rem]
            lg:w-[80rem]">
            <OmuMockup  />
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xl 
          sm:text-[5rem] sm:mr-[-75rem] sm:mt-[-83rem] sm:pb-[50rem] 
          md:text-[5rem] md:mr-[5rem] md:mt-[-82rem]
          lg:text-[5rem] lg:mr-[20rem]">North Star Omurice</p>
        </div>
      </div>

      {/* Footer and Social Sections */}
      <div className="mt-6 
      sm:w-[40rem] sm:max-w-[40rem] sm:ml-[30rem] sm:mb-[-40rem] 
      md:w-[40rem] md:ml-[10rem] md:mb-[-50rem]
      lg:w-[60rem] lg:mr-[1rem] lg:mb-[-30rem]">
        <Social />
      </div>
    </div>
  );
};

export default Home;
