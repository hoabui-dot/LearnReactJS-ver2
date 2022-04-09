import React from "react";
import Card from "./Card/Card";
import Menu from "./MenuBtn/Menu";
import "./Banner.scss";

const Banner = () => {
  window.onscroll = function () {
    scrollFunction();
  };
  //Visible Button ScrollTop when user scroll
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("btnScroll").style.display = "block";
    } else {
      document.getElementById("btnScroll").style.display = "none";
    }
  }
  // Handle Scroll Activities
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className='header'>
      <div className='header__background'></div>
      <Menu />
      <Card />
      <div id='btnScroll' className='animated' onClick={scrollToTop}>
        <i className='fa-solid fa-angle-up'></i>
      </div>
      <div className='btn__'></div>
    </section>
  );
};

export default Banner;
