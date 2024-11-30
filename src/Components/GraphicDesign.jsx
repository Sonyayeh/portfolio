import React from "react";
// I have each project information imported from project.json, I will make my comments there as well!
import projectData from "../data/project.json";  // Import the JSON data

const GraphicBox = () => {
    // this line is to go into the project data in project.json and find the 
    // data that has the project id of 1, and then being brought into here
    const project = projectData.find((proj) => proj.id === 1);

    if (!project) {
        return <div>Project not found</div>;  // Handle case where project is not found
    }

    return (
        // I think i commented about this section so many times already 
        <div className="w-full relative mt-[30rem] 
        sm:mt-[10rem] sm:px-0  sm:mx-auto
        md:ml-[0rem]
        lg:pl-[4rem] lg:pr-[4rem] ">

            {/* Project Heading and Description */}
            <div className="text-start w-full
            
            ">
                {/* this is the section title
                I did it in a way where the first project of each
                section would have the section title,
                so when it is brought into the project page
                I don't have to make another title and manually
                adjust it */}
                <h1 className=" pl-2 text-2xl 
                sm:text-[4rem] sm:pb-[2rem] sm:pl-[6.5rem] sm:mt-[-16rem]
                md:text-8xl md:pl-[2rem] md:pt-[10rem] 
                lg:text-8xl lg:pl-5">
                    Graphic Design:
                </h1>

                {/* Blue heading */}
                <div className="bg-blue-200 px-4 flex justify-between items-center w-full">
                    <h5 className="text-white text-3xl 
                    sm:text-3xl 
                    md:text-6xl 
                    lg:text-6xl">
                        Project
                    </h5>
                </div>

                {/* White background tab bar , same thing as the about 
                me, also, thank you so very much for this omg I could never */}
                <div className="bg-blue-200 p-4 pt-0">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start">
                        {/* List items with responsive font sizes */}
                        <li className="text-blue-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">DISC</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">OPTION</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">VIEW</li>
                        <li className="text-blue-200 text-lg 
                        sm:text-3xl 
                        md:text-4xl 
                        lg:text-2xl 
                        font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project box with border */}
            <div className="w-full p-0 sm:p-0 flex border-solid border-x-[1rem] border-b-[1rem] border-blue-200
            md:p-3 
            ">

                {/* Content Container */}
                <div className="space-y-4 flex flex-col py-2 px-4 
                sm:px-7 w-full 
                lg:flex-row">

                    {/* Title and Description Section */}
                    <div className="w-full lg:w-1/2 lg:text-left">
                        <h5 className="text-black pb-2 text-2xl 
                        sm:text-[1.5rem] sm:text-start sm:pt-5
                        md:text-[4rem] md:pt-5 md:pl-10 
                        lg:text-[4.5rem] lg:pl-4 lg:pt-[2rem] lg:absolute">
                            {/* with each project.xxx, it is manually grabbing
                            the information of project.id, in this case it's
                            project.1, so it will add in project 1's title, 
                            description, imageurl, and chips! */}
                            {project.title}
                        </h5>
                        <h4 className="text-lg leading-6 
                        sm:text-[1rem] sm:pt-2  
                        md:text-2xl md:py-5 md:pl-5 md:pr-[20rem]
                        lg:text-3xl lg:py-[10rem] lg:ml-10 lg:pr-[1rem]">
                            {project.description}
                        </h4>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center w-full lg:w-1/2 lg:ml-auto">
                        <img
                            src={project.imageurl} 
                            className="w-full h-auto object-contain rounded-xl
                            sm:w-[20rem] sm:h-[30rem]
                             md:w-[20rem] md:h-[25rem] md:ml-[35rem] md:mt-[-10rem] md:mb-[-2rem]
                            lg:ml-[5rem] lg:w-[35rem] lg:h-[35rem] lg:mt-[6rem]
                            "
                        />
                    </div>
                    {/* the software used section */}
                    <div>
                        <h4 className="text-blue-300 
                        sm:text-[1rem] sm:mt-[-1rem]
                        md:text-1xl md:mt-[2rem]
                        lg:text-[1.3rem] lg:ml-[-85rem] lg:mt-[45rem] 
                        ">
                            {project.chips}
                        </h4>
                    </div>
                     {/* View More Button, I decided not to use the arrow because it's too small
                     even I can't see it*/}
                     <div className="flex justify-center mt-8">
                        <button className="px-6 py-3 bg-blue-300 text-white rounded-lg shadow-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300
                        md:mr-[-35rem] md:mt-[-2rem]
                        lg:mr-[-15rem] lg:mt-[44rem] lg:ml-[-50rem]
                        
                        ">
                            View More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default GraphicBox;
