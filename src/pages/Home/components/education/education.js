import React from "react";
import EduBox from "./eduBox/eduBox";
import "./education.scss";

function education({ dataSection, lineWidth }) {
  function educationList() {
    return (
      <>
        <div className={`education__tree ` + lineWidth}></div>
        <ul className='education__list'>
          {dataSection.map((data, index) => (
            <li className={data.flip} key={index}>
              <EduBox
                job={data.job}
                jobDesc={data.jobName}
                time={data.time}
                desc={data.desc}
                keywords={data.keywords}
                icon={data.icon}
                more={data.more}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
  return (
    <div className='education__wrap'>
      <div className='education__box'>{educationList()}</div>
    </div>
  );
}

export default education;
