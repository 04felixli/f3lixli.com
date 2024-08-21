import React, { ReactNode } from 'react';
import NavBar, { Pages } from '../NavBar/NavBar';
import SectionLayout from './SectionLayout';
import About from '../About/About';
import Footer from '../Footer/Footer';
import { MotionDiv } from './MotionDiv';
import { Toaster } from 'react-hot-toast';

interface Props {
    children: ReactNode;
    currentPage: Pages;
    pageName: string;
}

export const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const Layout = ({ children, currentPage, pageName }: Props) => {
    return (
        <div className="flex flex-col items-center w-full mt-20 px-[10%] lg:px-[20%]">
            <Toaster position="top-center" />
            <section className='mb-20 w-full'>
                <NavBar currentPage={currentPage} />
            </section>
            {pageName !== "about" ? (
                <SectionLayout sectionName={pageName}>
                    {children}
                </SectionLayout>
            ) : (
                <About />
            )}
            <Footer />
        </div>
    );
};

export default Layout;
