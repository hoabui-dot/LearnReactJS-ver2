import React, { useState } from "react";
import { Link } from "react-scroll";
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

  return (
    <>
      <Link to='banner' spy={true} smooth={true} offset={50} duration={500}>
        <div className={state ? "btnScroll active" : "btnScroll"}>
          <i className='fa-solid fa-angle-up'></i>
        </div>
      </Link>
    </>
  );
};

export default Button;
