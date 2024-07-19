import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MotionDiv } from './MotionDiv';
import SectionTitle from './SectionTitle';

interface Props {
    children: ReactNode;
    sectionName: string;
}

const SectionLayout = ({ children, sectionName }: Props) => {
    return (
        <section className='flex items-center w-full flex-col'>
            <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ amount: 0 }}
                className='w-full'
            >
                <SectionTitle sectionName={sectionName} />
            </MotionDiv>
            <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ amount: 0 }}
                className='w-full'
            >
                {children}
            </MotionDiv>
        </section>
    );
}

export default SectionLayout;
