import React, { useState, useRef, useEffect } from "react";

const events = [
  {
    date: "11/05/2024",
    title: "Assignment Given & Research",
    sub: "2 hours",
    content:
      "The brief raised an immediate question: how do you find the right people to interview for a project like this? Puppy yoga participants, dog owners, and people who might be skeptical of the concept could all offer something different. I spent this stage defining screener questions carefully, aiming to filter for a range of perspectives rather than just enthusiastic dog lovers who'd say yes to anything."
  },
  {
    date: "11/12/2024",
    title: "Screener Questions Document Created",
    sub: "1 hour",
    content:
      "Not everyone who says yes to an interview is actually useful to talk to. I built a screener document with specific eligibility questions, aiming to filter out people who'd just tell me what they thought I wanted to hear, and keep the ones who'd genuinely push back or surface friction I hadn't considered."
  },
  {
    date: "11/19/2024",
    title: "Hypothesis Created",
    sub: "1 hour",
    content:
      "Before running any interviews, I had a hunch: people weren't avoiding puppy yoga because of the concept itself, but because of cost, unfamiliarity, or not knowing what to expect. This became my working hypothesis, something to test rather than assume, and it shaped the questions I'd end up asking real participants."
  },
  {
    date: "11/28/2024",
    title: "Screener Questions Answered",
    sub: "2 hours",
    content:
      "The screener responses came back with a clearer picture than I expected. A few patterns stood out right away, particularly around hesitation tied to cost and unfamiliarity with yoga itself, which matched part of my hypothesis but also surfaced a concern I hadn't planned for. I adjusted my interview questions to dig into that new thread before moving forward."
  },
  {
    date: "11/26/2024",
    title: "User Results Submitted",
    sub: "2 hours",
    content:
      "Looking across all the interviews together, a few things kept repeating: people wanted to feel like beginners were welcome, not like they'd be the only one who didn't know a downward dog from a cat pose. Cost came up constantly too, but so did something quieter, a real curiosity about what happens to the puppies after the session ends. That last thread ended up shaping the adoption focus more than anything else in the research."
  },
  {
    date: "11/27/2024",
    title: "Google Sheet Created",
    sub: "1 hour",
    content:
      "With responses coming in from different interviews, I needed a way to actually compare them side by side rather than relying on memory or scattered notes. I built a spreadsheet to track responses against each screener question, which made it much easier to spot when three or four people independently said the same thing, rather than assuming a pattern existed."
  },
  {
    date: "12/10/2024",
    title: "Figma File Created — Part 1",
    sub: "5 hours",
    content:
      "With the research patterns clear, I moved into high fidelity design in Figma. The beginner friendly and cost conscious feedback shaped a lot of early layout decisions, things like keeping pricing visible early rather than buried, and using visual hierarchy to make the space feel approachable rather than intimidating for someone who'd never done yoga before. Typography and spacing choices followed the same logic: warm, but not so playful that it undercut trust."
  },
  {
    date: "12/12/2024",
    title: "Figma File Finished — Part 2",
    sub: "5 hours",
    content:
      "The second pass was about consistency: making sure a button looked and behaved the same way whether someone was on the booking page or scrolling through puppy profiles. Small inconsistencies like that are easy to miss individually, but they add up to a site that feels unfinished, so I went screen by screen checking spacing, component states, and interaction patterns against each other before calling the file complete."
  },
  {
    date: "06/03/2026",
    title: "Project Kickoff",
    sub: "3 hours",
    content:
      "I started by asking a basic question: who is this actually for? Not dog lovers broadly, since that's too vague to design around, but specifically people who might want a mental health boost, might be curious about adoption, and might be put off by traditional wellness spaces that feel expensive or intimidating. Narrowing that down early gave me something concrete to check every later decision against."
  },
  {
    date: "06/04/2026",
    title: "Lo-Fi Redesign",
    sub: "1.5 hours",
    content:
      "With the audience clear, I moved into low fidelity wireframes, mapping out the core flows someone would actually need: browsing and booking a class, moving between pages without getting lost, and logging back in easily if they'd used the site before. Keeping the login simple mattered particularly, since anything that felt like friction here risked losing someone who was already nervous about trying something new."
  },
  {
    date: "06/08/2026",
    title: "Lo-Fi Iteration",
    sub: "2.5 hours",
    content:
      "The favouriting feature needed some rethinking, since the first version didn't make it obvious what happened after you tapped the heart icon. I reworked it and added a carousel to the class page so people could browse without a long, scrolling wall of options. Around the same time, it became clear the site needed a dedicated space just for the puppies themselves, not folded into a class description, since browsing potential companions felt like its own experience worth giving room to."
  },
  {
    date: "06/09/2026",
    title: "Lo-Fi Refinement",
    sub: "2.5 hours",
    content:
      "Testing the booking flow myself, I noticed it took more steps than it should to actually confirm a class, so I trimmed it down. Two things were still missing though: nowhere on the site actually explained the adoption process itself, which was supposed to be central to the whole concept, and there was no place to answer the smaller practical questions people would have before showing up. Adding the Adoption and FAQ pages closed that gap, but it also meant going back through the navigation to make sure everything still made sense together, not just as individual pages."
  },
  {
    date: "06/12/2026",
    title: "Lo-Fi Completed",
    sub: "2.5 hours",
    content:
      "With the booking flow fixed and the Adoption and FAQ pages in place, all six pages finally worked as one coherent site rather than a set of separate ideas. Before moving into visual design, I went through it one more time end to end, checking that someone could actually get from the homepage to booking a class, or from browsing puppies to understanding how adoption worked, without hitting a dead end."
  },
  {
    date: "07/05/2026",
    title: "Hi-Fi Design Begins",
    sub: "2 hours",
    content:
      "Moving into high fidelity, design and writing needed to happen together, not separately, since the tone of the copy had to match the warmth I was building visually. If the layout felt playful and approachable but the copy read stiff or corporate, the whole thing would feel disjointed. I worked through both at the same time, testing how actual sentences looked inside real components rather than designing empty boxes and filling them with placeholder text later."
  },
  {
    date: "07/08/2026",
    title: "Development Starts",
    sub: "3 hours",
    content:
      "Rather than finishing every screen in Figma before touching code, I started building the landing page in the browser while design was still ongoing. Some things that looked fine as a static mockup didn't quite work once they were actually scrollable and interactive, spacing that felt right in Figma sometimes felt cramped once real content and animation were in motion. Catching that early, in code, saved me from redesigning things twice."
  },
  {
    date: "07/18/2026",
    title: "Website Completed",
    sub: "5 hours",
    content:
      "With the landing page pattern established, building out the remaining five pages moved faster, since a lot of the layout logic and component styling could carry over directly. The bigger challenge was responsiveness: making sure the scroll animations and carousel still felt smooth on a phone screen, not just the desktop view I'd been testing on the whole time. Once every page held up across screen sizes, the site felt genuinely finished, not just built."
  },
  {
    date: "07/19/2026",
    title: "Finalisation",
    sub: "5 hours",
    content:
      "The last pass was the least glamorous but arguably the most important: reading every line of copy out loud to catch anything that still sounded stiff, illustrating custom icons for each class level so the site didn't rely on generic stock imagery, and going page by page fixing the small inconsistencies that only show up once you've stared at something for weeks. None of these changes were dramatic on their own, but together they were the difference between a project that looked done and one that actually was."
  },
];

