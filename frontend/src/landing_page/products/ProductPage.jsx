import React from "react";
import RightSection from "./RightSection.jsx";
import LeftSection from "./LeftSection.jsx";
import Hero from "./Hero.jsx";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageUrl="./media/kite.png"
        productName="byte"
        productDescription="My Project for displaying my core knowledge of MERN took the inspiration of a 
                        official web site and cloned it with my own spices better to keep 
                        practicing then keep learning is my 
                        admiration for perfection."
        tryDemo="Tradeora code base"
        learnMore="learn more"
        googlePlay="./media/googleplaybadge.svg"
        appStore="./media/appstoreBadge.svg"
      />

      <RightSection
        imageUrl="./media/kite.png"
        productName="Console"
        productDescription="My Project for displaying my core knowledge of MERN took the
            inspiration of a official web site and cloned it with my own spices
            better to keep practicing then keep learning is my admiration for
            perfection."
        tryDemo="Learn more"
        learnMore="learn more"
        googlePlay="./media/googleplaybadge.svg"
        appStore="./media/appstoreBadge.svg"
      />

      <LeftSection
        imageUrl="./media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, c
        ommission-free, delivered directly to your Demate account.
         Enjoy he investment experience n your Android and iOS devices."
        tryDemo="Click here"
        learnMore="learn more"
        googlePlay="./media/googleplaybadge.svg"
        appStore="./media/appstoreBadge.svg"
      />

      <RightSection
        imageUrl="./media/Kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super 
        simple HTTP/JSON APIs. If you are a startup, build your investment app 
        and showcase it to our clientbase."
        tryDemo="Learn more"
        learnMore="learn more"
        googlePlay="./media/googleplaybadge.svg"
        appStore="./media/appstoreBadge.svg"
      />
      <LeftSection
        imageUrl="./media/varsity.png"
        productName="Varsity"
        productDescription="An easy to grasp, collection of stock market lessons
         with in-depth coverage and illustrations. 
        Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="Click here"
        learnMore="learn more"
        googlePlay="./media/googleplaybadge.svg"
        appStore="./media/appstoreBadge.svg"
      />
    </>
  );
}

export default ProductsPage;
