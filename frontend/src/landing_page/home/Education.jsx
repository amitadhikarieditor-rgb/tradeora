import React from 'react';
import { useEffect } from 'react';

function Education() {

    return ( 
       <div className='container'>
        <div className='row mb-5'>

        <div className='col-6'>
           <img src='/media/education.svg'/>
        </div>
                 <div className='col-6 p-5'> 
                    <h1>Free and open market education</h1>
                     <p>
                       Varsity, the largest online stock market education book in the world covering 
                       everything from the basics to advance trading.
                    </p>
                    <a href='' className='' style={{textDecoration:'none'}}>Versity
                         <i className="fa-solid fa-arrow-right-long text-blue ms-1 mb-5"></i> </a>

                          <p>
                       TradingQ&A, the most active trading and investment in the market 
                       related queries.
                    </p>
                    <a href='' className='' style={{textDecoration:'none'}}>Versity
                         <i className="fa-solid fa-arrow-right-long text-blue ms-1 mb-5"></i> </a>
                </div>
            </div>
        </div>
     );
}

export default Education;