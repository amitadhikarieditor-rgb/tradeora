import React from 'react';


function Stats() {
    return (  
       <div className='container'>
        <div className='row p-5'>
            <div className='col-6 p-5'>

                <h1>trust with confidence</h1>

                <h3>costumer-first always</h3>
                <p className='text-muted'>That's wjy 1.3+ crore costumers trust Tradeora with 3.5+ lakh crores worth of equity
                    investment </p>
                    
                    <h3>No spam and gimmicks</h3>
                <p className='text-muted'>No gimmicks, spam, 'gamification', or annoying push notification. High quality apps
                    that you use at your pace, the way you like.
                </p>
                    
                    <h3>The Tradeora universe</h3>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored
                    services specific to your needs.
                </p>
                    
                    <h3>Do better with money</h3>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, 
                    but actively help you do better with your money 
                </p>

            </div>
            <div className='col-6 mb-5'>
                <img src='/media/ecosystem.png' style={{width:'110%'}} />

                <a href='' className='ms-5 p-5' style={{textDecoration:'none'}}>Explore our products <i className="fa-solid fa-arrow-right-long text-blue"></i> </a>
                <a href='' className='ms-3' style={{textDecoration:'none'}} >Try Kite <i className="fa-solid fa-arrow-right"></i> </a>
            </div>

        </div>
       </div>
    );
}

export default Stats;