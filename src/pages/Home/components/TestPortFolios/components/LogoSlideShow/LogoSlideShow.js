import React from "react";
import big1 from "../../../../../../assets/images/big-1.jpg";
import port1 from "../../../../../../assets/images/portfolio-1.jpg";
import port2 from "../../../../../../assets/images/portfolio-2.jpg";

// const co

const LogoSlideShow = () => {
  const contentImage = (
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
  );

  return (
    <div className='logoSlide'>
      <div className='container'>
        <figure className='logoSlide__image'>
          <img src={big1} alt='SlideShow image' />
          {contentImage}
        </figure>
        <figure className='logoSlide__image'>
          <img src={port1} alt='SlideShow image' />
          {contentImage}
        </figure>
        <figure className='logoSlide__image'>
          <img src={port2} alt='SlideShow image' />
          {contentImage}
        </figure>
      </div>
    </div>
  );
};

export default LogoSlideShow;
