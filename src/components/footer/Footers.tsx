import footerData from '@assets/data/footer';
import { Link } from 'react-router-dom';

const Footers = () => {
    return (
        <footer id='footer' className='bg-secondary text-white fixed bottom-0 left-0 right-0'>
            <div className="container py-6">
                <div className='grid grid-cols-3 gap-4 justify-evenly items-center'>
                    <div className="text-center">
                        <p className="text-sm">&copy; {footerData.copyRight}</p>
                    </div>
                    <div className='flex justify-center'>
                        <ul className='flex flex-wrap justify-center space-x-4'>
                            {footerData.footLinks.map(item => (
                                <li key={item.label}>
                                    <Link to={item.url} className="text-sm">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex justify-center items-center space-x-4'>
                        <div className='flex items-center'>
                            <img src={footerData.rightContent.flag} alt={footerData.rightContent.label} className='w-6 h-6 mr-2' />
                            <span className="text-sm">{footerData.rightContent.label}</span>
                        </div>
                        <p className="text-xs">{footerData.rightContent.version}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footers;