const PuppyTimeLine = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const eventsRef = useRef([]);

  useEffect(() => {
    if (eventsRef.current[selectedIndex]) {
      eventsRef.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  return (
    <section className="w-full p-3 
      sm:w-[23rem]
      md:w-[40rem] mx-auto
      lp:w-[55rem]
      lg:w-[75rem]
      font-vcr
      ">
      {/* Title */}
      
      <div className=" justify-self-center"> 
        <h1 className="flex justify-center text-purple-400 underline decoration-dashed
        sm:text-[1.7rem] sm:w-[23rem] sm:justify-center
      md:text-[3rem] md:w-[35rem] md:mb-[3rem] 
      lp:text-[2.8rem] lp:w-[40rem]
      lg:text-[4.5rem] lg:pb-[2rem] lg:w-[50rem]
      ">
        Working Timeline:
      </h1>
     </div>

        <div className=" justify-self-center"> 
      <h2 className="flex text-center text-purple-400 underline decoration-dashed
      sm:text-[1.3rem] sm:pb-[1rem] sm:justify-center
      md:text-[2rem] md:w-[35rem] md:mb-[2rem]
      lp:justify-center lp:text-[1.8rem] lp:w-[50rem]
      lg:text-[3rem] lg:pb-[2rem] lg:w-[65rem]
      ">
        Total hours: <span className="text-red-600">46 hours</span>
      </h2>
      </div>

      <div className="relative flex items-center justify-center 
      sm:w-[20rem]
      md:w-[40rem] md:justify-self-center
      lp:w-[70rem] 
      lg:w-[75rem] 
      ">
        {/* Timeline line */}
        <div className="absolute top-1/2 w-full border-t-[.4rem] border-purple-300 border-dashed -translate-y-1/2
        sm:w-[20rem]
        md:w-[40rem]
        lp:w-[55rem]
        lg:w-[70rem]
        "></div>

        {/* Events */}
        <div className="flex space-x-10 overflow-x-auto py-4
        sm:w-[20rem] sm:mx-auto 
        md:w-[40rem] md:mx-auto
        lp:w-[55rem] lp:gap-[4rem]
        lg:w-[80rem]  lg:gap-[5rem]
        ">
          {events.map((event, idx) => (
            <div
              key={idx}
              ref={(el) => (eventsRef.current[idx] = el)}
              onClick={() => setSelectedIndex(idx)}
              className={`flex flex-col items-center cursor-pointer transition-transform duration-300 ${
                selectedIndex === idx ? "scale-110" : "scale-100"
              }`}
            >
              {/* Diamond shape */}
              <div
                className={`w-6 h-6 transform rotate-45 border-4 border-purple-200
                  md:w-[2rem] md:h-[2rem] md:ml-[1rem] 
                  lg:w-[3rem] lg:h-[3rem] lg:mb-[4rem]
                  ${selectedIndex === idx ? "bg-orange-300" : "bg-white"}`}
              ></div>

              {/* Date label */}
              <span
                className={`mt-2 text-sm text-center 
                  sm:pt-[2rem] sm:ml-2
                  md:text-[1.5rem]
                  lp:text-[1.8rem] 
                  lg:text-[1.8rem] lg:mb-[2rem]
                  ${selectedIndex === idx ? "text-orange-400" : "text-purple-500"}`}
              >
                {event.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Event content */}
<div className="border-t mt-6 pt-4 mx-auto
sm:w-[20rem]
md:w-[40rem] md:text-[2rem] 
lp:w-[55rem]
lg:w-[75rem]
">
  <h2 className="text-xl font-semibold text-purple-500 
    sm:text-[1.3rem] 
    md:text-[2rem] md:pb-5 md:leading-[2.6rem]
    lp:text-[2rem] lp:pb-5 lp:leading-[2.5rem]
    lg:text-[3rem] lg:pb-[2rem] lg:pt-[2rem] lg:leading-[3.8rem]
  ">{events[selectedIndex].title}</h2>

  <h3 className="text-sm text-orange-600 
    sm:text-[1.2rem] sm:pt-[1rem]
    md:text-[1.8rem]
    lp:text-[1.5rem]
    lg:text-[3rem] lg:pb-5
  ">{events[selectedIndex].sub}</h3>

  <p className="mt-2 text-purple-700 font-Dos
  sm:pb-[2rem]
    md:mt-5 md:text-[2rem]
    lp:text-[1.8rem]
    lg:text-[2.5rem] lg:pb-5 lg:leading-[5rem]
  ">{events[selectedIndex].content}</p>
</div>
    </section>
  );
};

export default PuppyTimeLine;