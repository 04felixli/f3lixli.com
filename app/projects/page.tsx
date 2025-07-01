import React from 'react'
import Layout from '../components/util/layout'
import { ChessProject, McCheatDay, NBAMatchPredictor, SlimPossible } from '../Objects/ProjectObjects'
import ProjectCard from './ProjectCard'
import { Pages } from '../components/NavBar/NavBar'

const Projects = () => {
    const projects = [SlimPossible, ChessProject, NBAMatchPredictor, McCheatDay];

    return (
        <Layout currentPage={Pages.projects} pageName="Projects">
            <div className="w-full h-full mt-5 columns-1 md:columns-2 space-y-5">
                {projects.map(project => (
                    <div key={project.name} className="break-inside-avoid">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Projects
