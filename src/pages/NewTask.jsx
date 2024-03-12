import { useContext, useState } from "react";
import { TodoContext } from "../components/TodoContext";

export function NewTask() {
  const {
    setOpenNewTask,
    openNewTask,
    addTodo,
    errorMessage,
    setErrorMessage,
  } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodoValue === "") {
      setErrorMessage("Escribe un TODO");
      return;
    }
    addTodo(newTodoValue);
    setOpenNewTask(false);
    setNewTodoValue("");
    if (!errorMessage) return;
    setErrorMessage("");
  };

  const onCancel = () => {
    setOpenNewTask(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <section
      className={`bg-light-bg-200 dark:bg-dark-bg-200 w-screen h-screen lg:max-w-[400px]  fixed transition-all top-0 right-0 p-4 ${
        openNewTask ? "translate-x-0" : " translate-x-[100vw]"
      }`}
    >
      <div className="relative h-full flex justify-center items-center">
        <button
          onClick={onCancel}
          className="absolute top-0 right-0 w-10 h-10 flex justify-center items-center rounded-full  bg-light-bg-300 dark:bg-dark-bg-300"
        >
          <svg
            className="rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              className="fill-light-bg-200 dark:fill-dark-bg-200"
              d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
            ></path>
          </svg>
        </button>
        <form onSubmit={onSubmit} className="flex flex-col gap-2 w-full">
          <label
            htmlFor="todo"
            className="text-2xl font-bold mb-8 dark:text-dark-text-100"
          >
            Añade tu nueva tarea
          </label>
          <textarea
            className="w-full h-32 p-2 dark:bg-dark-bg-300  outline-none focus:ring-2 focus:ring-light-bg-100 dark:focus:ring-dark-bg-100 rounded-lg dark:text-dark-text-100 transition-all"
            placeholder="Escribe aquí tu TODO..."
            id="Todo"
            onChange={onChange}
            value={newTodoValue}
          ></textarea>
          <div className="h-4 p-1">
            {errorMessage && (
              <p className="text-red-500 text-xs">{errorMessage}</p>
            )}
          </div>
          <div className="flex justify-between gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="w-1/2 border-2 border-light-primary-100 dark:border-dark-primary-100 text-light-text-100 dark:text-dark-text-100 p-2 rounded-md hover:bg-light-bg-100 dark:hover:bg-dark-bg-100 active:scale-90 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-1/2 bg-light-primary-100 dark:bg-dark-primary-100 text-dark-text-100 p-2 rounded-md hover:bg-light-accent-200 dark:hover:bg-dark-accent-100 active:scale-90 transition-all"
            >
              Crear TODO
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
