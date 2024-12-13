import React, { useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import login from "../assets/BCIT/login.png";
import one from "../assets/BCIT/one.png"
import Social from '../Components/social';


const Bcit = () => {
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
                sm:text-[2rem] sm:pb-[1rem] sm:pl-[4rem] sm:mt-[-8rem] sm:w-[20rem] 
                md:text-5xl md:ml-[-3rem] md:pt-[10rem] md:w-[50rem] md:mb-[2rem]
                lg:text-7xl lg:ml-[8rem] lg:w-[60rem] lg:mb-[5rem] lg:mt-[2rem]">
                    MyBCIT Redesign:
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
                            The goal was to create a redesign version of MyBCIT for MDIA 2540, UI/UX 1. This project requires the skills I learned in UI/UX, as well as technical skills for Figma and basic UX components. The main purpose for this project is to create a simpler and user-friendly version of MyBCIT to reduce any possible learning curves for new students. <br /><br />
                            <strong className="underline">What is MyBCIT? <br/></strong>
                            MyBCIT is a website built for both students and staffs at BCIT. The website’s primarily usage is to assist students, such as viewing their weekly schedule, checking grades/transcripts, paying tuition fee, etc. Every single component of the high-fidelity design was made in Figma, sketches were made by hand, and UX case study is made separately with Pages. 
                        </h3>
                    )}

                    {activeTab === 'PROCESS' && (
                        <h3 className="text-lg sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <strong className="underline">Brainstorm:<br/></strong>
                            When the topic was assigned, I knew immediately that I want to redesign MyBCIT. As a current student, I always struggle to navigate on the website. It is ridiculous to think that checking for your grades takes more than 5 clicks and it is crazier to think a school like BCIT has a website that looks like it was made 15 years ago. During the brainstorm stage, I was determined to give MyBCIT a brand-new look that is not only easy to navigate for both old and new students and staffs, but also includes a lot of newcomer assistants, such as including your student ID on the front page, so students don’t need to click through the website to look for it.  <br /><br />
                            <strong className="underline">Difficulties:<br/></strong>
                            The most difficult problem I encountered is me trying not to change the branding of BCIT. My goal was solemnly to redesign the web page, not to change the whole branding of the institute. I tried to keep the website as minimal as possible because that is what the original MyBCIT page looks like, but I worried I will end up creating my own version of BCIT. After doing some interviews with my classmates, I was relieved to know I did not go off track. 
                            <br/><br/>
                            <strong className="underline">Concepts & Sketches: <br/></strong>
                            The concept of this project is to redesign a better interface for both new and existing staffs and students of BCIT. I have been thinking about redesigning MyBCIT for months before this assignment was released, and I am glad to be able to pull it off. The sketches I made were simple enough that everyone knows it is a BCIT website. I also included BCIT’s color scheme, which are navy blue and 
                        </h3>
                    )}

                    {activeTab === 'TIMELINE' && (
                        <h3 className="text-lg px-4 sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <h5 className="text-lg text-center underline font-bold text-blue-300 pb-2 px-4 sm:text-[2rem] md:text-4xl lg:text-7xl">
                            Project Timeline:
                            </h5>
                            <ul className="list-disc">
                                <li><strong> July 4th: </strong> – Concepts were made, including reference pictures and downloaded free images and questionnaire (2 hour)</li>
                                <li><strong> July 25th:</strong> – : Started with user research and breaking down the user pains (1 hours)</li>
                                <li><strong>August 1st: </strong>– Finished low-fidelity design (2 hours)</li>
                                <li><strong>August 5th: </strong>– Worked on high-fidelity part 1 (2.5 hours) </li>
                                <li><strong> August 10th: </strong>– General meeting and design draft 2 (3 hour)</li>
                                <li><strong> August 12th: </strong>– Created UX case study (2 hours)</li>
                                <li><strong> August 15th: </strong>–  Finalized project and created slides on Figma (1 hour)</li>
                                
                            </ul>
                            <br/><br/>
                            Total hours: <strong className="underline">13 hours</strong>
                        </h3>
                    )}

            {activeTab === 'ATTACHMENTS' && (
                <div className="space-y-4">
                    <p className="text-lg text-black-400 justify-center text-center sm:text-[1.5rem] md:text-4xl lg:text-6xl">
                        Project Sketches & Final Project:
                    </p>
                    
                    {/* Add Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        <h5 className="sm:text-xl sm:pt-[1rem] md:text-[2rem] lg:text-[3rem]
                        underline text-purple-300">First Sketch:</h5>
                        
                        <img 
                            src={one} 
                            alt="Image 1" 
                            className="w-[8rem] h-auto rounded-lg 
                            sm:ml-[-12rem] sm:mt-[4rem] sm:pb-[2rem]
                            md:ml-[-23rem] md:w-[20rem]
                            lg:w-[60rem] lg:ml-[4rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-12rem] sm:ml-[9rem] sm:mt-[-10rem] sm:text-sm
                        md:text-xl md:mr-[-20rem] md:pl-[11rem] md:mt-[-16.5rem]
                        lg:mt-[5rem] lg:ml-[-4rem] lg:text-2xl lg:pb-[2rem]
                        ">This is the first sketch. I was not sure of how I can design an app because it is my first time designing one. I took a lot of notes regarding on what elements and sections I may need for the project. I ended with a simple sketch of the overall layout. </h3>
                        </div>

                       
                        <h5 className="sm:text-xl underline text-purple-300 lg:text-[3rem]">
                        Figma File:
                        </h5>
                        <iframe
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                        width="370"
                        height="450"
                        src="https://embed.figma.com/design/QZRxtL2jsXw5Q4ojCa3RyZ/MyBcit-edit?node-id=2-3&embed-host=share"
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
                        md:text-xl md:ml-[3rem]
                        lg:mt-[-2rem] lg:ml-[4rem] lg:text-2xl
                        ">This is the Figma file. It has three pages: Lo-Fi, Hi-Fi and style guide. It is fully prototyped in Hi-Fi, please do play around with it to experience the app yourself! </h3>

                        <h5 className="sm:text-xl underline text-purple-300 lg:text-[3rem]">
                        Figma Prototype:
                        </h5>
                        <iframe
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                        width="370"
                        height="400"
                        src="https://embed.figma.com/proto/QZRxtL2jsXw5Q4ojCa3RyZ/MyBcit-edit?page-id=2%3A3&node-id=134-3101&node-type=canvas&viewport=-255%2C344%2C0.11&scaling=min-zoom&content-scaling=fixed&embed-host=share"
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
                        md:text-xl md:ml-[3rem]
                        lg:mt-[-2rem] lg:ml-[4rem] lg:text-2xl
                        ">This is the prototype of the project, please make sure it is in full screen for the best experience! This design is supposed to improve the overall presentation and experience of MyBCIT, hoping to encourage students to use the website more often. </h3>
                        
                        </div>
                         )}
                         {/* mockup section */}
                         {activeTab === 'MOCKUPS' && (
                        <h5 className="text-lg  sm:text-[1rem] md:text-4xl lg:text-[3rem]">
                            <p className="text-xl ">
                            <strong className="justify-center underline md:text-[3rem] md:ml-[15rem]
                             lg:text-[4rem] lg:ml-[26rem]                            ">Mockup Samples: <br/></strong>
                             <p className="
                             md:ml-[10rem] md:text-[2rem] md:pt-[2rem]
                             lg:ml-[24rem]
                             ">
                           Here are some mockups for the poster: <br /><br />
                             </p>
                            </p>
                           
                           <div>
                           <img 
                            src={login}
                            alt="Image 3" 
                            className="w-[10rem] h-auto
                            sm:ml-[-0.5rem] sm:mt-[1rem] sm:pb-[1rem]
                            md:w-[80%] md:ml-[5rem]
                            lg:w-[70rem] lg:ml-[1rem] lg:pb-[-4rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:ml-[10rem] sm:mt-[-6.5rem] sm:text-xs
                        md:text-xl md:ml-[5rem] md:pt-[8rem]
                        lg:mt-[-6rem] lg:ml-[3rem] lg:text-2xl lg:mb-[1rem]
                        ">I decided to display the project in multiple phone screens to imitate real apps. I took the mockup image from Adobe Stock Images and the editings were done with Adobe Photoshop.  </h3>
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

export default Bcit;
