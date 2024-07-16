import React from 'react'
import Layout from '../components/util/layout'
import { ChessProject, SlimPossible } from '../Objects/ProjectObjects'
import ExperienceCard from './ExperienceCard'
import { RIFOExperience, RogersExperience } from '../Objects/ExperienceObjects'
import { Pages } from '../components/NavBar/NavBar'

const Experiences = () => {
    const experiences = [RIFOExperience, RogersExperience];
    return (
        <Layout currentPage={Pages.experiences} pageName='Experiences'>
            <ul className='mt-5'>
                {experiences.map(experience => (
                    <li key={experience.companyName}>
                        <ExperienceCard experience={experience} />
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

export default Experiences