import { AboutMe } from '@/app/Objects/AboutMeObjects'
import React from 'react'

const Subinfo = () => {
    return (
        <p className="text-lg mt-5">
            {AboutMe.description}
        </p>
    )
}

export default Subinfo