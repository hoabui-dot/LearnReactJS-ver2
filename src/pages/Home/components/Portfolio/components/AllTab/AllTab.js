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

const AllTab = ({ setClickImg, setImage }) => {
  return (
    <div className='allTab'>
      <div className='container'>
        <div className='allTab__wrap'>
          <LogoSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={big1}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
          />
          <LogoSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={port1}
            title='video'
            description='i designed this for a client for his cafe'
            icon='fa fa-play-circle'
          />
          <LogoSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={port2}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
          />
          <DribbleSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={big2}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
          />
          <DribbleSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={port3}
            title='video'
            description='i designed this for a client for his cafe'
            icon='fa fa-play-circle'
          />
          <DribbleSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={port4}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
          />
          <WebsiteSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={big1}
          />
          <WebsiteSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={big2}
          />
          <WebsiteSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={port1}
          />
          <WebsiteSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={port2}
          />
          <WebsiteSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={port3}
          />
          <WebsiteSlideShowItem
            setClickImg={setClickImg}
            setImage={setImage}
            image={port4}
          />
        </div>
      </div>
    </div>
  );
};

export default AllTab;
