import allData from '@assets/data/data';
import { Link } from 'react-router-dom';

export default function AccountType() {
    const { accountType: data } = allData;

    return (
        <section className="min-h-screen flex flex-col space-y-6 items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{data.title}</h2>
            </div>
            <div className="max-w-xl w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {data.accounts.map((account, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center justify-center mb-4">
                            <account.icon className="h-12 w-12 text-gray-600" />
                        </div>
                        <div className='text-center'>
                            <h3 className="text-lg font-medium text-gray-900">{account.type}</h3>
                            <p className="mt-2 text-sm text-gray-500">{account.description}</p>
                            <Link
                                to={account.btn.url}
                                className="mt-4 w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary"
                            >
                                {account.btn.label}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
