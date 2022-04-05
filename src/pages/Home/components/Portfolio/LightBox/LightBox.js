import React from "react";
import LightBoxItem from "./LightBoxItem";
import Big1 from "../../../../../assets/images/big-1.jpg";
import Big2 from "../../../../../assets/images/big-2.jpg";
import { port1, port2, port3, port4 } from "../../../../../assets/images";

const LightBox = () => {
  function handleBtn() {}

  return (
    <div className='lightBox'>
      <div className='lightBox__btn'>
        <button onClick={handleBtn()} data-btn='all' className='btn active'>
          all
        </button>
        <button onClick={handleBtn()} data-btn='logo' className='btn'>
          logo
        </button>
        <button onClick={handleBtn()} data-btn='dribble' className='btn'>
          dribble
        </button>
        <button onClick={handleBtn()} data-btn='websites' className='btn'>
          websites
        </button>
      </div>
      <div className='lightBox__list'>
        <div data-logo className='lightBox__item lightBox__item--logo'>
          <div className='item__opacity'></div>
          <LightBoxItem image={Big1} bigImg='item__content--bigImg' />
          <LightBoxItem image={port1} />
          <LightBoxItem image={port2} />
        </div>
        <div data-dribble className=' lightBox__item lightBox__item--dribble'>
          <LightBoxItem image={Big2} bigImg='item__content--bigImg' />
          <LightBoxItem image={port3} />
          <LightBoxItem image={port4} />
        </div>
        <div data-website className='lightBox__item'>
          <LightBoxItem image={Big1} />
          <LightBoxItem image={Big2} />
          <LightBoxItem image={port1} />
          <LightBoxItem image={port2} />
          <LightBoxItem image={port3} />
          <LightBoxItem image={port4} />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
