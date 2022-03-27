import React from "react";
import EduBox from "./eduBox/eduBox";
import "./education.scss";

function education({ dataSection, lineWidth }) {
  function educationList() {
    return (
      <>
        <div className={`education-tree ` + lineWidth}></div>
        <ul className='education-list'>
          {dataSection.map((data, index) => (
            <li className={data.flip} key={index}>
              <EduBox
                job={data.job}
                jobDesc={data.jobName}
                time={data.time}
                desc={data.desc}
                keywords={data.keywords}
                icon={data.icon}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
  return (
    <div className='education-wrap'>
      <div className='education-box'>{educationList()}</div>
    </div>
  );
}

export default education;
