import { useContext } from "react";
import {
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoItem,
  CreateTodoButton,
  TodoContext,
} from "../components";

export function Home() {
  const {
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    loading,
    error,
    searchedTodos,
    handleCheck,
    handleDelete,
    openModal,
  } = useContext(TodoContext);

  return (
    <div
      className={`bg-background dark:bg-dark-background min-h-screen text-normal-text dark:text-dark-normal-text ${
        openModal ? "b brightness-50" : ""
      }`}
    >
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
