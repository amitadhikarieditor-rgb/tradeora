import React from "react";
import { ArrowRight } from "lucide-react";
// import leftSection from './LeftSection'

function Hero() {
  return (
    <>
     <br/>
      <div className="container text-center mt-5 mb-5 p-5">
        <h1>
          Tradeora Products
        </h1>
          <h5 className="text-muted mt-3">Sleek, modern, and intuitive trading platforms</h5>

        <p className="text-muted mt-3 mb-5">
          Check out our{" "}
          <a href="#">
            investment offering <ArrowRight size={18} />
          </a>
        </p>
 <br/><br/><br/> <br/>
        <hr />
      </div>
    </>
  );
}

export default Hero;
