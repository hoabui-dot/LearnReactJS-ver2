import React from "react";
import Skills from "./components/Skills/Skills";
import Banner from "./components/Banner/banner";
import Description from "./components/Description/description";
import Education from "./components/FolderTree/Education/Education";
import Experience from "./components/FolderTree/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import "./Home.scss";
const Index = () => {
  return (
    <div id='body'>
      <Banner />
      <Description />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
    </div>
  );
};
export default Index;
