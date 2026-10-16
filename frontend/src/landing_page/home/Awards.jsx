import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 p-3'>
            <div className='row'>
                <div className='col-6'>
                     <img src='/media/largestBroker.svg'/>               
                </div>
                     
                    <div className='col-6 mt-3'>
                        <h1>Largest stock broker in india</h1>
                        <p>2+ million tradeora clients contribute 
                            to over 15% of all retail order 
                            volumes in india daily by trading and investing
                             </p>
                            <div className='row mt-5'>
                             <div className='col-6 mb-4'>
                                <ul>
                                    <li>
                                        <p>Futures and Options</p>
                                    </li>
                                     <li>
                                        <p>Commodity Derivatives</p>
                                    </li>
                                     <li>
                                        <p>Currency Derivatives</p>
                                    </li>

                                </ul>

                             </div>
                             <div className='col-6'>
                                   <li>
                                        <p>Stocks and IPOs</p>
                                    </li>
                                     <li>
                                       <p> Direct MutualFunds</p>
                                    </li>
                                     <li>
                                       <p>Bonds and Govt Securities</p>
                                    </li>
                                    </div>
                                    <img src='/media/pressLogos.png' style={{width:"84%"}}/>
                             </div>
                             
                </div>
            </div>
        </div>
     );
}

export default Awards;