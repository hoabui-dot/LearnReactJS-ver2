import React from "react";
import Field from "./SkillsField/SkillsField";
import { professional, personal, software } from "../../../../utils/MockData";
import TitleSection from "../TitleSection/TitleSection";
import SkillsIcon from "../../../../assets/images/mixer.png";
import "./Skills.scss";

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
