import React from "react";

const SelfIntro = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div
        className="
          w-full
          sm:p-0
          flex
          border-solid border-x-[1rem] border-b-[1rem] border-blue-200
          sm:w-[17rem] sm:ml-[8rem]
          md:p-3
        "
      >
        <div className="space-y-4 flex flex-col py-2 px-4 sm:px-1.5 w-full lg:flex-row">
          <h4
            className="
              sm:text-[0.5rem]
              md:text-[1.7rem]
              lg:text-[2rem]
            "
          >
            Hello, my name is Sonya! I am a Multi-media Designer and a graduate from
            the New Media Design + Web Development program at BCIT, and I have a
            passion for designing digital experiences that enhance people’s
            everyday lives.
            <br /><br />

            Ever since I was young, I dreamed about entering the art industry.
            Growing up in a traditional Asian family, it was difficult to express
            my interest in art and design, since it is viewed as a hobby and not a
            career path. I successfully convinced my family to allow me to study
            fine arts at the University of Victoria, and I graduated with a
            Bachelor Degree in Fine Arts.
            <br /><br />

            However, as times changed and technology began dominating the market,
            it became clear that having a Fine Arts degree alone is not enough.
            <br /><br />

            My passion lies in various forms of art and design, such as graphic
            design, UI/UX design, videography and photography, marketing, social
            media and content creation, and copywriting.
            <br /><br />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default SelfIntro;
