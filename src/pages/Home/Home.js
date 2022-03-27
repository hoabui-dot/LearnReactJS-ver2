import React from "react";
import { useRef } from "react";
import "./Home.scss";
import Card from "./components/card/card";
import FrameSection from "./components/education";
import TitleSection from "./components/titleSection";
import Skills from "./components/skills/skills";
import { educationData, experienceData } from "./components/education/fakeData";
import { useIntersection } from "./useInterSection";
const Index = () => {
  const edu = useRef();
  return (
    <div className='home-wrap'>
      <div>
        <header>
          <div className='header-background'></div>
          <button className='menu-btn'>
            <i className='fa-solid fa-bars'></i>
          </button>
          <Card />
        </header>
        <section
          ref={edu}
          className={`education animated ${
            useIntersection(edu, "0px") ? "fadeUp" : ""
          }`}
        >
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
      </div>
    </div>
  );
};
//do la ai sao k dat ten viet thuong :)
export default Index;
