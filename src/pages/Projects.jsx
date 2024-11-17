import React from "react";
import Arrow from '../Components/ArrowSvg';
import styles from "../pages/Projects.module.css";


const Projects = () => {

    return(
        <div className="container mx-auto px-5">
        <div className="card">
        </div>

        <div className={`${styles.projectHero}`} />
            <div>
                <h1> Projects </h1>
            </div>
        </div>

        
    );

}

export default Projects;