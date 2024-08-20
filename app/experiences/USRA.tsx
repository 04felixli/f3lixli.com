import React from 'react'
import ExperienceCard from './ExperienceCard'
import { USRAExperience } from '../Objects/ExperienceObjects'

const Rogers = () => {
    return (
        <ExperienceCard experience={USRAExperience}>
            <ul className='list-disc list-outside ml-5'>
                <li>
                    Contributed to a PhD student&#39;s research on estabilishing a pipeline to generate groundtruths for <span className='font-bold'>template based log
                        parsing</span> of large scale log data from various software systems under the supervision of Dr. W. Shang.
                </li>
                <li>
                    Generated a user study for <span className='font-bold'>20 participants</span> to identify discrepancies between automatically generated log templates and
                    user perceptions, leading to improved log parsing techniques.
                </li>
                <li>
                    Saved <span className='font-bold'>10+ hours weekly</span> by developing <span className='font-bold'>Python scripts</span> to analyze over <span className='font-bold'>2 million</span> log entries and templates from <span className='font-bold'>12 </span>
                    different software systems, streamlining data collection for the study.
                </li>
            </ul>
        </ExperienceCard>
    )
}

export default Rogers
