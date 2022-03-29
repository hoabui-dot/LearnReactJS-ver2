import React, { Fragment } from "react";
import "./eduBox.scss";
// import MoreInfo from "./moreInfo";

const eduBox = ({ job, jobDesc, time, desc, keywords, icon, more }) => {
  function keyWord() {
    if (keywords) {
      return <span>{keywords}</span>;
    } else if (icon) {
      return <i className={icon}></i>;
    }
  }
  return (
    <Fragment>
      <div className='education__box__wrap'>
        <div className='education__box__content'>
          <div className='education__box__item'>
            <p className='job'>{job}</p>
            <p className='job__desc'>{jobDesc}</p>
            <p className='time'>{time}</p>
            <p className='desc'>{desc}</p>
            <div className={`btn__more ${more}`}>
              <i class='fa-solid fa-ellipsis'></i>
              {/* <MoreInfo /> */}
            </div>
          </div>
        </div>
        <div className='edu__key'>{keyWord()}</div>
        <div className='edu__line'></div>
      </div>
    </Fragment>
  );
};

export default eduBox;
