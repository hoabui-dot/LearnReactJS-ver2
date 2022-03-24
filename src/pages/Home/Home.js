import React from "react";
import "./Home.scss";
import Card from "./components/card/card";
// import Desc from "./components/desc/desc";

const index = () => {
  return (
    <>
      <header>
        <div className='header-background'></div>
        <button className='menu-btn'>
          <i class='fa-solid fa-bars'></i>
        </button>
        <Card />
        {/* <Desc /> */}
      </header>
    </>
  );
};

export default index;
