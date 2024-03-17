import { useEffect, useState } from "react";
import gsap from "gsap";

export function Loader() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    gsap.to("#textBottom", {
      y: 25,
      duration: 2,
      ease: "elastic.out(1, 0.3, 0.5, 1)",
    });
    gsap.to("#textBottom", {
      x: 1000,
      duration: 1,
      delay: 2,
      ease: "power1.inOut",
    });
    gsap.to("#textTop", {
      y: -25,
      duration: 2,
      ease: "elastic.out(1, 0.3, 0.5, 1)",
    });
    gsap.to("#textTop", {
      x: -1000,
      duration: 1,
      delay: 2,
      ease: "power1.inOut",
    });
    gsap.to("#progress", {
      width: "100%",
    });
    gsap.to("#progress", {
      duration: 1,
      height: "100%",
      top: 0,
      opacity: 0,
      width: "100%",
      ease: "power1.inOut",
      delay: 2,
    });
    gsap.to("#top", {
      duration: 1,
      height: "0",
      ease: "power1.inOut",
      delay: 2,
    });
    gsap.to("#bottom", {
      duration: 1,
      height: "0",
      ease: "power1.inOut",
      delay: 2,
    });
  }, []);

  return load && (
    <div className="loading bg-transparent fixed w-screen h-svh top-0 left-0 flex justify-center items-center z-50">
      <div
        id="top"
        className="fixed top-0 left-0 w-screen h-1/2 bg-light-bg-300 dark:bg-dark-bg-300 "
      ></div>
      <div
        id="bottom"
        className="fixed bottom-0 left-0 w-screen h-1/2 bg-light-bg-300 dark:bg-dark-bg-300 "
      ></div>
      <div
        id="progress"
        className="bg-light-bg-200 dark:bg-dark-bg-200 h-1 w-0 absolute top-1/2"
      ></div>
      <h2
        id="textTop"
        className="text-[80px] text-center font-bold opacity-10 z-50 dark:text-dark-text-100 text-light-text-100 fixed w-full h-screen top-1/2 left-0"
      >
        CARGANDO
      </h2>
      <h2
        id="textBottom"
        className="text-[80px] text-center font-bold opacity-10 z-50 dark:text-dark-text-100 text-light-text-100 fixed w-full h-1/2 top-0 left-0  rotate-180"
      >
        CARGANDO
      </h2>
    </div>
  );
}
