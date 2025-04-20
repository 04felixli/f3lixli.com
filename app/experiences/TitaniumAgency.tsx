import React from 'react'
import ExperienceCard from './ExperienceCard'
import { TitaniumExperience } from '../Objects/ExperienceObjects'

const TitaniumAgency = () => {
    return (
        <ExperienceCard experience={TitaniumExperience}>
            <ul className="list-disc list-outside ml-5">
                <li>
                    Reduced page load times by <span className="font-bold">62%</span> through SQL query and stored procedure optimization, including targeted indexing, removal of redundant computations, and simplification of aggregations.
                </li>
                <li>
                    Engineered a data archival workflow to transfer historical records from <span className="font-bold">MySQL</span> to partitioned <span className="font-bold">BigQuery</span> tables, reducing cloud costs by <span className="font-bold">30%</span> and improving query performance for transactional workloads.
                </li>
                <li>
                    Developed real-time automation algorithms using <span className="font-bold">C#</span> and <span className="font-bold">Flask</span> to optimize budget adjustments and ad pausing through API integrations, leveraging <span className="font-bold">GCP BigQuery</span>, <span className="font-bold">Cloud SQL</span>, and <span className="font-bold">MySQL</span> for historical data analysis, enhancing data-driven decision-making.
                </li>
                <li>
                    Designed and implemented an automated <span className="font-bold">ETL</span> pipeline using <span className="font-bold">C#</span> to ingest advertising performance data from third-party marketing APIs, perform data transformation and enrichment, and load structured results into <span className="font-bold">MySQL</span>, enabling real-time ad campaign analytics via integrated Tableau dashboards.
                </li>
            </ul>
        </ExperienceCard>
    )
}

export default TitaniumAgency
