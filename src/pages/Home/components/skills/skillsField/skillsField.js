import React from "react";
import SkillsItem from "../skillsItem/skillsItem";

const index = ({ dataSkills, title }) => {
  return (
    <div className='skills-field'>
      <div className='skills-title'>
        <p>{title}</p>
      </div>
      <ul className='skills-list'>
        {dataSkills.map((data, index) => (
          <li key={index}>
            <SkillsItem language={data.language} percent={data.percent} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
