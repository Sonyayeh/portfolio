import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// I declared the titles and texts accordingly, and made sure they match with the right title to the right text
// this will be passed through at the bottom, where it will call for the title and the text as a pair and pass it into the specific container I created
const messages = [
  { title: "Multilingualism", text: "I immigrated to Canada almost 15 years ago. I have been communicating with different backgrounded people since then. Gradually, I grew interest in learning different languages. As for now, I am fluent in both English and Chinese/Mandarin, proficient in Japanese and French, currently learning German and Cantonese, and with a history of studying over 10 languages." },

  { title: "Patience:", text: "I have worked in the retail industry and I dealt with some stubborn customers on a daily basis. With the experiences I gained from working, I was able to remain calm and composed when dealing with difficult people and situations and eventually able to come to a middle ground." },

  { title: "Positive Attitude", text: "Although I may not be the most optimistic person, I tend to keep a positive mindset when working in groups. It helps my group members to feel more productive and it boosts the overall atmosphere throughout the whole project." },
  
  { title: "Hard Worker", text: "I have high expectations for myself. I feel disappointed in myself even with the smallest mistake I make. I try to do my best in everything, including assignments, test/quizzes and relationships. Working hard resulted me in developing bonds amongst my friends and instructors." }
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
    <div className="relative w-full max-w-xl flex flex-col justify-center items-center overflow-hidden p-6 border-2 border-dashed border-blue-300 h-auto md:ml-[5rem] lg:min-w-[63rem] lg:min-h-[40rem] lg:p-10 lg:ml-[3rem]
    lp:min-w-[70rem] lp:min-h-[20rem] lp:p-10 lp:ml-[3rem]">
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
      className="text-center bg-white-500 text-blue-300 px-6 rounded-lg w-full flex flex-col justify-center lg:w-[55rem] lg:min-h-[50rem] lg:p-6 "
    >
      {/* this is the title section */}
      {/* it will retreieve the messages with the tag of .titles from above */}
      <h2 className="text-2xl font-bold underline text-blue-400 mb-2 lg:text-[3rem] lg:pb-[2.5rem] lp:pb-[1rem] lp:text-[2rem]">{messages[index].title}</h2>

      {/* this is the text/paragraph sectino */}
      {/* this will grab the text section from the above with those with the .text tag */}
      <h5 className="sm:text-sm leading-relaxed whitespace-normal break-words lg:text-[2rem] lg:leading-snug lg:min-h-[15rem] lp:text-[2rem] lp:leading-[2rem]">
        {messages[index].text}
      </h5>
    </motion.div>
  </AnimatePresence>
</div>

  
  );
};

export default Special;