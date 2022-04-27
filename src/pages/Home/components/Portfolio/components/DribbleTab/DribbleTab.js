import React from "react";
import { big2, port3, port4 } from "../../../../../../assets/images";
import DribbleTabItem from "./DribbleTabItem";
import "./DribbleTab.scss";

const DribbleTab = ({ setClickImg, setValuePopup }) => {
  return (
    <div className='dribbleSlide'>
      <div className='container'>
        <div className='dribbleSlide__wrap'>
          <DribbleTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={big2}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
            value='1'
          />
          <DribbleTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={port3}
            title='image'
            description='i designed this for a client for his cafe'
            value='4'
          />
          <DribbleTabItem
            setValuePopup={setValuePopup}
            setClickImg={setClickImg}
            image={port4}
            title='image'
            description='two hover effect for portfolio grid blocks. its scale'
            value='5'
          />
        </div>
      </div>
    </div>
  );
};

export default DribbleTab;
