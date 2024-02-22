import React, { useState } from 'react';
import logo from'../assets/images/portfolio__2_-removebg-preview.png';

const Navbar = () => {
    const [nav, setNav] = useState(['Home', 'About', 'Skills', 'Projects', 'Contact']);

    return (
        <header className='text-white backdrop-blur-md fixed z-50 mx-auto w-full'>
            <nav className='h-[60px] mx-auto myFlex relative w-[80%] max-sm:w-[90%]'>
                <div className="logo w-[120px] max-sm:w-[60px]">
                    <img src={logo} alt="" />
                </div>
                <ul className='myFlex gap-[45px] absolute right-0 font-semibold max-sm:gap-1'>
                    {nav.map((ele) => (
                        <li key={ele} className='first:text-or hover:first:text-white hover:text-or cursor-pointer p-[10px] max-sm:p-[5px] max-sm:text-[10px]'>
                            <a href={`#${ele}`}>{ele}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
