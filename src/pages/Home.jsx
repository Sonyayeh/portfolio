import React from 'react';
import { ReactTyped } from 'react-typed';
import Social from '../Components/social';
import Footer from '../Components/footer';
import CatGif from '../Components/CatSvg';
import PurpleWorkBox from '../Components/purpleworkbox';
import BlueWorkBox from '../Components/blueworkbox';
import GreenWorkBox from '../Components/greenworkbox';
import Arrow from '../Components/ArrowSvg';
import Bubbles from '../Components/Bubbles';
import VolleyballMockup from '../Components/volleyball';
import YogaMockup from '../Components/puppyyoga';
import OmuMockup from '../Components/omurice';

const Home = () => {


  return (
    <div className="container mx-auto">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4">


        
      </nav>

     

      {/* the I am text */}
      <div className="text-center">
        <h1 className="text-xl 
        sm:text-6xl sm:mb-[3rem] sm:ml-2
        md:text-7xl md:mr-[45rem] md:mt-[5rem] 
        lg:text-[6rem] lg:absolute lg:mr-[60rem] lg:mt-[50rem] 
        ">I am a&nbsp;</h1>

        {/* Bubble Container with ReactTyped */}
        <div className="relative 
        mt-4 w-full h-[100vh] 
        sm:mt-[-51rem] sm:ml-[-10rem] 
        md:mt-[-59rem] md:ml-[1rem] md:left-[12rem] 
        lg:mt-[-53rem] lg:ml-[2rem]">
          <div
            className="absolute left-0 flex justify-center items-center overflow-hidden w-[100%] h-full p-[2vw] bg-center bg-contain bg-no-repeat
            sm:w-[40rem] sm:ml-[2rem] sm:mt-[28rem]
            lg:w-[50rem]
            "
            style={{
              backgroundImage: 'url(/src/assets/text-bubble.png)',
            }}
          >
            {/* ReactTyped Component */}
            <ReactTyped
              strings={["UI/UX Designer", "Graphic Designer", "Video Editor", "Illustrator", "Front End Developer"]}
              typeSpeed={100}
              backSpeed={100}
              backDelay={1000}
              startDelay={500}
              loop
              showCursor={true}
              fadeOut={false}
              className="iAmText flex 
              sm:text-[3rem] sm:ml-[4.5rem] sm:pr-[6rem] sm:pt-6 
              md:text-[4rem] md:pt-6 md:pr-[4rem] 
              lg:text-[5rem] 
              font-Micro text-black z-10 mt-[-2rem] ml-[4.5rem]"
            />
          </div>
        </div>
      </div>

      {/* CatGif Section */}
      <div className="flex justify-center sm:mt-[-35rem] mt-8 mr-[-50rem]">
        <CatGif 
        className="w-32 
        sm:w-40 sm:mr-[15rem] sm:mt-[43rem]
        md:w-60 md:mr-[10rem]
        lg:w-80 lg:ml-[18rem] lg:mt-[43rem]"/>
      </div>

      {/* Arrow Between CatGif and WorkBox */}
      <div className="text-center">
        <Arrow 
        className="
        sm:w-5 sm:mb-[50rem] sm:ml-[11rem] sm:py-[10rem]
        md:w-7 md:ml-[30rem] md:py-[10rem]
        lg:w-8 lg:ml-[35rem] lg:py-[0rem]
        "/>
      </div>

      {/* Sample Work Title */}
      <div className="flex justify-center w-full">
        <p className="text-xl 
          sm:text-[5rem] sm:mt-[-55rem]
          md:text-[7rem] md:ml-[-2rem]
          lg:text-[8rem] lg:pt-[15rem]
          text-center">
          Sample Work:
        </p>
      </div>



      {/* Work Showcase (Flex and Grid Layouts) */}
      <div className="mt-8 space-y-8
      sm:mt-[-50rem] sm:w-[40rem] sm:h-[40rem] sm:ml-[-8rem]
      ">
        {/* Furrever Pals */}
        <div className="grid grid-cols-1 gap-8
         md:pl-[10rem] md:w-[50rem]
         lg:pl-[5rem] lg:w-[70rem] lg:mt-[20rem]">
          <PurpleWorkBox />
          <div className='
          flex items-center
          sm:w-[30rem] sm:h-[30rem] sm:mt-[-32.5rem] sm:ml-[5.5rem] 
          md:w-[35rem] md:h-[30rem] md:mt-[-54.5rem] md:ml-[2.5rem] md:py-[37rem]
          lg:w-[80rem] lg:mt-[-63rem] lg:ml-[3.5rem]
          '>
          <YogaMockup />
          </div>
        </div>
        <div className="text-center">
          <p className="text-xl
          sm:text-5xl sm:mt-[-32rem]
          md:text-5xl md:absolute md:ml-[18rem] md:mt-[-52rem]
          lg:text-7xl lg:absolute lg:ml-[19rem] lg:mt-[-60rem]
          ">Furrever Pals Puppy Yoga</p>
        </div>

        {/* Beach Volleyball */}
        <div className="flex justify-center items-center mt-8 min-h-screen
        lg:pl-[5rem] lg:w-[70rem] lg:mt-[20rem]">
          <div className='grid grid-cols-1 w-full max-w-[1200px]
          sm:w-[100rem] sm:pt-[30rem] sm:py-[70rem] 
          md:w-[100rem] md:pt-[85rem]
          lg:pr-[8rem] lg:w-[70rem] lg:mt-[15rem]
          '>
            <BlueWorkBox />
            <div className='
            sm:w-[30rem] sm:h-[20rem] sm:ml-[5rem] sm:mt-[-22rem] 
            md:w-[80rem] md:ml-[-21rem] md:mt-[-100rem]
            lg:w-[97rem] lg:ml-[-20.5rem] lg:mt-[-98rem]
            '>
            <VolleyballMockup />
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-xl 
          sm:text-5xl sm:mt-[-99rem]
          md:text-5xl md:absolute md:mt-[-177rem] md:ml-[28rem]
          lg:text-6xl lg:absolute lg:mt-[-176rem] lg:ml-[36rem]
          ">Beach Volleyball Tournament Poster</p>
        </div>

        {/* North Star Omurice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[-8rem]
        lg:pl-[5rem] lg:w-[70rem] lg:mt-[20rem]">
          <div className='grid grid-cols-1 gap-8 w-full max-w-[1200px]
          sm:mt-[110rem]
          md:w-[40rem] md:mt-[-65rem] md:ml-[10rem]
          lg:ml-[0rem] lg:w-[70rem] lg:mt-[-50rem]
          '>
            <GreenWorkBox />
          </div>
          <div className='
          sm:w-[50rem] sm:ml-[2rem] sm:mt-[-3rem]
          md:w-[50rem] md:ml-[-8.5rem] md:mt-[-66rem]
          lg:w-[90rem] lg:ml-[-33rem] lg:mt-[-50rem]
          '>
            <OmuMockup />
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xl 
          sm:text-5xl sm:mt-[-84rem]
          md:text-5xl md:mt-[-147rem] md:ml-[21rem]
          lg:text-7xl lg:absolute lg:mt-[-132rem] lg:ml-[24rem]
          ">North Star Omurice</p>
        </div>
      </div>

      {/* Bubbles Section */}
      <div className="flex justify-center mt-8" style={{ marginTop: '-115rem', marginLeft: '-3rem', width: '100%' }}>
        <Bubbles />
      </div>

      <div className="flex flex-col items-center justify-center mt-8">
          {/* Footer Section */}
          <div className="w-full 
          sm:w-[80%] sm:max-w-[1200px] sm:mt-[200rem] sm:text-[5rem]
          md:ml-[33rem]
          lg:mt-[230rem] lg:pb-[-20rem] lg:ml-[43rem]">
            <Footer />
          </div>

          {/* Social Section */}
          <div className="mt-6 
          sm:w-[40rem] sm:max-w-[40rem] sm:ml-0
          mb:w-[40rem] md:max-w-[40rem] mb:ml-[7rem]
          lg:w-[60rem] lg:mr-[1rem] lg:mb-[-30rem]">
            <Social />
          </div>
        </div>
      </div>

  );
};

export default Home;
