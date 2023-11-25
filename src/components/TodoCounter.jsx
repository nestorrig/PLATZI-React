/* eslint-disable react/prop-types */
import "./styles/TodoCounter.css"
function TodoCounter({ total, completed }) {
    return (
        <h1 className="TodoCounter">
            Has completado {completed} de {total} TODOS
        </h1>
    );
}

export { TodoCounter };