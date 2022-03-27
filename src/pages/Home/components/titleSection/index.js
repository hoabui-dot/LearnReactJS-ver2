import React from "react";
import "./titleSection.scss";

const index = ({ icon, title }) => {
  return (
    <div className='education-title'>
      <i className={icon}></i>
      <span>{title}</span>
    </div>
  );
};

export default index;
