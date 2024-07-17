import React from 'react'
import Layout from '../components/util/layout'
import { ChessProject, SlimPossible } from '../Objects/ProjectObjects'
import ProjectCard from './ProjectCard';
import { Pages } from '../components/NavBar/NavBar';

const Projects = () => {
    const projects = [SlimPossible, ChessProject];

    return (
        <Layout currentPage={Pages.projects} pageName='Projects'>
            <ul className='w-full mt-5 columns-3 gap-5'>
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