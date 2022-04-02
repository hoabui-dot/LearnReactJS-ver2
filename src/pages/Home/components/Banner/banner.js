import React from "react";
import Card from "./Card/Card";
import Menu from "./MenuBtn/Menu";

function Banner() {
  return (
    <section className='header'>
      <div className='header__background'></div>
      <Menu />
      <Card />
    </section>
  );
}

export default Banner;
