import { useContext } from "react";
import {
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoItem,
  CreateTodoButton,
  Loading,
  Modal,
} from "../components";
import { TodoContext } from "../components/TodoContext";

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
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
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
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <form>
            <label htmlFor="Todo">Añade tu nueva tarea</label>
            <textarea placeholder="Escribe aquí tu TODO..." id="Todo"></textarea>
            <div>
              <button onClick={() => setOpenModal(false)}>Crear TODO</button>
              <button onClick={() => setOpenModal(false)}>Cancelar</button>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}
export { AppUI };
