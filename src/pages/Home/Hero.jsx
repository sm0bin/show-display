import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-top" style={{ backgroundImage: 'url("https://source.unsplash.com/u7PnSXyhbeg")' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="flex flex-col items-center">
                    <h1 className="mb-5 text-5xl font-bold max-w-xl">Explore a Universe of Entertainment</h1>
                    <p className="mb-5 max-w-4xl">Dive into a treasure trove of entertainment with our expansive collection of shows, each offering a unique blend of drama, humor, suspense, and creativity.</p>
                    <Link to='/signup' className="btn btn-primary">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;