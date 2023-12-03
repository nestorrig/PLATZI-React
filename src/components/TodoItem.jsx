/* eslint-disable react/prop-types */
import "./styles/TodoItem.css"

function TodoItem({ text, completed, onCheck, onDelete }) {
    return (
        <li className="TodoItem">
            <button className= {`BtnCheck ${completed ? 'buttonChecked' : ''}`} onClick={onCheck}>
                <svg style={{ display: completed ? 'block' : 'none' }}  xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                    <path fill="#ffffff" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z"></path>
                </svg>
            </button>
            <p className= {`TodoText ${completed ? 'TodoText--completed' : ''}`}>{text}</p>
            <button id="BtnDelete" onClick={onDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                    <path fill="#ffffff" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"></path>
                </svg>
            </button>
        </li>
    )
}
export { TodoItem }