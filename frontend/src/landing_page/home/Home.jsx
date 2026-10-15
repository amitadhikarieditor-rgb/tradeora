import React from 'react';
import Hero from './HomeHero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';
import Footer from '../footer';
import Navbar from '../Navbar';

function HomePage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
     );
}

export default HomePage;