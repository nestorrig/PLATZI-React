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
      className={`bg-light-bg-100 dark:bg-dark-bg-100 text-light-text-100 dark:text-dark-text-100 relative lg:w-[calc(100%-300px)] lg:left-[300px] ${
        openNewTask ? "brightness-50" : ""
      } ${
        openMenu
          ? "translate-x-2/3 scale-90 rounded-3xl h-screen overflow-hidden md:scale-100 md:rounded-none md:translate-x-[300px]"
          : "min-h-screen"
      }  transition-transform`}
    >
      <HeaderHome />
      <TodoList>
        {error && (
          <p className="text-lg text-light-primary-100 dark:text-dark-primary-100">
            hubo un error... recarga la pagina.
          </p>
        )}

        {!loading && searchedTodos.length === 0 && (
          <p className="font-bold text-2xl">Crea un TODO</p>
        )}

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
