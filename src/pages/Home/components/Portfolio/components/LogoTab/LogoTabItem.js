import React from "react";

const LogoSlideShowItem = ({
  setClickImg,
  setImage,
  image,
  title,
  description,
  icon,
  video,
}) => {
  const handleClick = () => {
    document.body.style.overflow = "hidden";
    setClickImg(true);
    setImage(image);
  };

  return (
    <>
      <div className='item__content'>
        <figure onClick={handleClick}>
          <img src={image} alt='item Images' />
          <figcaption>
            <div className='item__title'>
              <div className='text__center'>
                <p className='text__icon'>{icon && <i className={icon}></i>}</p>
                <span>lightbox</span>
                <span>{title}</span>
              </div>
            </div>
            <div className='item__description'>
              <p>{description}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default LogoSlideShowItem;
