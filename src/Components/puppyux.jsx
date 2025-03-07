import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function PuppyCase() {
    const pdfUrl = "/furreverpals.pdf"; // Ensure it's inside 'public/'

    const [pageIndex, setPageIndex] = useState(0); // Track the current page index
    const [totalPages, setTotalPages] = useState(0); // Store total number of pages

    // Handle page load success to set total pages
    const onLoadSuccess = ({ numPages }) => {
        setTotalPages(numPages);
    };

    return (
        <div className="w-full relative mt-[30rem]  
        sm:mt-[1rem] sm:px-0 sm:mx-auto sm:pb-[2rem] 
        md:ml-[2rem] 
        lg:pl-[4rem] lg:pr-[7rem] 
        lp:w-[74rem]">
            {/* Project Heading */}
            <div className="text-start w-full">
                <div className="bg-purple-200 px-4 flex justify-between items-center w-full
                md:w-[50rem]
                ">
                <h5 className="text-white text-3xl 
                sm:text-[1rem] 
                md:text-3xl md:pt-1 md:pb-1 md:w-[50rem]
                lg:text-[2.rem]">
                        Furrever Pals Puppy Yoga UX Case Study
                    </h5>
                </div>

                {/* White background tab bar */}
                <div className="bg-purple-200 p-4 pt-0 
                md:w-[50rem]">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start
                    md:w-[48rem]
                    ">
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-4xl lg:text-2xl font-semibold">DISC</li>
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-4xl lg:text-2xl font-semibold">OPTION</li>
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-4xl lg:text-2xl font-semibold">VIEW</li>
                        <li className="text-purple-200 text-lg sm:text-3xl md:text-4xl lg:text-2xl font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project Box */}
            <div className="w-full p-0 sm:p-0  flex-col border-solid border-x-[1rem] border-b-[1rem] border-purple-200 
            md:p-3 md:w-[50rem]
            
            ">
                {/* PDF Viewer */}
                
                <div className="w-full overflow-auto flex-1  
                sm:h-[12rem] sm:pt-[1rem] sm:flex sm:ml-[0rem] sm:w-[100%] sm:justify-center sm:overflow-hidden
                md:h-[22rem] md:grid md:ml-[6rem] md:items-center md:w-[36rem] md:overflow-hidden
                
                ">
                    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
                       <div className="scale-100 
                                               sm:scale-[3] sm:w-[10rem] sm:h-[3.7rem] 
                                               md:scale-[1] md:w-[40rem] md:h-[20rem]
                                               lp:scale-[1.3] lp:h-[20rem]
                                               lg:scale-[1.4] lg:h-[20rem] 
                                               origin-top w-full h-full">
                                                   <Viewer
                                                       fileUrl={pdfUrl}
                                                       pageIndex={pageIndex}
                                                       onLoadSuccess={onLoadSuccess}
                                                   />
                                               </div>
                    </Worker>
                </div>

                

                {/* Download Link */}
                <a
                    href={pdfUrl}
                    download
                    className="text-blue-500 font-semibold underline block mt-4 self-center
                    sm:ml-[7rem]
                    "
                >
                    Download Case Study PDF
                </a>
            </div>
        </div>
    );
}

export default PuppyCase;
