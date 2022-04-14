import React from "react";
import big1 from "../../../../../../assets/images/big-1.jpg";
import big2 from "../../../../../../assets/images/big-1.jpg";
import port1 from "../../../../../../assets/images/portfolio-1.jpg";
import port2 from "../../../../../../assets/images/portfolio-2.jpg";
import port3 from "../../../../../../assets/images/portfolio-3.jpg";
import port4 from "../../../../../../assets/images/portfolio-4.jpg";
import WebsiteTabItem from "./WebsiteTabItem";
import "./WebsiteTab.scss";

const LogoSlideShow = () => {
  return (
    <div className='websiteSlideShow'>
      <div className='container'>
        <div className='websiteSlideShow__wrap'>
          <WebsiteTabItem image={big1} />
          <WebsiteTabItem image={big2} />
          <WebsiteTabItem image={port1} />
          <WebsiteTabItem image={port2} />
          <WebsiteTabItem image={port3} />
          <WebsiteTabItem image={port4} />
        </div>
      </div>
    </div>
  );
};

export default LogoSlideShow;
