import React from "react";
import big1 from "../../../../../../assets/images/big-1.jpg";
import port1 from "../../../../../../assets/images/portfolio-1.jpg";
import port2 from "../../../../../../assets/images/portfolio-2.jpg";
import video from "../../../../../../assets/videos/portfolioVideo.mp4";
import LogoTabItem from "./LogoTabItem";
import "./LogoTab.scss";

const LogoSlideShow = ({ setClickImg, setValuePopup }) => {
  return (
    <div className='logoSlide'>
      <div className='container'>
        <div className='logoSlide__wrap'>
          <div className='item'>
            <LogoTabItem
              setValuePopup={setValuePopup}
              setClickImg={setClickImg}
              image={big1}
              title='image'
              description='two hover effect for portfolio grid blocks. its scale'
              value='0'
            />
          </div>
          <div className='item'>
            <LogoTabItem
              setValuePopup={setValuePopup}
              setClickImg={setClickImg}
              image={port1}
              title='video'
              description='i designed this for a client for his cafe'
              icon='fa fa-play-circle'
              video={video}
              value='2'
            />
          </div>
          <div className='item'>
            <LogoTabItem
              setValuePopup={setValuePopup}
              setClickImg={setClickImg}
              image={port2}
              title='image'
              description='two hover effect for portfolio grid blocks. its scale'
              value='3'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlideShow;
