import React from 'react';
import {ArrowRight} from 'lucide-react'

function LeftSection() {
    return (  
        <div className='container mt-5' >
            <div className='row' >
                <hr/>
                <div className='col-1'></div>
                <div className='col-4 mt-5'>
                    <img src='./media/kite.png'/>
                </div>
                  <div className='col-2'></div>

                 <div className='col-4 mt-5 text-start'>
                    <h1>Byte</h1>
                    <p>
                        My Project for displaying my core knowledge of MERN took the inspiration of a 
                        official web site and cloned it with my own spices better to keep practicing then keep learning is my 
                        admiration for perfection
                    </p>
                    <a href='https://github.com/amitadhikarieditor-rgb/tradeora'> 
                        tradeora code base <ArrowRight size={18}/>
                    </a>
<br/>
                    <img src='./media/googleplaybadge.svg' className='mt-5' />
                     <img src='./media/appstoreBadge.svg' className='mt-5 ms-5' />

                </div>
            </div>

        </div>
     );
}

export default LeftSection;