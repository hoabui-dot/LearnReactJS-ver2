import React, { useState } from "react";
import Skills from "./components/Skills/Skills";
import Banner from "./components/Banner/Banner";
import Description from "./components/Description/Description";
import Education from "./components/FolderTree/Education/Education";
import Experience from "./components/FolderTree/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Interest from "./components/Interest/Interest";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import ChangeColor from "./components/ChangeColor/ChangeColor";
import Contact from "./components/Contact/Contact";
import Loading from "../../components/Loading/Loading";
import Testimonials from "./components/Testimonials/Testimonials";
import "./Home.scss";

const Home = () => {
  const [isColor, setIsColor] = useState("green");

  return (
    <div id='body' className={isColor}>
      <Loading />
      <Banner />
      <Description />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
      <Interest />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <ChangeColor setIsColor={setIsColor} />
    </div>
  );
};

export async function getStaticProps() {
  const filesInBlogs = fs.readdirSync("./content/blogs");

  const blogs = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}

export default Home;
