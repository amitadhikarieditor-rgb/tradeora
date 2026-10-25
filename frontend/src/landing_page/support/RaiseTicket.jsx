import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faParagraph, faPerson, faPlus, faPlusCircle, faUser } from "@fortawesome/free-solid-svg-icons";

function RaiseTicket() {
  return (
    <>
      <div className="container">
        <div className="row p-2">
            <div className="col-1"></div>
          <div className="col-3">
            <h4 className=" text-start">
              To create a ticket, select a relevant topic
            </h4>
            <br />
            <FontAwesomeIcon
              icon={faPlusCircle}
            />
            Account opening
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Online account opening</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Offline Account opening</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Company, Partnersjip and HUF Account opening</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#"> NRI Account Opening</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#"> Zerodha IDFC FIRST Bank 3-in-1 Account</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#"> Getting Started</a>
            <br />
            <br />
          </div>

          <div className="col-1"></div>

          <div className="col-3">
            <br/> <br/>
            <FontAwesomeIcon
              icon={faUser}
              className="  mt-5 text-dark rounded-2"
            />
            Account opening
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Login Credentials</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Account Modification and Segment Addition</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">DP ID and bank details</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#"> Your profile</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Transfer and conversion of shares</a>
            <br />
            <br />
          </div>

          <div className="col-1"></div>

          <div className="col-3">

            <br/> <br/>
            <FontAwesomeIcon
              icon={faParagraph}
              className=" mt-5 text-dark rounded-2"
            />
            Your Zerodha Account
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Margin/leverage. Product and Order types</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Byte Web and Mobile</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Trading FAQ</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Corporate Actions</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Sentinel</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Byte API</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Pi and other platform</a>
            <br />
            <br />
            <a style={{textDecoration:'none'}} href="#">Stockreports+</a>
            <br />
            <br/>
            <a style={{textDecoration:'none'}} href="#">GTT</a>
          </div>
        </div>
        <div className="col-1 mb-5"></div>
      </div>
    </>
  );
}
export default RaiseTicket;
