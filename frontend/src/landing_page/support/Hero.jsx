import React from "react";

function Hero() {
  return (
    <div className="container bg-primary me-0">
      <div className="row text-center mb-6">
        <div className="col-6">
          <h1>Support portal </h1>
        </div>
        <div className="col-6">
          <a href="#">track tickets</a>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-6">
          <p>Search for an answer or browsehel topics to create a ticket</p>
        </div>
        <div className="col-6"> </div>
      </div>
    </div>
  );
}

export default Hero;
