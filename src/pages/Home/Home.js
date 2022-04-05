import React from "react";
import Skills from "./components/Skills/Skills";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Education from "./components/FolderTree/Education/Education";
import Experience from "./components/FolderTree/Experience/Experience";
// import Portfolio from "./components/Portfolio/Portfolio";
import Interest from "./components/Interest/Interest";
import "./Home.scss";
const Index = () => {
  return (
    <div id='body'>
      <Banner />
      <Description />
      <Education />
      <Skills />
      <Experience />
      <Interest />
      {/* <Portfolio /> */}
    </div>
  );
};
export default Index;
