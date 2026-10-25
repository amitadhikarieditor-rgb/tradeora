import React from "react";

function Hero() {
  return (
    <div className="text-white container mt-5 mb-5 bg-primary p-5 vw-100 rounded-5">
      <div className="row text-center">
        <div className="col-6">
          <h5>Support portal </h5>
        </div>
        <div className="col-6">
          <a href="#">
            <h5>
               track tickets </h5></a>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-6">
          <p>Search for an answer or browse help topics to create a ticket</p>
               <div class="input-group w-75 mt-5 d-flex ms-5 justify-content-center">
            <textarea
            placeholder="e.g. How to setup my F&O account"
              class="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
        </div>
        <div className="col-6"> 
            <h5>
                Featured
            </h5>
            <span>1.</span> Current takeovers and Delisiting - january2024 <br/>
            <span>2.</span> Latest intraday leverages - MIS & CO

       </div>
      </div>
    </div>
  );
}

export default Hero;
