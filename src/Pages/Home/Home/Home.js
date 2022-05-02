import React from 'react';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import Features from '../Features/Features';
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Cars></Cars>
            <Features></Features>
        </div>
    );
};

export default Home;