import RouterConfig from "./router";
import { useEffect, useState, useRef } from "react";
import Loading from "./components/Loading/Loading";
function App() {
  const content = useRef();

  useEffect(() => {
    setTimeout(() => {
      content.current.style.display = "block";
    }, 2000);

    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("animated")) {
              if (entry.target.classList.contains("animateBanner")) {
                entry.target.classList.add("fadeBanner");
              } else {
                entry.target.classList.add("fade");
              }
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".animated").forEach(ele => {
      observer.observe(ele);
    });
  }, []);

  useEffect(() => {});

  return (
    <>
      <div ref={content} className='App'>
        <Loading />
        <RouterConfig />
      </div>
    </>
  );
}

export default App;
