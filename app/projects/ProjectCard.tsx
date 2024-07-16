import React from 'react';
import { ProjectObject } from '../Objects/ProjectObjects';

interface Props {
    project: ProjectObject;
}

const ProjectCard = ({ project }: Props) => {
    return (
        <div className='w-full mb-3 break-inside-avoid border border-[#ccc] rounded-md shadow-lg'>
            <img
                src={project.imagePath}
                alt={`${project.name} Image`}
                className='w-full object-contain rounded-md'
            />
        </div>
    );
}

export default ProjectCard;
