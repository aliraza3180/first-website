import React, { useState } from "react";
import Button from "./Button";
import ProjectCard from "./ProjectCard";
import projects from "../assets/projects.json";

const Projects = () => {
  const [selectedId, setSelectedId] = useState("1");

  const toggleSelect = (e) => {
    setSelectedId(e.currentTarget.id);
  };
  return (
    <section
      id="projects"
      className="bg-projects-texture flex md:justify-between xl:justify-around md:px-[4.5rem] pb-44 pt-10 mt-16 justify-center items-center"
    >
      <div className="flex flex-col gap-6 w-[-60%] xl:w-full z-10">
        <div>
          <h2 className="text-5xl font-bold text-text-primary xl:ml-7">
            My <span className="text-primary text-4xl">projects.</span>
          </h2>
        </div>
        <div className="grid xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-10 justify-center  2xl:scale-125 items-center xxs:mt-[5rem] 2xl:mt-[9rem] mx-auto">
          {projects.map((item) => (
            <ProjectCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
