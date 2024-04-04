import React from 'react';

const Navbar: React.FC = ({ data }) => {

    function onSignIn() {

    }

    return (
        <header>
            <nav className="bg-green-900 flex justify-between items-center p-4">
                <div className="flex items-center">
                    <img src={data.logo.src} alt={data.logo.alt} className="w-12 h-12 mr-4" />
                </div>
                <div className="flex items-center">
                    <div className="text-white mr-8">
                        <img src={data.flag.src} alt={data.flag.alt} className="w-6 h-6 mr-2" />
                        English
                    </div>
                    <button onClick={() => onSignIn()} className="bg-green-700 text-white px-4 py-2 rounded cursor-pointer">Sign In</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
