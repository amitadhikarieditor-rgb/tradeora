import React from "react";

function Brokerage() {
  return (
    <div className="container my-4">
      <div className="row ">
        <div className="col-12 col-lg-6">
          <h1 className="mb-4">Charges explained</h1>
         <section className="mb-5">

           
            <h2 className="h4 mb-3">
              Securities / Commodities Transaction Tax
            </h2>

            <p><small>
              Securities Transaction Tax (STT) and Commodities Transaction Tax
              (CTT) are levies imposed by the government on eligible
              transactions executed on stock exchanges.
            </small></p>

            <p><small>
              For equity delivery, STT generally applies on both buy and sell
              transactions. For intraday equity trades and Futures &amp; Options
              (F&amp;O), the applicable tax depends on the transaction type and
              is generally charged on the sell side.
            </small></p>

            <p className="text-muted"><small>
              STT / CTT can sometimes exceed the brokerage charged on a trade.
              Always review applicable statutory charges before placing an
              order.
            </small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Transaction / Turnover Charges</h2>

            <p><small>
              These charges are levied by stock exchanges such as NSE, BSE and
              MCX on the value of transactions. Applicable rates vary by
              exchange, segment and security category.
            </small></p>

            <ul className="ps-3">
              <li className="mb-2">
                <strong>Groups XC, XD, XT, Z and ZP:</strong> ₹10,000 per crore,
                according to the supplied historical reference.
              </li>

              <li className="mb-2">
                <strong>Groups SS and ST:</strong> ₹1,00,000 per crore of gross
                turnover.
              </li>

              <li className="mb-2">
                <strong>Groups A, B and specified non-exclusive scrips:</strong>{" "}
                ₹375 per crore, according to the supplied historical reference.
              </li>

              <li className="mb-2">
                <strong>Groups M, MT, TS and MS:</strong> ₹275 per crore of
                gross turnover.
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Call &amp; Trade</h2>

            <p><small>
              An additional charge of ₹50 per order may apply to orders placed
              through a dealer, including applicable auto square-off orders,
              according to the supplied reference tariff.
            </small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Stamp Charges</h2>

            <p><small>
              Stamp duty is levied by the Government of India on eligible
              transactions. Applicable rates depend on the transaction type and
              prevailing regulations.
            </small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">NRI Brokerage Charges</h2>

            <ul className="ps-3">
              <li className="mb-2">
                <strong>Non-PIS account:</strong> 0.5% or ₹50 per executed order
                for equity and F&amp;O, whichever is lower.
              </li>

              <li className="mb-2">
                <strong>PIS account:</strong> 0.5% or ₹200 per executed order
                for equity, whichever is lower.
              </li>

              <li className="mb-2">
                <strong>Annual maintenance charges:</strong> ₹500 + GST per
                year.
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Account with Debit Balance</h2>

            <p><small>
              An additional charge of ₹20 per executed order may apply to
              accounts with a debit balance, subject to the applicable tariff.
            </small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">
              Investor Protection Fund Trust (IPFT) Charges
            </h2>

            <ul className="ps-3">
              <li className="mb-2">
                <strong>Equity and Futures:</strong> ₹0.01 per crore of traded
                value + GST.
              </li>

              <li className="mb-2">
                <strong>Options:</strong> ₹0.01 per crore of premium value +
                GST.
              </li>

              <li className="mb-2">
                <strong>Currency Futures:</strong> ₹0.05 per lakh of turnover +
                GST.
              </li>

              <li className="mb-2">
                <strong>Currency Options:</strong> ₹2 per lakh of premium + GST.
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Margin Trading Facility (MTF)</h2>

            <p><small>
              Margin Trading Facility allows eligible clients to purchase
              securities using their own funds along with funding provided by
              the broker.
            </small></p>

            <ul className="ps-3">
              <li className="mb-2">
                <strong>MTF interest:</strong> 0.04% per day (₹40 per lakh) on
                the funded amount, according to the supplied reference tariff.
              </li>

              <li className="mb-2">
                <strong>MTF brokerage:</strong> 0.3% or ₹20 per executed order,
                whichever is lower.
              </li>

              <li className="mb-2">
                <strong>MTF pledge charges:</strong> ₹15 + GST per pledge or
                unpledge request per ISIN.
              </li>
            </ul>
          </section>

          <hr className="my-4" />

          <p className="text-muted small"><small>
            Disclaimer: The charges above are based on supplied reference
            material and may not reflect current rates. Verify applicable
            charges before publishing.
          </small></p>

        </div>

        <div className="col-12 col-lg-6">
          <section className="mb-5">
            <h2 className="h4 mb-3">GST</h2>
            <p><small>
              Goods and Services Tax (GST) is levied by the government on
              applicable services. As stated in the reference tariff, GST is 18%
              of brokerage, SEBI charges and transaction charges.
            </small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">SEBI Charges</h2>
            <p><small>
              SEBI charges are levied by the Securities and Exchange Board of
              India for regulating the securities markets. The supplied
              reference rate is ₹10 per crore + GST.
            </small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">DP (Depository Participant) Charges</h2>
            <p><small>
              According to the supplied tariff, ₹15.34 per scrip is charged to
              the trading account ledger when stocks are sold, irrespective of
              quantity.
            </small></p>

            <ul className="ps-3">
              <li className="mb-2">
                <strong>CDSL fee:</strong> ₹3.50
              </li>
              <li className="mb-2">
                <strong>Broker fee:</strong> ₹9.50
              </li>
              <li className="mb-2">
                <strong>GST:</strong> ₹2.34
              </li>
              <li className="mb-2">
                Female demat account holders as the first holder receive a ₹0.25
                discount on the CDSL fee per transaction, according to the
                supplied reference.
              </li>
              <li className="mb-2">
                Debit transactions of mutual funds and bonds receive an
                additional ₹0.25 discount on the CDSL fee.
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Pledging Charges</h2>
            <p><small>₹30 + GST per pledge request per ISIN.</small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">AMC (Account Maintenance Charges)</h2>

            <p><small>
              The supplied reference states that new resident individual
              accounts receive free AMC for the first year.
            </small></p>

            <ul className="ps-3">
              <li className="mb-3">
                <strong>BSDA Demat Account:</strong> Zero AMC when holdings are
                valued below ₹4,00,000.{" "}
                <a
                  href="https://support.zerodha.com/category/account-opening/offline-account-opening/bsda/articles/how-to-open-a-basic-service-demat-account-at-zerodha"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more about BSDA
                </a>
              </li>

              <li className="mb-2">
                <strong>Non-BSDA Demat Account:</strong> ₹300 per year + 18%
                GST, charged quarterly according to the supplied reference.{" "}
                <a
                  href="https://support.zerodha.com/category/account-opening/charges-at-zerodha/statutory-and-exchange/articles/what-is-the-annual-maintenance-charge"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more about AMC
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Corporate Action Order Charges</h2>
            <p><small>
              ₹20 + GST for OFS, buyback, takeover and delisting orders placed
              through Console, according to the supplied tariff.
            </small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Off-market Transfer Charges</h2>
            <p><small>₹25 per transaction.</small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Physical CMR Request</h2>
            <p><small>
              The first CMR request is free. Subsequent requests cost ₹20 + ₹100
              courier charges + 18% GST, according to the supplied reference.
            </small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Payment Gateway Charges</h2>
            <p><small>
              ₹9 + GST. These charges are not levied on transfers made through
              UPI, according to the supplied tariff.
            </small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">Delayed Payment Charges</h2>
            <p><small>
              Interest is stated as 18% per annum or 0.05% per day on the debit
              balance in the trading account.{" "}
              <a
                href="https://support.zerodha.com/category/console/ledger/articles/interest-charges"
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </a>
            </small></p>
          </section>

          <section className="mb-5">
            <h2 className="h4 mb-3">
              Trading Using a 3-in-1 Account with Block Functionality
            </h2>

            <ul className="ps-3">
              <li className="mb-2">
                <strong>Delivery &amp; MTF Brokerage:</strong> 0.5% per executed
                order.
              </li>
              <li className="mb-2">
                <strong>Intraday Brokerage:</strong> 0.05% per executed order.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
