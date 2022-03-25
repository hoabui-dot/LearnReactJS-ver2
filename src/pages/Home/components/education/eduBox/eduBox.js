import React, { Fragment } from "react";
import "./eduBox.scss";

const eduBox = ({ job, jobName, time, desc, keywords }) => {
  return (
    <Fragment>
      <div className='eduBox-wrap'>
        <div className='eduBox-item'>
          <p className='job'>{job}</p>
          <p className='job-name'>{jobName}</p>
          <p className='time'>{time}</p>
          <p className='desc'>{desc}</p>
        </div>
        <div className='edu-line'></div>
        <div className='edu-key'>
          <span>{keywords}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default eduBox;
