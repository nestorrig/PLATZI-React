/* eslint-disable react/prop-types */
import "./styles/TodoItem.css"
import { CompletedIcon } from "./icons/CompletedIcon"
import { DeleteIcon } from "./icons/DeleteIcon"

function TodoItem({ text, completed, onCheck, onDelete }) {
    return (
        <li className="TodoItem">
            <button className= {`BtnCheck ${completed ? 'buttonChecked' : ''}`} onClick={onCheck}>
                <CompletedIcon completed={completed} />
            </button>
            <p className= {`TodoText ${completed ? 'TodoText--completed' : ''}`}>{text}</p>
            <button id="BtnDelete" onClick={onDelete}>
                <DeleteIcon />
            </button>
        </li>
    )
}
export { TodoItem }