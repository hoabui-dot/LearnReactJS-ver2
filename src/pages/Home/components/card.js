import React from "react";
import avatar from "../../../assets/images/avtCV.PNG";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const card = () => {
  return (
    <>
      <div className='card-content'>
        <div className='card-name'>
          <h4>bui van hoa</h4>
          <h6>Software Engineer & UI/UX Expert</h6>
        </div>
        <div className='card-infos'>
          <ul className='infos-list'>
            <li>
              <EmailIcon></EmailIcon>
              <span>ongchunhostu1998@gmail.com</span>
            </li>
            <li>
              <LanguageIcon />
              <span>yourpersonalwsebsite.com</span>
            </li>
            <li>
              <i class='fa-brands fa-skype'></i>
              <span>https://join.skype.com/invite/xZFCGR1NBK20</span>
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
      </div>
      <div className='triangle'></div>
      <figure className='avatar'>
        <img src={avatar} alt='Avatar' />
      </figure>
    </>
  );
};

export default card;
