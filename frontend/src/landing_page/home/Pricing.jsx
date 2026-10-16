import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row mb-5'>
                 <div className='col-4 mt-5'> 
                    <h1>Unbeatable Pricing</h1>
                     <p>
                        We pioneered the concept of discount broking and price transparency in india. Flat 
                        fees and no hidden charges.
                    </p>
                    <a href='' className='' style={{textDecoration:'none'}}>See pricing
                         <i className="fa-solid fa-arrow-right-long text-blue ms-1 mb-5"></i> </a>
                 </div>
                 <div className='col-2'> 
                 </div>
                 <div className='col-6'> 
                    <div className='row'>
                        <div className='col-6 text-center p-5 mb-5' style={{border:'1px solid grey'}} >
                              <h1>₹0</h1>
                              <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6 text-center p-5 mb-5'style={{border:'1px solid grey'}}>
                            <h1>₹20</h1>
                              <p>Intraday and F&O</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
     );
}

export default Pricing;