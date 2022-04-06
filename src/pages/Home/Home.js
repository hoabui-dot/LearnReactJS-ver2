import React from "react";
import Skills from "./components/Skills/Skills";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Education from "./components/FolderTree/Education/Education";
import Experience from "./components/FolderTree/Experience/Experience";
// import Portfolio from "./components/Portfolio/Portfolio";
import Interest from "./components/Interest/Interest";
import Pricing from "./components/Pricing/Pricing";
import "./Home.scss";
const Index = () => {
  return (
    <div className='body'>
      <Banner />
      <Description />
      <Education />
      <Skills />
      <Experience />
      <Interest />
      <Pricing />
      {/* <Portfolio /> */}
    </div>
  );
};
export default Index;
