import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className=" p-5 text-muted text-center mt-5 mb-5 p-5 fs-5">
          <h4>Charges</h4>
          <p>List of all charges and taxes</p>
        </div>
        <div className="me-5 ms-5 col-4 text-center w-25">
          <img src="./media/pricing0.svg" 
                alt="pricing img" />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className=" me-5 ms-5 col-4 text-center w-25">
          <img src="./media/intradayTrades.svg"
          alt="intradyPricing img" />
          <h3>Intraday and F&O trades</h3>
          <p>
            <small>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </small>
          </p>
        </div>
        <div className=" ms-5 col-4 text-center w-25 mb-5">
          <img src="./media/pricing0.svg" 
                alt="pricing"
            />
          <h3>Free direct MF</h3>
          <p>
            <small>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </small>
          </p>
        </div>
      </div>

      <div>
         <div className='text-center mb-5 mt-5'>
             <h1>Open a Tradeora Account</h1>
            <p>Mordern platform and Apps, ₹0 Investment, and flat ₹20 intraday and F&O Trades</p>
            <button className='btn btn-primary p-2' style={{width:'14%'}}>Sgin Up now</button>
        
        </div>
      </div>
    </div>
  );
}

export default Hero;
