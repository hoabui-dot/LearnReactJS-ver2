import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import client1 from "../../../../assets/images/client-1.png";
import client2 from "../../../../assets/images/client-2.png";
import client3 from "../../../../assets/images/client-3.png";
import handShake from "../../../../assets/images/handshake.png";
import logo1 from "../../../../assets/images/logo1.png";
import logo2 from "../../../../assets/images/logo2.png";
import logo3 from "../../../../assets/images/logo3.png";
import logo4 from "../../../../assets/images/logo4.png";
import logo5 from "../../../../assets/images/logo5.png";
import logo6 from "../../../../assets/images/logo6.png";
import logo7 from "../../../../assets/images/logo7.png";
import logo8 from "../../../../assets/images/logo8.png";
import logo9 from "../../../../assets/images/logo9.png";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <section className='testimonial'>
      <div className='container'>
        <TitleSection title='testimonials' urlIcon={handShake} />
        <div className='testimonial__wrap animated'>
          <Swiper
            autoHeight={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            speed={1000}
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

        <div className='testimonial__logo'>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={7}
            speed={2000}
            simulateTouch={false}
            autoplay={{ delay: 2000, enabled: true }}
          >
            <SwiperSlide>
              <figure className='slide'>
                <img src={logo1} alt='Logo Item Image' />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className='slide'>
                <img src={logo2} alt='Logo Item Image' />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className='slide'>
                <img src={logo3} alt='Logo Item Image' />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className='slide'>
                <img src={logo4} alt='Logo Item Image' />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className='slide'>
                <img src={logo5} alt='Logo Item Image' />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className='slide'>
                <img src={logo6} alt='Logo Item Image' />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className='slide'>
                <img src={logo7} alt='Logo Item Image' />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className='slide'>
                <img src={logo8} alt='Logo Item Image' />
              </figure>
            </SwiperSlide>
            <SwiperSlide>
              <figure className='slide'>
                <img src={logo9} alt='Logo Item Image' />
              </figure>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
