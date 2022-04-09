import React from "react";
import Card from "./Card/Card";
import Menu from "./MenuBtn/Menu";
import "./Banner.scss";
import ButtonScrollTop from "../../../../components/ButtonScrollTop/Button";

const Banner = () => {
  return (
    <section className='header'>
      <div className='header__background'></div>
      <Menu />
      <Card />
      <ButtonScrollTop />
    </section>
  );
};

export default Banner;
