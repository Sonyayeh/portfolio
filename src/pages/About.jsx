import React from "react";
import Pointercursor from "../Components/photopointer";
import Photo from "../Components/photo";
// I imported my photo from components folder
// this is the social media icon I wanted to use ionicons but
// cannot be installed, please consider them as placeholders :(((
import Social from '../Components/social';

const About = () => {
    return (
      // they are basically the same as the other pages, but just
      // positioning differences
      <div className="container mx-auto px-5 lg:ml-[6rem]">
        <div className="card">
        </div>
        <h5 className="sm:mr-[2rem]"> 
            Hello!
        </h5>

        {/* Since I found out I used the same kind of container box
        for most of my content, i used the same box from projects page
        and changed it into an About Me container box */}
        <div className="relative mt-[30rem] 
        sm:mt-[8rem] sm:px-0 sm:ml-[-2.63rem] sm:w-[15rem]
        md:ml-[6rem]
        lg:pl-[20rem] lg:w-[80rem] ">

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
                        md:text-lg 
                        lg:text-6xl 
                        font-semibold">DISC</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-1xl sm:ml-[-1rem]
                        md:text-lg 
                        lg:text-6xl 
                        font-semibold">OPTION</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-1xl sm:ml-[1rem]
                        md:text-lg 
                        lg:text-6xl 
                        font-semibold">VIEW</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-1xl sm:ml-[-1rem]
                        md:text-lg 
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
                sm:px-2 w-full 
                lg:flex-row">
                  <h4 className="
                  sm:text-[0.5rem]
                  lg:text-[2rem]
                  ">
                    Hello, I’m Sonya! I am currently a student of the New Media Design + Web Development program at BCIT and I have a passion for designing digital experiences that enhance people’s everyday lives. <br /><br />
                    
                    Ever since I was young, I dreamed about entering the art industry. Growing up in a traditional Asian family, it was difficult to express my interest in art and design, since it is viewed as a hobby but not a career path. I successfully convinced my family to allow me to study fine arts at the University of Victoria, and I graduated with a Bachelor Degree in Fine Arts. However, as times changed and technology began dominating the market, it became clear that having a Fine Arts degree isn’t enough. <br /><br />

                    I came to BCIT at first to study graphic design, but soon discovered my passion for UI/UX through one of the courses the program offered. I was recommended by the program head to enroll in the New Media Design + Web Development Diploma, as it covers more than just UI/UX, combining my knowledge of art and design. <br /><br />
                    
                    Currently, I am in my third term, pursuing my passion for UI/UX design and some front-end development! <br /><br />

                    Some of my skills include: <br />
                    {/* the br tags are line breaker tags so there are spaces between each selected lines
                    and I used a specific bullet point for my li list */}
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
        {/* Photo Component */}
        <div className=" top-0 left-0 
        sm:w-2/3 sm:mt-[110rem] sm:ml-[10rem] sm:pb-[30rem] sm:pr-[1rem]
        md:w-1/3 md:ml-[35rem] md:mt-[135rem]
        lg:w-2/3 lg:ml-[15rem] lg:mt-[120rem]
        ">
            <Photo />
        </div>

        {/* Pointercursor Component */}
        <div className=" top-0 left-0 right-0 
        sm:w-1/3 sm:ml-[14rem] sm:mb-[9rem]
        md:w-1/3 md:ml-[45rem] md:mt-[50rem]
        lg:w-1/3 lg:ml-[15rem] lg:mt-[35rem]
        ">
            <Pointercursor />
        </div>
          
        {/* I'm missing a purple cursor, I will add it when the time allows D,: */}

        {/* Footer Section */}
        <div className="flex  items-center justify-center">
          
        </div>
        {/* Social Section */}
        <div className="
          sm:w-[40rem] sm:ml-[-9.5rem] sm:mr-[-5rem] sm:mt-[10rem] 
          mb:w-[40rem] md:max-w-[40rem] mb:ml-[7rem]
          lg:w-[60rem] lg:ml-[20rem] lg:mb-[-10rem]">
            <Social />
          </div>


      </div>
    );
};

export default About;
