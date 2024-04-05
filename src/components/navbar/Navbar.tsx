import { NavbarContent } from '@interfaces/navInterface';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    data: NavbarContent;
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <header>
            <nav className="bg-secondary">
                <div className="container flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <h1>
                            <Link to="/">
                                <img src={data.logo.src} alt={data.logo.alt} className="w-12 h-12 mr-4" />
                            </Link>
                        </h1>
                    </div>
                    <div className="flex sm:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden sm:flex justify-center items-center space-x-4">
                        <div className="text-white inline-flex space-x-2">
                            <img src={data.flag.src} alt={data.flag.alt} className="w-6 h-6 mr-2" />
                            <span>{data.flagTxt}</span>
                        </div>
                        <div>
                            <Link to='/sign-in' className="bg-green-700 text-white px-4 py-2 rounded cursor-pointer">{data.signInBtn.label}</Link>
                        </div>
                    </div>
                </div>
                {/* Dropdown menu */}
                {showMenu && (
                    <div className="sm:hidden bg-gray-200 py-2 transition-all duration-200">
                        <div className="container flex justify-center items-center space-x-4">
                            <div className="text-black inline-flex space-x-2">
                                <img src={data.flag.src} alt={data.flag.alt} className="w-6 h-6 mr-2" />
                                <span>{data.flagTxt}</span>
                            </div>
                            <div>
                                <Link to='/sign-in' className="bg-green-700 text-white px-4 py-2 rounded cursor-pointer">{data.signInBtn.label}</Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
