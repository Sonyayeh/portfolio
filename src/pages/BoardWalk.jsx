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


const Boardwalk = () => {
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
        lg:pl-[4rem] lg:pr-[4rem]">
            {/* Project Heading and Description */}
            <div className="text-start w-[12rem]">
                <h1 className="pl-2 text-2xl justify-center text-center 
                sm:text-[2rem] sm:pb-[1rem] sm:mr-[-15rem] sm:mt-[-8rem] sm:w-[20rem] 
                md:text-5xl md:ml-[0rem] md:pt-[10rem] md:w-[50rem] md:mb-[2rem]
                lg:text-7xl lg:ml-[15rem] lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
                    Boardwalk Boutique Mobile Design:
                </h1>

                {/* Blue heading */}
                <div className="bg-blue-200 px-4 flex justify-between items-center w-[27rem] md:w-[50rem]
                lg:w-[90rem]">
                    <h5 className="text-white w-[12rem] text-3xl
                    sm:text-2xl 
                    md:text-5xl 
                    lg:text-6xl lg:w-[20rem]">
                        Index.HTML
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-blue-200 p-4 pt-0 w-[27rem] md:w-[50rem] lg:w-[90rem]">
                    <ul className="flex gap-3 items-center space-x-1 bg-white w-[25rem] pr-2 pl-1 justify-start md:w-[48rem] lg:w-[88rem]">
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
            lg:w-[90rem] lg:h-[40rem] ">

                {/* Content Container */}
                {/* Dynamic Content Section based on Active Tab */}
                <div className="w-full h-full px-4 py-4  overflow-y-auto sm:max-h-[20rem] lg:max-h-[40rem]">
                    {activeTab === 'ABOUT' && (
                        <h3 className="text-lg sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <strong className="underline">Main Goal: <br/></strong>
                            The goal was to create an app for an online shop using the Waterfall methodology for MDIA 2092 Project Management’s final project. It is required to make the online shop app fully functional, as in having the animations and prototype on Figma. For this project, my group decided to focus on rental and location aspect of an online/rental shop for skateboards and streetwear. The app is designed so users can book, shop, receive notification and locate the shop.  <br /><br /> Boardwalk Boutique is a skate shop that does skateboard rentals and streetwear and skateboard retail. It is a fictional skate shop located in the heart of Vancouver. The app includes various of designs and brands of skateboards and is to guarantee users to find something for them.  <br /><br />There are also the review sections users can read upon before renting/purchasing any merchandise, and they can also leave comments about products. 
                        </h3>
                    )}

                    {activeTab === 'PROCESS' && (
                        <h3 className="text-lg sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <strong className="underline">Beginning:<br/></strong>
                            This was a group project along with 4 other classmates. I looked very forward to work with them, as I never had any problems in the past cooperating with them. I chose to do the UI/UX part of this project to hopefully able to use this as one of my showcased projects. For this position, I was required to make a home page, rental page, and an order confirmation page. However, I went a step ahead and created the user/login page, review page, order history page, order tracking page, order history page, any shopping related page (recommended, favorite, other for streetwear, etc), just so the overall presentation of the app looks more complete. Furthermore, I added in some animation to make the high-fidelity more complete, such as hovering, a thank you screen after review submissions, pop-up screen, etc. <br /><br />
                            <strong className="underline">Difficulties:<br/></strong>
                            This was my first time designing a retail app. I never thought about designing one since whenever I design prototypes or high-fidelity I was always more website focused. I was struggling at first to figure out how the layout should look like. I decided to do research by downloading a lot of retail apps and see how I can implement the layouts into my own design.
                            
                            
                            <br/><br/>
                            In the end, I was able to create a retail looking app with a front banner and featuring some popular skateboarding brands following the banner. I asked my group to review and play around with it before handing it in, and I received some praises and approvements from them, that is when I knew I succeeded.
                        </h3>
                    )}

                    {activeTab === 'TIMELINE' && (
                        <h3 className="text-lg px-4 sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <h5 className="text-lg text-center underline font-bold text-blue-300 pb-2 px-4 sm:text-[2rem] md:text-4xl lg:text-7xl">
                            Project Timeline:
                            </h5>
                            <ul className="list-disc">
                                <li><strong> July 12th: </strong> – Everyone in the group was assigned specific roles and tasks (20 minutes)</li>
                                <li><strong> July 15th:</strong> – Created FigJam to put all information needed for project (30 minutes)</li>
                                <li><strong>July 19th: </strong>– General meeting and research (1 hour)</li>
                                <li><strong>July 24th: </strong>– Design draft 1 (45 minutes)</li>
                                <li><strong> July 26th: </strong>– General meeting and design draft 2 (3 hour)</li>
                                <li><strong> July 30th: </strong>– Positioning wireframe components and adding extra screens (2.5 hours)</li>
                                <li><strong> August 2nd: </strong>–  Designing high-fidelity and prototype (3 hours)</li>
                                <li><strong> August 7th:  </strong>– Finishing mockup 1 (3 hours)</li>
                                <li><strong> August 10th: </strong>– Finishing mockup 2, made sure everything works and user testing and updates (9 hours)</li>
                                <li><strong> August 13th:  </strong>– Color adjustment, About Us text and additional touch up (1 hour)</li>
                            </ul>
                            <br/><br/>
                            Total hours: <strong className="underline">25 hours</strong>
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
                        md:text-xl
                        lg:mt-[40rem] lg:ml-[-55rem] lg:text-2xl
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
                        lg:mt-[-2rem] lg:ml-[12rem] lg:text-2xl
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
                        md:text-xl
                        lg:mt-[-2rem] lg:ml-[8rem] lg:text-2xl
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
                        md:text-xl
                        lg:mt-[-2rem] lg:ml-[12rem] lg:text-2xl
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
                        md:text-xl md:mb-[1rem]
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
                        md:text-xl
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
                        md:text-xl 
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
                    lg:ml-[35rem]
                    ">
                        <Social />
                    </div>
        </div>
    );
};

export default Boardwalk;
