import React, { useState } from "react";
import TitleSection from "../TitleSection/TitleSection";

const TestPortfolio = () => {
  const [click, setClick] = useState("");

  const handleClick = e => {
    e.preventDefault();
    setClick(e.target.innerText);
  };

  return (
    <section className='portfolio'>
      <div className='container'>
        <TitleSection title='portfolio' urlIcon={PortfolioIcon} />
        <div className='portfolio__lightBox'>
          <div className='lightBox__btn'>
            <button
              onClick={handleClick}
              className='btn btn__primary ripple active'
            >
              all
            </button>
            <button onClick={handleClick} className='btn'>
              logo
            </button>
            <button onClick={handleClick} className='btn'>
              dribble
            </button>
            <button onClick={handleClick} className='btn'>
              websites
            </button>
          </div>
          <div className='portfolio__wrap'>
            <div className='lightBox'>
              {click === "logo" || click === "all" ? <LogoSlideShow /> : ""}
              {click === "dribble" || click === "all" ? (
                <DribbleSlideShow />
              ) : (
                ""
              )}
              {click === "website" || click === "all" ? <Website /> : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestPortfolio;
