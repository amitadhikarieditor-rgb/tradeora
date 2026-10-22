import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4" style={{ marginTop: "15%" }}>
          <h1> {productName} </h1>
          <p>
            My Project for displaying my core knowledge of MERN took the
            inspiration of a official web site and cloned it with my own spices
            better to keep practicing then keep learning is my admiration for
            perfection
          </p>
          <a href="https://github.com/amitadhikarieditor-rgb/tradeora">
            {tryDemo}
          </a>
        </div>
        <div className="col-1"></div>

        <div className="col-1">
          <img className="mt-5 p-5" src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
