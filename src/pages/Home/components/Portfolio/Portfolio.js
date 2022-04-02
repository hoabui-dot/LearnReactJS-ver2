import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import PortfolioIcon from "../../../../assets/images/safe.png";
import SlideShow from "./LightBox";
import "./Portfolio.scss";

function Portfolio() {
  return (
    <>
      <TitleSection title='portfolio' urlIcon={PortfolioIcon} />
      <SlideShow />
    </>
  );
}

export default Portfolio;
