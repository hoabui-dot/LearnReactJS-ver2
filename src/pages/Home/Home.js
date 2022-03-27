import React from "react";
import "./Home.scss";
import Card from "./components/card/card";
import FrameSection from "./components/education";
import TitleSection from "./components/titleSection";
import Skills from "./components/skills/skills";
import { educationData, experienceData } from "./components/education/fakeData";

const index = () => {
  return (
    <>
      <header>
        <div className='header-background'></div>
        <button className='menu-btn'>
          <i className='fa-solid fa-bars'></i>
        </button>
        <Card />
      </header>
      <section className='education'>
        <div className='container'>
          <TitleSection title='education' icon='fa-solid fa-book' />
          <FrameSection
            dataSection={educationData}
            lineWidth='education-tree__edu'
          />
        </div>
      </section>
      <section className='skills'>
        <div className='container'>
          <TitleSection title='skills' icon='fa-solid fa-hard-drive' />
          <Skills />
        </div>
      </section>
      <section className='exp'>
        <div className='container'>
          <TitleSection title='experience' icon='fa-solid fa-layer-group' />
          <FrameSection
            dataSection={experienceData}
            lineWidth='education-tree__exp'
          />
        </div>
      </section>
    </>
  );
};

export default index;
