import React from 'react'
import ExperienceCard from './ExperienceCard'
import { EncoreFinancialExperience } from '../Objects/ExperienceObjects'

const EncoreFinancial = () => {
    return (
        <ExperienceCard experience={EncoreFinancialExperience}>
            <ul className='list-disc list-outside ml-5'>
                <li>
                    Built a robust <b>AI-powered financial assistant</b> by integrating <b>Anthropic’s Claude API</b> with a custom <b>Node.js/Express </b> 
                    orchestration layer and <b>React</b> frontend, enabling real-time queries, document uploads, and dynamic context injection to
                    enhance user interaction and system extensibility.
                </li>
                <li>
                    Improved chatbot response accuracy by implementing a <b>Retrieval-Augmented Generation (RAG)</b> system using <b>Voyage AI embeddings</b> and <b>Pinecone vector database</b>, enabling high-precision semantic search across complex financial documents.
                </li>
                <li>
                    Engineered advanced <b>LLM workflows</b> with <b>dynamic prompt construction</b> and <b>context management</b> strategies, enabling accurate <b>multi-turn interactions</b> and domain-specific reasoning in a financial chatbot application.
                </li>
            </ul>
        </ExperienceCard>
    )
}

export default EncoreFinancial
