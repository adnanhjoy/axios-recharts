import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-black'>
            <div onClick={() => {setOpen(!open)}} className='h-6 w-6 md:hidden text-white'>
               {
                open ? <XMarkIcon/> : <Bars3Icon />
               }
            </div>
            <ul className={`md:flex justify-end ease-in-out duration-200 bg-black text-white absolute w-full md:static  ${open ? 'top-6' : 'top-[-1000px]'}`}>
                <li className='p-5'><a href="/home">Home</a></li>
                <li className='p-5'><a href="/shop">Shop</a></li>
                <li className='p-5'><a href="/blog">Blog</a></li>
                <li className='p-5'><a href="/about">About</a></li>
                <li className='p-5'><a href="/contact">Contact</a></li>
                <li className='p-5'><a href="/privacy">Privacy</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;