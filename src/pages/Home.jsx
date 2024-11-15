import React from 'react';
import { ReactTyped } from 'react-typed';
import CatGif from '../Components/CatSvg';
import WorkBox from '../Components/workbox';
import Arrow from '../Components/ArrowSvg'; // Arrow component

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="text-container">
          <div className="static-text">I am a&nbsp;</div>
        </div>
      </div>

      {/* Container for background image */}
      <div className="bubble-container">
        <div className="typed-text">
          <ReactTyped
            strings={["UI/UX Designer", "Graphic Designer", "Video Editor", "Illustrator", "Front End Developer"]}
            typeSpeed={100}
            backSpeed={100}
            backDelay={1000}
            startDelay={500}
            loop
            showCursor={true}
            fadeOut={false}
          />
        </div>
      </div>

      {/* Container for CatGif */}
      <div className="svg-container">
        <CatGif />
      </div>

       {/* Arrow between CatGif and WorkBox */}
       <div className="arrow-container">
        <Arrow />
      </div>

      <div className='description'>
        <p>Sample Work:</p>
      </div>
      {/* Container for WorkBox */}
      <div className="sample-box">
        <WorkBox />
      </div>
    </div>
  );
};

export default Home;
