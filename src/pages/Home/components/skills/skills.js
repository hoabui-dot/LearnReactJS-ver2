import React from "react";
import Field from "./skillsField/skillsField";
import { professional, personal, software } from "./mockData";
import TitleSection from "../titleSection";
import SkillsIcon from "../../../../assets/images/mixer.png";
import "./skills.scss";

const index = () => {
  return (
    <section className='skills'>
      <div className='container'>
        <TitleSection title='skills' urlIcon={SkillsIcon} />
        <div className='skills__wrap'>
          <Field dataSkills={professional} title='Professional' />
          <Field dataSkills={personal} title='Personal' />
          <Field dataSkills={software} title='Software' />
        </div>
      </div>
    </section>
  );
};

export default index;
