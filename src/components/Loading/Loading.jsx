import { useEffect, useRef } from "react";
import "./Loading.scss";

const Loading = () => {
  const load = useRef();
  useEffect(() => {
    setTimeout(() => {
      load.current.style.display = "none";
    }, 2000);
  }, []);

  return (
    <div ref={load} id='loading'>
      <div id='loading__wrap'>
        <div id='absolute'>
          <div className='box__holder loadingAnimate bounceInDown'>
            <span className='load__box'>
              <span className='box__inner'></span>
            </span>
          </div>
          <div id='loading__text'>
            <h2>Hoa Bui</h2>
            <h6>Software Engineer &amp; UI/UX Expert</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
