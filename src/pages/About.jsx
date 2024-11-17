import React from "react";
import AboutBox from "../Components/AboutBox.jsx";
import Pointercursor from "../Components/photopointer";
import Photo from "../Components/photo";
import Footer from "../Components/footer.jsx";


import styles from "../pages/About.module.css";

const About = () => {
    return (
      <div className="container mx-auto px-5">
        <div className="card">
        </div>

        <div className={`${styles.AboutBox}`}>
            <div>
                <AboutBox />
            </div>
        </div>

        <div className={`${styles.abouttext}`}>
          <h2>About Me...</h2>
          <h4>
            Hello, I’m Sonya! I am currently a student of the New Media Design + Web Development program at BCIT and I have a passion for designing digital experiences that enhance people’s everyday lives. <br /><br />
            
            Ever since I was young, I dreamed about entering the art industry. Growing up in a traditional Asian family, it was difficult to express my interest in art and design, since it is viewed as a hobby but not a career path. I successfully convinced my family to allow me to study fine arts at the University of Victoria, and I graduated with a Bachelor Degree in Fine Arts. However, as times changed and technology began dominating the market, it became clear that having a Fine Arts degree isn’t enough. <br /><br />

            I came to BCIT at first to study graphic design, but soon discovered my passion for UI/UX through one of the courses the program offered. I was recommended by the program head to enroll in the New Media Design + Web Development Diploma, as it covers more than just UI/UX, combining my knowledge of art and design. <br /><br />
            
            Currently, I am in my third term, pursuing my passion for UI/UX design and some front-end development! <br /><br />

            Some of my skills include: <br />
            - UI/UX <br />
            - Figma <br />
            - Adobe Applications (InDesign, Illustrator, Premiere Pro, Photoshop, etc.) <br />
            - Video/Photo editing <br />
            - Basic HTML/CSS/JavaScript <br /><br />

            Other than school, I enjoy doing: <br />
            <ul>
                <li>-Cooking/Baking</li>
                <li>-Sewing</li>
                <li>-Traveling</li>
            </ul>
        </h4>
        </div>
        <div>
            <Photo />
        </div>
        <div>
            <Pointercursor />
        </div>
        <div className={`${styles.aboutContact}`}>
        <Footer />
        </div>
      </div>
    );
  };
  

export default About;