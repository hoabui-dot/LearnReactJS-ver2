import React from "react";
import EduBox from "./eduBox/eduBox";
import "./education.scss";
import Datas from "./fakeData";
function educationList() {
  const List = Datas.map((data, index) => {
    <li key={index}>
      <EduBox
        job={data.job}
        jobName={data.jobName}
        time={data.time}
        desc={data.desc}
        keywords={data.keywords}
      />
    </li>;
    return <ul>{List}</ul>;
  });
}

const education = () => {
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
};

export default education;
