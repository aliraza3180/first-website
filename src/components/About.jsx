import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { slideAnimation } from "../utils/motion";
const About = () => {
  return (
    <section
      className="flex justify-between xl:justify-around mt-16 xs:px-16 xxs:px-8 md:px-24"
      id="about"
    >
      <motion.div
        className="flex flex-col gap-4 xl:w-full xs:w-[60%] lg:w-[67%]"
        {...slideAnimation("left")}
        // initial={{ x: -500 }}
        // animate={{ x: 0 }}
        // transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <h2 className="flex items-end text-4xl font-bold text-text-primary xl:text-5xl">
          About
          <span className="text-primary">&nbsp;me.</span>
          <img src="lightbulb.png" alt="" width={64} height={64} />
        </h2>
        <p className="text-text-primary xl:text-lg text-sm font-[100] xxs:text-sm sm:text-base">
          Driven web developer with a knack for translating concepts into
          dynamic digital solutions. Proficient in both front-end and back-end
          technologies, dedicated to crafting engaging user experiences. Let's
          partner to transform your vision into a compelling online presence.
        </p>
      </motion.div>
      <motion.div
        className="xxs:hidden sm:block sm:scale-90 md:scale-100"
        {...slideAnimation("right")}
      >
        <img src="about-bg-img.png" alt="" className="scale-[1.175]" />
        <img src="sitting-person.png" alt="" className="-mt-40 scale-[0.9]" />
      </motion.div>
    </section>
  );
};

export default About;
