import React from "react";

const About = () => {
  return (
    <section
      className="flex justify-between xl:justify-around mt-16 px-[4.25rem] "
      id="about"
    >
      <div className="flex flex-col gap-4">
        <h2 className="flex items-end text-4xl font-bold text-text-primary xl:text-5xl">
          About <span className="text-primary">me.</span>
          <img src="lightbulb.png" alt="" width={64} height={64} />
        </h2>
        <p className="text-text-primary xl:text-lg text-sm text-nowrap">
          Driven web developer with a knack for translating <br />
          concepts into dynamic digital solutions. Proficient in <br />
          both front-end and back-end technologies, dedicated to <br />
          crafting engaging user experiences. Let's partner to <br />
          transform your vision into a compelling online presence.
        </p>
      </div>
      <div>
        <img src="about-bg-img.png" alt="" className="scale-[1.175]" />
        <img src="sitting-person.png" alt="" className="-mt-40 scale-[0.9]" />
      </div>
    </section>
  );
};

export default About;
