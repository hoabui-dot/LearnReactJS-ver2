import React from "react";
import TitleSection from "../titleSection";
import PortfolioIcon from "../../../../assets/images/safe.png";
import SlideShow from "./SlideShow/SlideShow";

function Portfolio() {
  return (
    <>
      <TitleSection title='portfolio' urlIcon={PortfolioIcon} />
      <SlideShow />
    </>
  );
}

export default Portfolio;
