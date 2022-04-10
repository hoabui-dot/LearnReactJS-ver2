import React from "react";
import "./TitleSection.scss";

const TitleSection = ({ urlIcon, icon, title }) => {
  return (
    <div className='title'>
      <div className='title__wrap'>
        {icon ? (
          <i className={`animated ${icon}`}></i>
        ) : (
          <img className='animated' src={urlIcon} alt='Icon Title Section' />
        )}
        <span>{title}</span>
      </div>
    </div>
  );
};

export default TitleSection;
