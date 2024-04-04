import React, { useState } from 'react';

interface InputInterface {
    value: string;
    setValue: (value: string) => void;
    label: string;
}

const Input: React.FC<InputInterface> = ({ value, setValue, label }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        if (!value) {
            setIsFocused(false);
        }
    };

    return (
        <div className="custom-input">
            <input
                id="email"
                name="email"
                type="email"
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="input-field"
                readOnly={!isFocused}
            />
            <label
                htmlFor="email"
                className={`placeholder-label ${isFocused || value ? 'focused' : ''}`}
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
