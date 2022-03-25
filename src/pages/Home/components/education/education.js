import React from "react";
import EduBox from "./eduBox/eduBox";
import "./education.scss";
import { educationData } from "./fakeData";

const educationList = () => {
  const List = educationData.map((data, index) => {
    <li key={index}>
      <EduBox
        job={data.job}
        jobName={data.jobName}
        time={data.time}
        section
        desc={data.desc}
        keywords={data.keywords}
      />
    </li>;
  });
  return <ul>{List}</ul>;
};
function education() {
  return (
    <section className='education'>
      <div className='container'>
        <div className='education-wrap'>
          <div className='education-title'>
            <i className='fa-solid fa-user-graduate'></i>
            <span>education</span>
          </div>
          <div className='education-box'>{educationList()}</div>
        </div>
      </div>
    </section>
  );
}

export default education;
