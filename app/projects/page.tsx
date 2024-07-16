import React from 'react'
import Layout from '../components/util/layout'
import { ChessProject, SlimPossible } from '../Objects/ProjectObjects'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [SlimPossible, ChessProject];

    return (
        <Layout pageName='Projects'>
            <ul className='w-full mt-5 columns-2 gap-5'>
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