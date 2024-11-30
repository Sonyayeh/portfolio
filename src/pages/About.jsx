import React from "react";
import Pointercursor from "../Components/photopointer";
import Photo from "../Components/photo";
import Footer from "./footer";

import Social from '../Components/social';

const About = () => {
    return (
      <div className="container mx-auto px-5 sm:mr-[-4rem] md:ml-[-5rem] lg:ml-[6rem]">
        <div className="card">
        </div>

        <div className="w-full relative mt-[30rem] 
        sm:mt-[10rem] sm:px-0 sm:ml-[-4rem]
        md:ml-[6rem]
        lg:pr-[12rem]">

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

                {/* White background tab bar */}
                <div className="bg-blue-200 p-4 pt-0">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start">
                        {/* List items with responsive font sizes */}
                        <li className="text-blue-200 text-lg 
                        sm:text-2xl 
                        md:text-lg 
                        lg:text-2xl 
                        font-semibold">DISC</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-2xl 
                        md:text-lg 
                        lg:text-2xl 
                        font-semibold">OPTION</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-2xl 
                        md:text-lg 
                        lg:text-2xl 
                        font-semibold">VIEW</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-2xl 
                        md:text-lg 
                        lg:text-2xl 
                        font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-full p-0 sm:p-0 flex border-solid border-x-[1rem] border-b-[1rem] border-blue-200
            md:p-3">

                {/* Content Container */}
                <div className="space-y-4 flex flex-col py-2 px-4 
                sm:px-2 w-full 
                lg:flex-row">
                  <h4 className="
                  sm:text-[0.5rem]
                  ">
                    Hello, I’m Sonya! I am currently a student of the New Media Design + Web Development program at BCIT and I have a passion for designing digital experiences that enhance people’s everyday lives. <br /><br />
                    
                    Ever since I was young, I dreamed about entering the art industry. Growing up in a traditional Asian family, it was difficult to express my interest in art and design, since it is viewed as a hobby but not a career path. I successfully convinced my family to allow me to study fine arts at the University of Victoria, and I graduated with a Bachelor Degree in Fine Arts. However, as times changed and technology began dominating the market, it became clear that having a Fine Arts degree isn’t enough. <br /><br />

                    I came to BCIT at first to study graphic design, but soon discovered my passion for UI/UX through one of the courses the program offered. I was recommended by the program head to enroll in the New Media Design + Web Development Diploma, as it covers more than just UI/UX, combining my knowledge of art and design. <br /><br />
                    
                    Currently, I am in my third term, pursuing my passion for UI/UX design and some front-end development! <br /><br />

                    Some of my skills include: <br />
                    <ul className="list-disc pl-5">
                    <li>UI/UX <br /></li>
                    <li>Figma <br /></li>
                    <li>Adobe Applications (InDesign, Illustrator, Premiere Pro, Photoshop, etc.) <br /></li>
                    <li>Video/Photo editing <br /></li>
                    <li>Basic HTML/CSS/JavaScript <br /><br /></li>
                    </ul>

                    Other than school, I enjoy doing: <br />
                    <ul>
                        <li>-Cooking/Baking</li>
                        <li>-Sewing</li>
                        <li>-Traveling</li>
                    </ul>
                  </h4>
                </div>
            </div>

        </div>

        {/* Photo Component - moved to top */}
        <div className="absolute top-0 left-0 right-0 sm:w-4/5
        sm:ml-[13rem] sm:pl-[10rem] sm:mt-[142rem]
        md:1/3 md:ml-[35rem] md:mt-[135rem]
        ">
            <Photo />
        </div>

        {/* Pointercursor Component - moved to top */}
        <div className="absolute top-0 left-0 right-0 
        sm:w-1/3 sm:ml-[20rem] sm:mt-[58rem]
        md:w-1/3 md:ml-[45rem] md:mt-[50rem]
        ">
            <Pointercursor />
        </div>

        {/* Footer Section */}
        <div className="flex  items-center justify-center">
          
        </div>
        {/* Social Section */}
        <div className="
          sm:max-w-[40rem] sm:ml-[-14.5rem] sm:mr-[-5rem] sm:mt-[10rem] 
          mb:w-[40rem] md:max-w-[40rem] mb:ml-[7rem]
          lg:w-[60rem] lg:mr-[1rem] lg:mb-[-30rem]">
            <Social />
          </div>


      </div>
    );
};

export default About;
