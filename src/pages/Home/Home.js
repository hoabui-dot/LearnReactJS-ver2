import React from "react";
import { useRef } from "react";
import { useIntersection } from "./useInterSection";
import { educationData, experienceData } from "./fakeData";
import Card from "./components/card/card";
import Menu from "./components/menuBtn/menu";
import Skills from "./components/skills/skills";
import FrameSection from "./components/education/education";
import TitleSection from "./components/titleSection";
import "./Home.scss";
const Index = () => {
  const edu = useRef();
  return (
    <div className='home__wrap'>
      <div>
        <header>
          <div className='header__background'></div>
          <Menu />
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
              lineWidth='education__tree--edu'
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
              lineWidth='education__tree--exp'
            />
          </div>
        </section>
      </div>
    </div>
  );
};
export default Index;
