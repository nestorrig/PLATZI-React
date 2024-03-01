import { useContext } from "react";
import {
  // TodoCounter,
  // TodoSearch,
  TodoList,
  TodoItem,
  CreateTodoButton,
  TodoContext,
  HeaderHome,
} from "../components";

export function Home() {
  const {
    // completedTodos,
    // totalTodos,
    // searchValue,
    // setSearchValue,
    loading,
    error,
    searchedTodos,
    handleCheck,
    handleDelete,
    openModal,
    openMenu,
  } = useContext(TodoContext);
  console.log(openMenu);
  return (
    <div
      className={`bg-light-bg-100 dark:bg-dark-bg-100 text-light-text-100 dark:text-dark-text-100 relative ${
        openModal ? "brightness-50" : ""
      } ${
        openMenu
          ? "t translate-x-2/3 scale-75 rounded-3xl h-screen overflow-hidden"
          : "min-h-screen"
      } transition-all`}
    >
      <HeaderHome />
      <TodoList>
        {error && <p>Desespera, hubo un error...</p>}

        {!loading && searchedTodos.length === 0 && <p>Crea tu primer TODO</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCheck={() => handleCheck(todo.text)}
            onDelete={() => handleDelete(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}
