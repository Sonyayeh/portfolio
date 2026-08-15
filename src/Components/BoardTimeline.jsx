import React, { useState, useRef, useEffect } from "react";

const events = [
 {
  date: "07/12/2024",
  title: "Choosing the Harder Path",
  sub: "20 minutes",
  content:
    "Roles got split five ways: project manager, email template designer, web designer, graphic designer, app designer. I chose app on purpose, not because I had experience with it, but because I didn't, and designing a retail and rental system from scratch, with real logic behind bookings and checkout, felt like the harder, more useful thing to learn. We worked in waterfall, which suited me: defined phases, one thing finished before the next began, no ambiguity about what stage we were in. Before anything else, we landed on a name, Boardwalk Boutique, stylish, modern, meant to read as Vancouver's best spot for skate and board rentals."
},
{
  date: "07/15/2024",
  title: "Setting the Structure",
  sub: "30 minutes",
  content:
    "I set up the Figma file the same day, while Courtney, our project manager, built out a spreadsheet mapping every meeting, agenda, and deliverable against a real date. That structure mattered more than it might sound like on paper, five people working in waterfall only functions if everyone actually knows what's due when, and Courtney kept that visible the whole way through."
},
{
  date: "07/19/2024",
  title: "Learning From What Already Works",
  sub: "1 hour",
  content:
    "My first sketches didn't work, and I knew it immediately, more instinct than reasoning at that point. Having never designed an app before, I turned to what I already used daily: Uber, Amazon, YesStyle. YesStyle's homepage stuck out, it leads with a grid of brands, which solves a real problem for someone renting for the first time and having no idea what brands are good. If they don't know what to look for, showing them options is more useful than asking them to search. I built our homepage around that same logic, a brand grid populated with input from Vahan, our graphic designer and the actual skateboarding expert on the team, a promotional carousel up top, and a clear contact and location section so people could actually find the shop."
},
{
  date: "07/24/2024",
  title: "Realizing What Was Missing",
  sub: "1 hour",
  content:
    "Sketching the wireframe, I noticed a gap: everything read purely transactional, browse, rent, pay, with nothing that actually made someone trust the boutique before handing over money. So I added a simple About section to the homepage, something human before something commercial. I brought it to Courtney and Karleil, our web designer, to check the app and web layouts weren't drifting apart visually, since people would likely encounter both."
},
{
  date: "07/26/2024",
  title: "Learning to Ask for Feedback",
  sub: "3 hours",
  content:
    "The team responded well to the grid system, especially for someone who's indecisive, seeing options helps more than searching for them. I pushed the idea further: what if people could actually see the boards, not just brand names? Visuals do more work than words, especially for something as visual as a skateboard. Vahan supplied photos across brands and merch, shirts, knee protection, helmets, socks. I had to hold back the temptation to include everything though, nine brands at three boards each is already 27 photos before merch even enters the picture, so keeping the list manageable became its own decision. This stage was really about learning to lean on the team's feedback rather than guess alone, since I had no real app design experience to fall back on, and their input caught things I wouldn't have noticed on my own."
},
{
  date: "07/30/2024",
  title: "Building Out What a Real Rental Flow Actually Needs",
  sub: "3 hours",
  content:
    "Once the homepage existed, the product page followed naturally, the whole point of the app is renting boards and selling gear. From there, each addition came from asking what a real transaction actually requires: a rental flow without payment or order confirmation isn't a rental flow, it's a mockup. An app without reviews ignores how people actually decide what to trust before paying. And since everything sits behind a personal account, login and logout weren't optional; they were the baseline. Adding these wasn't about padding the app with features, it was about not leaving obvious gaps in something meant to function like the real thing."
},
{
  date: "08/02/2024",
  title: "Following the System",
  sub: "3 hours",
  content:
    "With the sketches and Vahan's style guide already established, this stage was mostly disciplined execution rather than new decisions, translating wireframes into high fidelity, applying the same visual system consistently across every page. Less about invention, more about making sure nothing drifted from what had already been agreed on."
},
{
  date: "08/07/2024",
  title: "Making the Homepage Feel Real",
  sub: "3 hours",
  content:
    "I finished the homepage prototype, adding the details that separate a static mockup from something that feels like an actual app: a sliding animation, a background colour shift when a brand is selected from the grid, an animated top banner carousel. These weren't decorative extras, they were meant to signal that tapping something actually does something, which matters more in a rental flow than it might elsewhere."
},
{
  date: "08/10/2024",
  title: "A Deadline Scare, and Real Feedback",
  sub: "9 hours",
  content:
    "My memory isn't great, and that day I was convinced everything was due the following week. So I crammed, every remaining page and feature besides the homepage, finished in one sitting. In the middle of that, I ran informal user testing with friends, and unexpectedly, one of their grandfathers. His feedback ended up being some of the most useful I got: some text was simply too small for him to read comfortably, a detail I might not have caught testing only with people my own age. I sent the build to the team's Discord after that. Vahan liked the aesthetic, Karleil liked how smooth the flow felt, Daniel, our email template developer, responded to the colour choices and Vahan's logo work, and Courtney was surprised by how quickly the whole thing had come together. Turns out the actual deadline was two weeks out, not one. I choose to take that as a scheduling win rather than a memory failure, it meant extra room to work on something else in the meantime."
},
{
  date: "08/13/2024",
  title: "A Team Worth Being Grateful For",
  sub: "1.5 hours",
  content:
    "The last stretch was smaller work: refining the About Us text, minor adjustments across the app, finishing the presentation document and required questionnaires. Nothing dramatic, but the kind of detail that separates a finished project from a nearly finished one. This wasn't the first time I'd worked with Courtney, Karleil, Vahan, and Daniel, and it wouldn't be the last. Every project with them has run smoothly in a way that's honestly hard to take for granted, clear roles, real trust, feedback given without ego. Some of that is luck, but a lot of it is just them."
},
{
  date: "05/02/2026",
  title: "Development Begins: Picking Up the Project Alone",
  sub: "4.5 hours",
  content:
    "Development started in May 2026, a year after the original design phase wrapped, and this time it was just me. What had been a five person effort in Figma became a solo build in React Native, translating screens Vahan, Karleil, Courtney, and Daniel had all touched into actual working code. The first stretch, roughly four hours in, got the homepage and checkout working, including features that only really exist once code is involved: a heart icon to save items, a cart that updates its total dynamically based on whatever's actually been added, and Vancouver's real tax rate applied to the final price, calculated for where I actually am, not a placeholder number."
},
];

