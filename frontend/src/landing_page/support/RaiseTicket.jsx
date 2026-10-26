import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowDown,
    faCocktail,
    faCreditCard,
  faParagraph,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function RaiseTicket() {
  return (
    <>
      <div className="container">
        <div className="row pe-5">
          <div className="col-1"></div>
          <div className="col-3">
            <h4 className=" text-start">
              To create a ticket, select a relevant topic
            </h4>
            <br />
            <FontAwesomeIcon icon={faPlusCircle} />
            Account opening
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Online account opening
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Offline Account opening
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Company, Partnersjip and HUF Account opening
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              {" "}
              NRI Account Opening
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              {" "}
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              {" "}
              Getting Started
            </a>
            <br />
            <br />
          </div>

          <div className="col-1"></div>

          <div className="col-3">
            <br /> <br />
            <FontAwesomeIcon
              icon={faUser}
              className="  mt-5 text-dark rounded-2"
            />
            Account opening
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Login Credentials
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Account Modification and Segment Addition
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              DP ID and bank details
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              {" "}
              Your profile
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Transfer and conversion of shares
            </a>
            <br />
            <br />
          </div>

          <div className="col-1"></div>

          <div className="col-3">
            <br /> <br />
            <FontAwesomeIcon
              icon={faParagraph}
              className=" mt-5 text-dark rounded-2"
            />
            Your Zerodha Account
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Margin/leverage. Product and Order types
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Byte Web and Mobile
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Trading FAQ
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Corporate Actions
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Sentinel
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Byte API
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Pi and other platform
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Stockreports+
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              GTT
            </a>
          </div>
        </div>

{/* second part */}
        <div className="col-1 "></div>
      </div>
      <div className="container">
        <div className="row pe-5">
          <div className="col-1"></div>
          <div className="col-3">
            <br />
            <br />
             <br />
            <br />
            <FontAwesomeIcon icon={faCreditCard} />
            Funds
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Adding Funds
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Fund Withdrawls
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              eMandates
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              {" "}
              NRI Account Opening
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              {" "}
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              {" "}
              Getting Started
            </a>
            <br />
            <br />
          </div>

          <div className="col-1"></div>

          <div className="col-3">
            <br /> <br />
            <FontAwesomeIcon
              icon={faCircleArrowDown}
              className="  mt-5 text-dark rounded-2"
            />
           Console
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Login Credentials
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Account Modification and Segment Addition
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              DP ID and bank details
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              {" "}
              Your profile
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Transfer and conversion of shares
            </a>
            <br />
            <br />
          </div>

          <div className="col-1"></div>

          <div className="col-3">
            <br /> <br />
            <FontAwesomeIcon
              icon={faCocktail}
              className=" mt-5 text-dark rounded-2"
            />
           Coin
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Reports
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Ledger
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Portfolio
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Your Holdings
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              App and Website
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Byte API
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Pi and other platform
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              Stockreports+
            </a>
            <br />
            <br />
            <a style={{ textDecoration: "none" }} href="/sginup">
              GTT
            </a>
          </div>
        </div>
        <div className="col-1 mb-5"></div>
      </div>
    </>
  );
}
export default RaiseTicket;
