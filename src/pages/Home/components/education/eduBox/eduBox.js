import React, { Fragment } from "react";
import "./eduBox.scss";

const eduBox = ({ job, jobDesc, time, desc, keywords, icon }) => {
  function keyWord() {
    if (keywords) {
      return <span>{keywords}</span>;
    } else if (icon) {
      return <i className={icon}></i>;
    }
  }
  return (
    <Fragment>
      <div className='education-box__wrap'>
        <div className='education-box__content'>
          <div className='education-box__item'>
            <p className='job'>{job}</p>
            <p className='job-desc'>{jobDesc}</p>
            <p className='time'>{time}</p>
            <p className='desc'>{desc}</p>
          </div>
        </div>
        <div className='edu-key'>{keyWord()}</div>
        <div className='edu-line'></div>
      </div>
    </Fragment>
  );
};

export default eduBox;
