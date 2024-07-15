import React from 'react';
import { ProjectObject } from '../Objects/ProjectObjects';
import './projects.css'; // Import your CSS file

interface Props {
    project: ProjectObject;
}

const ProjectCard = ({ project }: Props) => {
    return (
        <div className='card'>
            <img
                src={project.imagePath}
                alt={`${project.name} Image`}
            />
        </div>
    );
}

export default ProjectCard;
