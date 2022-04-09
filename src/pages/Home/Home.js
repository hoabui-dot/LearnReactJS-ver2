import React from "react";
import Skills from "./components/Skills/Skills";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Education from "./components/FolderTree/Education/Education";
import Experience from "./components/FolderTree/Experience/Experience";
// import Portfolio from "./components/Portfolio/Portfolio";
import Interest from "./components/Interest/Interest";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import "./Home.scss";
import Testimonials from "./components/Testimonials/Testimonials";
const Home = () => {
  return (
    <div className='body'>
      <Banner />
      <Description />
      <Education />
      <Skills />
      <Experience />
      <Interest />
      {/* <Testimonials /> */}
      <Pricing />
      <Blog />
      <Contact />
      {/* <Portfolio /> */}
    </div>
  );
};
export default Home;
