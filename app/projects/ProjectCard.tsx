"use client"
import React, { useState, useEffect } from 'react';
import { ProjectObject } from '../Objects/ProjectObjects';
import ReactCardFlip from 'react-card-flip';
import './projectCard.css';
import '../experiences/experiences.css';
import { FiGithub } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

interface Props {
    project: ProjectObject;
}

const ProjectCard = ({ project }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsFlipped(true);
        }
    }

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsFlipped(false);
        }
    }

    const handleClick = () => {
        if (isMobile) {
            setIsFlipped(!isFlipped);
        }
    }

    useEffect(() => {
        // Optionally, reset flip state on resize if you want to ensure consistency
        setIsFlipped(false);
    }, [isMobile]);

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div
                className='w-full mb-3 break-inside-avoid border border-[#ccc] rounded-md shadow-lg z-50 relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
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
                onClick={handleClick}
            >
                <img
                    src={project.imagePath}
                    alt={`${project.name} Image`}
                    className='w-full object-contain rounded-md blur-sm'
                />
                <div className='overlay p-5 h-full'>

                    <div className='w-full flex max-[349px]:flex-col min-[350px]:flex-row justify-between'>
                        <a href={project.gitHubLink} target="_blank" className="w-8 min-[350px]:hidden flex-shrink-0">
                            <FiGithub className='w-full h-full' />
                        </a>
                        <h3 className='timeline-title w-full break-words'>{project.name}</h3>
                        <a href={project.gitHubLink} target="_blank" className="w-8 max-[349px]:hidden flex-shrink-0">
                            <FiGithub className='w-full h-full' />
                        </a>
                    </div>
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
        </ReactCardFlip>
    );
}

export default ProjectCard;
