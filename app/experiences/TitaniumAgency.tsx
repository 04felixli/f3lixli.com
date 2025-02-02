import React from 'react'
import ExperienceCard from './ExperienceCard'
import { TitaniumExperience } from '../Objects/ExperienceObjects'

const TitaniumAgency = () => {
    return (
        <ExperienceCard experience={TitaniumExperience}>
            <ul className='list-disc list-outside ml-5'>
                <li>
                    Developed real-time automation algorithms using <span className='font-bold'>C#</span> and <span className='font-bold'>Flask</span> to optimize budget adjustments and ad pausing through API integrations.
                    Leveraged <span className='font-bold'>GCP BigQuery</span>, <span className='font-bold'>Cloud SQL</span>, and <span className='font-bold'>MySQL</span> for historical data analysis, enhancing data-driven decision-making.
                </li>
                <li>
                    Automated data ingestion and synchronization from third-party APIs (<span className='font-bold'>AWS</span>, Google Ads) into <span className='font-bold'>MySQL</span> using <span className='font-bold'>C#</span> and <span className='font-bold'>ASP.NET</span>, reducing cloud costs while ensuring up-to-date data for ad performance tracking.
                </li>
                <li>
                    Designed and implemented <span className='font-bold'>GCP queues</span> for payload handling using <span className='font-bold'>Python</span>, integrating Slack and email alerts for real-time failure notifications.
                    Incorporated retry mechanisms and status-based error handling to enhance system reliability.
                </li>
                <li>
                    Built ad creation tools using <span className='font-bold'>ASP.NET MVC</span> to send payloads to automated apps, incorporating dynamic validation to ensure data consistency,
                    leading to a <span className='font-bold'>40% increase</span> in ad volume.
                </li>
            </ul>
        </ExperienceCard>
    )
}

export default TitaniumAgency
