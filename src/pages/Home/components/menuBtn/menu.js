import React from "react";
import "./menu.scss";
import $ from "jquery";

const menu = () => {
  $(".menu-btn").on("click", function () {
    $(".menu").css("left", "0");
  });
  const menu = $(".menu");
  $(window).on("click", function (event) {
    if (event.target == $(".menu-maxWidth")) {
      menu.css("left", "-225px");
    }
  });
  return (
    <div className='menu-maxWidth'>
      <div className='menu'>
        <button className='menu-btn'>
          <i className='fa-solid fa-bars'></i>
        </button>
        <div className='menu-wrap'>
          <div className='menu-avt'>
            <div className='menu-avt__wrap'>
              <span>H</span>
            </div>
          </div>
          <div className='menu-list'>
            <a href='#'>
              <i className='fa-solid fa-user-large'></i>
              <span>home</span>
            </a>
            <a href='#'>
              <i class='fa-solid fa-gauge'></i>
              <span>about</span>
            </a>
            <a href='#'>
              <i className='fa-solid fa-graduation-cap'></i>
              <span>education</span>
            </a>
            <a href='#'>
              <i class='fa-solid fa-sliders'></i>
              <span>skills</span>
            </a>
            <a href='#'>
              <i className='fa-solid fa-suitcase'></i>
              <span>experience</span>
            </a>
            <a href='#'>
              <i className='fa-solid fa-box-archive'></i>
              <span>portfolios</span>
            </a>
            <a href='#'>
              <i className='fa-solid fa-heart'></i>
              <span>interest</span>
            </a>
            <a href='#'>
              <i className='fa-solid fa-users'></i>
              <span>testimonials</span>
            </a>
            <a href='#'>
              <i className='fa-solid fa-money-bill'></i>
              <span>pricing</span>
            </a>
            <a href='#'>
              <i className='fa-solid fa-square-pen'></i>
              <span>blog</span>
            </a>
            <a href='#'>
              <i className='fa-solid fa-envelope'></i>
              <span>contact</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
