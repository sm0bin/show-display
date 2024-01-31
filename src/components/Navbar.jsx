import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
        { title: 'Blog', path: '/blog' },
    ];

    const navLinksMarkup = navLinks.map((link) => (
        <li className="list-none" key={link.title}>
            <NavLink className="" to={link.path}>
                {link.title}
            </NavLink>
        </li>
    ));

    return (
        <div className="navbar bg-base-100 fixed">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl font-bold">Show</a>
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