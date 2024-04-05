import { useLocation } from "react-router-dom";

const ShowInfo = () => {
    const location = useLocation();
    const { state } = location;

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-4">Submitted Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                    <p className="mb-2"><span className="font-semibold">First Name:</span> {state.firstName}</p>
                    <p className="mb-2"><span className="font-semibold">Last Name:</span> {state.lastName}</p>
                    <p className="mb-2"><span className="font-semibold">Phone:</span> {state.phone}</p>
                    <p className="mb-2"><span className="font-semibold">Email:</span> {state.email}</p>
                    <p className="mb-2"><span className="font-semibold">Role:</span> {state.role}</p>
                    <p className="mb-2"><span className="font-semibold">National ID:</span> {state.nationalId}</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <p className="mb-2"><span className="font-semibold">Business Name:</span> {state.businessName}</p>
                    <p className="mb-2"><span className="font-semibold">Website:</span> {state.website}</p>
                    <p className="mb-2"><span className="font-semibold">District:</span> {state.district}</p>
                    <p className="mb-2"><span className="font-semibold">City:</span> {state.city}</p>
                    <p className="mb-2"><span className="font-semibold">Postcode:</span> {state.postcode}</p>
                    <p className="mb-2"><span className="font-semibold">Address:</span> {state.address}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowInfo;
