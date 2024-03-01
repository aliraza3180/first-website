import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="flex justify-between xl:justify-around xl:py-24 xl:px-32 px-24 py-20 mt-8">
      <div className="flex flex-col gap-8 mt-12 ">
        <div className="uppercase text-text-primary text-5xl xl:text-7xl font-bold ">
          <p>
            Creative UI <br />
            <span className="text-primary">Developer</span>
          </p>
        </div>

        <div className="flex gap-4 z-10">
          <Button
            title="Hire Me"
            type={"primary"}
            buttonType={"button"}
            href={"#contact"}
          />
          <Button
            title="Download CV"
            type={"secondary"}
            buttonType={"button"}
          />
        </div>
      </div>

      <div className="mt-8 xl:mr-10 -mr:10 xl:scale-125 ">
        <img src="/hero-img-bg.png" alt="" className="shadow-lg shadow-black" />
        <img src="/working-person.png" alt="" className="-mt-60 -ml-8" />
      </div>
    </section>
  );
};

export default Hero;
