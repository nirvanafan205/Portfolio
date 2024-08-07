import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="change this with Melomix Project"
        />

        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="change this with COMP 484 Project"
        />

        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="change this with Pokeshop Project"
        />

        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="change this with Coaching Dashboard Project"
        />
      </div>
    </div>
  );
};

export default Projects;
