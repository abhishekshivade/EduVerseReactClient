import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT, BASE_ROUTE, CONTACT } from '../../constants/appConstants';
// import EduVerseLogo from '../../assets/images/eduVerse logo.png'
import EduVerseLogo1 from '../../assets/images/logo1.png'
// import EduVerseLogo2 from '../../assets/images/logo1.jpg'
import "../../assets/styles/navbar.css"

const Navbar = () => {
    return (
        <nav className='absolute z-2 flex w-full justify-between items-center h-24 px-16 text-white bg-transparent'> {/* bg-[#17293f] */}
            <Link to={BASE_ROUTE}><img src={EduVerseLogo1} className='h-24 mt-5' alt='EduVerse'/></Link>
            <ul className='flex items-center'>
                <li><Link to={ABOUT} className='mr-5 hover:font-bold'>About Us</Link></li>
                <li><Link to={CONTACT} className='ml-5 hover:ml-4 hover:font-bold'>Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
