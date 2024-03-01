import React, { useState } from "react";
import Button from "./Button";

const Projects = () => {
  const [selectedId, setSelectedId] = useState("1");

  const toggleSelect = (e) => {
    setSelectedId(e.currentTarget.id);
  };
  return (
    <section
      id="projects"
      className="bg-projects-texture px-[4.5rem] py-20 mt-16"
    >
      <div className="flex flex-col gap-6 w-1/2">
        <div>
          <h2 className="text-5xl font-bold text-text-primary">
            My <span className="text-primary">Projects.</span>
          </h2>
        </div>
        <div className="flex gap-4 w-full">
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
      </div>
      <div className="flex gap-10 w-full items-center justify-evenly">
        {/* <ProjectCard/> */}
      </div>
    </section>
  );
};

export default Projects;
