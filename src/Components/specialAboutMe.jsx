import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// I declared the titles and texts accordingly, and made sure they match with the right title to the right text
// this will be passed through at the bottom, where it will call for the title and the text as a pair and pass it into the specific container I created
const messages = [
  { title: "Multilingualism", text: "I moved to Canada almost 15 years ago, and along the way I fell in love with language. I'm fluent in English and Mandarin, proficient in Japanese and French, and currently picking up Dutch, German and Cantonese, with over 10 languages explored along the way." },

  { title: "Patience:", text: "Working in retail meant dealing with difficult customers on a daily basis. That experience taught me to stay calm and composed under pressure, and to find common ground even in tense situations, a skill I still rely on today in my current role in marketing, graphic design, and UI/UX, where balancing feedback from different stakeholders is constant." },

  { title: "Positive Attitude", text: "While I would not call myself the most optimistic person by nature, I make a point of keeping a positive mindset in group settings. It helps the team stay productive and lifts the overall energy of a project." },
  
  { title: "Hard Worker", text: "I hold myself to high standards and care about doing things well, even the small details. That drive pushes me to give my best in everything I take on, and it has helped me build strong, lasting relationships with the people I work and collaborate with." }
];

const Special = () => {
  
  const [index, setIndex] = useState(0);

  // this section tells that after the initial text and title section stays on the page for 10 seconds, it will move onto the next title and text, evident at the preIndex +1 area. It should have enough time for users to read the paragraph, if not, I can always extend the duration.
  useEffect(() => {
    
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 10000); 
    
    return () => clearInterval(interval);
  }, []);

  // the first section is the container
  // I also added a border style so it kind of matches with the bashed line I had above, to kind of having some consistant design throughout the About Me page!
  // I also made sure the container is flexible, so it can resize on its own depending on how much text there is.
  return (

    <div className="relative w-full flex flex-col justify-center items-center overflow-hidden p-8 border-2 border-dashed border-blue-300 h-auto 
    sm:max-w-[20rem]
    md:w-[42rem]
    lg:min-w-[54rem] lg:min-h-[40rem] lg:p-10 
    lp:min-w-[40rem] lp:min-h-[20rem] lp:p-10 ">
      
    {/* this is the animation section
      the animation shows that the title and text will come in from the right with a fade in effect, and then exit to the left with a fading effect.
    */}
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 1 }}
      className="text-center justify-self-center bg-white-500 text-blue-400 px-6 rounded-lg w-full flex flex-col lg:w-[50rem] lg:min-h-[30rem] lg:p-6 "
    >
      {/* this is the title section */}
      {/* it will retreieve the messages with the tag of .titles from above */}
      <h2 className="text-2xl font-bold underline text-blue-500 mb-2 sm:text-[1.3rem] md:text-[2rem] lg:text-[3rem] lg:pb-[2.5rem] lp:pb-[1rem] lp:text-[2rem]">{messages[index].title}</h2>

      {/* this is the text/paragraph sectino */}
      {/* this will grab the text section from the above with those with the .text tag */}
      <h5 className="text-left justify-self-center leading-relaxed whitespace-normal break-words
      sm:text-[0.8rem] sm:pt-[1rem] sm:w-[14rem]
      md:text-[1.5rem] md:pt-[2rem] md:leading-8 
      lg:text-[2rem] lg:leading-[3rem] lg:min-h-[15rem] 
      lp:text-[1.5rem] lp:leading-[2rem]">
        {messages[index].text}
      </h5>
    </motion.div>
  </AnimatePresence>
</div>

  
  );
};

export default Special;