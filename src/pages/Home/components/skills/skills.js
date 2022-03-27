import React from "react";
import Field from "./components/skillsField/skillField";
import { professional, personal, software } from "./fakeData_skill";

const index = () => {
  return (
    <div className='skills-wrap'>
      <Field dataSkills={professional} />
      <Field dataSkills={personal} />
      <Field dataSkills={software} />
    </div>
  );
};

export default index;
