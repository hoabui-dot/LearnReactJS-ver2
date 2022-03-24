import React from "react";
import avatar from "../../../../assets/images/avtCV.PNG";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./card.scss";

const card = () => {
  return (
    <section className='card'>
      <div className='container'>
        <div className='card-wrap'>
          <div className='card-content'>
            <div className='card-name'>
              <h4>bui van hoa</h4>
              <h6>Software Engineer & UI/UX Expert</h6>
            </div>
            <div className='card-infos'>
              <ul className='infos-list'>
                <li>
                  <EmailIcon />
                  <span>ongchunhostu1998@gmail.com</span>
                </li>
                <li>
                  <LanguageIcon />
                  <span>yourpersonalwsebsite.com</span>
                </li>
                <li>
                  <i class='fa-brands fa-skype'></i>
                  <span>
                    <a href='https://join.skype.com/invite/xZFCGR1NBK20'>
                      https://join.skype.com/invite/xZFCGR1NBK20
                    </a>
                  </span>
                </li>
                <li>
                  <CallIcon />
                  <span>+84 373 887 052</span>
                </li>
                <li>
                  <LocationOnIcon />
                  <span>D1 Street 36, 2 District, Ho Chi Minh City</span>
                </li>
              </ul>
            </div>
            <div className='card-icon'>
              <ul>
                <li className='fb-icon'>
                  <i class='fa-brands fa-facebook-f'></i>
                </li>
                <li className='tw-icon'>
                  <i class='fa-brands fa-twitter'></i>
                </li>
                <li className='gg-icon'>
                  <i class='fa-brands fa-google-plus-g'></i>
                </li>
                <li className='in-icon'>
                  <i class='fa-brands fa-linkedin-in'></i>
                </li>
                <li className='wf-icon'>
                  <i class='fa-solid fa-wifi'></i>
                </li>
              </ul>
            </div>
          </div>
          <div className='triangle'></div>
          <button className='btn-plus'>
            <i class='fa-solid fa-plus'></i>
          </button>
          <figure className='avatar'>
            <img src={avatar} alt='Avatar' />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default card;
