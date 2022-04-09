import React from "react";
import "./Button.scss";

const button = () => {
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
    <>
      <div id='btnScroll' className='animated' onClick={scrollToTop}>
        <i className='fa-solid fa-angle-up'></i>
      </div>
    </>
  );
};

export default button;
