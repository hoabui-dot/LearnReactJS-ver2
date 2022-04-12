import React, { useState, useEffect } from "react";
import TitleSection from "../TitleSection/TitleSection";
import PortfolioIcon from "../../../../assets/images/safe.png";
import LightBox from "./LightBox/LightBox";
import { portfolio } from "../../../../utils/MockData";
import "./Portfolio.scss";

function Portfolio() {
  const [click, setClick] = useState(0);
  const [btn, setBtn] = useState(false);
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(false);
  }, []);

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
              onClick={() => setClick(0)}
              className='btn btn__primary ripple active'
            >
              all
            </button>
            <button onClick={() => setClick(0)} className='btn'>
              logo
            </button>
            <button onClick={() => setClick(1)} className='btn'>
              dribble
            </button>
            <button onClick={() => setClick(2)} className='btn'>
              websites
            </button>
          </div>
          <div className={btn ? "lightBox__wrap visible" : "lightBox__wrap"}>
            {portfolio &&
              !!portfolio &&
              portfolio.map((data, index) => (
                <div
                  key={index}
                  className={
                    click === index ? "lightBox__item active" : "lightBox__item"
                  }
                >
                  {(click === index || btn === true) && (
                    <LightBox data={data} />
                  )}
                </div>
              ))}
          </div>
          <button
            onClick={handleVisible}
            className={
              click !== 0 ? "lightBox__visible hidden" : "lightBox__visible"
            }
          >
            <i className={btn ? "fa-solid fa-angles-up" : "fa fa-plus"}></i>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
