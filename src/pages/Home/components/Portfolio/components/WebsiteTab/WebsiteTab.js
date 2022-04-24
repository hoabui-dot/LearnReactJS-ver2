import React from "react";
import {
  big1,
  big2,
  port1,
  port2,
  port3,
  port4,
} from "../../../../../../assets/images";
import WebsiteTabItem from "./WebsiteTabItem";
import "./WebsiteTab.scss";

const WebsiteTab = ({ setClickImg, setValuePopup }) => {
  return (
    <div className='websiteSlideShow'>
      <div className='container'>
        <div className='websiteSlideShow__wrap'>
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={big1}
            value='0'
          />
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={big2}
            value='1'
          />
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={port1}
            value='2'
          />
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={port2}
            value='3'
          />
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={port3}
            value='4'
          />
          <WebsiteTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={port4}
            value='5'
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteTab;
