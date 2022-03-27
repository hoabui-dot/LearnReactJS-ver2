import React from "react";

const skillsItem = ({ language, percent }) => {
  return (
    <div className='skill-item'>
      <div className='skill-subtitle'>
        <span>{language}</span>
        <span>{percent + `%`}</span>
      </div>
    </div>
  );
};

export default skillsItem;
