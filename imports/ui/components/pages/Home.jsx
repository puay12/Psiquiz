import React from 'react';
import { Navbar1 } from '../navbars/Navbar1';
import { Hero } from '../Home/Hero';
import { Howto } from '../Home/Howto';

export const Home = () => {
    return (
        <div className="home">
            <Navbar1 />
            <Hero />
            <Howto />
        </div>
    )
}
