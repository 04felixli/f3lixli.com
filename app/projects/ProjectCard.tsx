"use client"
import React from 'react';
import { ProjectObject } from '../Objects/ProjectObjects';
import './projectCard.css';
import '../experiences/experiences.css';
import { FiGithub } from 'react-icons/fi';

interface Props {
    project: ProjectObject;
}

const ProjectCard = ({ project }: Props) => {
    return (
        <div 
            className='w-full rounded-md shadow-lg border'
            onClick={() => window.open(project.gitHubLink, '_blank')}
        >
            <div className='p-5 h-full w-full hover:scale-[1.02] duration-300 ease-in-out cursor-pointer'>
                <h3 className='w-full flex timeline-title break-words'>{project.name}</h3>
                <p className='text-sm w-full'>{project.description}</p>
                <ul className='tech-stack w-full'>
                    {project.techStack.map((tech, index) => (
                        <li key={index} className='tech-item'>
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
                
        </div>
    );
}

export default ProjectCard;