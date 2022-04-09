import React from "react";
import TitleSection from "../Home/components/TitleSection/TitleSection";
import postIt from "../../assets/images/post-it.png";
import blogImg from "../../assets/images/blog-1.png";
import avtJohnDoe from "../../assets/images/client-1.png";
import ButtonScrollTop from "../../components/ButtonScrollTop/Button";
import "./SingleBlog.scss";

const BlogPage = () => {
  return (
    <div className='singleBlog'>
      <ButtonScrollTop />
      <div className='singleBlog__comeBack'></div>
      <div className='container singleBlog__wrap'>
        <TitleSection title='blog' urlIcon={postIt} />
        <div className='content'>
          <div className='content__left'>
            <div className='left__wrap'>
              <figure>
                <img src={blogImg} alt='Blog Image' />
              </figure>
              <div className='header'>
                <div className='header__wrap'>
                  <h2>Blog title here</h2>
                  <span>August 16, 2045</span>
                </div>
                <hr />
                <div className='header__author'>
                  <div className='tag'>
                    <figure>
                      <img src={avtJohnDoe} alt='Author Avatar Image' />
                    </figure>
                    John Doe
                  </div>
                  <div className='tag'>it's a tag</div>
                  <div className='tag'>another tag</div>
                </div>
              </div>
              <div className='body'>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Etiam porta sem
                  malesuada magna mollis euismod. Curabitur blandit tempus
                  porttitor. Aenean lacinia bibendum nulla sed consectetur.
                  Aenean lacinia bibendum nulla sed consectetur. Curabitur
                  blandit tempus porttitor.
                </p>
                <p>
                  Etiam porta sem malesuada magna mollis euismod. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Vestibulum
                  id ligula porta felis euismod semper. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros. Sed posuere consectetur
                  est at lobortis.
                </p>
                <p className='body__title'>Subtitle</p>
                <p>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Cum sociis natoque penatibus et magnis
                  dis parturient montes, nascetur ridiculus mus. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros. Aenean
                  lacinia bibendum nulla sed consectetur.
                </p>
                <p className='body__title'>Another subtitle</p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Praesent
                  commodo cursus magna, vel scelerisque nisl consectetur et.
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Maecenas sed diam eget risus varius
                  blandit sit amet non magna. Duis mollis, est non commodo
                  luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                  elit. Etiam porta sem malesuada magna mollis euismod. Duis
                  mollis, est non commodo luctus, nisi erat porttitor ligula,
                  eget lacinia odio sem nec elit.
                </p>
              </div>
            </div>
            <div className='left__footer'>
              <div className='footer__wrap'>
                <svg></svg>
                <p>Disqus seems to be taking longer than usual. Reload?</p>
              </div>
            </div>
          </div>
          <div className='content__right'>
            <div className='box'>
              <div className='box__title'>My Blog</div>
              <div className='box__description'>
                <p>
                  As a teach lover, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className='box'>
              <div className='box__title'>Recent Post</div>
              <div className='box__description'>
                <div className='description__card'>
                  <figure>
                    <img src={avtJohnDoe} alt='Avatar John Doe' />
                  </figure>
                  <div className='JohnDoe__descriptionCard'>
                    <p>Simple title</p>
                    <p>Donec imperdiet sem leo, id rutrum risus</p>
                  </div>
                </div>
                <div className='description__card'>
                  <figure>
                    <img src={avtJohnDoe} alt='Avatar John Doe' />
                  </figure>
                  <div className='JohnDoe__descriptionCard'>
                    <p>Simple title</p>
                    <p>Donec imperdiet sem leo, id rutrum risus</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='box__title'>Categories</div>
              <div className='box__description'>
                <ul className='description__list'>
                  <li className='description__item'>fashion</li>
                  <li className='description__item'>design</li>
                  <li className='description__item'>UX|UI</li>
                </ul>
                <ul className='description__list'>
                  <li className='description__item'>news</li>
                  <li className='description__item'>popular</li>
                  <li className='description__item'>other</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='producer'>
          © Material CV. All right reserved by <a href='#'>Trimatrixlab</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
