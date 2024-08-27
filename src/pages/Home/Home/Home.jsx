import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2>This is Home</h2>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;