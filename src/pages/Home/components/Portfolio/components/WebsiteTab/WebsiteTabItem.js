import React from "react";

const WebsiteTabItem = ({ setClickImg, image, setValuePopup, value }) => {
  const handleClick = () => {
    setClickImg(true);
    setValuePopup(Number(value));
  };

  return (
    <div className='item'>
      <div className='item__content'>
        <figure onClick={handleClick} value={value}>
          <img src={image} alt='item Images' />
          <figcaption>
            <div className='item__title'>
              <div className='text__center'>
                <span>single</span>
                <span>page</span>
              </div>
            </div>
            <div className='item__description'>
              <p>showcase your portfolio in details on a single page</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default WebsiteTabItem;
