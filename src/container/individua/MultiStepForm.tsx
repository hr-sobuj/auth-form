import { Button, Step, Stepper } from "@material-tailwind/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const initialValues = {
    username: "",
    email: "",
    nickname: ""
};

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    nickname: Yup.string().required("Nickname is required")
});

export function MultiStepForm() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ["1", "2", "3"];

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const handlePrev = () => {
        if (activeStep > 0) {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };

    const isLastStep = activeStep === steps.length - 1;
    const isFirstStep = activeStep === 0;

    return (
        <div className="w-full py-4 px-8">
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={index} onClick={() => setActiveStep(index)}>
                        {label}
                    </Step>
                ))}
            </Stepper>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // You can handle form submission here
                    // Call an API or perform any action with the form values
                    // After successful submission, you can proceed to the next step
                    if (!isLastStep) {
                        setActiveStep((prevStep) => prevStep + 1);
                    } else {
                        // Handle final submission
                        console.log("Form submitted with values:", values);
                    }
                    setSubmitting(false);
                }}
            >
                {(formikProps) => (
                    <Form>
                        {activeStep === 0 && (

                            <div>
                                <label htmlFor="username">Username</label>
                                <Field type="text" id="username" name="username" />
                                <ErrorMessage name="username" component="div" />
                            </div>
                        )}

                        {activeStep === 1 && (

                            <div>
                                <label htmlFor="email">Email</label>
                                <Field type="text" id="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                            </div>
                        )}

                        {activeStep === 2 && (
                            <div>
                                <label htmlFor="nickname">Nickname</label>
                                <Field type="text" id="nickname" name="nickname" />
                                <ErrorMessage name="nickname" component="div" />
                            </div>
                        )}

                        <div className="mt-16 flex justify-between">
                            <Button type="button" onClick={handlePrev} disabled={isFirstStep}>
                                Prev
                            </Button>
                            <Button
                                type="submit"
                                onClick={handleNext}
                                disabled={formikProps.isSubmitting}
                            >
                                {isLastStep ? "Submit" : "Next"}
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
