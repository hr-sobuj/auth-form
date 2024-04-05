import { ErrorMessage, Field } from "formik";

const ContactInfo = () => {
    return (
        <div className="mx-auto">
            <div className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block mb-1">First Name</label>
                        <Field
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="firstName" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block mb-1">Last Name</label>
                        <Field
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="lastName" component="div" className="text-red-500 mt-1" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="phone" className="block mb-1">Phone</label>
                        <Field
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="phone" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <Field
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="role" className="block mb-1">Role</label>
                        <Field
                            type="text"
                            name="role"
                            placeholder="Role"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="role" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="nationalId" className="block mb-1">National ID Number</label>
                        <Field
                            type="text"
                            name="nationalId"
                            placeholder="National ID Number"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="nationalId" component="div" className="text-red-500 mt-1" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
                        <Field
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500 mt-1" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="agreeTerms" className="flex items-center mb-1">
                    <Field
                        type="checkbox"
                        name="agreeTerms"
                        className="mr-2"
                    />
                    <span className="text-sm">I agree with auth express terms and conditions</span>
                </label>
                <ErrorMessage name="agreeTerms" component="div" className="text-red-500" />
            </div>
        </div>
    );
};

export default ContactInfo;
