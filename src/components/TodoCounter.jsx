/* eslint-disable react/prop-types */
function TodoCounter({ total, completed }) {
  let message;
  if (total === 0) {
    message = "No tienes tareas";
  } else if (completed === 0) {
    message = "No has completado ninguna tarea";
  } else if (completed === total) {
    message = "Todas las tareas están completadas";
  } else {
    message = `Has completado ${completed} de ${total} TODOS`;
  }

  return (
    <h1 className="m-auto py-4 px-6 max-w-[800px] text-center text-4xl font-bold">
      {message}
    </h1>
  );
}
export { TodoCounter };
