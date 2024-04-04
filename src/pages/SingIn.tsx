import Spinner from '@components/ui/spinner/Spinner';
import { useState } from 'react';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleEmailFocus = () => {
        setEmailFocused(true);
    };

    const handleEmailBlur = () => {
        if (!email) {
            setEmailFocused(false);
        }
    };

    const handlePasswordFocus = () => {
        setPasswordFocused(true);
    };

    const handlePasswordBlur = () => {
        if (!password) {
            setPasswordFocused(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = (e: any) => {
        e.preventDefault();
        if (!email) {
            setEmailError('Please enter your email.');
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Please enter your password.');
        } else {
            setPasswordError('');
        }

        if (email && password) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                navigate('sign-in-info', { state: { email } });
            }, 3000);
        }
    };

    return (
        <section className="h-full md:h-[800px] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 border shadow-xl p-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign In</h2>
                    <p className="mt-2 text-sm text-gray-600">Fill in the fields below to sign in to your account</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
                    <div>
                        <div className="custom-input">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={handleEmailFocus}
                                onBlur={handleEmailBlur}
                                className={`input-field ${emailError ? 'border-red-500 !top-[36%]' : ''} border`}
                                readOnly={!emailFocused}
                            />
                            <label
                                htmlFor="email"
                                className={`placeholder-label ${emailFocused || email ? 'focused' : ''} ${emailError ? 'text-red-500' : ''}`}
                            >
                                Email address
                            </label>
                        </div>
                        {emailError && <p className="text-red-500 text-xs mt-[-20px]">{emailError}</p>}
                    </div>
                    <div>
                        <div className="custom-input">
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={handlePasswordFocus}
                                    onBlur={handlePasswordBlur}
                                    className={`input-field ${passwordError ? 'border-red-500 !top-[36%] inline-flex' : ''} border`}
                                    readOnly={!passwordFocused}
                                />
                                <span className="absolute top-[1.2rem] right-2">
                                    {showPassword ? (
                                        <RiEyeOffFill onClick={togglePasswordVisibility} className={`cursor-pointer ${passwordError ? 'text-red-500' : ''}`} />
                                    ) : (
                                        <RiEyeFill onClick={togglePasswordVisibility} className="cursor-pointer" />
                                    )}
                                </span>
                            </div>
                            <label
                                htmlFor="password"
                                className={`placeholder-label ${passwordFocused || password ? 'focused' : ''} ${passwordError ? 'text-red-500 top-[40%]' : ''}`}
                            >
                                Password
                            </label>
                            {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none  transition-all duration-200 ${isLoading ? 'disabled bg-gray-400' : 'bg-primary hover:bg-deep focus:ring-2 focus:ring-offset-2 focus:ring-primary'}`}
                        >
                            {isLoading ? <Spinner /> : 'Sign in'}
                        </button>
                    </div>
                </form>
                <div className="text-sm text-center">
                    <p className="text-gray-600">Don't have an account? <Link to="/account-type" className="font-medium text-primary hover:text-deep transition-all duration-200">Create an Account</Link></p>
                </div>
            </div>
        </section>
    )
}
