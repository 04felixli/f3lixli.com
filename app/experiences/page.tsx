import React from 'react'
import Layout from '../components/util/layout'
import { RIFOExperience, RogersExperience, USRAExperience } from '../Objects/ExperienceObjects'
import { Pages } from '../components/NavBar/NavBar'
import USRA from './USRA'
import RIFO from './RIFO'
import Rogers from './Rogers'

const Experiences = () => {
    const experiences = [USRAExperience, RIFOExperience, RogersExperience];
    return (
        <Layout currentPage={Pages.experiences} pageName='Experiences'>
            <div className='mt-5'>
                <USRA />
                <RIFO />
                <Rogers />
            </div>
        </Layout>
    )
}

export default Experiences