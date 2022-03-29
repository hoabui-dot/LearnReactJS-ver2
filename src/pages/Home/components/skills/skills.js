import React from "react";
import Field from "./skillsField/skillsField";
import { professional, personal, software } from "./mockData";
import "./skills.scss";

const index = () => {
  return (
    <div className='skills-wrap'>
      <Field dataSkills={professional} title='Professional' />
      <Field dataSkills={personal} title='Personal' />
      <Field dataSkills={software} title='Software' />
    </div>
  );
};

export default index;
