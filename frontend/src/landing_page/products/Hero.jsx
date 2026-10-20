import React from 'react';
import { ArrowRight } from 'lucide-react';
// import leftSection from './LeftSection'

function Hero() {
    return ( 
        <>
        <div className="container text-center mt-5">
            <h1>
                Technology
            </h1>

            <p>
                Sleek, modern and intuitive trading platform
            </p>

            <p>
                Check out our{" "}
                <a href="#">
                    investment offering <ArrowRight size={18} />
                </a>
            </p>
        </div>

        </>

    );
}


export default Hero;