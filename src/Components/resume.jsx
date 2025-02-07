import React from "react";
import ResumeCat from '../assets/resume.gif';
import { motion } from "framer-motion";

const Resume = (props) => (
  <motion.img
    src={ResumeCat}  // Replace with your GIF path
    alt="Cat Animation"
    className="flex max-w-[80rem] w-full h-auto"  // Added class for styling
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
    whileHover={{
      scale: 1.1,  // Slightly enlarges on hover (10% bigger)
      transition: { duration: 0.3, ease: "easeInOut" },  // Smooth hover transition
    }}
  />
);

export default Resume;
