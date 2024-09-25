import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

const NavLinks = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "About", link: "/#" },
    { id: 3, name: "Contact", link: "/#" },
];

const DropDownLinks = [
    { id: 1, name: "Vegetables", link: "/#" },
    { id: 2, name: "Fruits", link: "/#" },
    { id: 3, name: "Grains", link: "/#" },
];

const Navbar = () => {
    return (
        <div className='bg-white shadow-sm'>
            <div className="container flex justify-between py-4 sm:py-3">
                <div className="font-bold text-3xl">Logo</div>
                <div>
                    <ul className='flex items-center gap-10'>
                        {
                            NavLinks.map(({ id, name, link }) => (
                                <li key={id}>
                                    <a href={link} className='inline-block hover:text-primary text-xl font-semibold'>{name}</a>
                                </li>
                            ))
                        }
                        {/* Simple dropdown and links */}
                        <li className="cursor-pointer group  z-[200px] bg-white text-black shadow-md">
                            <div className='inline-block hover:text-primary text-xl font-semibold'>
                                <div className='flex items-center gap-[2px] py-2'>
                                    Dropdown
                                    <span>
                                        <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                    </span>
                                </div>
                            </div>

                            {/* Drop down section */}
                            <div className='absolute z-[9999] hidden group-hover:block bg-white shadow-md w-[200px] p-2'>
                                <ul>
                                    {
                                        DropDownLinks.map(({ id, name, link }) => (
                                            <li key={id}>
                                                <a href={link} className='inline-block hover:text-primary/20 w-full rounded-md p-2'>{name}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                        {/* login button section */}
                        <li>
                            <button className='flex justify-center items-center gap-2 bg-secondary text-white text-xl py-2 px-5 rounded hover:scale-105 h-[40px] duration-300'>
                                <FaUser className=''/>
                                Account
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
