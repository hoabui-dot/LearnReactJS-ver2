import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import client1 from "../../../../assets/images/client-1.png";
import client2 from "../../../../assets/images/client-2.png";
import client3 from "../../../../assets/images/client-3.png";
import handShake from "../../../../assets/images/handshake.png";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Swiper.scss";

const Testimonials = () => {
  return (
    <section className='testimonial'>
      <div className='container'>
        <TitleSection title='testimonials' urlIcon={handShake} />
        <div className='testimonial__wrap animated'>
          <Swiper
            autoHeight={true}
            pagination={true}
            modules={[Pagination]}
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='item'>
                <figure className='item__image'>
                  <img src={client1} alt='Item Image' />
                </figure>
                <div className='item__content'>
                  <p>
                    I work with John on several web development projects and I
                    find him to be extremely creative and a technical Front End
                    Developer. Jone expertise involves building complex
                    Responsive Design layouts using HTML 5, CSS3, and
                    JavaScript. I work with John on several web development
                    projects and I find him to be extremely creative and a
                    technical Front End Developer. Jone expertise involves
                    building complex Responsive Design layouts using HTML 5,
                    CSS3, and JavaScript.
                  </p>
                  <p>Mike, CEO, IT World.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='item'>
                <figure className='item__image'>
                  <img src={client2} alt='Item Image' />
                </figure>
                <div className='item__content'>
                  <p>
                    I work with John on several web development projects and I
                    find him to be extremely creative and a technical Front End
                    Developer.
                  </p>
                  <p>Mike, CEO, IT World.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='item'>
                <figure className='item__image'>
                  <img src={client3} alt='Item Image' />
                </figure>
                <div className='item__content'>
                  <p>
                    I work with John on several web development projects and I
                    find him to be extremely creative and a technical Front End
                    Developer. Jone expertise involves building complex
                    Responsive Design layouts using HTML 5, CSS3, and
                    JavaScript.
                  </p>
                  <p>Mike, CEO, IT World.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
