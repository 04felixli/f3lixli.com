"use client";
import React from "react";
import { ProjectObject } from "../Objects/ProjectObjects";
import "./projectCard.css";
import "../experiences/experiences.css";
import { FiGithub } from "react-icons/fi";

interface Props {
  project: ProjectObject;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className="w-full rounded-md shadow-lg border bg-yellow-100 p-5 relative"
      style={{ transform: "rotate(-2deg)" }}
      onClick={() => window.open(project.gitHubLink, "_blank")}
    >
      {/* Tape effect */}
      <div className="hover:-translate-y-1 duration-300 ease-in-out cursor-pointer">
        <h3 className="w-full flex timeline-title break-words">
          {project.name}
        </h3>
        <p className="text-sm w-full">{project.description}</p>
        <ul className="tech-stack w-full">
          {project.techStack.map((tech, index) => (
            <li key={index} className="tech-item">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
