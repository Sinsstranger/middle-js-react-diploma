import React, { useRef } from "react";
import MainBanner from "@layouts/MainBanner";
import Experience from "@layouts/Experience";
import Footer from "@components/Footer";
import Portfolio from "@layouts/Portfolio";
import TechStack from "@layouts/TechStack";
import Career from "@layouts/Career";
import Reviews from "@layouts/Reviews";
import Contacts from "@layouts/Contacts";

function Home() {
  const toTopRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  return (
    <>
      <MainBanner ref={toTopRef} />
      <div className="section-split hide-mobile" />
      <Experience />
      <div className="section-split hide-mobile" />
      <div className="container">
        <Portfolio />
        <TechStack />
        <Career />
        {/* <Reviews /> */}
        <Contacts toTopRef={toTopRef} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
