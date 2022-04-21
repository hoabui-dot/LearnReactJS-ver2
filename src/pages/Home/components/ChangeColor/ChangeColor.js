import React, { createContext, useState } from "react";
import "./ChangeColor.scss";

export const ThemContext = createContext();

const ColorPalate = () => {
  const [isCustomColor, setIsCustomColor] = useState("green");
  const [toggleColor, setToggleColor] = useState(false);

  const handleOpen = () => {
    setToggleColor(!toggleColor);
  };

  const handleChangeColor = e => {
    setIsCustomColor(e.target.id);
    console.log(isCustomColor);
  };

  return (
    <ThemContext.Provider value={isCustomColor}>
      <div
        id='color__palate'
        className={toggleColor ? "popOut open" : "popOut"}
      >
        <div
          id='color__toggle'
          onClick={handleOpen}
          className='toggle text__center'
        >
          <i className='fa fa-cog fa-spin'></i>
        </div>
        <div className='colors text__center'>
          <p className='text__center'>Pick a Color</p>
          <ul>
            <li
              value='blue'
              onClick={handleChangeColor}
              id='blue'
              className='color1'
            ></li>
            <li onClick={handleChangeColor} id='teal' className='color2'></li>
            <li onClick={handleChangeColor} id='gray' className='color3'></li>
            <li onClick={handleChangeColor} id='green' className='color4'></li>
            <li onClick={handleChangeColor} id='purple' className='color5'></li>
            <li onClick={handleChangeColor} id='brown' className='color6'></li>
            <li onClick={handleChangeColor} id='red' className='color7'></li>
            <li onClick={handleChangeColor} id='pink' className='color8'></li>
          </ul>
          <p className='text__center'>Blend &amp; Dark</p>
          <ul>
            <li id='blue__blend' className='color1'></li>
            <li id='green__blend' className='color4'></li>
            <li onClick={handleChangeColor} id='white' className='color10'></li>
          </ul>
        </div>
      </div>
    </ThemContext.Provider>
  );
};

export default ColorPalate;
