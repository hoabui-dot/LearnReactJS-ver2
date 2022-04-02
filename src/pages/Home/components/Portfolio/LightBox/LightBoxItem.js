import React from "react";

function LightBoxItem({ image }) {
  return (
    <div className='item__content box__shadow'>
      <figure>
        <figcaption>
          <img src={image} alt='item Images' />
          <div className='item__text'>
            <div className='center'>
              <p>lightbox</p>
              <p>images</p>
            </div>
            <div className='bottom'>
              <p>two hover effect for portfolio grid block. it's scale</p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default LightBoxItem;
