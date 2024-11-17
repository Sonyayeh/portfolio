import React from "react";
import GraphicBox from "../Components/GraphicDesign";
import UiuxBox from "../Components/uiux";
import DevelopBox from "../Components/develop";
import Arrow from '../Components/ArrowSvg';
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
                    <div className={`${styles.uiuxBoxWrapper}`}>
                        <UiuxBox />
                    </div>
                    <div className={`${styles.uiuxBoxWrapper}`}>
                        <UiuxBox />
                    </div>
                    <div className={`${styles.uiuxBoxWrapper}`}>
                        <UiuxBox />
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

            </div>
        </div>
    );
}

export default Projects;
