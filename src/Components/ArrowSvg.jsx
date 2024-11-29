import React from "react";
import Scroll from '../assets/scroll.png';
import { motion } from "framer-motion";


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