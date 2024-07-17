import { AboutMe } from '@/app/Objects/AboutMeObjects'
import React from 'react'

const Subinfo = () => {
    return (
        <div className='text-lg mt-3'>
            {AboutMe.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className={`${index !== 0 ? 'mt-2' : ''}`}>{paragraph}</p>
            ))}
        </div>

    )
}

export default Subinfo