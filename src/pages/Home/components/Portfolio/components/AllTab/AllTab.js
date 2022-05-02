import React from "react";
import {
  big1,
  big2,
  port1,
  port2,
  port3,
  port4,
} from "../../../../../../assets/images";

import LogoSlideShowItem from "../WebsiteTab/WebsiteTabItem";
import DribbleSlideShowItem from "../DribbleTab/DribbleTabItem";
import WebsiteSlideShowItem from "../WebsiteTab/WebsiteTabItem";
import "./AllTab.scss";

const AllTab = ({ setClickImg, setImage, setValuePopup }) => {
  return (
    <div className='allTab'>
      <div className='allTab__wrap'>
        <LogoSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={big1}
          title='image'
          description='two hover effect for portfolio grid blocks. its scale'
          value='0'
        />
        <LogoSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={port1}
          title='video'
          description='i designed this for a client for his cafe'
          icon='fa fa-play-circle'
          value='2'
        />
        <LogoSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={port2}
          title='image'
          description='two hover effect for portfolio grid blocks. its scale'
          value='3'
        />
        <DribbleSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={big2}
          title='image'
          description='two hover effect for portfolio grid blocks. its scale'
          value='1'
        />
        <DribbleSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={port3}
          title='video'
          description='i designed this for a client for his cafe'
          icon='fa fa-play-circle'
          value='4'
        />
        <DribbleSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={port4}
          title='image'
          description='two hover effect for portfolio grid blocks. its scale'
          value='5'
        />
        <WebsiteSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={big1}
          value='0'
        />
        <WebsiteSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={big2}
          value='1'
        />
        <WebsiteSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={port1}
          value='2'
        />
        <WebsiteSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={port2}
          value='3'
        />
        <WebsiteSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={port3}
          value='4'
        />
        <WebsiteSlideShowItem
          setClickImg={setClickImg}
          setValuePopup={setValuePopup}
          setImage={setImage}
          image={port4}
          value='5'
        />
      </div>
    </div>
  );
};

export default AllTab;
