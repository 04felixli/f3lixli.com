import React from 'react'
import ExperienceCard from './ExperienceCard'
import { USRAExperience } from '../Objects/ExperienceObjects'

const Rogers = () => {
    return (
        <ExperienceCard experience={USRAExperience}>
            <ul className='list-disc list-outside ml-5'>
                <li>
                    Conducted research to optimize log analysis of large scale log data from various software systems by establishing a
                    pipeline to generate ground truths for <span className='font-bold'>template based log parsing</span>.
                </li>
                <li>
                    Saved <span className='font-bold'>10+ hours weekly</span> by developing <span className='font-bold'>Python scripts</span> to analyze over <span className='font-bold'>2 million</span> log entries and templates from <span className='font-bold'>12 </span>
                    different software systems, streamlining data collection for the study.
                </li>
                <li>
                    Generated a user study for <span className='font-bold'>20 participants</span> to identify discrepancies between automatically generated log templates and
                    user perceptions, leading to improved log parsing techniques.
                </li>
            </ul>
        </ExperienceCard>
    )
}

export default Rogers
