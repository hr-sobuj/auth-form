import { navbarContent } from '@assets/data/navbar';
import Footers from '@components/footer/Footers';
import Navbar from '@components/navbar/Navbar';
import React, { ReactNode } from "react";
interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar data={navbarContent} />
            <main>
                {children}
            </main>
            <Footers />
        </>
    )
}

export default DefaultLayout;
