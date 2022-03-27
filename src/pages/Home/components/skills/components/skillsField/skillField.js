import React from "react";
import SkillsItem from "./components/skillsItem/skillsItem";

const index = ({ dataSkills }) => {
  return (
    <div className='skills-field'>
      <div className='skills-title'>
        <ul className='skills-list'>
          {dataSkills.map((data, index) => (
            <li key={index}>
              <SkillsItem language={data.language} percent={data.percent} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default index;
