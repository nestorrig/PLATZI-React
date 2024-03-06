import { useContext, useState } from "react";
import { TodoContext } from "../components/TodoContext";

export function NewTask() {
  const { setOpenNewTask, openNewTask, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenNewTask(false);
    console.log(newTodoValue);
  };

  const onCancel = () => {
    setOpenNewTask(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <section
      className={`bg-task-bg dark:bg-dark-task-bg w-screen h-svh max-w-[400px] fixed transition-all top-0 right-0 ${
        openNewTask ? "translate-x-0" : " translate-x-[100vw]"
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
