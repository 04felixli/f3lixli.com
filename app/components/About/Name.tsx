"use client"
import { AboutMe } from '@/app/Objects/AboutMeObjects'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Name = () => {
    return (
        <>
            <p className="text-3xl laptop-L:text-4xl mt-5">I'm</p>
            <p className="text-7xl laptop-L:text-9xl border-b-2 w-full">
                <TypeAnimation
                    sequence={[
                        1000,
                        // Same substring at the start will only be typed out once, initially
                        'Felix Li',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "A Software Developer",
                        1000,
                        "A Full-Stack Developer",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
            </p>
        </>

    )
}

export default Name