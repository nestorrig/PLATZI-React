import { useContext, useEffect, useState } from "react";
import { TodoContext, TodoCounter, ToggleThemeButton } from "../components";

export function Menu() {
  const { setOpenMenu, totalTodos, completedTodos, isDarkMode } = useContext(TodoContext);
  const [percentage, setPercentage] = useState(0); // ajusta según tus necesidades
  const [gradientColors, setGradientColors] = useState([]);

  useEffect(() => {
    if (isDarkMode) {
      setGradientColors(["#E74C3C", "#2d2d2d"]);
    } else {
      setGradientColors(["#EF5350", "#e5e5e5"]);
    }
  }, [isDarkMode]);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const gradientStyle = {
    backgroundImage: `conic-gradient(from 1deg at 50% 50%, ${gradientColors[0]} ${percentage}%, ${gradientColors[1]}  ${percentage}%)`,
  };

  useEffect(() => {
    setPercentage((completedTodos / totalTodos) * 100);
  }, [totalTodos, completedTodos]);

  return (
    <div className="flex items-center justify-start fixed lg:static top-0 z-0 w-screen lg:w-[300px] h-screen bg-light-bg-300 dark:bg-dark-bg-300 text-light-text-100 dark:text-dark-text-100">
      <div className="relative w-2/3 lg:w-full h-[90%] p-4 bg-dark-pimary-100">
        <button
          className="absolute top-2 right-2 w-10 h-10 flex justify-center items-center rounded-full border-2 border-light-bg-200 dark:border-dark-bg-200"
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 1024 1024"
          >
            <path
              className="fill-light-bg-200 dark:fill-dark-bg-200"
              d="M609.408 149.376L277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0a30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688a29.12 29.12 0 0 0-41.728 0"
            ></path>
          </svg>
        </button>

        <div className="w-32 h-32 p-[2px] rounded-full" style={gradientStyle}>
          <div className="bg bg-light-bg-300 dark:bg-dark-bg-300 w-full h-full rounded-full">
            <figure className="w-full h-full rounded-full p-1">
              <img
                className="w-full h-full object-cover rounded-full"
                src="https://www.elsoldemexico.com.mx/incoming/rfb7le-tony-dalton.jpg/ALTERNATES/LANDSCAPE_1140/tony-dalton.jpg"
                alt=""
              />
            </figure>
          </div>
        </div>

        <article>
          <h2 className="text-2xl font-bold mt-4">Tony Dalton</h2>
          <button className="text-xs text-light-text-200 dark:text-dark-text-200 underline">
            Change your name
          </button>
        </article>
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <ToggleThemeButton />
      </div>
    </div>
  );
}
