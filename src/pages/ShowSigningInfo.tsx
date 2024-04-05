import { useLocation } from 'react-router-dom';

const ShowSigningInfo = () => {
    const location = useLocation();
    const { email } = location.state || {};

    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 border shadow-xl p-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Signing Info</h2>
                    <p className="mt-6 text-sm text-gray-600">Email: {email}</p>
                </div>
            </div>
        </section>
    );
};

export default ShowSigningInfo;
