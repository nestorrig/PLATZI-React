/* eslint-disable react/prop-types */
import "./styles/TodoItem.css"
let idTask = 0;
function TodoItem({ text }) {
    idTask++
    console.log(idTask);

    return (
        <li className="TodoItem">
            <label htmlFor={"Tarea"+idTask}>
                <input type="checkbox" name="Tarea" id={"Tarea"+idTask} />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                    <path fill="#ffffff" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"></path>
                </svg>
            </label>
            <p>{text}</p>
        </li>
    )
}

export { TodoItem }