import React, { useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import Poster from "../assets/volleyball/poster.png";
import First from "../assets/volleyball/firstdesign.png";
import Second from "../assets/volleyball/seconddesign.png";
import Third from "../assets/volleyball/finaldesign.png";
import Final from "../assets/volleyball/Finaldesign.png";
import Flower from "../assets/volleyball/hibiscussketch.png";
import Ref from "../assets/volleyball/refimg.png";

const Beachball = () => {
    // Find the project by id from projectData
    const project = projectData.find((proj) => proj.id === 1);

    // State for the active tab
    const [activeTab, setActiveTab] = useState('ABOUT');

    // If project not found, return a message
    if (!project) {
        return <div>Project not found</div>;
    }

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-[12rem] relative mt-[30rem] sm:ml-[-0.1rem] sm:mt-[10rem] sm:px-0 sm:mx-auto md:ml-[0rem] lg:pl-[4rem] lg:pr-[4rem]">
            {/* Project Heading and Description */}
            <div className="text-start w-[12rem]">
                <h1 className="pl-2 text-2xl justify-center text-center sm:text-[2rem] sm:pb-[1rem] sm:mr-[-15rem] sm:mt-[-8rem] md:text-8xl md:pl-[2rem] md:pt-[10rem] lg:text-8xl lg:pl-5">
                    Beach Volleyball Tournament Poster:
                </h1>

                {/* Blue heading */}
                <div className="bg-blue-200 px-4 flex justify-between items-center w-[27rem]">
                    <h5 className="text-white w-[12rem] text-3xl sm:text-xl md:text-6xl lg:text-6xl">
                        Project
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-blue-200 p-4 pt-0 w-[27rem]">
                    <ul className="flex gap-3 items-center space-x-1 bg-white w-[25rem] pr-2 pl-1 justify-start">
                        {/* Tabs: ensure active tab styling is applied */}
                        <li
                            className={`text-blue-200 text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold ${activeTab === 'ABOUT' ? 'text-purple-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('ABOUT')}
                            style={{ cursor: 'pointer' }}  // Ensure pointer cursor on hover
                        >
                            ABOUT
                        </li>
                        <li
                            className={`text-blue-200 text-lg sm:text-xl md:text-4xl lg:text-2xl font-semibold ${activeTab === 'PROCESS' ? 'text-purple-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('PROCESS')}
                            style={{ cursor: 'pointer' }}
                        >
                            PROCESS
                        </li>
                        <li
                            className={`text-blue-200 text-lg sm:text-xl md:text-4xl lg:text-2xl font-semibold ${activeTab === 'TIMELINE' ? 'text-purple-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('TIMELINE')}
                            style={{ cursor: 'pointer' }}
                        >
                            TIMELINE
                        </li>
                        <li
                            className={`text-blue-200 text-lg sm:text-xl md:text-4xl lg:text-2xl font-semibold ${activeTab === 'ATTACHMENTS' ? 'text-purple-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('ATTACHMENTS')}
                            style={{ cursor: 'pointer' }}
                        >
                            SAMPLE
                        </li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-[27rem] p-0 sm:p-0 flex border-solid border-x-[1rem] border-b-[1rem] border-blue-200 md:p-3">

                {/* Content Container */}
                {/* Dynamic Content Section based on Active Tab */}
                <div className="w-full lg:w-1/2 px-4 py-4 h-64 overflow-y-auto">
                    {activeTab === 'ABOUT' && (
                        <h3 className="text-lg sm:text-[1rem] md:text-2xl lg:text-3xl">
                            The goal was to create a poster about a volleyball tournament. This project requires all the skillsets I have learned in MDIA 1160 and 2260, which are Adobe Illustrator 1 and 2. The main purpose is to make sure students understand course material and the software completely, and able to work under
                            pressure effectively.  <br /><br /> The volleyball tournament poster project is to create a promotional poster about an upcoming volleyball match in the Town of Shelbyville. All the elements on the poster were to be created only with Adobe Illustrator. <br /><br /> Other than Adobe Illustrator, I also used Procreate for sketches and took reference images downloaded from Adobe Stock Image. 
                        </h3>
                    )}

                    {activeTab === 'PROCESS' && (
                        <h3 className="text-lg sm:text-[1rem] md:text-2xl lg:text-3xl">
                            I started my project with some simple sketches. It was difficult, for I was trying my best to not overlap my designs with reference images I downloaded. I was also trying to find many elements that may represent beach and summer that were not in the images. It surely isn’t the most problematic part of this project, but one of the biggest issues I had while working on this project. <br /><br />
                            Since this poster is about a volleyball tournament that anyone can attend, it is important to keep that concept of community within the design. In the beginning, my sketches had a lot of people included. It was to show the elements of teamwork and community I was initially going for. However, I realized how difficult it may be if I were to add in 3-4 people in a small poster. I changed my direction to focus mainly on the volleyball aspect of this project and made several more sketches based on it. 
                            
                            <br/><br/>Because I only had 2 weeks to work on this project, I must decide and come up with a simple but attractive design in a short amount of time. In the end, I came up with a sketch with a volleyball in the center of the page, with hibiscus flowers surrounding the ball, along with a net behind the
                        </h3>
                    )}

                    {activeTab === 'TIMELINE' && (
                        <h3 className="text-lg px-4 sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <h5 className="text-lg text-center underline font-bold text-blue-300 pb-2 px-4 sm:text-[2rem] md:text-2xl lg:text-3xl">
                            Project Timeline:
                            </h5>
                            <ul className="list-disc">
                                <li><strong> November 15</strong> – Brainstorming and sketching (1 hour)</li>
                                <li><strong> November 18</strong> – Create 3 different sketch variations (3 hours)</li>
                                <li><strong>November 20 </strong>– Rough concept created and brought into Illustrator, further research about beach and summer were made + sketches (2 hours)</li>
                                <li><strong>November 23 </strong>– Image collected, hibiscus and volleyball references found, sketches made and brought into Illustrator (3 hours)</li>
                                <li><strong> November 25 </strong>– Worked on individual elements of the poster: volleyball, hibiscus, texts, banner,
                                starfish, etc. (3 hours)</li>
                                <li><strong> November 28 </strong>– Finished the rest of the poster and finalize report: background gradient, light rays, shadings, positioning and overall positioning (3 hours)</li>
                            </ul>
                            <br/><br/>
                            Total hours: <strong className="underline">15 hours</strong>
                        </h3>
                    )}

            {activeTab === 'ATTACHMENTS' && (
                <div className="space-y-4">
                    <p className="text-lg text-purple-400 justify-center text-center sm:text-[1.5rem] md:text-2xl lg:text-3xl">
                        Project Sketches & Final Project:
                    </p>
                    
                    {/* Add Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <h5 className="sm:text-xl sm:pt-[1rem]
                        underline text-blue-300">First Sketch:</h5>
                        
                        <img 
                            src={First} 
                            alt="Image 1" 
                            className="w-[8rem] h-auto rounded-lg 
                            sm:ml-[-12rem] sm:mt-[4rem] sm:pb-[2rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-12rem] sm:ml-[9rem] sm:mt-[-12.5rem] sm:text-sm
                        ">This is the first sketch. My idea was to simply create a group of people enjoying beach volleyball on the beach. The concept was simple, but the execution was not so ideal. After working on it for a while, I decided to scrap the idea. </h3>
                        </div>
                        <div>
                        <h5 className="sm:text-xl sm:pt-[1rem]
                        underline text-blue-300">Second Sketch:</h5>
                        <img 
                            src={Second}
                            alt="Image 2" 
                            className="w-full h-auto rounded-lg
                            sm:ml-[-17rem] sm:mt-[3rem] sm:pb-[2rem]
                            " 
                        />
                        </div>
                        <div>
                         <h5 className="sm:text-xl sm:pt-[1rem]
                         underline text-blue-300">Third Sketch:</h5>
                        <img 
                            src={Third}
                            alt="Image 3" 
                            className="w-full h-auto rounded-lg
                            sm:ml-[-17rem] sm:mt-[3rem] sm:pb-[2rem]
                            " 
                        />
                        </div>
                </div>
            )}

                </div>
            </div>
        </div>
    );
};

export default Beachball;
