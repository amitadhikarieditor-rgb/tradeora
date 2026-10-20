import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container text-center p-5 mt-5">
      <div className="row ">
        <img
          src="/media/homeHero.png"
          alt="Tradeora homepage hero"
          className="mb-5"
        />
      </div>

      <h1> Invest In Everything</h1>
      <p>
        Online Platform to invest in stocks, derivatives,gold and MutualFunds
      </p>

      <Link to="/signup" className="btn btn-primary px-4 py-2">
        Sign Up Now
      </Link>
    </div>
  );
}

export default Hero;