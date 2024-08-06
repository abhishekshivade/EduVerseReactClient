import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT, BASE_ROUTE, CONTACT } from '../../constants/appConstants';

const Navbar = () => {
    return (
        <nav className='flex justify-between mx-10 my-10'>
            <Link to={BASE_ROUTE}>Logo</Link>
            <ul className='flex gap-10'>
                <li><Link to={ABOUT}>About Us</Link></li>
                <li><Link to={CONTACT}>Contact Us</Link></li>
                
            </ul>
        </nav>
    );
};

export default Navbar;
