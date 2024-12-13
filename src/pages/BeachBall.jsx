import React, { useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import Poster from "../assets/volleyball/poster.png";
import First from "../assets/volleyball/firstdesign.png";
import Second from "../assets/volleyball/seconddesign.png";
import Third from "../assets/volleyball/thirddesign.png";
import Final from "../assets/volleyball/Finaldesign.png";
import Flower from "../assets/volleyball/hibiscussketch.png";
import Bus from "../assets/volleyball/Busstop.png";
import Flyer from "../assets/volleyball/vollyball.png";
import Social from '../Components/social';


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
        <div className="w-[12rem] relative mt-[30rem] 
        sm:ml-[-0.1rem] sm:mt-[10rem] sm:px-0 sm:mx-auto 
        md:ml-[3rem] md:mt-[1rem]
        lg:pl-[8rem] lg:pr-[4rem]">
            {/* Project Heading and Description */}
            <div className="text-start w-[12rem]">
                <h1 className="pl-2 text-2xl justify-center text-center 
                sm:text-[2rem] sm:pb-[1rem] sm:mr-[-15rem] sm:mt-[-8rem] sm:w-[20rem] 
                md:text-5xl md:ml-[0rem] md:pt-[10rem] md:w-[50rem] md:mb-[2rem]
                lg:text-7xl lg:ml-[8rem] lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
                    Beach Volleyball Tournament Poster:
                </h1>

                {/* Blue heading */}
                <div className="bg-blue-200 px-4 flex justify-between items-center w-[27rem] md:w-[50rem]
                lg:w-[78rem]">
                    <h5 className="text-white w-[12rem] text-3xl
                    sm:text-2xl 
                    md:text-5xl 
                    lg:text-6xl lg:w-[20rem]">
                        Index.HTML
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-blue-200 p-4 pt-0 w-[27rem] md:w-[50rem] lg:w-[78rem]">
                    <ul className="flex gap-3 items-center space-x-1 bg-white w-[25rem] pr-2 pl-1 justify-start md:w-[48rem] lg:w-[76rem]">
                        {/* Tabs: ensure active tab styling is applied */}
                        <li
                            className={`text-blue-200 text-lg sm:text-xl md:text-4xl md:ml-2 lg:text-5xl font-semibold ${activeTab === 'ABOUT' ? 'text-purple-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('ABOUT')}
                            style={{ cursor: 'pointer' }}  // Ensure pointer cursor on hover
                        >
                            ABOUT
                        </li>
                        <li
                            className={`text-blue-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'PROCESS' ? 'text-purple-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('PROCESS')}
                            style={{ cursor: 'pointer' }}
                        >
                            PROCESS
                        </li>
                        <li
                            className={`text-blue-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'TIMELINE' ? 'text-purple-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('TIMELINE')}
                            style={{ cursor: 'pointer' }}
                        >
                            TIMELINE
                        </li>
                        <li
                            className={`text-blue-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'ATTACHMENTS' ? 'text-purple-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('ATTACHMENTS')}
                            style={{ cursor: 'pointer' }}
                        >
                            SAMPLE
                        </li>
                        <li
                            className={`text-blue-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'MOCKUPS' ? 'text-purple-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('MOCKUPS')}
                            style={{ cursor: 'pointer' }}
                        >
                            MOCKUPS
                        </li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-[27rem] p-0 sm:p-0 flex border-solid border-x-[1rem] border-b-[1rem] border-blue-200 md:p-4 md:w-[50rem] md:h-[20rem] 
            lg:w-[78rem] lg:h-[40rem] ">

                {/* Content Container */}
                {/* Dynamic Content Section based on Active Tab */}
                <div className="w-full h-full px-4 py-4  overflow-y-auto sm:max-h-[20rem] lg:max-h-[40rem]">
                    {activeTab === 'ABOUT' && (
                        <h3 className="text-lg sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <strong className="underline">Main Goal: <br/></strong>
                            The goal was to create a poster about a volleyball tournament. This project requires all the skillsets I have learned in MDIA 1160 and 2260, which are Adobe Illustrator 1 and 2. The main purpose is to make sure students understand course material and the software completely, and able to work under
                            pressure effectively.  <br /><br /> The volleyball tournament poster project is to create a promotional poster about an upcoming volleyball match in the Town of Shelbyville. All the elements on the poster were to be created only with Adobe Illustrator. <br /><br /> Other than Adobe Illustrator, I also used Procreate for sketches and took reference images downloaded from Adobe Stock Image. 
                        </h3>
                    )}

                    {activeTab === 'PROCESS' && (
                        <h3 className="text-lg sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <strong className="underline">Beginning:<br/></strong>
                            I started my project with some simple sketches. It was difficult, for I was trying my best to not overlap my designs with reference images I downloaded. I was also trying to find many elements that may represent beach and summer that were not in the images. It surely isn’t the most problematic part of this project, but one of the biggest issues I had while working on this project. <br /><br />
                            <strong className="underline">Difficulties:<br/></strong>
                            Since this poster is about a volleyball tournament that anyone can attend, it is important to keep that concept of community within the design. In the beginning, my sketches had a lot of people included. It was to show the elements of teamwork and community I was initially going for. However, I realized how difficult it may be if I were to add in 3-4 people in a small poster. I changed my direction to focus mainly on the volleyball aspect of this project and made several more sketches based on it. 
                            
                            
                            <br/><br/>
                            Because I only had 2 weeks to work on this project, I must decide and come up with a simple but attractive design in a short amount of time. In the end, I came up with a sketch with a volleyball in the center of the page, with hibiscus flowers surrounding the ball, along with a net behind the volleyball with some seagulls and sun rays to represent summer. It was a lot more difficult to come
                            up with such simple concept, but I believe the result delivers the theme and event quite enough.
                        </h3>
                    )}

                    {activeTab === 'TIMELINE' && (
                        <h3 className="text-lg px-4 sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <h5 className="text-lg text-center underline font-bold text-blue-300 pb-2 px-4 sm:text-[2rem] md:text-4xl lg:text-7xl">
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
                    <p className="text-lg text-black-400 justify-center text-center sm:text-[1.5rem] md:text-4xl lg:text-6xl">
                        Project Sketches & Final Project:
                    </p>
                    
                    {/* Add Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <h5 className="sm:text-xl sm:pt-[1rem] md:text-[2rem] lg:text-[3rem]
                        underline text-purple-300">First Sketch:</h5>
                        
                        <img 
                            src={First} 
                            alt="Image 1" 
                            className="w-[8rem] h-auto rounded-lg 
                            sm:ml-[-12rem] sm:mt-[4rem] sm:pb-[2rem]
                            md:ml-[-24rem]
                            lg:w-[30rem] lg:ml-[-2rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-12rem] sm:ml-[9rem] sm:mt-[-12.5rem] sm:text-sm
                        md:text-xl md:mr-[-28rem] md:pt-[1rem]
                        lg:mt-[40rem] lg:ml-[-42.7rem] lg:text-2xl lg:w-[56rem]
                        ">This is the first sketch. My idea was to simply create a group of people enjoying beach volleyball on the beach. The concept was simple, but the execution was not so ideal. After working on it for a while, I decided to scrap the idea. </h3>
                        </div>

                        <div>
                        <h5 className="sm:text-xl sm:pt-[1rem] sm:pb-1
                        underline text-purple-300 lg:text-[3rem]">Second Sketch:</h5>
                        <img 
                            src={Second}
                            alt="Image 2" 
                            className="w-[8rem] h-auto rounded-lg
                            sm:mr-[-12rem] sm:mt-[1rem] sm:pb-[5rem]
                            lg:w-[30rem] lg:ml-[25rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:pr-3 sm:ml-[9rem] sm:mt-[-17rem] sm:text-sm
                        md:text-xl
                        lg:mt-[-2rem] lg:ml-[6rem] lg:text-2xl
                        ">This is the second sketch. I shifted my idea to having a person reaching for the volleyball, as if they were reaching for the champion position of the volleyball tournament. I thought it would be a nice way to represent the event, only to realize the tournament isn't just about winning, but also enjoying the sport. In the end, I scrapped this idea. </h3>
                        </div>

                        <div>
                         <h5 className="sm:text-xl sm:pt-[1rem]
                         underline text-purple-300 lg:text-[3rem]">Third Sketch:</h5>
                        <img 
                            src={Third}
                            alt="Image 3" 
                            className="w-[10rem] h-auto rounded-lg
                            sm:ml-[-1rem] sm:mt-[1rem] sm:pb-[2rem]
                            lg:w-[30rem] lg:ml-[25rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:ml-[9rem] sm:mt-[-14rem] sm:text-sm
                        md:text-xl md:mr-[-10rem] md:pt-[2rem]
                        lg:mt-[-2rem] lg:ml-[1rem] lg:text-2xl
                        ">This is the third sketch. I decided to focus more on volleyball as a sport. Thinking about how it's a beach volleyball tournament, there has to have nature that features the beach. With that in mind, I decided to add palm trees, seagulls, with the ball being in the center and main focus of the poster. </h3>
                        </div>

                        <div>
                         <h5 className="sm:text-xl sm:pt-[3rem]
                         underline text-purple-300 lg:text-[3rem]">Fourth Sketch:</h5>
                        <img 
                            src={Final}
                            alt="Image 3" 
                            className="w-[10rem] h-auto rounded-lg
                            sm:ml-[-1rem] sm:mt-[1rem] sm:pb-[1rem]
                            lg:w-[30rem] lg:ml-[25rem] lg:pb-[2rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:ml-[9rem] sm:mt-[-12.5rem] sm:text-sm
                        md:text-xl md:mr-[-2rem] md:pt-[2rem]
                        lg:mt-[-2rem] lg:ml-[6rem] lg:text-2xl
                        ">This is the fourth sketch. After having others looking at the third sketch, I decided to make the ball even larger, with some other elements that features the tropical background of beach volleyball, as it originated in 1915 on Waikiki Beach, Hawaii. </h3>
                        </div>

                        <div>
                         <h5 className="sm:text-xl sm:pt-[3rem]
                         underline text-purple-300 lg:text-[3rem]">Hibiscus Sketch:</h5>
                        <img 
                            src={Flower}
                            alt="Image 3" 
                            className="w-[10rem] h-auto rounded-lg
                            sm:ml-[-1rem] sm:mt-[1rem] sm:pb-[4rem]
                            lg:w-[30rem] lg:ml-[25rem] lg:pb-[2rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:ml-[9rem] sm:mt-[-15rem] sm:text-sm
                        md:text-xl
                        lg:mt-[-2rem] lg:ml-[12rem] lg:text-2xl
                        ">This is the hibiscus sketch. Since I decided on persuing the fourth sketch, I added in some hibiscus since they're the first tropical flower that came into my mind. I sketched them in procreate, and was imported to Adobe Illustrator soon after. </h3>
                        </div>

                        <div>
                         <h5 className="sm:text-xl sm:pt-[3rem]
                         underline text-purple-300 lg:text-[3rem]">Final Version:</h5>
                        <img 
                            src={Poster}
                            alt="Image 3" 
                            className="w-[10rem] h-auto rounded-lg
                            sm:ml-[-0.5rem] sm:mt-[1rem] sm:pb-[1rem]
                            lg:w-[30rem] lg:ml-[25rem] lg:pb-[3rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:ml-[10rem] sm:mt-[-14rem] sm:text-sm
                        md:text-xl md:pt-[1.5rem]
                        lg:mt-[-2rem] lg:ml-[12rem] lg:text-2xl
                        ">This is the final product. I took the fourth sketch as a starting point, and produced this poster. The creation of the poster is all done in Adobe Illustrator. I also added some sun rays at the top of the poster to imitate the sun, as well as adding some hibiscus flowers at the bottom. The title includes orange and yellow, which are both tropical colors.  </h3>
                        </div>
                </div>
            )}
            {/* mockup section */}
            {activeTab === 'MOCKUPS' && (
                        <h5 className="text-lg  sm:text-[1rem] md:text-4xl lg:text-[3rem]">
                            <p className="text-xl ">
                            <strong className="justify-center underline text-center md:text-4xl lg:text-[3rem]">Mockup Samples: <br/></strong>
                           Here are some mockups for the poster: <br /><br />
                            </p>
                           
                           <div>
                           <img 
                            src={Bus}
                            alt="Image 3" 
                            className="w-[10rem] h-auto
                            sm:ml-[-0.5rem] sm:mt-[1rem] sm:pb-[1rem]
                            lg:w-[30rem] lg:ml-[25rem] lg:pb-[3rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:ml-[10rem] sm:mt-[-14rem] sm:text-xs
                        md:text-xl md:pt-[2rem]
                        lg:mt-[-2rem] lg:ml-[12rem] lg:text-2xl
                        ">This is the bus stop mockup. I figured it'll look nice in a larger surface, hense I chose to do a bus stop instead. The mockup is done with Adobe Photoshop, and the mockup background was downloaded from Adobe Stock Images.  </h3>
                           </div>
                           <div>
                           <img 
                            src={Flyer}
                            alt="Image 3" 
                            className="w-[10rem] h-auto 
                            sm:ml-[-0.5rem] sm:mt-[8rem] sm:pb-[1rem]
                            lg:w-[30rem] lg:ml-[25rem] lg:pb-[3rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:ml-[10rem] sm:mt-[-8.5rem] sm:text-xs
                        md:text-xl md:mr-[-2rem] md:pt-[0.5rem]
                        lg:mt-[-2rem] lg:ml-[12rem] lg:text-2xl
                        ">This is the flyer mockup. I thought doing a flyer mockup would be ideal if event hosters are trying to promote their event. The mockup is done with Adobe Photoshop, and the mockup background was downloaded from Adobe Stock Images.  </h3>
                           </div>
                        
                           
                        </h5>
                    )}


                </div>
                
            </div>
            <div className="
                    sm:pt-[2rem] sm:ml-[4rem] sm:w-[20rem]
                    md:ml-[15rem] md:mt-[2rem]
                    lg:ml-[28rem] 
                    ">
                        <Social />
                    </div>
        </div>
    );
};

export default Beachball;
