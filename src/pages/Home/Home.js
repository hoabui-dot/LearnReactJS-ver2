import React from "react";
import "./Home.scss";
import Card from "./components/card";

const index = () => {
  return (
    <>
      <header>
        <div className='header-background'></div>
      </header>
      <section className='card'>
        <div className='container'>
          <Card />
        </div>
      </section>
    </>
  );
};

export default index;