const BoardTimeline = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const eventsRef = useRef([]);

  // Scroll to selected event (horizontal only, no vertical jump)
  useEffect(() => {
    if (eventsRef.current[selectedIndex]) {
      eventsRef.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest", // prevents vertical scrolling
      });
    }
  }, [selectedIndex]);

  return (
    <section className="w-full
    sm:w-[20rem] sm:justify-self-center 
    md:w-[45rem] 
    lp:w-[70rem]
    font-vcr
    ">
      {/* Title */}
      <h1 className="flex justify-self-center text-purple-400 underline decoration-dashed
        sm:text-[1.7rem] sm:w-[23rem] sm:justify-center
      md:text-[3rem] md:w-[35rem] md:mb-[3rem] 
      lp:text-[2.8rem] lp:w-[30rem]
      lg:text-[4.5rem] lg:pb-[2rem] lg:w-[50rem]">
        Work Timeline
      </h1>

      <div className=" justify-self-center"> 
      <h2 className="flex text-center text-purple-400 underline decoration-dashed
      sm:text-[1rem] sm:pb-[1rem] sm:w-[21rem]
      md:text-[2rem] md:w-[35rem] md:mb-[2rem]
      lp:justify-center lp:text-[1.8rem] lp:w-[50rem]
      lg:text-[3rem] lg:pb-[2rem] lg:w-[65rem]
      ">
        Total hours: <span className="text-red-600">29.5 hours & counting...</span>
      </h2>
      </div>

      <div className="relative flex items-center justify-center 
      justify-self-center
      sm:w-[19rem]
      md:w-[36rem]
      lp:w-[60rem] 
      lg:w-[70rem]
      ">
        {/* Timeline line */}
        <div className="absolute top-1/2 w-full border-t-[.4rem] border-purple-300 border-dashed -translate-y-1/2 
        md:w-[38rem] md:justify-start 
        lp:w-[60rem]
        lg:w-[70rem]
        "></div>

        {/* Events */}
      <div className="flex space-x-10 overflow-x-auto py-4
          md:w-[36rem] md:mx-auto 
          lp:w-[54rem] lp:mx-auto
          lg:w-[70rem] lg:gap-[5rem]
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
                  md:w-[2rem] md:h-[2rem] 
                  lg:w-[3rem] lg:h-[3rem] lg:mb-[4rem]
                  ${
                  selectedIndex === idx ? "bg-orange-300" : "bg-white"
                }`}
              ></div>

              {/*This is the note on the bottom part of the diamond */}
             <span
              className={`mt-2 text-sm text-center 
                sm:pt-[2rem] 
                md:text-[1.5rem]
                lp:text-[2rem] 
                lg:text-[2.5rem] lg:mb-[2rem]
                ${
                selectedIndex === idx ? "text-orange-400" : "text-purple-500"
              }`}
            >
              {event.date}
            </span>
              
            </div>
          ))}
        </div>
      </div>

      {/* Event content */}
      <div className="border-t mt-6 pt-4
      justify-self-center
      ">
        {/* this is the title of what each section is about*/}
        <h2 className="text-xl font-semibold text-purple-500
        sm:text-[1.3rem] 
        md:text-[2rem] md:pb-5 md:leading-[2.6rem] md:w-[45rem]
          lp:text-[2.5rem] lp:pb-5  lp:leading-[3.2rem] lp:w-[55rem]
          lg:text-[3rem] lg:pb-[2rem] lg:pt-[2rem] lg:leading-[3.8rem] lg:w-[67rem] 
        ">{events[selectedIndex].title}</h2>

        {/* this is the duration of how long it took me to do each process*/}
        <h3 className="text-sm text-orange-600
        
        md:text-[1.8rem] 
        lg:text-[2.5rem] lg:pb-5 lg:leading-[3.8rem] lg:w-[67rem]
        ">{events[selectedIndex].sub}</h3>

        {/* this is the content section */}
        <p className="mt-2 text-purple-700
        md:mt-5 md:text-[2rem]  md:w-[46rem]
        lp:w-[55rem] lp:text-[1.5rem]
        lg:text-[2rem] lg:pb-5 lg:leading-[5rem] lg:w-[74rem]
        
        ">{events[selectedIndex].content}</p>
      </div>
    </section>
  );
};

export default BoardTimeline;