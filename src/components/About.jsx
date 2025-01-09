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
        Hi, I'm Ali Raza, a passionate Frontend Developer and Web Developer with expertise in React.js, Redux.js, JavaScript, Tailwind CSS, WordPress, PHP, and Shopify. I specialize in building dynamic web apps and custom eCommerce stores that deliver seamless, engaging user experiences.

With a strong focus on UI/UX, responsive design, and performance optimization, I create solutions that are not only visually appealing but also functional and scalable. Whether you're looking to build a web app, a custom WordPress theme, or an eCommerce store, I'm dedicated to delivering high-quality, client-focused results.
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
