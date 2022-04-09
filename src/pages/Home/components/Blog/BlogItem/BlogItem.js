import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ data, flip }) => {
  const { image, fieldWork, jobName, work, workTitle, workDescription } = data;
  return (
    <div className={`blog__item ${flip}`}>
      <div className='item__image'>
        <figure>
          <img src={image} alt='Blog Images' />
        </figure>
        <div className='image__infos'>
          <div className='user'>
            <i className='fa fa-user'></i> John Doe
          </div>
        </div>
      </div>
      <div className='item__content'>
        <div className='job'>
          <p>
            <a className='job__field' href='#'>
              {fieldWork}
            </a>{" "}
            /{" "}
            <a className='job__name' href='#'>
              {jobName}
            </a>{" "}
            / <span className='job__working'>{work}</span>
          </p>
        </div>
        <div className='description'>
          <p>{workTitle}</p>
          <p>{workDescription}</p>
        </div>
        <div className='readMore'>
          <Link to='/more-information'>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
