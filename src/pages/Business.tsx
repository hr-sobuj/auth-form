import ContactInfo from "@container/business/ContactInfo";
import PersonalInfo from "@container/business/PersonalInfo";
import { Button, Step, Stepper } from "@material-tailwind/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: '',
    nationalId: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    businessName: '',
    website: '',
    tradeLicense: null,
    district: '',
    city: '',
    postcode: '',
    address: '',
};

const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    role: Yup.string().required("Role is required"),
    nationalId: Yup.string().required("National ID Number is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
        /* @ts-ignore */
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    agreeTerms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
    businessName: Yup.string().required("Business Name is required"),
    website: Yup.string().url("Invalid URL format"),
    tradeLicense: Yup.mixed().required("Trade License is required"),
    district: Yup.string().required("District/State is required"),
    city: Yup.string().required("City/Town is required"),
    postcode: Yup.string().required("Post Code/Zip Code is required"),
    address: Yup.string().required("Address is required"),
});

const Business = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const steps = ["1", "2"];

    const handleNext = () => {
        setActiveStep(prevStep => prevStep + 1);
    };

    const handlePrev = () => {
        setActiveStep(prevStep => prevStep - 1);
    };

    const isLastStep = activeStep === steps.length - 1;
    const isFirstStep = activeStep === 0;

    return (
        <section>
            <div className="container mb-20">
                <div className="w-full flex flex-col space-y-10 p-8 shadow-2xl border mb-6">
                    <div className="flex justify-center items-center flex-col space-y-2 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-center"> Let's Get Started with</h2>
                        <p className=" text-base font-bold">Business</p>
                        <p>Please provide the following information</p>
                    </div>
                    <div className="flex justify-center items-center">
                        {/* @ts-ignore */}
                        <Stepper activeStep={activeStep} className="w-[50%]">
                            {steps.map((label, idx) => (
                                /* @ts-ignore */
                                <Step key={label} onClick={() => setActiveStep(idx)}>
                                    {label}
                                </Step>
                            ))}
                        </Stepper>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            if (!isLastStep) {
                                setActiveStep((prevStep) => prevStep + 1);
                            } else {
                                // console.log("Form submitted with values:", values);
                                navigate('/show', { state: values });
                            }
                            setSubmitting(false);
                        }}
                    >
                        {(formikProps) => (
                            <Form>
                                {activeStep === 0 && (
                                    <PersonalInfo />
                                )}
                                {activeStep === 1 && (
                                    <ContactInfo />
                                )}

                                <div className="my-16 flex justify-center items-center space-x-6">
                                    {/* @ts-ignore */}
                                    <Button type="button" onClick={handlePrev} disabled={isFirstStep} className="bg-white border-primary border px-4 py-2 basis-1/2 text-primary uppercase rounded-md">
                                        Back
                                    </Button>
                                    {/* @ts-ignore */}
                                    <Button
                                        type="submit"
                                        onClick={isLastStep ? undefined : handleNext}
                                        className="bg-primary border-primary border px-4 py-2 basis-1/2 text-white uppercase rounded-md"
                                        disabled={formikProps.isSubmitting}
                                    >
                                        {isLastStep ? "Submit" : "Next"}
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default Business;
