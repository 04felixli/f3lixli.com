import React from 'react'
import ExperienceCard from './ExperienceCard'
import { RogersExperience } from '../Objects/ExperienceObjects'

const Rogers = () => {
    return (
        <ExperienceCard experience={RogersExperience}>
            <ul className='list-disc list-outside ml-5'>
                <li>
                    Improved the reliability of fiber optic transport links through collaborative testing and troubleshooting using <span className='font-bold'>RFC 2544</span> and <span className='font-bold'>BERT</span> tests.
                </li>
                <li>
                    Contributed holistically to all Rogers customers, working with <span className='font-bold'>GSM (2G)</span>, <span className='font-bold'>UMTS (3G)</span>, <span className='font-bold'>LTE (4G)</span>, and <span className='font-bold'>5G</span> technologies.
                </li>
            </ul>
        </ExperienceCard>
    )
}

export default Rogers
