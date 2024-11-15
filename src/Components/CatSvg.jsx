import React from "react";
import { motion } from "framer-motion";

const CatGif = (props) => (
  <motion.img
    src="./src/assets/cat.gif"  // Replace with your GIF path
    alt="Cat Animation"
    className="responsive-cat"  // Added class for styling
    {...props}
    animate={{
      y: [-10, 0, -10],  // Same vertical animation as before
    }}
    transition={{
      duration: 1.3,
      repeat: Infinity,  // Repeat the animation infinitely
      ease: "easeInOut",  // Smooth easing
      type: "keyframes",  // Animate in keyframe steps
    }}
  />
);

export default CatGif;
