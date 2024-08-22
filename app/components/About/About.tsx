import React from 'react';
import Name from './Name';
import Subinfo from './Subinfo';
import { MotionDiv } from '../util/MotionDiv';
import OpenResumeButton from '../util/OpenResumeButton';

const About = () => {
    return (
        <div className="text-color flex flex-row items-center w-full">
            <section className="w-full flex flex-col">
                <MotionDiv
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Name />
                </MotionDiv>
                <MotionDiv
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Subinfo />
                </MotionDiv>
                <MotionDiv
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <OpenResumeButton />
                </MotionDiv>
            </section>
        </div>
    );
};

export default About;
