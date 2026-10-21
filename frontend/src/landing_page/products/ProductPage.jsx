import React from "react";
import RightSection from "./RightSection.jsx";
import LeftSection from "./LeftSection.jsx";
import Hero from "./Hero.jsx";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
      imageUrl='./media/kite.png' 
        productName="byte"
        productDescription="My Project for displaying my core knowledge of MERN took the inspiration of a 
                        official web site and cloned it with my own spices better to keep practicing then keep learning is my 
                        admiration for perfection."
        tryDemo="Tradeora code base"
        learnMore="learn more"
        googlePlay="./media/googleplaybadge.svg"
        appStore="./media/appstoreBadge.svg"
      />
      <RightSection />

      <LeftSection   
      imageUrl='./media/coin.png'
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demate account. Enjoy he investment experience n your Android and iOS devices"
        tryDemo="Tradeora code base"
        learnMore="learn more"
        googlePlay="./media/googleplaybadge.svg"
        appStore="./media/appstoreBadge.svg"
      />
    </>
  );
}

export default ProductsPage;
