import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="container border-top" style={{ width: "100%" }}>
      <div className="row">
        <div className="col">
          <img src="/media/logo.svg"
          alt='logo' />
          <p>© 2010 - 2024, Not Zerodha Broking Ltd.</p>
          <br />
          All rights reserved.
          <div className="d-flex gap-4 mt-2 align-items-center fs-3">
            <a href="/" className="text-secondary">
              <FaTwitter />
            </a>
            <a href="/" className="text-secondary">
              <FaFacebookSquare />
            </a>
            <a href="/" className="text-secondary">
              <FaInstagram />
            </a>
            <a href="/" className="text-secondary">
              <FaLinkedinIn />
            </a>
            <a href="/" className="text-secondary">
              <FaTelegram />
            </a>
          </div>
        </div>
        <div className="col mt-5">
          <p>Company</p>
          <a href="/" >About</a>
          <br />
          <br />
          <a href="/" >Product</a>
          <br />
          <br />
          <a href="/" >Pricing</a>
          <br />
          <br />
          <a href="/" >Refferal programme</a>
          <br />
          <br />
          <a href="/" >careers</a>
          <br />
          <br />
          <a href="/" >Zerodha.tech</a>
          <br />
          <br />
          <a href="/" >press & media</a>
          <br />
          <br />
          <a href="/" >Zerodha cares(CSR)</a>
        </div>
        <div className="col mt-5">
          <p>Support</p>
          <a href="/" >Contact</a>
          <br />
          <br />
          <a href="/" >Support portal</a>
          <br />
          <br />
          <a href="/" >Z-Connect blog</a>
          <br />
          <br />
          <a href="/" >List of charges</a>
          <br />
          <br />
          <a href="/" >Downloads & resources</a>
        </div>
        <div className="col mt-5">
          <p>Account</p>
          <a href="/" >Open an account</a>
          <br />
          <br />
          <a href="/" >Fund transfer</a>
          <br />
          <br />
          <a href="/" >60 day challenge</a>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <p>
          © 2010–2026, Tradeora. All rights reserved. Tradeora is a financial
          technology platform designed to provide users with access to financial
          market information, investment-related tools, educational resources,
          and digital services that support informed financial decision-making.
          Investments in securities markets are subject to market risks. Read
          all relevant documents carefully before investing. Past performance is
          not indicative of future results. Market prices may fluctuate, and
          investors may lose some or all of their invested capital. Tradeora
          does not guarantee profits, returns, or investment outcomes. Any
          examples, illustrations, market data, or educational materials
          available on this platform should not be interpreted as a promise of
          future performance or a recommendation to buy or sell any financial
          instrument. Users are responsible for their own investment decisions
          and should carefully evaluate their financial goals, investment
          horizon, and risk tolerance. 
          Where necessary, users should consult a
          qualified financial advisor before making investment decisions. All
          trademarks, logos, designs, text, graphics, and other materials
          displayed on this website belong to their respective owners.
          Unauthorized copying, reproduction, distribution, or commercial use of
          any platform content is prohibited. 
          <br/>
          <br/>Tradeora shall not be held liable
          for any direct or indirect loss, damage, or financial consequence
          arising from the use of this platform, reliance on its information,
          technical interruptions, or inaccuracies in the content provided. By
          accessing or using Tradeora, you acknowledge that you have read and
          understood these terms and agree to use the platform responsibly.
        </p>
      </div>
    </div>
  );
}

export default Footer;
