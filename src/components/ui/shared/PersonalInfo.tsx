import FileUpload from '@components/ui/file/FileUpload';
import { ErrorMessage, Field } from 'formik';
import React from 'react';
interface PersonalInfoProps {
    type: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ type }) => {
    return (
        <div className="mx-auto">
            <div className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="businessName" className="block mb-1">Business Name</label>
                        <Field
                            type="text"
                            name="businessName"
                            placeholder="Business Name"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="businessName" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="website" className="block mb-1">Website or Social Link</label>
                        <Field
                            type="text"
                            name="website"
                            placeholder="Website or Social Link"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="website" component="div" className="text-red-500 mt-1" />
                    </div>
                </div>
            </div>

            <div className={`mb-4 ${type === 'business' ? 'block' : 'hidden'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="tradeLicense" className="block mb-1">Trade License (File Input)</label>
                        <Field
                            name="tradeLicense"
                            component={FileUpload}
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="tradeLicense" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="district" className="block mb-1">District/State</label>
                        <Field
                            type="text"
                            name="district"
                            placeholder="District/State"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="district" component="div" className="text-red-500 mt-1" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <div className={`grid  gap-4 ${type === 'business' ? ' grid-cols-1 md:grid-cols-2' : ' grid-cols-1 md:grid-cols-3'}`}>
                    <div className={` ${type === 'business' ? 'hidden' : 'block'}`}>
                        <label htmlFor="district" className="block mb-1">District/State</label>
                        <Field
                            type="text"
                            name="district"
                            placeholder="District/State"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="district" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="city" className="block mb-1">City/Town</label>
                        <Field
                            type="text"
                            name="city"
                            placeholder="City/Town"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="city" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                        <label htmlFor="postcode" className="block mb-1">Post Code/Zip Code</label>
                        <Field
                            type="text"
                            name="postcode"
                            placeholder="Post Code/Zip Code"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                        <ErrorMessage name="postcode" component="div" className="text-red-500 mt-1" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="address" className="block mb-1">Address</label>
                <Field
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="address" component="div" className="text-red-500 mt-1" />
            </div>
        </div>
    );
};

export default PersonalInfo;