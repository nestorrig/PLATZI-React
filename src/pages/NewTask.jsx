import { useContext, useState } from "react";
import { TodoContext } from "../components/TodoContext";

export function NewTask() {
  const { setOpenModal, openModal, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    console.log(newTodoValue);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <section
      className={`bg-task-bg dark:bg-dark-task-bg w-screen max-w-[400px] min-h-svh fixed transition-all top-0 right-0 ${
        openModal ? "translate-x-0" : " translate-x-[100vw]"
      }`}
    >
      <div>
        <form onSubmit={onSubmit}>
          <label htmlFor="Todo">Añade tu nueva tarea</label>
          <textarea
            placeholder="Escribe aquí tu TODO..."
            id="Todo"
            onChange={onChange}
            value={newTodoValue}
          ></textarea>
          <div>
            <button
              type="button"
              onClick={onCancel}
              className="text-yellow-500"
            >
              Cancelar
            </button>
            <button type="submit">Crear TODO</button>
          </div>
        </form>
      </div>
    </section>
  );
}
