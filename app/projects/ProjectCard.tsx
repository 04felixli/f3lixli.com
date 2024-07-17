"use client"
import React, { useState } from 'react';
import { ProjectObject } from '../Objects/ProjectObjects';
import ReactCardFlip from 'react-card-flip';
import './projectCard.css';
import '../experiences/experiences.css';
import { FiGithub } from 'react-icons/fi';

interface Props {
    project: ProjectObject;
}

const ProjectCard = ({ project }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        setIsFlipped(true);
    }

    const handleMouseLeave = () => {
        setIsFlipped(false);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div
                className='w-full mb-3 break-inside-avoid border border-[#ccc] rounded-md shadow-lg z-50 relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={project.imagePath}
                    alt={`${project.name} Image`}
                    className='w-full object-contain rounded-md'
                />
            </div>

            <div
                className='w-full mb-3 break-inside-avoid border border-[#ccc] rounded-md shadow-lg z-50 relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={project.imagePath}
                    alt={`${project.name} Image`}
                    className='w-full object-contain rounded-md blur-sm'
                />
                <div className='overlay p-5 h-full'>
                    <div className='w-full flex flex-row'>
                        <h3 className='timeline-title w-full'>{project.name}</h3>
                        <a href={project.gitHubLink} target="_blank" className="w-8">
                            <FiGithub className='w-full h-full' />
                        </a>
                    </div>
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
        </ReactCardFlip>
    );
}

export default ProjectCard;
