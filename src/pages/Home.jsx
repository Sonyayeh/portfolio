import React from 'react';
import { ReactTyped } from 'react-typed';
import Social from '../Components/social';
import Footer from '../Components/footer';
import CatGif from '../Components/CatSvg';
import PurpleWorkBox from '../Components/purpleworkbox';
import BlueWorkBox from '../Components/blueworkbox';
import GreenWorkBox from '../Components/greenworkbox'
import Arrow from '../Components/ArrowSvg';
import Bubbles from '../Components/Bubbles';
import VolleyballMockup from '../Components/volleyball';
import YogaMockup from '../Components/puppyyoga';
import OmuMockup from '../Components/omurice';
import styles from "../pages/Home.module.css";

const Home = () => {
  return (
    <div className="container mx-auto px-5">
      <div className="card">

      </div>

      <div className={`${styles.iAmText}`} >
        <div>
          <h1>I am a&nbsp;</h1>
        </div>

        
          <div className={`${styles.bubbleContainer}`}>
            <div className='mb-20 mt-8'>
              <ReactTyped
                strings={["UI/UX Designer", "Graphic Designer", "Video Editor", "Illustrator", "Front End Developer"]}
                typeSpeed={100}
                backSpeed={100}
                backDelay={1000}
                startDelay={500}
                loop
                showCursor={true}
                fadeOut={false}
                className='text-h1 font-Micro text-black' 
              />
            </div>
          </div>
        

      </div>



      {/* Container for CatGif */}
      <div className={`${styles.catContainer}`} >
        <div className='ml-auto'>
          <CatGif />
        </div>
      </div>

      {/* Arrow between CatGif and WorkBox */}
      <div className={`${styles.arrowContainer}`} >
        <div>
          <Arrow />
        </div>
      </div>

    

      <div className='description'>
        <p>Sample Work:</p>
      </div>

      {/* for Furrever pals */}
      <div className="sample-box1">
        <PurpleWorkBox />
        <YogaMockup />
      </div>

      {/* puppy yoga title */}
      <div className={`${styles.yogaDes}`}>
        <p className='text-h3-lg'>Furrever Pals Puppy Yoga</p>
      </div>

      {/* for volleyball */}
      <div className="sample-box2">
        <BlueWorkBox />
        <VolleyballMockup />
      </div>

      {/* volleyball title */}
      <div className={`${styles.volleyballDes}`}>
        <p className='text-h3-lg'>Beach Volleyball Tournament Poster</p>
      </div>

      {/* for North Star Omurice */}
      <div className="sample-box3">
        <GreenWorkBox />
        <OmuMockup />
      </div>

      {/* omurice title */}
      <div className={`${styles.omuDes}`}>
        <p className='text-h3-lg'>North Star Omurice</p>
      </div>

        {/* bubbles */}
        <div className={`${styles.Bubble}`} >
          <div>
            <Bubbles />
          </div>
        </div>
        <div className={`${styles.homeContact}`}>
          <Footer />
        </div>
        
        <div className={`${styles.homeSocial}`}>
          <Social />
        </div>
    </div>
  );
};

export default Home;
