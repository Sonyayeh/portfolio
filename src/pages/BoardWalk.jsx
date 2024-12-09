import React, { useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import one from "../assets/Boardwalk/boardmock1.jpg"
import two from "../assets/Boardwalk/boardmock2.jpg"
import hold from "../assets/Boardwalk/holding.jpg"
import list from "../assets/Boardwalk/boardwalkphones.jpg"
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
                <div className="bg-purple-200 px-4 flex justify-between items-center w-[27rem] md:w-[50rem]
                lg:w-[78rem]">
                    <h5 className="text-white w-[12rem] text-3xl
                    sm:text-2xl 
                    md:text-5xl 
                    lg:text-6xl lg:w-[20rem]">
                        Index.HTML
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-purple-200 p-4 pt-0 w-[27rem] md:w-[50rem] lg:w-[78rem]">
                    <ul className="flex gap-3 items-center space-x-1 bg-white w-[25rem] pr-2 pl-1 justify-start md:w-[48rem] lg:w-[76rem]">
                        {/* Tabs: ensure active tab styling is applied */}
                        <li
                            className={`text-purple-200 text-lg sm:text-xl md:text-4xl md:ml-2 lg:text-5xl font-semibold ${activeTab === 'ABOUT' ? 'text-sky-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('ABOUT')}
                            style={{ cursor: 'pointer' }}  // Ensure pointer cursor on hover
                        >
                            ABOUT
                        </li>
                        <li
                            className={`text-purple-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'PROCESS' ? 'text-sky-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('PROCESS')}
                            style={{ cursor: 'pointer' }}
                        >
                            PROCESS
                        </li>
                        <li
                            className={`text-purple-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'TIMELINE' ? 'text-sky-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('TIMELINE')}
                            style={{ cursor: 'pointer' }}
                        >
                            TIMELINE
                        </li>
                        <li
                            className={`text-purple-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'ATTACHMENTS' ? 'text-sky-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('ATTACHMENTS')}
                            style={{ cursor: 'pointer' }}
                        >
                            SAMPLE
                        </li>
                        <li
                            className={`text-purple-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'MOCKUPS' ? 'text-sky-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('MOCKUPS')}
                            style={{ cursor: 'pointer' }}
                        >
                            MOCKUPS
                        </li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-[27rem] p-0 sm:p-0 flex border-solid border-x-[1rem] border-b-[1rem] border-purple-200 md:p-4 md:w-[50rem] md:h-[20rem] 
            lg:w-[78rem] lg:h-[40rem] ">

                {/* Content Container */}
                {/* Dynamic Content Section based on Active Tab */}
                <div className="w-full h-full px-4 py-4  overflow-y-auto sm:max-h-[20rem] lg:max-h-[40rem]">
                    {activeTab === 'ABOUT' && (
                        <h3 className="text-lg sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <strong className="underline">Main Goal: <br/></strong>
                            The goal was to create an app for an online shop using the Waterfall methodology for MDIA 2092 Project Management’s final project. It is required to make the online shop app fully functional, as in having the animations and prototype on Figma. For this project, my group decided to focus on rental and location aspect of an online/rental shop for skateboards and streetwear. The app is designed so users can book, shop, receive notification and locate the shop.  <br /><br /> Boardwalk Boutique is a skate shop that does skateboard rentals and streetwear and skateboard retail. It is a fictional skate shop located in the heart of Vancouver. The app includes various of designs and brands of skateboards and is to guarantee users to find something for them.  <br /><br />There are also the review sections users can read upon before renting/purchasing any merchandise, and they can also leave comments about products. 
                            <br/><br/>
                            <strong className="underline">Group Members:</strong>
                            <br></br>
                            Since this is a group project, here are the following group members with their roles:
                            <br/><br />
                            <ul className="list-disc px-2">
                                <li><strong> Sonya Yeh: </strong>– UI/UX Designer: Mobile App </li>
                                <li><strong> Vahan Vartanian: </strong>– Graphic Designer </li>
                                <li><strong> Karleil Villareal: </strong>– UI/UX Designer:Website Mockup</li>
                                <li><strong> Courtney Yan: </strong>– Project Manager </li>
                                <li><strong> Daniel Kolpakov: </strong>– Developer </li>
                            </ul>
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
                            src={one} 
                            alt="Image 1" 
                            className="w-[8rem] h-auto rounded-lg 
                            sm:ml-[-12rem] sm:mt-[4rem] sm:pb-[2rem]
                            md:ml-[-23rem]
                            lg:w-[30rem] lg:ml-[-2rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-12rem] sm:ml-[9rem] sm:mt-[-15rem] sm:text-sm
                        md:text-xl
                        lg:mt-[55rem] lg:ml-[-55rem] lg:text-2xl lg:pb-[2rem]
                        ">This is the first sketch. I was not sure of how I can design an app because it is my first time designing one. I took a lot of notes regarding on what elements and sections I may need for the project. I ended with a simple sketch of the overall layout. </h3>
                        </div>

                        <div>
                        <h5 className="sm:text-xl sm:pt-[1rem] sm:pb-1
                        underline text-purple-300 lg:text-[3rem]">Second Sketch:</h5>
                        <img 
                            src={two}
                            alt="Image 2" 
                            className="w-[8rem] h-auto rounded-lg
                            sm:mr-[-12rem] sm:mt-[1rem] sm:pb-[5rem]
                            lg:w-[30rem] lg:ml-[25rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:pr-3 sm:ml-[9rem] sm:mt-[-17rem] sm:text-sm
                        md:text-xl
                        lg:mt-[-2rem] lg:ml-[2rem] lg:text-2xl lg:pb-[2rem]
                        ">This is the second sketch. After my group members' feedbacks, I shifted my gear to make something that is more simple and straight forward. I focused too much on the elements we needed, rather than the overall functionality. After I got an approval from my group members, I imported this sketch to Figma and started prototyping. </h3>
                        </div>

                        <h5 className="sm:text-xl underline text-purple-300 lg:text-[3rem]">
                        Figma File:
                        </h5>
                        <iframe
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                        width="370"
                        height="450"
                        src="https://embed.figma.com/design/1gCrT0CT3cuodCsgmVOBvB/Broadway-Boutique?node-id=0-1&embed-host=share"
                        allowFullScreen
                        title="Figma Embed"
                        className=" top-0 left-0 w-full h-full 
                        sm:w-[100%] sm:h-[200px] 
                        md:w-[95%] md:h-[400px]
                        lg:h-[600px]
                        "
                        ></iframe>
                        <h3 className="flex 
                        sm:pt-[-7rem] sm:text-sm
                        md:text-xl md:ml-[5rem]
                        lg:mt-[-2rem] lg:ml-[12rem] lg:text-2xl
                        ">This is the Figma file. It has three pages: Lo-Fi, Hi-Fi and style guide. It is fully prototyped in Hi-Fi, please do play around with it to experience the app yourself! </h3>


                            </div>
            )}
            {/* mockup section */}
            {activeTab === 'MOCKUPS' && (
                        <h5 className="text-lg  sm:text-[1rem] md:text-4xl lg:text-[3rem]">
                            <p className="text-xl ">
                            <strong className="justify-center underline md:text-[3rem] md:ml-[15rem]
                             lg:text-[4rem] lg:ml-[30rem]                            ">Mockup Samples: <br/></strong>
                             <p className="
                             md:ml-[10rem] md:text-[2rem] md:pt-[2rem]
                             lg:ml-[28rem]
                             ">
                           Here are some mockups for the poster: <br /><br />
                             </p>
                            </p>
                           
                           <div>
                           <img 
                            src={list}
                            alt="Image 3" 
                            className="w-[10rem] h-auto
                            sm:ml-[-0.5rem] sm:mt-[1rem] sm:pb-[1rem]
                            md:w-[80%] md:ml-[5rem]
                            lg:w-[70rem] lg:ml-[7rem] lg:pb-[-4rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:ml-[10rem] sm:mt-[-6.5rem] sm:text-xs
                        md:text-xl md:ml-[5rem] md:pt-[8rem]
                        lg:mt-[-6rem] lg:ml-[12rem] lg:text-2xl lg:mb-[1rem]
                        ">I decided to display the project in multiple phone screens to imitate real apps. I took the mockup image from Adobe Stock Images and the editings were done with Adobe Photoshop.  </h3>
                           </div>
                           <div>
                           <img 
                            src={hold}
                            alt="Image 3" 
                            className="w-[10rem] h-auto 
                            sm:ml-[-0.5rem] sm:mt-[4rem] sm:pb-[1rem]
                            md:w-[80%] md:ml-[5rem]
                            lg:w-[70rem] lg:ml-[7rem] lg:pb-[3rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:ml-[10rem] sm:mt-[-8rem] sm:text-xs
                        md:text-xl md:ml-[5rem] md:pb-[-20rem] md:mt-[2rem]
                        lg:mt-[-1rem] lg:ml-[8rem] lg:text-2xl
                        ">Since the previous mockup was about having screens on actual devices, I figured it'll be only be appropriate to have a mockup of a person holding their phone with the app displayed. The mockup is also downloaded from Adobe Stock Images and edits were made with Adobe Photoshop.  </h3>
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

export default Boardwalk;
