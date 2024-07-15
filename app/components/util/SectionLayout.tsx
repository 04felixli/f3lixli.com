import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    sectionName: string;
}

const SectionLayout = ({ children, sectionName }: Props) => {
    return (
        <section className='flex item-center w-full flex-col'>
            <h1 className="section-names ">{sectionName}</h1>
            {children}
        </section>
    );
}

export default SectionLayout