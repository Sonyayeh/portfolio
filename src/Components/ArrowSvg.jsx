import React from "react";
import Scroll from '../assets/scroll.png';
import { motion } from "framer-motion";
// the motion one is the animation I used for Cat gif as well
// I believe you'll need to install this in terminal to use:
// npm install framer-motion


const Arrow = (props) => (
  <motion.img
    src={Scroll}  // Replace with your GIF path
    alt="Arrow Animation"
    className="Down-Arrow"  // Added class for styling
    {...props}
    animate={{
      y: [-10, 0, -10],  // Same vertical animation as before
    }}
    transition={{
      duration: 0.5,
      repeat: Infinity,  // Repeat the animation infinitely
      ease: "easeInOut",  // Smooth easing
      type: "keyframes",  // Animate in keyframe steps
    }}
  />
);

export default Arrow;
// the code here will be the same as the cat gif, but the 
// speed is slightly faster than the cat!