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

// the thing above are some components or page decorations...I am
// thinking about adding some more bubbles if time allows me to do so


const Home = () => {
  
  return (
    
    <div className="container flex flex-col">

      {/* the "I am" Text */}
      <div className="flex justify-center items-center lg:mt-[10rem] lg:w-[20rem]">
        {/* basically the same thing as the two clouds */}
        <h1 className="
        sm:text-[2rem] sm:mt-[-0.5rem] sm:ml-[-3rem] sm:pr-[1rem]
        md:text-[4.5rem] md:ml-[3rem] md:mt-[10rem]
        lg:text-[8rem] lg:ml-[-57rem] lg:mt-[-5rem]
        lp:text-[5.5rem] lp:ml-[-20rem] lp:mt-[-3rem]
        font-Micro">
          I am a&nbsp;
        </h1>
        {/* the text bubble section */}
        <img src={TextBubble} alt="Text bubble for the cat section" 
          className="w-full max-w-[80rem] h-[16rem] bg-contain bg-no-repeat 
          sm:ml-[-1rem] sm:h-[2.5rem] sm:w-[15rem] sm:mb-[10rem] sm:mt-[10rem] 
          md:ml-[1rem] md:h-[7rem] md:w-[35rem] md:mb-[9rem] md:mt-[20rem]
          lg:h-[9rem] lg:w-[55rem] lg:mr-[-115rem] lg:mt-[5rem]
          lp:h-[7.5rem] lp:w-[55rem] lp:mt-[7rem] lp:mr-[-18rem]
          " />

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
          sm:w-[8rem] sm:mr-[11rem] sm:mt-[-25rem] sm:pb-[12.5rem]
          md:w-[15rem] md:mr-[35rem] md:mt-[-30rem]
          lg:w-[20rem] lg:ml-[5rem] lg:mt-[-35rem] lg:mb-[-9.5rem]
          lp:w-[20rem] lp:ml-[1rem] lp:mt-[-32rem] lp:mb-[-5rem]
        " 
      />
      </div>
          
        <div
        className='flex w-10 container lg:w-[60rem] lp:w-[60rem]'
        >
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
            sm:text-[2rem] sm:mt-[-15.5rem] sm:ml-[-14rem]
            md:text-[4rem] md:ml-[-31rem] md:mt-[-18.5rem]
            lg:text-[7rem] lg:ml-[-8rem] lg:mt-[-21.6rem]
            lp:text-[4.8rem] lp:ml-[-17rem] lp:mt-[-19.5rem]
            "
          />
        </div>

      </div>

      {/* CatGif Section */}
      {/* I imported the cat gif specifically as a component because I was using an 
      animation method, for reference, it's at CatSvg.jsx in the Components folder */}
      <div className="flex justify-center mt-12">
        <CatGif className="w-40 
        sm:w-[5rem] sm:mr-[-15rem] sm:mb-[25rem] sm:mt-[-13rem]
        md:w-[10rem] md:mr-[-45rem] md:pb-[-5rem] md:pt-[3rem]
        lg:w-[12rem] lg:ml-[21rem] lg:mt-[-15rem] lg:mb-[20rem]
        lp:w-[12rem] lp:ml-[20rem] lp:mt-[-15rem] lp:mb-[20rem]" />
      </div>

      {/* Arrow */}
      {/* this is the same thing as the cat gif above, you can find the code in the
      ArrowSvg.jsx in the same Components folder */}
      <div className="text-center mt-[-21rem]">
        <Arrow className="w-8 
        sm:w-6 sm:pb-[0rem] sm:mt-[5rem] sm:ml-[12rem]
        md:w-10 md:ml-[27rem] md:mt-[22rem]
        lg:w-12 lg:ml-[40rem] lg:mt-[10rem] lg:mb-[10rem]
        lp:w-12 lp:ml-[38rem] lp:mt-[1rem] lp:mb-[10rem]" />
      </div>

      {/* Sample Work Title */}
      {/* this is the sample work text */}
      <div className="flex justify-center w-full mt-20 text-center">
        <p className="text-3xl 
        sm:text-[3rem] sm:mt-[3rem] sm:ml-[2rem] sm:mb-[20rem]
        md:text-[5rem] md:ml-[5rem] md:mt-[11rem] md:pb-[2rem]
        lg:text-[10rem] lg:mt-[1rem] lg:mr-[-1rem]
        lp:text-[7rem] lp:mt-[-5rem] lp:mr-[5rem]">
          Sample Work:</p>
      </div>

         {/* Cloud GIFs */}
         {/* same code as the one before, but I added the tranform scale-x-[-1], which
         makes the gif itself mirrored  */}
         <div>
        <img src={TwoClouds} alt="Cloud gif" className="transform scale-x-[-1] w-16 
        sm:w-[8rem] sm:mt-[-80rem] sm:ml-[15rem] sm:pt-[58rem]
        md:w-[20rem] md:mt-[-73rem] md:ml-[35rem] md:pt-[48rem]
        lg:w-[30rem] lg:ml-[50rem] lg:mt-[-78rem]
        lp:w-[25rem] lp:ml-[50rem] lp:mt-[-78rem]" />
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
        sm:w-[20rem] sm:mt-[-20rem] sm:pb-[35rem] sm:ml-[2.5rem] 
        md:w-[40rem] md:ml-[7rem] md:mb-[2rem] md:mt-[-15rem]
        lg:w-[70rem] lg:ml-[-20rem] lg:mt-[-10rem]
        lp:w-[50rem] lp:ml-[0rem] lp:mt-[-10rem]
        ">
          <PurpleWorkBox />
          <div className="flex w-full justify-center items-center 
          sm:w-[18rem] sm:ml-[1rem] sm:mt-[-15rem] 
          md:w-[35rem] md:ml-[2.5rem] md:mt-[-30rem]
          lg:w-[55rem] lg:ml-[3.5rem] lg:mt-[-45rem]
          lp:w-[45rem] lp:ml-[2.5rem] lp:mt-[-37rem]
          ">
            <YogaMockup />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl 
          sm:text-[2rem] sm:mr-[-2rem] sm:mt-[-51.5rem] sm:pt-[-10rem] 
          md:text-[3.5rem] md:mr-[-3rem] md:mt-[-65rem]
          lg:text-[5.5rem] lg:ml-[-60rem] lg:mt-[-80rem]
          lp:text-[5rem] lp:ml-[0rem] lp:mt-[-71rem] lp:w-[50rem]">
            Furrever Pals Puppy Yoga
          </p>
        </div>

        {/* large bubble */}
        <div>
          <div className="flex justify-between ">
          <img src={Bubble} alt="Bubble gif" className=" 
          sm:w-1/4 sm:h-1/4 sm:ml-[20rem] sm:mt-[-42rem]
          md:w-1/4 md:h-1/4 md:ml-[-5rem] md:mt-[1rem]
          lg:w-2/4 lg:h-auto lg:ml-[50rem] lg:mt-[10rem]
          lp:w-2/4 lp:h-auto lp:ml-[40rem] lp:mt-[12rem]
          max-w-full
          " />
          </div>
          <div>
            {/* small bubble */}
          <img src={Bubble} alt="Bubble gif" className="
          sm:w-1/3 sm:h-1/3 sm:ml-[12rem] sm:mt-[-46rem]
          md:w-1/3 md:h-1/3 md:mt-[-5rem] md:ml-[-6rem]
          lg:w-1/4 lg:mt-[-35rem] lg:ml-[50rem]
          lp:w-1.5/4 lp:mt-[-40rem] lp:ml-[50rem]
          " />
          </div>
        </div>
        


          
          {/* Beach Volleyball */}
          <div className="grid grid-cols-1 hover:cursor-pointer
            sm:w-[20rem] sm:ml-[2.5rem] 
            md:w-[40rem] md:ml-[7rem] md:mt-[-10rem]
            lg:pb-[-2rem] lg:pt-[-20rem] lg:mr-[-2rem]
            lp:pb-[-2rem] lp:pt-[-10rem] lp:mr-[20rem]
            ">
                      
           {/* BlueWorkBox */}
          <div className="relative 
            sm:w-[20rem] sm:ml-[0rem] sm:mt-[10rem] 
            md:w-[40rem] md:ml-[1rem] md:mt-[-3rem] 
            lg:w-[60rem] lg:ml-[3.5rem] lg:mt-[15rem] 
            lp:w-[50rem] lp:ml-[21rem] lp:mt-[7rem]
            flex justify-center items-center"
          >
            {/* Wrap the BlueWorkBox and VolleyballMockup inside the Link */}
            <Link to="/beachball" className="w-full h-auto flex justify-center items-center 
            md:pt-[13rem]
            ">
              <BlueWorkBox />
              {/* VolleyballMockup inside the box */}
              <div className="absolute
                sm:mt-[0rem] sm:w-[18rem]
                md:ml-[0rem] md:mt-[-1rem] md:w-[35rem]
                lg:mt-[0.5rem] lg:w-[55rem]
                lp:mt-[0.5rem] lp:w-[45rem]"
              > 
                <VolleyballMockup />
              </div>
            </Link>
          </div>

          {/* Title */}
          <div className="text-center mt-4">
            <p className="text-xl 
              sm:text-[1.6rem] sm:mr-[-1.5rem] sm:mt-[-15.5rem]
              md:text-[3.2rem] md:ml-[1rem] md:mt-[-29rem]
              lg:text-[4.9rem] lg:mt-[-42rem] lg:ml-[7rem] lg:w-[55rem]
              lp:text-[4.1rem] lp:mt-[-35rem] lp:ml-[21rem] lp:w-[50rem]"
            >
              Beach Volleyball Tournament Poster
            </p>
          </div>
          </div>


        {/* bubble */}
        {/* same bubble as before, some of them are positioned differntly with differnt screen sizes */}
        <div>
        <div>
          {/* this is the small bubble */}
        <img src={Bubble} alt="Bubble gif" className="w-16 
        sm:w-1/4 sm:ml-[-2rem] sm:mt-[-50rem]
        md:w-2/5 md:ml-[40rem] md:mt-[3rem]
        lg:w-1/4 lg:ml-[60rem] lg:mt-[10rem]
        lp:w-2/4 lp:ml-[-5rem] lp:mt-[-17rem] lp:mb-[22rem]
        " />
        </div>
        <div>
          {/* this is the bubble under the beach volleyball section */}
          <img src={Bubble} alt="Bubble gif" className="w-32 
          sm:w-1/4 sm:ml-[20rem] sm:mt-[17rem] 
          md:w-1/5 md:ml-[-1rem] md:mb-[-44rem]
          lg:w-2/4 lg:ml-[-20rem] lg:mt-[-50rem]
          lp:w-1/4 lp:ml-[55rem] lp:mt-[12rem]
          " />
        </div>
        </div>

        {/* because this is the third one, I mirrored the speechbox to match the first one to keep a consistant pattern */}
        <div className="grid relative 
        transform scale-x-[-1] 
        sm:w-[20rem] sm:ml-[2.5rem] sm:pt-[22rem]
        md:w-[40rem] md:ml-[7rem] md:pb-[1rem] md:pt-[5rem]
        lg:w-[65rem] lg:ml-[-20rem] lg:pt-[25rem]
        lp:w-[50rem] lp:ml-[0rem] lp:pt-[5rem]
        ">
          
          <BlueWorkBox />
          <div className="absolute 
            sm:w-[18rem] sm:ml-[1rem] sm:mt-[24rem] 
            md:w-[60rem] md:ml-[-10rem] md:mt-[10rem]
            lg:w-[60rem] lg:ml-[1rem] lg:mt-[32rem]
            lp:w-[45rem] lp:ml-[2.5rem] lp:mt-[10rem]">
            <MagMockup  />
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xl 
          sm:text-[1.6rem] sm:ml-[1.8rem] sm:mt-[-16.7rem] 
          md:text-[3rem] md:mr-[-1rem] md:mt-[-31.5rem]
          lg:text-[4.8rem] lg:ml-[-12rem] lg:mt-[-46.3rem] lg:w-[55rem]
          lp:text-[3.5rem] lp:ml-[5rem] lp:mt-[-39rem] lp:w-[40rem]">
            National Geographic Magazine Cover
          </p>
        </div>
      </div>

      {/* Footer and Social Sections */}
      {/* I actually wanted to download IonIcons, but for some reason it didn't work... 
      I might have to ask for help about that but please consider these as placeholders */}
      {/* as for the footer, I have it in Layouts.jsx, and I will make the comments there */}
      <div className="mt-6 
      sm:w-[40rem] sm:max-w-[20rem] sm:ml-[1.5rem] sm:mt-[10rem] 
      md:w-[40rem] md:ml-[17rem] md:mt-[25rem] md:mb-[3rem]
      lg:w-[80rem] lg:ml-[35rem] lg:mb-[-2rem] lg:mt-[35rem]
      lp:w-[80rem] lp:ml-[33rem] lp:mt-[30rem]">
        <Social />
      </div>
    </div>
  );
};

export default Home;
