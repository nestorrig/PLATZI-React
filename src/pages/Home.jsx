import { useContext } from "react";
import {
  TodoList,
  TodoItem,
  CreateTodoButton,
  TodoContext,
  HeaderHome,
} from "../components";

export function Home() {
  const {
    loading,
    error,
    searchedTodos,
    handleCheck,
    handleDelete,
    openNewTask,
    openMenu,
  } = useContext(TodoContext);
  return (
    <div
      className={`bg-light-bg-100 dark:bg-dark-bg-100 text-light-text-100 dark:text-dark-text-100 relative ${
        openNewTask ? "brightness-50" : ""
      } ${
        openMenu
          ? "translate-x-2/3 scale-90 rounded-3xl h-screen overflow-hidden"
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
