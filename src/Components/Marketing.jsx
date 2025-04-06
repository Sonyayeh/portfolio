import React, { useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Marketing() {
    const pdfUrl = "/marketingplan.pdf";
    const [pageIndex, setPageIndex] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const onLoadSuccess = ({ numPages }) => {
        setTotalPages(numPages);
    };

    return (
        <div className="relative mt-[30rem] 
        sm:mt-[1rem] sm:px-0 sm:mx-auto sm:pb-[2rem] 
        md:ml-[2rem] 
        lp:ml-[8rem]
        lg:ml-[0rem] lg:pr-[7rem]">

            {/* Project Heading */}
            <div className="text-start w-full">
                <div className="bg-orange-200 px-4 flex justify-between items-center w-full 
                md:w-[50rem]
                lp:w-[60rem]
                lg:w-[80rem]">
                    <h5 className="text-white text-3xl mt-1 mb-1
                    sm:text-[1rem] 
                    md:text-3xl md:pt-1 md:pb-1 md:w-[50rem]
                    lg:text-[3rem] lg:mt-2 lg:mb-2 lg:w-[60rem]
                    lp:text-[2.5rem] lp:w-[50rem]">
                        Marketing Strategy: Catoro Cafe
                    </h5>
                </div>

                {/* Tab bar */}
                <div className="bg-orange-200 p-4 pt-0 
                md:w-[50rem]
                lp:w-[60rem]
                lg:w-[80rem]">
                    <ul className="flex gap-6 items-center space-x-1 bg-white w-full px-6 justify-start hover:cursor-hover
                    md:w-[48rem]
                    lp:w-[58rem]
                    lg:w-[78rem]">
                        <li className="text-orange-200 hover:text-blue-300 text-lg sm:text-3xl md:text-4xl lp:text-5xl lg:text-5xl font-semibold">DISC</li>
                        <li className="text-orange-200 hover:text-blue-300 text-lg sm:text-3xl md:text-4xl lp:text-5xl lg:text-5xl font-semibold">OPTION</li>
                        <li className="text-orange-200 hover:text-blue-300 text-lg sm:text-3xl md:text-4xl lp:text-5xl lg:text-5xl font-semibold">VIEW</li>
                        <li className="text-orange-200 hover:text-blue-300 text-lg sm:text-3xl md:text-4xl lp:text-5xl lg:text-5xl font-semibold">HELP</li>
                    </ul>
                </div>
            </div>

            {/* Project Box */}
            <div className="w-full p-0 sm:p-0 flex-col border-solid border-x-[1rem] border-b-[1rem] border-orange-200 
            md:p-3 md:w-[50rem] md:h-[30rem]
            lp:w-[60rem] lp:h-[42rem]
            lg:w-[80rem] lg:h-[55rem]">

                {/* PDF Viewer */}
                <div className="w-full overflow-auto flex-1  
                sm:h-[12rem] sm:pt-[1rem] sm:flex sm:ml-[0rem] sm:w-[100%] sm:justify-center sm:overflow-hidden
                md:h-[32rem] md:grid md:ml-[6rem] md:items-center md:w-[35rem] md:overflow-hidden md:mt-[-7rem]
                lp:h-[32rem] lp:w-[50rem] lp:ml-[3rem] lp:mt-[1rem]
                lg:h-[45rem] lg:w-[90rem] lg:ml-[-6.5rem]">
                    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
                        <div className="scale-100 
                        sm:scale-[3] sm:w-[10rem] sm:h-[3.7rem] 
                        md:scale-[1.4] md:w-[30rem] md:h-[16.8rem]
                        lp:scale-[0.8] lp:w-[57rem] lp:h-[40rem]
                        lg:scale-[1.15] lg:h-[39rem] lg:w-[60rem] lg:mb-[8rem]
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
                    md:ml-[20rem]
                    lp:mt-[3rem] lp:ml-[20rem] lp:text-[2rem]
                    lg:text-[3rem] lg:ml-[27rem]">
                    Download Case Study PDF
                </a>
            </div>
        </div>
    );
}

export default Marketing;
