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
import TextBubble from "../assets/text-bubble.png";

// the thing above are some components or page decorations...I am
// thinking about adding some more bubbles if time allows me to do so


const Home = () => {
  return (
    
    <div className="container flex flex-col ">

      {/* the "I am" Text */}
      <div className="flex justify-center items-center mt-20">
        {/* basically the same thing as the two clouds */}
        <h1 className="text-4xl 
        sm:text-[2rem] sm:mt-[-0.5rem] sm:ml-[1rem] sm:pr-[1rem]
        md:text-[4.5rem] md:mr-[30rem] md:mt-[6rem]
        lg:text-[5rem] lg:ml-[-10rem] lg:mt-[1rem]
        font-Micro">
          I am a&nbsp;
        </h1>
        {/* the text bubble section */}
        <img src={TextBubble} alt="Text bubble for the cat section" 
          className="w-full max-w-[80rem] h-[16rem] bg-contain bg-no-repeat 
          sm:mr-[0rem] sm:h-[2.5rem] sm:w-[15rem] sm:mb-[10rem] sm:mt-[10rem] 
          md:ml-[-30rem] md:h-[7rem] md:w-[35rem] md:mb-[3rem]
          lg:h-[7rem] lg:w-[50rem] lg:mr-[-35rem] lg:mt-[5rem]" />

      </div>

      {/* Bubble Container with ReactTyped */}
      <div className="flex justify-center mt-10 relative">
        <div>
        {/* // Same thing as above, but I am referring the background image as the */}
        {/* // text bubble image. I will change that for the portfolio website as it */}
        {/* // is not rendered properly */}

         <img 
      // referencing the imported gif
        src={TwoClouds} 
        alt="Cloud gif"
        // setting the sizes and positions of the gif in differnet pages
        className="w-auto max-w-full
          sm:w-[8rem] sm:ml-[1rem] sm:mt-[-23.5rem] sm:pb-[3rem]
          md:w-[15rem] md:ml-[33rem] md:mt-[-25rem]
          lg:w-[20rem] lg:ml-[70rem] lg:mt-[-30rem] lg:mb-[1rem]
        " 
      />
          
        
          {/* this is a new react type I downloaded, I believe it is called
           react-type. In order to see this work, you'll need to install this in
           the terminal: npm install react-typed*/}
           {/* what this code does is that it will cycle through the strings, and you
           can adjust the speed, back speed, delays, etc. */}
          <ReactTyped
            strings={["UI/UX Designer", "Graphic Designer", "Video Editor", "Illustrator", "Front End Developer"]}
            typeSpeed={100}
            backSpeed={100}
            backDelay={1000}
            startDelay={500}
            loop
            showCursor
            className="text-black font-Micro
            sm:text-[1.6rem] sm:ml-[8rem] sm:leading-none 
            md:text-[4rem] md:ml-[16rem]
            lg:text-[4.5rem] lg:pl-[20rem]
            mx-6 mt-[-1rem]"
          />
        </div>
      </div>

      {/* CatGif Section */}
      {/* I imported the cat gif specifically as a component because I was using an 
      animation method, for reference, it's at CatSvg.jsx in the Components folder */}
      <div className="flex justify-center mt-12">
        <CatGif className="w-40 
        sm:w-[5rem] sm:mr-[-20rem] sm:mb-[20rem] sm:mt-[-13rem]
        md:w-[10rem] md:mr-[-40rem] md:mt-[1rem] md:mb-[3rem]
        lg:w-[12rem] lg:ml-[45rem] lg:mt-[-5rem] lg:mb-[20rem]" />
      </div>

      {/* Arrow */}
      {/* this is the same thing as the cat gif above, you can find the code in the
      ArrowSvg.jsx in the same Components folder */}
      <div className="text-center mt-10">
        <Arrow className="w-8 
        sm:w-6 sm:pb-[0rem] sm:mt-[0rem] sm:ml-[11.5rem]
        md:w-10 md:ml-[25rem] md:mt-[15rem]
        lg:w-12 lg:ml-[43rem] lg:mt-[-19rem] lg:mb-[10rem]" />
      </div>

      {/* Sample Work Title */}
      {/* this is the sample work text */}
      <div className="flex justify-center w-full mt-20">
        <p className="text-3xl 
        sm:text-[3rem] sm:mt-[-1rem] sm:ml-[2rem] sm:mb-[20rem]
        md:text-[5rem] md:ml-[2rem] md:mt-[11rem]
        lg:text-[7rem] lg:mt-[-10rem] lg:mr-[-28rem] text-center">
          Sample Work:</p>
      </div>

         {/* Cloud GIFs */}
         {/* same code as the one before, but I added the tranform scale-x-[-1], which
         makes the gif itself mirrored  */}
         <div>
        <img src={TwoClouds} alt="Cloud gif" className="transform scale-x-[-1] w-16 
        sm:w-[8rem] sm:mt-[-80rem] sm:ml-[16rem] sm:pt-[57rem]
        md:w-[20rem] md:mt-[-73rem] md:ml-[33rem] md:pt-[45rem]
        lg:w-[20rem] lg:ml-[60rem] lg:mt-[-65rem]" />
      </div>

      {/* Work Showcase (Flex and Grid Layouts) */}
      {/* here, I am importing the work boxes, mockups and their designated titles */}
      {/* they're mostly the same, only the positioning are different */}
      {/* they SHOULD, should, be responsive */}
      {/* I have each sectiones separated with large gaps so I don't confuse myself when
      adjusting */}
      <div className="mt-8 space-y-8 ">
        {/* Furrever Pals */}
        <div className="grid sm:h-auto 
        sm:w-[20rem] sm:mt-[-20rem] sm:pb-[60rem] sm:ml-[2rem] 
        md:w-[40rem] md:ml-[5rem] md:mb-[2rem]
        lg:w-[55rem] lg:ml-[-0.5rem] lg:mt-[-10rem]
        ">
          <PurpleWorkBox />
          <div className="flex w-full justify-center items-center 
          sm:w-[15rem] sm:ml-[2.5rem] sm:mt-[-15rem] 
          md:w-[30rem] md:ml-[4rem] md:mt-[-30rem]
          lg:w-[50rem] lg:ml-[2.5rem] lg:mt-[-42rem]
          ">
            <YogaMockup />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl 
          sm:text-[1.5rem] sm:mr-[-2.5rem] sm:mt-[-76rem] sm:pt-[-10rem] 
          md:text-[3.5rem] md:mr-[2rem] md:mt-[-89rem]
          lg:text-[4rem] lg:mr-[5rem] lg:mt-[-99.5rem]">
            Furrever Pals Puppy Yoga
          </p>
        </div>

        {/* bubble */}
        <div>
          <div className="flex justify-between ">
          <img src={Bubble} alt="Bubble gif" className=" 
          sm:w-1/4 sm:h-1/4 sm:ml-[0.5rem] sm:mt-[-33rem]
          md:w-1/4 md:h-1/4 md:ml-[-6.5rem] md:mt-[10rem]
          lg:w-2/4 lg:h-auto lg:ml-[59rem]
          max-w-full
          " />
          </div>
          <div>
          <img src={Bubble} alt="Bubble gif" className="
          sm:w-1/3 sm:h-1/3 sm:ml-[-3rem] sm:mt-[-36rem]
          md:w-1/3 ms:h-1/3 md:mt-[-1.5rem] md:ml-[-6.5rem]
          lg:w-1/4 lg:mt-[-23rem] lg:ml-[70rem]
          " />
          </div>
        </div>
        


          
          {/* Beach Volleyball */}
          <div className="grid grid-cols-1 
            sm:w-[20rem] sm:ml-[2rem]
            md:w-[40rem] md:ml-[5rem] md:mt-[-10rem]
            ">
            {/* BlueWorkBox */}
            <div className="relative 
            sm:h-[30rem] sm:mb-[10rem] sm:mt-[4rem]
            md:h-[20rem] 
            lg:h-[50rem] lg:w-[55rem] lg:ml-[30rem] lg:mt-[15rem]
            flex justify-center items-center">
              <BlueWorkBox />
              {/* VolleyballMockup inside the box */}
              <div className="absolute 
              sm:top-[11rem] sm:w-[15rem]
              md:ml-[0rem] md:mt-[-8rem] md:w-[30rem]
              lg:mt-[0.5rem] lg:w-[50rem]
              ">
                <VolleyballMockup />
              </div>
            </div>
          </div>
          {/* Title */}
          <div className="text-center mt-4">
            <p className="text-xl 
            sm:text-[1.5rem] sm:mr-[-2rem] sm:mt-[-33.5rem]  
            md:text-[3.2rem] md:ml-[-1rem] md:mt-[-33rem]
            lg:text-[4rem] lg:mt-[-55rem] lg:mr-[-68rem]
            "> Beach Volleyball Tournament Poster</p>
          </div>

        {/* bubble */}
        {/* same bubble as before, some of them are positioned differntly with differnt screen sizes */}
        <div>
        <div>
        <img src={Bubble} alt="Bubble gif" className="w-16 
        sm:w-1/4 sm:ml-[-2.75rem] sm:mt-[-10.5rem]
        md:w-2/5 md:ml-[38rem] md:mt-[15rem]
        lg:w-1/4 lg:ml-[-5rem] lg:mt-[20rem]
        " />
        </div>
        <div>
          <img src={Bubble} alt="Bubble gif" className="w-32 
          sm:w-1/4 sm:ml-[20rem] sm:mt-[14.5rem]
          md:w-1/5 md:ml-[-5rem] md:mb-[-60rem]
          lg:w-2/4 lg:ml-[-7rem] lg:mt-[-10rem]
          " />
        </div>
        </div>




        {/* North Star Omurice */}
        <div className="relative 
        sm:w-[20rem] sm:pt-[-5rem] sm:ml-[2rem]
        md:w-[40rem] md:ml-[5rem] md:pt-[40rem]
        lg:w-[55rem] lg:ml-[-0.5rem] lg:pt-[60rem]
        ">
          <GreenWorkBox />
          <div className="absolute 
            sm:w-[16rem] sm:ml-[2rem] sm:mt-[-11.5rem] 
            md:w-[30rem] md:ml-[5rem] md:mt-[-22rem]
            lg:w-[50rem] lg:ml-[2.5rem] lg:mt-[-34rem]">
            <OmuMockup  />
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xl 
          sm:text-[1.5rem] sm:ml-[2rem] sm:mt-[-16rem] 
          md:text-[4rem] md:mr-[-1rem] md:mt-[-28rem]
          lg:text-[4rem] lg:ml-[-8rem] lg:mt-[-39.5rem]">North Star Omurice</p>
        </div>
      </div>

      {/* Footer and Social Sections */}
      {/* I actually wanted to download IonIcons, but for some reason it didn't work... 
      I might have to ask for help about that but please consider these as placeholders */}
      {/* as for the footer, I have it in Layouts.jsx, and I will make the comments there */}
      <div className="mt-6 
      sm:w-[40rem] sm:max-w-[20rem] sm:ml-[1.5rem] sm:mt-[15rem] 
      md:w-[40rem] md:ml-[15rem] md:mt-[30rem]
      lg:w-[60rem] lg:ml-[35rem] lg:mb-[10rem] lg:mt-[43rem]">
        <Social />
      </div>
    </div>
  );
};

export default Home;
