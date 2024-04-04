import { navbarContent } from '@/assets/data/navbar.js';
import Navbar from '@components/navbar/Navbar';

export default function DefaultLayout({ children }) {
    return (
        <>
            <Navbar data={navbarContent} />
            <main>
                {children}
            </main>
        </>
    )
}
