import React from 'react';
import { motion } from 'framer-motion';
import Name from './Name';
import Subinfo from './Subinfo';
import Button from '../util/Button/Button';
import Link from 'next/link';
import { MotionDiv } from '../util/MotionDiv';

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
                    <Link href='/resume'>
                        <MotionDiv
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='mt-3 hover:scale-105 duration-300 w-fit animate-bounce'
                        >
                            <Button text="Resume" />
                        </MotionDiv>
                    </Link>
                </MotionDiv>
            </section>
        </div>
    );
};

export default About;
