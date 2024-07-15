import React from 'react'
import Name from './Name'
import Subinfo from './Subinfo'
import Links from './Links'
import Button from '../util/Button'

const About = () => {
    return (
        <div className="text-color flex flex-row items-center">
            <section className="w-full tablet:w-6/12 flex flex-col">
                <Name />
                <Subinfo />
                <div className='mt-3'>
                    <Button text="Resume" className='border w-fit px-3 py-1 rounded-md' />
                </div>
                <Links />
            </section>
        </div>
    )
}

export default About