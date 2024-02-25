import { useContext } from "react";
import {
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoItem,
  CreateTodoButton,
  Loading,
  Modal,
  TodoContext,
  TodoForm,
} from "../components";

function AppUI() {
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
    <div className="bg-background dark:bg-dark-background min-h-screen text-normal-text dark:text-dark-normal-text">
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <Loading />}

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
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </div>
  );
}
export { AppUI };
