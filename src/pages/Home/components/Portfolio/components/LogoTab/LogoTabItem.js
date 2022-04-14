import React, { useState } from "react";

const LogoSlideShowItem = props => {
  const [click, setClick] = useState(false);

  function handlePopup(e) {
    e.preventDefault();

    if (props.video) {
      return (
        <video>
          <source src={props.video}></source>
        </video>
      );
    } else {
      return <img src={props.image} />;
    }
  }

  return (
    <>
      <div className='item'>
        <div className='item__content'>
          <figure onClick={setClick(true)}>
            <img src={props.image} alt='item Images' />
            <figcaption>
              <div className='item__title'>
                <div className='text__center'>
                  <p className='text__icon'>
                    {props.icon && <i className={props.icon}></i>}
                  </p>
                  <span>lightbox</span>
                  <span>{props.title}</span>
                </div>
              </div>
              <div className='item__description'>
                <p>{props.description}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div id='id02' className={click ? "modal active" : "modal"}>
        <div className='modal__content'>{handlePopup}</div>
      </div>
    </>
  );
};

export default LogoSlideShowItem;
