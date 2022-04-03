import React from "react";
import SkillsItem from "../SkillsItemSection/SkillsItemSection";

const index = ({ dataSkills, title }) => {
  return (
    <div className='skills__field'>
      <div className='skills__title'>
        <p>{title}</p>
      </div>
      <ul className='skills__list'>
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
