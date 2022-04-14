import React from "react";

const LogoSlideShowItem = props => {
  return (
    <div className='item'>
      <div className='item__content'>
        <figure>
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
  );
};

export default LogoSlideShowItem;
