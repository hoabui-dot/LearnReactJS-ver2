import React, { useState } from "react";
import "./Button.scss";

const Button = () => {
  const [state, setState] = useState(false);
  window.onscroll = function () {
    scrollFunction();
  };
  //Visible Button ScrollTop when user scroll

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setState(true);
    } else setState(false);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        onClick={scrollToTop}
        className={state ? "btnScroll active" : "btnScroll"}
      >
        <i className='fa-solid fa-angle-up'></i>
      </div>
    </>
  );
};

export default Button;
