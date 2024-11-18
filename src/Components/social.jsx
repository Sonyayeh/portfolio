import React from "react";
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import git from "../assets/github.png"
import youtube from "../assets/youtube.png"
import styles from "../Components/social.module.css"

const Social = () => {

    return(

        <div className={`${styles.linkedinBox}`}>
            <div className="">
                <img src={linkedin} alt="Linkedin logo" /> {/* Use the imported image here */}
            </div>

            <div className={`${styles.instaBox}`}>
                <div className="">
                    <img src={instagram} alt="Instagram logo" /> {/* Use the imported image here */}
                </div>
            </div>
            <div className={`${styles.gitBox}`}>
                <div className="">
                    <img src={git} alt="Github logo" /> {/* Use the imported image here */}
                </div>
            </div>
            <div className={`${styles.youtubeBox}`}>
                <div className="">
                    <img src={youtube} alt="Youtube logo" /> {/* Use the imported image here */}
                </div>
            </div>
        </div>

    );

}

export default Social;