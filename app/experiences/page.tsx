import React from 'react'
import Layout from '../components/util/layout'
import { ChessProject, SlimPossible } from '../Objects/ProjectObjects'
import ExperienceCard from './ExperienceCard'
import { RIFOExperience, RogersExperience } from '../Objects/ExperienceObjects'

const Experiences = () => {
    const experiences = [RIFOExperience, RogersExperience];
    return (
        <Layout pageName='Experiences'>
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