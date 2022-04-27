import React from "react";
import "./Popup.scss";
import { popup } from "../../../../../../utils/MockData";
import { Player } from "video-react";

const Popup = ({ clickImg, setClickImg, valuePopup, setValuePopup }) => {
  const length = popup.length;

  //Handle next button
  const nextSlide = () => {
    setValuePopup(valuePopup === length - 1 ? 0 : valuePopup + 1);
  };

  //Handle prev button
  const prevSlide = () => {
    setValuePopup(valuePopup === 0 ? length - 1 : valuePopup - 1);
  };

  const handleClick = e => {
    if (e.target.id === "id01") {
      document.body.style.overflow = "unset";
      setClickImg(false);
    }
  };
  return (
    <div className='popup'>
      <div className={clickImg ? "popup__modal active" : "popup__modal"}>
        <div id='id01' onClick={handleClick} className='content'>
          <div className='content__wrap'>
            <div className='popup__btn'>
              <div className='prev' onClick={prevSlide}>
                <i className='fa-solid fa-angle-left'></i>
              </div>
              <div className='next' onClick={nextSlide}>
                <i className='fa-solid fa-chevron-right'></i>
              </div>
            </div>
            {popup &&
              !!popup.length &&
              popup.map((data, index) =>
                index === valuePopup ? (
                  index !== 2 ? (
                    <figure
                      className={
                        index === valuePopup ? "image active" : "image"
                      }
                      key={index}
                    >
                      <img src={data.image} alt='Popup Images' />
                    </figure>
                  ) : (
                    <div className='video' key={index}>
                      <Player src={data.video} />
                    </div>
                  )
                ) : (
                  ""
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
