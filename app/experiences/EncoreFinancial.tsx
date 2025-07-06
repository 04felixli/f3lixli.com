import React from 'react'
import ExperienceCard from './ExperienceCard'
import { EncoreFinancialExperience } from '../Objects/ExperienceObjects'

const EncoreFinancial = () => {
    return (
        <ExperienceCard experience={EncoreFinancialExperience}>
            <ul className='list-disc list-outside ml-5'>
                <li>
                    Building a full-stack fintech application suite with features including real-time portfolio tracking, investment research
                    tools, and AI-powered insights.
                </li>
            </ul>
        </ExperienceCard>
    )
}

export default EncoreFinancial
