import React from "react";
import "./Home.scss";
import Card from "./components/card/card";
import Education from "./components/education/education";

const index = () => {
  return (
    <>
      <header>
        <div className='header-background'></div>
        <button className='menu-btn'>
          <i className='fa-solid fa-bars'></i>
        </button>
        <Card />
        <Education />
      </header>
    </>
  );
};

export default index;
