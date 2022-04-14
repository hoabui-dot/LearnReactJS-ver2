import React, { useEffect, useState } from "react";
import TitleSection from "../TitleSection/TitleSection";
import WebsiteTab from "./components/WebsiteTab/WebsiteTab";
import AllTab from "./components/AllTab/AllTab";
import DribbleTab from "./components/DribbleTab/DribbleTab";
import LogoTab from "./components/LogoTab/LogoTab";
import PortfolioIcon from "../../../../assets/images/safe.png";
import "./Portfolio.scss";

const Portfolio = () => {
  const [btn, setBtn] = useState(false);
  const [click, setClick] = useState("ALL");
  const handleVisible = () => {
    setBtn(!btn);
  };

  return (
    <section className='portfolio'>
      <div className='container'>
        <TitleSection title='portfolio' urlIcon={PortfolioIcon} />
        <div className='lightBox animated'>
          <div className='lightBox__btn'>
            <button
              onClick={() => {
                setClick("ALL");
                setBtn(false);
              }}
              className={click === "ALL" ? "btn active" : "btn"}
            >
              all
            </button>
            <button
              onClick={() => {
                setClick("LOGO");
                setBtn(false);
              }}
              className={click === "LOGO" ? "btn active" : "btn"}
            >
              logo
            </button>
            <button
              onClick={() => {
                setClick("DRIBBLE");
                setBtn(false);
              }}
              className={click === "DRIBBLE" ? "btn active" : "btn"}
            >
              dribble
            </button>
            <button
              onClick={() => {
                setClick("WEBSITES");
                setBtn(false);
              }}
              className={click === "WEBSITES" ? "btn active" : "btn"}
            >
              websites
            </button>
          </div>
          <div className='portfolio__wrap'>
            <div className='lightBox'>
              {click === "ALL" && btn === false ? <LogoTab /> : ""}
              {click === "LOGO" && btn === false ? <LogoTab /> : ""}
              {click === "DRIBBLE" && btn === false ? <DribbleTab /> : ""}
              {click === "WEBSITES" && btn === false ? <WebsiteTab /> : ""}
              {btn ? <AllTab /> : ""}
            </div>
          </div>
          <button
            onClick={handleVisible}
            className={click !== "ALL" ? "hidden" : "lightBox__visible"}
          >
            <i className={btn ? "fa-solid fa-angles-up" : "fa fa-plus"}></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
