import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Shows', path: '/shows' },
        // { title: 'Contact', path: '/contact' },
        // { title: 'Blog', path: '/blog' },
    ];

    const navLinksMarkup = navLinks.map((link) => (
        <li className="list-none" key={link.title}>
            <NavLink className="" to={link.path}>
                {link.title}
            </NavLink>
        </li>
    ));

    return (
        <div className="navbar bg-base-100 fixed z-50">
            <div className="flex-1">
                <NavLink to='/' className="btn btn-ghost text-xl font-bold">Show</NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {navLinksMarkup}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;