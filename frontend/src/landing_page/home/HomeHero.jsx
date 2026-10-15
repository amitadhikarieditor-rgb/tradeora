import React from 'react';

function Hero() {
    return (  
        <div className='container text-center p-5'>
            <div className='row '>
                <img src='/media/homeHero.png'
                alt="Tradeora homepage hero" className='mb-5'/>
                 </div>

                 <h1> Invest In Everything</h1>
                 <p>Online Platform to invest in stocks, derivatives,gold and MutualFunds</p>
                 <button className='btn btn-primary p-2' style={{width:'14%'}}>Sgin Up now</button>

        </div>
    );
}

export default Hero;