import type { NavbarContent } from '@interfaces/navInterface';
import React from 'react';
import { Link } from 'react-router-dom';
interface NavbarProps {
    data: NavbarContent;
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {

    function onSignIn() { }

    return (
        <header>
            <nav className="bg-secondary">
                <div className="container flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <h1>
                            <Link to="/">
                                <img src={data.logo.src} alt={data.logo.alt} className="w-12 h-12 mr-4" />
                            </Link>
                        </h1>
                    </div>
                    <div className="flex justify-center items-center space-x-4">
                        <div className="text-white inline-flex space-x-2">
                            <img src={data.flag.src} alt={data.flag.alt} className="w-6 h-6 mr-2" />
                            <span>{data.flagTxt}</span>
                        </div>
                        <div>
                            <Link to='/sign-in' onClick={() => onSignIn()} className="bg-green-700 text-white px-4 py-2 rounded cursor-pointer">{data.signInBtn.label}</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;