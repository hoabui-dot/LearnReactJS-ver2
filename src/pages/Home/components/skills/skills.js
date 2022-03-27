import React from "react";
import Field from "./components/skillsField/skillField";
import { professional, personal, software } from "./fakeData_skill";
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
