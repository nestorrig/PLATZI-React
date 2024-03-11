import { useContext } from "react";
import {
  AddProfileInfo,
  Profile,
  TodoContext,
  TodoCounter,
  ToggleThemeButton,
} from "../components";

export function Menu() {
  const { setOpenMenu } = useContext(TodoContext);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <div className="flex items-center justify-start fixed top-0 z-0 w-screen md:w-[300px] h-screen bg-light-bg-300 dark:bg-dark-bg-300 text-light-text-100 dark:text-dark-text-100">
        <div className="relative w-2/3 md:w-11/12 lg:w-full h-[90%] p-4 bg-dark-pimary-100">
          <button
            className="absolute top-2 right-2 w-10 h-10 flex justify-center items-center rounded-full border-2 border-light-bg-200 dark:border-dark-bg-200 lg:hidden"
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

          <Profile />
          <TodoCounter />
          <ToggleThemeButton />
        </div>
      </div>
      <AddProfileInfo />
    </>
  );
}
