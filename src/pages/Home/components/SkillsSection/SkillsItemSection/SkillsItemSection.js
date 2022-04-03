import React from "react";

const skillsItem = ({ language, percent }) => {
  return (
    <div className='skills__item'>
      <div className='skills__subTitle' data-percent={percent}>
        <p>{language}</p>
        <p className='subTitle__percent'>{percent}%</p>
        <div className='skills__percent' style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default skillsItem;
