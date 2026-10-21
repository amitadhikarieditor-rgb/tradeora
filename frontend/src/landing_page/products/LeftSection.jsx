import React from "react";
import { ArrowRight } from "lucide-react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4 mt-5">
          <img src={imageUrl} />
        </div>
        <div className="col-3"></div>

        <div className="col-4 mt-5 text-start">
          <h1> {productName} </h1>
          <p>{productDescription}</p>
          <a href="https://github.com/amitadhikarieditor-rgb/tradeora">
            {tryDemo} <ArrowRight size={18} />
          </a>
          <br />
          <img src={googlePlay} className="mt-5" />
          <img src={appStore} className="mt-5 ms-5" />
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
