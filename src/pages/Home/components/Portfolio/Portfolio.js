import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import PortfolioIcon from "../../../../assets/images/safe.png";
import LightBox from "./LightBox/LightBox";
import "./Portfolio.scss";

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='container'>
        <TitleSection title='portfolio' urlIcon={PortfolioIcon} />
        <LightBox />
      </div>
    </section>
  );
}

export default Portfolio;
