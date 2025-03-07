import React from "react";

import Hello from "../Components/hello";
import TravelPhotos from "../Components/TravelPhotos";
import Pointercursor from "../Components/photopointer";
import Food from "../Components/Foodslider";
import Photo from "../Components/photo";
import Language from "../Components/language";
import Skills from "../Components/skills";
import PurpleCursor from "../Components/PurplePointer";
import Resume from "../Components/resume";
import Values from "../Components/Values";
import Goal from "../Components/goal";
import Special from "../Components/specialAboutMe";
// I imported my photo from components folder
// this is the social media icon I wanted to use ionicons but
// cannot be installed, please consider them as placeholders :(((
import Social from '../Components/social';

const About = () => {
    return (
      // they are basically the same as the other pages, but just
      // positioning differences
      <div className="container mx-auto 
      sm:w-full
      lg:ml-[6rem]">

        <Hello />


        {/* Since I found out I used the same kind of container box
        for most of my content, i used the same box from projects page
        and changed it into an About Me container box */}
        <div className=" relative mt-[30rem] 
        sm:mt-[2rem] sm:ml-[-1rem] sm:w-[25rem]
        md:mr-[1rem] md:w-[50rem] md:mt-[2rem]
        lg:w-[100rem] lg:ml-[-15rem] 
        lp:ml-[4rem]
        ">

        <div className=" absolute w-full
        sm:w-1/3 sm:mt-[-3rem] sm:ml-[14.5rem]
        md:w-3/4 md:ml-[30rem] md:mt-[-0rem]
        lg:w-1/3 lg:ml-[72rem] lg:mt-[-5rem]
        lp:w-1/3 lp:ml-[45rem] lp:mt-[3rem]
        ">
            <Photo />
        </div>

        {/* Pointercursor Component */}
        <div className=" absolute
        sm:w-1/4 sm:ml-[19.2rem] sm:mt-[-4.3rem]
        md:w-[20rem] md:ml-[50.5rem] md:mt-[-1rem]
        lg:w-[5rem] lg:ml-[91rem] lg:mt-[-5.5rem]
        lp:w-1/3 lp:ml-[55.5rem] lp:mt-[2rem]
        ">
            <Pointercursor />
        </div>
        

            {/* Project Heading and Description */}
            <div className="text-start w-full
            lg:mr-[20rem]
            ">
                {/* Blue heading */}
                <div className="bg-blue-200 px-4 flex justify-between items-center w-full">
                    <h5 className="text-white text-3xl 
                    sm:text-3xl 
                    md:text-7xl 
                    lg:text-6xl">
                        About Me:
                    </h5>
                </div>

                {/* White background tab bar with the fake tabs */}
                <div className="bg-blue-200 p-4 pt-0">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start sm:px-5">
                        {/* List items with responsive font sizes */}
                        <li className="text-blue-200 text-lg 
                        sm:text-1xl sm:ml-[-1rem]
                        md:text-3xl
                        lg:text-6xl 
                        font-semibold">DISC</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-1xl sm:ml-[-1rem]
                        md:text-3xl
                        lg:text-6xl 
                        font-semibold">OPTION</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-1xl sm:ml-[1rem]
                        md:text-3xl
                        lg:text-6xl 
                        font-semibold">VIEW</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-1xl sm:ml-[-1rem]
                        md:text-3xl
                        lg:text-6xl 
                        font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-full p-0 sm:p-0 flex border-solid border-x-[1rem] border-b-[1rem] border-blue-200
            md:p-3">

                {/* my Cringe Content Container */}
                <div className="space-y-4 flex flex-col py-2 px-4 
                sm:px-1.5 w-full 
                lg:flex-row">
                  <h4 className="
                  sm:text-[0.65rem]
                  md:text-[1.7rem]
                  lg:text-[2rem]
                  ">
                    Hello, my name is Sonya! I am currently a student of the New Media Design + Web Development program at BCIT and I have a passion for designing digital experiences that enhance people’s everyday lives. <br /><br />
                    
                    Ever since I was young, I dreamed about entering the art industry. Growing up in a traditional Asian family, it was difficult to express my interest in art and design, since it is viewed as a hobby but not a career path. I successfully convinced my family to allow me to study fine arts at the University of Victoria, and I graduated with a Bachelor Degree in Fine Arts. However, as times changed and technology began dominating the market, it became clear that having a Fine Arts degree isn’t enough. <br /><br />

                    I came to BCIT at first to study graphic design, but soon discovered my passion for UI/UX through one of the courses the program offered. I was recommended by the program head to enroll in the New Media Design + Web Development Diploma, as it covers more than just UI/UX, combining my knowledge of art and design. <br /><br />
                    
                    Currently, I am in my fourth term, pursuing my passion for UI/UX design and some front-end development! <br /><br />

                  </h4>
                </div>
            </div>
            <div className="
            sm:ml-[15rem] sm:w-40 sm:mt-[-5rem]
            md:ml-[30rem] md:w-[30rem]
            lg:ml-[87rem] lg:w-[20rem] lg:mb-[2rem]
            ">
                <PurpleCursor />
            </div>
            {/* resume section here! */}
            <div
                className="
                    sm:ml-[-1rem] sm:w-[15rem] sm:mt-[-6rem]
                    md:ml-[-5rem] md:w-[40rem] md:mt-[-18rem]
                    lg:ml-[-12rem] lg:w-[50rem] lg:mb-[-18rem] lg:pb-[10rem]
                "
                >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Resume />
                </a>


            </div>

        </div>
        <div>
            <Goal />
        </div>
        <div>
            <Values />
        </div>
            <div>
                <div className="w-50
                sm:w-[25rem] sm:mr-[2rem]
                md:pt-[3rem] md:text-[2rem] md:w-[50rem]
                lg:ml-[1rem] lg:text-[3rem] lg:w-[68rem]
                lp:ml-[1rem] lp:text-[3rem] lp:w-[80rem]
                ">
                    <Skills />
                </div>
        </div>

        <div className="my-10 mx-auto w-full border-t-4 border-dashed border-purple-300
        lg:ml-[-6rem]
        "></div>

        <h5 className="
        sm:text-[1.628rem] sm:mt-[-1rem] sm:ml-[1rem]
        md:text-[3.2rem] md:ml-[5rem]
        lg:text-[5.1rem] lg:ml-[0rem]
        lp:text-[5rem] lp:ml-[8rem]
        text-orange-400
        "
        > A little more about me: </h5>
        {/* Photo Component */}
       
            <Food />
     
            {/* travel section */}
            <div className="container mx-auto lg:ml-[6rem]">
                <TravelPhotos />
        
        {/* Existing content */}    
        </div>
            <div className="
            md:pb-[1rem]
            ">
                <Language />
            </div>
            <div 
            className="pb-5"
            >
            <Special />
        </div>


        {/* I'm missing a purple cursor, I will add it when the time allows D,: */}

        {/* Footer Section */}
        <div className="flex  items-center justify-center">

        </div>
        {/* Social Section */}
        <div className="
          sm:w-[28rem] sm:ml-[-3rem] sm:mt-[-5rem] 
          mb:w-[40rem] md:max-w-[40rem] md:ml-[10rem] 
          lg:w-[50rem] lg:ml-[32rem] lg:mt-[-5rem] lg:pr-[6rem] lg:mb-[-7rem]
          lp:w-[60rem] lp:ml-[35rem] lp:mt-[2rem] lp:pr-[6rem]">
            <Social />
          </div>
            </div>
    );
};

export default About;
