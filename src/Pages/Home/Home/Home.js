import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
        </div>
    );
};

export default Home;