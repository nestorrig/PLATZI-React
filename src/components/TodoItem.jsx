/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import "./styles/TodoItem.css"
import { CompletedIcon } from "./icons/CompletedIcon"
import { DeleteIcon } from "./icons/DeleteIcon"

function TodoItem({ text, completed, onCheck, onDelete }) {
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (isDeleting) {
            const timer = setTimeout(() => {
                onDelete();
            }, 300); // Ajusta este valor al tiempo de duración de tu animación

            return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
        }
    }, [isDeleting, onDelete]);

    return (
        <li className={`TodoItem ${isDeleting ? 'disappear' : ''}`}>
            <button className= {`BtnCheck ${completed ? 'buttonChecked' : ''}`} onClick={onCheck}>
                <CompletedIcon completed={completed} />
            </button>
            <p className= {`TodoText ${completed ? 'TodoText--completed' : ''}`}>{text}</p>
            <button id="BtnDelete" onClick={() => setIsDeleting(true)}>
                <DeleteIcon />
            </button>
        </li>
    )
}
export { TodoItem }