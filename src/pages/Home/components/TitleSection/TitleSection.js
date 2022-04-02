import React from "react";
import "./titleSection.scss";

const TitleSection = ({ urlIcon, icon, title }) => {
  return (
    <div className='title'>
      <div className='title__wrap'>
        {icon ? (
          <i className={icon}></i>
        ) : (
          <img src={urlIcon} alt='Icon Title Section' />
        )}
        <span>{title}</span>
      </div>
    </div>
  );
};

export default TitleSection;
