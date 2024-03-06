import { useContext } from "react";
import { TodoContext } from "./TodoContext";

/* eslint-disable react/prop-types */
function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  let message;
  if (totalTodos === 0) {
    message = "No tienes tareas";
  } else if (completedTodos === 0) {
    message = "No has completado ninguna tarea";
  } else if (completedTodos === totalTodos) {
    message = "Todas las tareas están completadas";
  } else {
    message = `Has completado ${completedTodos} de ${totalTodos} TODOS`;
  }

  return <h1 className="py-8 max-w-[800px] text-xl font-bold">{message}</h1>;
}
export { TodoCounter };
