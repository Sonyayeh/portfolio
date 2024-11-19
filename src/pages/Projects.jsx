import React from "react";

import Arrow from '../Components/ArrowSvg';
import Footer from "../Components/footer";
import Social from "../Components/social";
import Graphic from "../Components/GraphicDesign";

import styles from "../pages/Projects.module.css";


const Projects = () => {
    return (
        <div >
            <div  />
                {/* page title */}
                <div className='flex justify-center'>
                    <div>
                        <h1>Projects:</h1>
                    </div>

                {/* the down arrow */}
                    <div className={`${styles.arrowWrapper}`}>
                        <div>
                            <Arrow />
                        </div>
                    </div>
                </div>

                {/* graphic design */}
                <div>
                    <Graphic />
                </div>

                <div>
                    <div>
                        <Footer />
                        <Social />
                    </div>
                </div>

            </div>

    );
}

export default Projects;
