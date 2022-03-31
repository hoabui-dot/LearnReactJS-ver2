import React from "react";
import "./titleSection.scss";

const index = ({ urlIcon, icon, title }) => {
  function handleIcon() {
    if (icon) return <i className={icon}></i>;
    if (urlIcon) return <img src={urlIcon} alt='Icon Title Section' />;
  }
  return (
    <div className='title'>
      <div className='title__wrap'>
        {handleIcon()}
        <span>{title}</span>
      </div>
    </div>
  );
};

export default index;
