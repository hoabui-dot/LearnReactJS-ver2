import React from "react";
import Card from "./card/card";
import Menu from "./menuBtn/menu";

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
