import React, { Fragment } from "react";
import "./EduBox.scss";
// import MoreInfo from "./moreInfo";

const EduBox = ({ eduData, flip }) => {
  const {
    jobName,
    jobSubTitle,
    jobTime,
    jobDesc,
    keywords,
    icon,
    moreClassName,
  } = eduData;

  return (
    <div className={`eduBox__item ${flip}`}>
      <div className='item__content'>
        <div className='eduBox__job'>
          <p className='job__name'>{jobName}</p>
          <p className='job__subTitle'>{jobSubTitle}</p>
          <p className='job__time'>{jobTime}</p>
          <p className='job__desc'>{jobDesc}</p>
          <div className={`item__more ${moreClassName}`}>
            <i className='fa-solid fa-ellipsis'></i>
            {/* <MoreInfo /> */}
          </div>
        </div>
        <div className='item__key'>
          {keywords ? <span>{keywords}</span> : <i className={icon} />}
        </div>
      </div>
    </div>
  );
};

export default EduBox;
