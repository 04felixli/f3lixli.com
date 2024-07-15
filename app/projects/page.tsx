import React from 'react'
import Layout from '../components/util/layout'
import { ChessProject, SlimPossible } from '../Objects/ProjectObjects'
import ProjectCard from './ProjectCard';
import './projects.css'; // Import your CSS file

const Projects = () => {
    const projects = [SlimPossible, ChessProject];

    return (
        <Layout pageName='Projects'>
            <ul className='grid-container'>
                {projects.map(project => (
                    <li key={project.name}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default Projects