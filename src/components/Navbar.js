import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import NavLogo from '../B.png';

const Navbar = () => {
    return(
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <Link className="inline-flex items-center py-6 px-3 mr-4 tracking-widest" to='/'>
                        <img src={NavLogo} alt="logo" style={{ height: 30 }}/>
                    </Link>
                    <Link className="inline-flex items-center py-3 px-3 my-6 rounded text-black hover:text-red-600" to='/course'>
                        Courses
                    </Link>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/beyond8th" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/company/beyond8/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://instagram.com/beyond8_in/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}

export default Navbar;