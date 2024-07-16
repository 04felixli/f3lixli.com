import React, { ReactNode } from 'react';
import NavBar, { Pages } from '../NavBar/NavBar';
import SectionLayout from './SectionLayout';
import About from '../About/About';
import Footer from '../Footer/Footer';

interface Props {
    children: ReactNode;
    currentPage: Pages;
    pageName: string;
}

const Layout = ({ children, currentPage, pageName }: Props) => {
    return (
        <div className="flex flex-col items-center w-full mt-20">
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
