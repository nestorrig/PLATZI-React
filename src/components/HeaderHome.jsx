import { useContext } from "react";
import { TodoContext } from "./TodoContext";
import { TodoSearch } from "./Todo/TodoSearch";

export const HeaderHome = () => {
  const { searchValue, setSearchValue, setOpenMenu } = useContext(TodoContext);

  const openMenu = () => {
    setOpenMenu(true);
  };

  return (
    <header className="flex items-center justify-between px-2 py-6">
      <button className="w-10 h-10 lg:hidden" onClick={openMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path
            className="stroke-light-bg-300 dark:stroke-dark-bg-300"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8h16M4 16h16"
          ></path>
        </svg>
      </button>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  );
};
