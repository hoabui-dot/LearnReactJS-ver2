import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "./Card/Card";
import "./Banner.scss";
import ButtonScrollTop from "../../../../components/ButtonScrollTop/Button";
import logo from "../../../../assets/images/profile.png";

const Banner = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleOpenMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <section id='banner' className='banner'>
      <nav id='theMenu' className={toggleMenu ? "menu menu__open" : "menu"}>
        <div className='menu__wrap'>
          <div className='logo__flat'>
            <img alt='personal logo' className='img__responsive' src={logo} />
          </div>
          <br />
          <a href='#banner'>
            <i className='title__icon fa fa-user'></i>Home
          </a>
          <a href='#description'>
            <i className='title__icon fa fa-dashboard'></i>About
          </a>
          <a href='#education'>
            <i className='title__icon fa fa-graduation-cap'></i>Education
          </a>
          <a href='#skill'>
            <i className='title__icon fa fa-sliders'></i>Skills
          </a>
          <a href='#experience'>
            <i className='title__icon fa fa-suitcase'></i>Experience
          </a>
          <a href='#portfolio'>
            <i className='title__icon fa fa-archive'></i>Portfolios
          </a>
          <a href='#interest'>
            <i className='title__icon fa fa-heart'></i>Interest
          </a>
          <a href='#testimonial'>
            <i className='title__icon fa fa-users'></i>Testimonials
          </a>
          <a href='#pricing'>
            <i className='title__icon fa-regular fa-money-bill-1'></i>Pricing
          </a>
          <a href='#blog'>
            <i className='title__icon fa fa-pencil-square'></i>Blog
          </a>
          <a href='#contact'>
            <i className='title__icon fa fa-envelope'></i>Contact
          </a>
        </div>

        <div id='menuToggle' onClick={handleOpenMenu} className=''>
          <div className='toggle__normal'>
            <i
              className={`material-icons top__bar ${
                toggleMenu ? "top__transform" : ""
              }`}
            >
              remove
            </i>
            <i
              className={`material-icons middle__bar ${
                toggleMenu ? "middle__transform" : ""
              }`}
            >
              remove
            </i>
            <i
              className={`material-icons bottom__bar ${
                toggleMenu ? "bottom__transform" : ""
              }`}
            >
              remove
            </i>
          </div>
        </div>
      </nav>
      <div className='header__background'></div>
      <Card />
      <ButtonScrollTop />
    </section>
  );
};

export default Banner;
