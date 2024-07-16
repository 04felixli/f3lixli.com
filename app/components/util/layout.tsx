import React, { ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';
import SectionLayout from './SectionLayout';
import About from '../About/About';
import Footer from '../Footer/Footer';

interface Props {
    children: ReactNode;
    pageName: string;
}

const Layout = ({ children, pageName }: Props) => {
    return (
        <div className="flex flex-col items-center w-full mt-20">
            <section className='mb-20 w-full'>
                <NavBar />
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
