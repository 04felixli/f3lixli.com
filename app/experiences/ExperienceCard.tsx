import React, { ReactNode } from 'react';
import './experiences.css';
import { ExperienceObject } from '../Objects/ExperienceObjects';

interface Props {
    experience: ExperienceObject;
    children: ReactNode;
}

const ExperienceCard = ({ experience, children }: Props) => {

    return (
        <section className='w-full'>
            <div className='timeline'>
                <div className='relative'>
                    <div className='dot'></div>
                    <div className='timeline-content'>
                        <span className='timeline-date'>{experience.startDate} - {experience.endDate}</span>
                        <p className='timeline-date'>{experience.location}</p>
                        <div className='flex flex-row items-center justify-between'>
                            <h3 className='timeline-title'>{experience.companyName}</h3>
                            <div className='max-[270px]:hidden ml-3 w-10 h-10 mb-3 flex-shrink-0 break-inside-avoid border border-[#ccc] rounded-md shadow-lg'>
                                <img
                                    src={experience.companyLogo}
                                    alt={`${experience.companyName} Image`}
                                    className='w-full h-full object-contain rounded-md bg-white'
                                />
                            </div>
                        </div>
                        <p className='border border-[#ccc] rounded-md w-fit px-2 text-[#ccc]'>{experience.role}</p>
                        <div className='mt-1'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceCard;
