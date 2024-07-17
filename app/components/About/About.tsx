import React from 'react'
import Name from './Name'
import Subinfo from './Subinfo'
import Button from '../util/Button/Button'
import Link from 'next/link'

const About = () => {
    return (
        <div className="text-color flex flex-row items-center">
            <section className="w-full tablet:w-6/12 flex flex-col">
                <Name />
                <Subinfo />
                <Link href='/resume' className='mt-3 hover:scale-105 duration-300 w-fit'>
                    <Button text="Resume" />
                </Link>
            </section>
        </div>
    )
}

export default About