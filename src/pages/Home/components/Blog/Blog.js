import React from "react";
import "./Blog.scss";
import { dataBlog } from "../../../../utils/MockData";
import BlogItem from "./BlogItem/BlogItem";
import TitleSection from "../TitleSection/TitleSection";
import postIt from "../../../../assets/images/post-it.png";

const Blog = () => {
  return (
    <section className='section'>
      <div className='container'>
        <TitleSection title='blog' urlIcon={postIt} />
        <div className='blog'>
          <div className='blog__wrap '>
            {dataBlog &&
              dataBlog.map((data, index) => (
                <BlogItem
                  flip={index % 2 == 0 ? "" : "flip"}
                  data={data}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
