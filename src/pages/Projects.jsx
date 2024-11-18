import React from "react";
import GraphicBox from "../Components/GraphicDesign";
import UiuxBox from "../Components/uiux";
import DevelopBox from "../Components/develop";
import Arrow from '../Components/ArrowSvg';
import Footer from "../Components/footer";
import Social from "../Components/social";
import BusVolley from "../mockups/busstop.png";
import MoreInfoArrow from "../Components/moreArrow";

import styles from "../pages/Projects.module.css";


const Projects = () => {
    return (
        <div className="container mx-auto px-5">
            <div className="card">

                <div className={`${styles.title}`}>
                    <div>
                        <h1>Projects:</h1>
                    </div>
                </div>

                {/* the down arrow */}
                <div className={`${styles.projectArrow}`}>
                    <div>
                        <Arrow />
                    </div>
                </div>

                {/* Graphic Design title */}
                <div className={`${styles.projectHeader}`}>
                    <div>
                        <h1>Graphic Design:</h1>
                    </div>
                </div>

                {/* Graphic Design container */}
                <div>
                    <GraphicBox />
                </div>
                {/* volleyball mockup here */}
                <div>
                <img src={BusVolley} alt="Busstop Mockup" className={`${styles.image}`} />
                </div>
                {/* more info arrow */}
                <div className={`${styles.graphicArrowWrapper}`}>
                    <MoreInfoArrow />
                </div>

                

                {/* UI/UX Design title */}
                <div className={`${styles.uiuxprojectHeader}`}>
                    <div>
                        <h1>UI/UX Design:</h1>
                    </div>
                </div>

               {/* UI/UX containers */}
                <div className={`${styles.uiuxContainer}`}>
                    <div className={`${styles.uiuxBoxWrapper}`}>
                        <UiuxBox />
                    </div>
                        <div className={`${styles.arrowWrapper}`}>
                            <MoreInfoArrow />
                        </div>
                    <div className={`${styles.uiuxBoxWrapper}`}>
                        <UiuxBox />
                    </div>
                        <div className={`${styles.arrowWrapper}`}>
                            <MoreInfoArrow />
                        </div>
                    <div className={`${styles.uiuxBoxWrapper}`}>
                        <UiuxBox />
                    </div>
                        <div className={`${styles.arrowWrapper}`}>
                            <MoreInfoArrow />
                        </div>
                    <div className={`${styles.uiuxBoxWrapper}`}>
                        <UiuxBox />
                    </div>
                        <div className={`${styles.arrowWrapper}`}>
                            <MoreInfoArrow />
                        </div>
                    </div>
                    
                </div>

                

                {/* Development container */}
                <div>
                    <DevelopBox />
                </div>
                
                {/* Develop title */}
                <div className={`${styles.devprojectHeader}`}>
                    <div>
                        <h1>Development:</h1>
                    </div>
                </div>

                <div className={`${styles.projectContact}`}>
                    <div>
                        <Footer />
                    </div>
                    <div  className={`${styles.devArrowWrapper}`}>
                        <MoreInfoArrow />
                    </div>
                </div>

                <div>
                    <div>
                        <Social />
                    </div>
                </div>
            </div>

    );
}

export default Projects;
