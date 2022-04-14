import React, { useState } from "react";
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
  const [clickImg, setClickImg] = useState(false); //set click image to open popup image
  const [image, setImage] = useState(null);

  const handleClick = e => {
    setBtn(false);
    setClick(e.target.innerText);
  };

  const handlePopup = () => {
    setClickImg(false);
  };

  const handleVisible = () => {
    setBtn(!btn);
  };

  return (
    <section id='portfolio' className='portfolio'>
      <div className='container'>
        <TitleSection title='portfolio' urlIcon={PortfolioIcon} />
        <div className='lightBox animated'>
          <div className='lightBox__btn'>
            <button
              onClick={handleClick}
              className={click === "ALL" ? "btn active" : "btn"}
            >
              ALL
            </button>
            <button
              onClick={handleClick}
              className={click === "LOGO" ? "btn active" : "btn"}
            >
              LOGO
            </button>
            <button
              onClick={handleClick}
              className={click === "DRIBBLE" ? "btn active" : "btn"}
            >
              DRIBBLE
            </button>
            <button
              onClick={handleClick}
              className={click === "WEBSITES" ? "btn active" : "btn"}
            >
              WEBSITES
            </button>
          </div>
          <div className='portfolio__wrap'>
            <div className='lightBox'>
              {click === "ALL" && btn === false ? (
                <LogoTab setImage={setImage} setClickImg={setClickImg} />
              ) : (
                ""
              )}
              {click === "LOGO" && btn === false ? (
                <LogoTab setImage={setImage} setClickImg={setClickImg} />
              ) : (
                ""
              )}
              {click === "DRIBBLE" && btn === false ? (
                <DribbleTab setImage={setImage} setClickImg={setClickImg} />
              ) : (
                ""
              )}
              {click === "WEBSITES" && btn === false ? (
                <WebsiteTab setImage={setImage} setClickImg={setClickImg} />
              ) : (
                ""
              )}
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
        <div
          onClick={handlePopup}
          className={clickImg ? "portfolio__popup active" : "portfolio__popup"}
        >
          <i className='fa fa-close'></i>
          <div className='content'>
            <figure>
              <img src={image} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
