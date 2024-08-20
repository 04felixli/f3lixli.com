import React from 'react'
import ExperienceCard from './ExperienceCard'
import { RIFOExperience } from '../Objects/ExperienceObjects'

const RIFO = () => {
    return (
        <ExperienceCard experience={RIFOExperience}>
            <ul className='list-disc list-outside ml-5'>
                <li>
                    Enhanced realtor efficiency by collecting, processing and visualizing <span className='font-bold'>real-time</span> housing market data from over <span className='font-bold'>2.5 million </span>
                    listings across diverse Canadian regions by leveraging <span className='font-bold'>React</span>, <span className='font-bold'>ASP.NET Core</span>, and a <span className='font-bold'>MySQL</span> database.
                </li>
                <li>
                    Facilitated seamless communication between front-end and back-end systems, enabling efficient data retrieval and
                    enhancing user experience by designing and implementing <span className='font-bold'>RESTful APIs</span>.
                </li>
                <li>
                    Optimized data retrieval, manipulation, and analysis, resulting in a notable reduction in processing times by <span className='font-bold'>95% </span>
                    through utilizing parallel processing and asynchronous programming techniques within data processing APIs.
                </li>
                <li>
                    Engineered a <span className='font-bold'>WinForms</span> desktop application using <span className='font-bold'>C#</span> and <span className='font-bold'>.NET Core</span> to display various company media on multiple
                    screens.
                </li>
            </ul>
        </ExperienceCard>
    )
}

export default RIFO
