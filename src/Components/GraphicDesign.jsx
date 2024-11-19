import React from "react";
import BusVolley from "../mockups/busstop.png";



const GraphicBox = () => {
    return (

        // the project box
        <div className="w-full lg:max-w-[1315px] relative lg:ml-[8rem] md:ml-[10rem] mt-[30rem]">
            <div>
                <h1 className="flex pb-[-1rem]">Graphic Design:</h1>
                {/* blue headinig */}
                <div className=" bg-blue-200 px-4 flex justify-between items-center">

                    <h5 className="flex text-white text-3xl sm:text-xl md:text-6xl lg:text-7xl">
                        Project
                    </h5>
                    <h5 className="text-white text-3xl sm:text-xl md:text-6xl lg:text-8xl ">
                        X
                    </h5>

                </div>
                <div>
                    {/* this is the white background */}
                    {/* <div className="lg:w-[1240px] bg-white"></div> */}
                    <div>
                        {/* this is the white tab bar */}
                        <div className=" bg-blue-200 p-4 pt-0">
                            {/* the list words */}
                            <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6">
                                {/* List items with responsive font sizes */}
                                <li className="text-blue-200 text-lg sm:text-sm md:text-6xl lg:text-7xl font-semibold">DISC</li>
                                <li className="text-blue-200 text-lg sm:text-sm md:text-6xl lg:text-7xl font-semibold">OPTION</li>
                                <li className="text-blue-200 text-lg sm:text-sm md:text-6xl lg:text-7xl font-semibold">VIEW</li>
                                <li className="text-blue-200 text-lg sm:text-sm md:text-6xl lg:text-7xl font-semibold">HELP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* border for the box */}
            <div>

            {/* Project heading here */}
            <div className="p-4 sm:p-2 md:p-3 flex border-solid border-x-[1rem] border-b-[1rem] border-blue-200">
                <div className="space-y-4 flex py-10 px-10">
                    <div className="">
                        <h5 className="text-3xl sm:text-xl md:text-6xl pb-[10rem]">
                            Beach Volleyball Tournament Poster
                        </h5>
                        <h4 className="text-lg sm:text-sm md:text-3xl leading-3">
                            The volleyball tournament poster project is to create a promotional poster about a fictional volleyball match in the Town of Shelbyville. All the elements on the poster were to be created only with Adobe Illustrator.
                        </h4>
                    </div>
                    <img src={BusVolley} alt="Busstop Mockup" className=
                    'max-w-[27rem] h-auto ' />
                </div>
            </div>
            </div>

        
        </div>
    );
}

export default GraphicBox;
