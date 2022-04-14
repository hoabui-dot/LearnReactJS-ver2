import React from "react";
import big1 from "../../../../../../assets/images/big-1.jpg";
import port1 from "../../../../../../assets/images/portfolio-1.jpg";
import port2 from "../../../../../../assets/images/portfolio-2.jpg";
import LogoTabItem from "./LogoTabItem";
import "./LogoTab.scss";

const LogoSlideShow = () => {
  return (
    <div className='logoSlide'>
      <div className='container'>
        <div className='logoSlide__wrap'>
          <LogoTabItem
            image={big1}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
          />
          <LogoTabItem
            image={port1}
            title='video'
            description='i designed this for a client for his cafe'
            icon='fa fa-play-circle'
          />
          <LogoTabItem
            image={port2}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
          />
        </div>
      </div>
    </div>
  );
};

export default LogoSlideShow;
