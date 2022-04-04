import React from "react";
import SkillsItem from "../SkillsItem/SkillsItem";

const index = ({ dataSkills, title }) => {
  return (
    <div className='skills__field'>
      <div className='skills__title'>
        <p>{title}</p>
      </div>
      <ul className='skills__list'>
        {dataSkills.map((data, index) => (
          <SkillsItem
            key={index}
            language={data.language}
            percent={data.percent}
          />
        ))}
      </ul>
    </div>
  );
};

export default index;
