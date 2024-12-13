import React, { useState } from "react";
// Importing project data
import projectData from "../data/project.json"; 
import Omu from "../assets/Omurice/omuomu.png";
import Social from '../Components/social';


const Northstar = () => {
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
                    North Star Omurice:
                </h1>

                {/* Blue heading */}
                <div className="bg-orange-200 px-4 flex justify-between items-center w-[27rem] md:w-[50rem]
                lg:w-[78rem]">
                    <h5 className="text-white w-[12rem] text-3xl
                    sm:text-2xl 
                    md:text-5xl 
                    lg:text-6xl lg:w-[20rem]">
                        Index.HTML
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-orange-200 p-4 pt-0 w-[27rem] md:w-[50rem] lg:w-[78rem]">
                    <ul className="flex gap-3 items-center space-x-1 bg-white w-[25rem] pr-2 pl-1 justify-start md:w-[48rem] lg:w-[76rem]">
                        {/* Tabs: ensure active tab styling is applied */}
                        <li
                            className={`text-orange-200 text-lg sm:text-xl md:text-4xl md:ml-2 lg:text-5xl font-semibold ${activeTab === 'ABOUT' ? 'text-sky-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('ABOUT')}
                            style={{ cursor: 'pointer' }}  // Ensure pointer cursor on hover
                        >
                            ABOUT
                        </li>
                        <li
                            className={`text-orange-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'PROCESS' ? 'text-sky-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('PROCESS')}
                            style={{ cursor: 'pointer' }}
                        >
                            PROCESS
                        </li>
                        <li
                            className={`text-orange-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'TIMELINE' ? 'text-sky-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('TIMELINE')}
                            style={{ cursor: 'pointer' }}
                        >
                            TIMELINE
                        </li>
                        <li
                            className={`text-orange-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'ATTACHMENTS' ? 'text-sky-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('ATTACHMENTS')}
                            style={{ cursor: 'pointer' }}
                        >
                            SAMPLE
                        </li>
                        <li
                            className={`text-orange-200 text-lg sm:text-xl md:text-4xl lg:text-5xl lg:pl-4 font-semibold ${activeTab === 'MOCKUPS' ? 'text-sky-300' : 'hover:underline'}`}
                            onClick={() => handleTabClick('MOCKUPS')}
                            style={{ cursor: 'pointer' }}
                        >
                            MOCKUPS
                        </li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-[27rem] p-0 sm:p-0 flex border-solid border-x-[1rem] border-b-[1rem] border-orange-200 md:p-4 md:w-[50rem] md:h-[20rem] 
            lg:w-[78rem] lg:h-[40rem] ">

                {/* Content Container */}
                {/* Dynamic Content Section based on Active Tab */}
                <div className="w-full h-full px-4 py-4  overflow-y-auto sm:max-h-[20rem] lg:max-h-[40rem]">
                    {activeTab === 'ABOUT' && (
                        <h3 className="text-lg sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <strong className="underline">Main Goal: <br/></strong>
                            The goal was to create a website for final project for MDIA 1472. It is required to make the website responsive by making 3 versions of display: website, tablet and mobile. The website also shows information of potential restaurant items, with reviews and map for one to navigate. Users can also send messages and responses to the restaurant.  <br /><br /> North Star Omurice is a fictional restaurant that offers top rated Japanese omurice. The name came from the first omurice that was created: the omurice north star. The websites offer various of omurice dishes, as well as real life customer reviews. There is also a flickity photo carousel at the end of the page, showcasing the chefs and customer pictures. Finally, there are review boxes and a map for users to navigate and write comments about the restaurant. <br /><br />
                        </h3>
                    )}

                    {activeTab === 'PROCESS' && (
                        <h3 className="text-lg sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <strong className="underline">Beginning:<br/></strong>  
                            The concept for North Star Omurice is simple. It is to provide users the best traditional and innovated omurice in the heart of Vancouver. The website consists with a yellow background with red being the accent color, to represent the yellow omurice egg that is covered with tomato sauce.
                            <br/>
                            In the beginning, I didn’t know what to do because I didn’t have any ideas of what website I should make. It just so happened my website is a restaurant, and I am proud to say I coded the website myself. I didn’t do any sketches for this project because I didn’t even know what to do to begin with, but there were some websites used as reference after knowing what concept I am working with. There were some jokes I included on the website, such as how kids are picky with vegetables, and how girlfriends never know what to eat. I did it just to make it more fun and engaging with viewers.<br/><br/>
                            Since the project was separated into two sections: design and code, it was required to have the high-fidelity design first before jumping into VS Code. It was my first time bringing my high-fidelity design into life, and I had problems with screen size and layouts. I was going back and forth with the overall layout and had friends to give me feedback and potential improvements. The whole process took around 8 hours. Because I didn’t know what I should do for the project, I ended up changing the colors of my hi-fi design in Figma until it turns into something I like. I ended up designing an omurice website for the final project due to the color combination that I stumbled upon. Finally, I brought the hi-fi design into VS code, and the total time I worked on the coding part of the project was roughly 2 weeks straight. <br /><br />
                            <strong className="underline">Difficulties:<br/></strong>
                            I am not the best with coding, and it was challenging for me to make a responsive website that not only is aesthetically pleasing, but also has most of the function users are looking for. I used grids and col-span for the layout, and I was struggling to keep content fitting into the required spaces. It was also the layout style the class learned for the week, so I figured it would be more suitable to be the chosen method for this project. I also chose to use tailwind as well because it was the styling method we learned that week. I was able to achieve to make the website presentable using the grid and col-span by fixing and tweaking with the numbers, sizes and getting used to how tailwind works.
                             </h3>
                    )}

                    {activeTab === 'TIMELINE' && (
                        <h3 className="text-lg px-4 sm:text-[1rem] md:text-2xl lg:text-3xl">
                            <h5 className="text-lg text-center underline font-bold text-blue-300 pb-2 px-4 sm:text-[2rem] md:text-4xl lg:text-7xl">
                            Project Timeline:
                            </h5>
                            <strong>Part 1: Prototyping</strong>
                            <ul className="list-disc">
                                <li><strong> July 19t: </strong> – Assignment was released</li>
                                <li><strong> July 22nd:</strong> – Colors and theme were chosen (1 hour)</li>
                                <li><strong>July 25th: </strong>– General meeting and research (1 hour)</li>
                                <li><strong>July 24th: </strong>– High fidelity part one done (3 hours)</li>
                                <li><strong> July 31st: </strong>– Feedback received, and adjustments were done (2 hours)</li>
                                <li><strong> August 1st: </strong>– Refined high fidelity (2 hours)</li>
                                <br/>
                                <strong>Part 2: Development</strong>
                                <li><strong> August 2nd: </strong>–  Concepts were made</li>
                                <li><strong> August 4th:  </strong>– Started coding for the project (3 hours)</li>
                                <li><strong> August 5th: </strong>– Coding (2 hour)</li>
                                <li><strong> August 6th: </strong>– Coding (2 hour)</li>
                                <li><strong> August 7th: </strong>– Coding (2 hour)</li>
                                <li><strong> August 8th: </strong>– Coding (2 hour)</li>
                                <li><strong> August 12th:  </strong>– Coding and tailwind stylizing and grid adjustment (4 hours)</li>
                                <li><strong> August 15th:  </strong>– Coding and finalizing (3 hours)</li>
                            </ul>
                            <br/><br/>
                            Total hours: <strong className="underline">26 hours</strong>
                        </h3>
                    )}

            {activeTab === 'ATTACHMENTS' && (
                <div className="space-y-4">
                    <p className="text-lg text-black-400 justify-center text-center sm:text-[1.5rem] md:text-4xl lg:text-6xl">
                        Final Product:
                    </p>
                        <h5 className="sm:text-xl underline text-orange-300 lg:text-[3rem]">
                        Figma File:
                        </h5>
                        <iframe
                        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                        width="370"
                        height="450"
                        src="https://embed.figma.com/design/Zz3U4EweVZ6y9qLrni1yJK/North-Star-Omurice-Screens?node-id=0-1&embed-host=share"
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
                        md:text-xl md:ml-[1rem]
                        lg:mt-[-2rem] lg:ml-[-1rem] lg:text-2xl
                        ">This is the Figma file. There are three screens: mobile, tablet and web. Each designs demonstrate slight differences in placements and designs. Please do play around with it to experience the app yourself! </h3>


                            </div>
                         )}
                         {/* mockup section */}
                         {activeTab === 'MOCKUPS' && (
                        <h5 className="text-lg  sm:text-[1rem] md:text-4xl lg:text-[3rem]">
                            <p className="text-xl ">
                            <strong className="justify-center underline md:text-[3rem] md:ml-[15rem]
                             lg:text-[4rem] lg:ml-[24rem]">Mockup Samples: <br/></strong>
                             <p className="
                             md:ml-[10rem] md:text-[2rem] md:pt-[2rem]
                             lg:ml-[22rem]
                             ">
                           Here are some mockups for the project: <br /><br />
                             </p>
                            </p>
                           
                           <div>
                           <img 
                            src={Omu}
                            alt="Image 3" 
                            className="w-[10rem] h-auto
                            sm:ml-[-0.5rem] sm:mt-[1rem] sm:pb-[1rem]
                            md:w-[95%] md:ml-[1rem]
                            lg:w-[70rem] lg:ml-[1rem] lg:pb-[-4rem]
                            " 
                        />
                        <h3 className="flex 
                        sm:mr-[-1rem] sm:ml-[10rem] sm:mt-[-10.5rem] sm:text-xs
                        md:text-xl md:ml-[-1rem] md:pt-[12rem]
                        lg:mt-[-11rem] lg:ml-[0rem] lg:text-2xl lg:mb-[1rem]
                        ">I decide to make a mockup for one of the screens of North Star Omurice. I felt like it was appropriate to make it as if someone is ordering food directly from the North Star Omurice app. The mockup image was downloaded from Adobe Stock Image, and the editing of the mockup was made with Adobe Photoshop. </h3>
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

export default Northstar;
