"use client"
import { AboutMe } from '@/app/Objects/AboutMeObjects'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { TypeAnimation } from 'react-type-animation'

const Name = () => {
    // const isMobile = useMediaQuery({ query: '(max-width: 320px)' });
    return (
        <div>
            <p className="text-3xl mt-5">I&#39;m</p>
            <p className="text-4xl max-[265px]:hidden min-[489px]:text-5xl min-[490px]:max-[589px]:text-6xl min-[589px]:text-7xl border-b-2 w-full max-[1124px]:h-36 font-semibold">
                <TypeAnimation
                    sequence={[
                        1000,
                        // Same substring at the start will only be typed out once, initially
                        'Felix Li',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "A Software Developer",
                        1000,
                        "A UWaterloo Student",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
            </p>
            <p className="text-4xl min-[265px]:hidden font-semibold border-b-2 w-full">
                <TypeAnimation
                    sequence={[
                        1000,
                        // Same substring at the start will only be typed out once, initially
                        'Felix Li',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "",
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
            </p>
        </div>
    )
}

export default Name