import React from "react";
import "../../../../skills.scss";

const skillsItem = ({ language, percent }) => {
  return (
    <div className='skills-item'>
      <div className='skills-subTitle' data-percent={percent}>
        <p>{language}</p>
        <p>{percent}%</p>
        <div className='skills-percent' style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default skillsItem;
