import React from 'react';

interface SpinnerProps {
    txt: string;
}

const Spinner: React.FC<SpinnerProps> = ({ txt }) => {
    return (
        <div className="flex space-x-2 justify-center">
            <p>{txt}</p> <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>

        </div>
    );
}

export default Spinner;
