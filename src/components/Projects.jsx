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
      className="bg-projects-texture flex justify-between xl:justify-around px-[4.5rem] py-28 mt-16 "
    >
      <div className="flex flex-col gap-6 w-[-60%] xl:w-full z-10">
        <div>
          <h2 className="text-5xl font-bold text-text-primary xl:ml-7">
            My <span className="text-primary text-4xl">projects.</span>
          </h2>
        </div>
        <div className="flex gap-4 w-full text-nowrap xxs:text-xs xs:text-base my-2 lg:ml-7">
          <Button
            id={"1"}
            title={"All"}
            onClick={toggleSelect}
            type={selectedId === "1" ? "primary" : "secondary"}
          />
          <Button
            id={"2"}
            title={"UI"}
            onClick={toggleSelect}
            type={selectedId === "2" ? "primary" : "secondary"}
          />
          <Button
            id={"3"}
            title={"UX"}
            onClick={toggleSelect}
            type={selectedId === "3" ? "primary" : "secondary"}
          />
          <Button
            id={"4"}
            title={"Web Design"}
            onClick={toggleSelect}
            type={selectedId === "4" ? "primary" : "secondary"}
          />
        </div>
        <div className="grid xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-24 gap-12 justify-center mt-32 2xl:scale-125 items-center xxs:mt-20 mx-auto">
          {projects.map((item) => (
            <ProjectCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
