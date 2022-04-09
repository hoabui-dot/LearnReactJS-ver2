import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import heart from "../../../../assets/images/heart.png";
import "./Interest.scss";
import { interest } from "../../../../utils/MockData";
import Enjoy from "./Enjoy/Enjoy";

const Interest = () => {
  function handleBg(value) {
    if ((value + 1) % 2 == 0) return "#06a763";
    return "#fff";
  }
  return (
    <section className='interest'>
      <div className='container'>
        <TitleSection title='interest' urlIcon={heart} />
        <div className='interest__wrap'>
          <div className='wrap__content'>
            <p>
              First of all I love music, country music is my favorite. Love
              watching football, movies and playing games with my buddies. I
              spend quite a lot of time in traveling and photography, these
              keeps me fresh for working environment. I also spend time
              volunteering at the Red Cross in London, UK each month.
            </p>
          </div>
          <div className='wrap__enjoy'>
            <div className='enjoy__list'>
              {interest.map((data, index) => (
                <Enjoy
                  bgColor={index % 2 == 0 ? "#06a763" : "#fff"}
                  color={index % 2 == 0 ? "#fff" : "#06a763"}
                  key={index}
                  icon={data.icon}
                  name={data.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interest;
