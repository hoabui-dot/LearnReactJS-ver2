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
        <div className='absolute'>
          <div className='absolute__holder loadingAnimate bounceInDown'>
            <span className='box'>
              <span></span>
            </span>
          </div>
          <div className='absolute__text'>
            <h2>Hoa Bui</h2>
            <h6>Software Engineer &amp; UI/UX Expert</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
