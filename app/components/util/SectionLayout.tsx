import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MotionDiv } from './MotionDiv';
import SectionTitle from './SectionTitle';

const titleVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1 }
};

const contentVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 }
};

interface Props {
    children: ReactNode;
    sectionName: string;
}

const SectionLayout = ({ children, sectionName }: Props) => {
    return (
        <section className='flex items-center w-full flex-col'>
            <MotionDiv
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    delay: 0.1,
                    ease: "easeInOut",
                    duration: 0.5
                }}
                viewport={{ amount: 0 }}
                className='w-full'
            >
                <SectionTitle sectionName={sectionName} />
            </MotionDiv>
            <MotionDiv
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                transition={{
                    delay: 0.1,
                    ease: "easeInOut",
                    duration: 0.5
                }}
                viewport={{ amount: 0 }}
                className='w-full'
            >
                {children}
            </MotionDiv>
        </section>
    );
}

export default SectionLayout;
