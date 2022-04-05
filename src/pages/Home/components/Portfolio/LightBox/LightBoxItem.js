import React from "react";

function LightBoxItem({ image, bigImg }) {
  return (
    <div className={`item__content ${bigImg} box__shadow`}>
      <figure>
        <img src={image} alt='item Images' />
      </figure>
      <figcaption>
        <div className='item__text'>
          <div className='text__center'>
            <p>lightbox</p>
            <p>images</p>
          </div>
          <div className='text__bottom'>
            <p>two hover effect for portfolio grid block. it's scale</p>
          </div>
        </div>
      </figcaption>
    </div>
  );
}

export default LightBoxItem;
