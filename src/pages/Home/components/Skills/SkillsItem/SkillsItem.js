import React from "react";

const skillsItem = ({ language, percent }) => {
  return (
    <li>
      <div className='skills__item'>
        <div className='skills__subTitle' data-percent={percent}>
          <p>{language}</p>
          <p className='subTitle__percent'>{percent}%</p>
          <div
            className='skills__percent'
            style={{ width: `${percent}%` }}
          ></div>
        </div>
      </div>
    </li>
  );
};

export default skillsItem;
