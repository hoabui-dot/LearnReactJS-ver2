import React from "react";
import LightBoxItem from "./LightBoxItem";
import Big1 from "../../../../../assets/images/big-1.jpg";
import Big2 from "../../../../../assets/images/big-2.jpg";
import { port1, port2, port3, port4 } from "../../../../../assets/images";

function Index() {
  return (
    <div className='lightBox'>
      <div id='btn'>
        <button className='btn__all active'>all</button>
        <button className='btn__logo'>logo</button>
        <button className='btn__dribble'>dribble</button>
        <button className='btn__websites'>websites</button>
      </div>
      <div className='lightBox__list'>
        <div className='lightBox__item lightBox__item--three'>
          <LightBoxItem image={Big1} />
          <LightBoxItem image={port1} />
          <LightBoxItem image={port2} />
        </div>
        <div className='lightBox__item lightBox__item--three'>
          <LightBoxItem image={Big2} />
          <LightBoxItem image={port3} />
          <LightBoxItem image={port4} />
        </div>
        <div className='lightBox__item lightBox__item--six'>
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
}

export default Index;
