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
            className='w-full mb-3 break-inside-avoid rounded-md shadow-lg relative hover:scale-[1.02] duration-300 ease-in-out cursor-pointer hover:z-20'
            onClick={() => window.open(project.gitHubLink, '_blank')}
        >
            <img
                src={project.imagePath}
                alt={`${project.name} Image`}
                className='w-full object-contain rounded-md blur-sm'
            />
            <div className='overlay p-5 h-full rounded-md'>
                <h3 className='w-full flex timeline-title w-full break-words'>{project.name}</h3>
                <p className='text-sm w-full max-[270px]:hidden'>{project.description}</p>
                <ul className='tech-stack w-full max-sm:hidden'>
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