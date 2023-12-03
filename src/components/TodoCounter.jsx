/* eslint-disable react/prop-types */
import "./styles/TodoCounter.css"
function TodoCounter({ total, completed }) {
    let message;
    if (total === 0) {
        message = 'No tienes tareas';
    } else if (completed === 0) {
        message = 'No has completado ninguna tarea';
    } else if (completed === total) {
        message = 'Todas las tareas están completadas';
    } else {
        message = `Has completado ${completed} de ${total} TODOS`;
    }

    return (
        <h1 className="TodoCounter">
            {message}
        </h1>
    );
}
export { TodoCounter };