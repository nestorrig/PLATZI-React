/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CompletedIcon } from "./icons/CompletedIcon";
import { DeleteIcon } from "./icons/DeleteIcon";

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
    <li
      className={`relative p-4 flex items-center gap-4 bg-light-bg-200 dark:bg-dark-bg-200 rounded-full rounded-tr-none ${
        isDeleting ? "disappear" : ""
      }`}
    >
      <button
        className={`w-6 h-6 border-2 rounded-full cursor-pointer ease-in-out duration-300 active:scale-75 ${
          completed
            ? "border-light-bg-300 dark:border-dark-bg-300 bg-light-bg-300 dark:bg-dark-bg-300"
            : "border-light-bg-300 dark:border-dark-bg-300"
        }`}
        onClick={onCheck}
      >
        <CompletedIcon completed={completed} />
      </button>
      <p
        className={`transition-all duration-300 ${
          completed
            ? "line-through text-light-text-200 dark:text-dark-text-200"
            : ""
        }`}
      >
        {text}
      </p>
      <button
        className="absolute right-[-14px] top-[-14px] w-[30px] h-[30px] flex justify-center items-center bg-light-bg-300 dark:bg-dark-bg-300 border-none rounded-full p-1 cursor-pointer transition-background ease-in-out duration-300 hover:bg-light-primary-100 hover:dark:bg-dark-primary-100"
        onClick={() => setIsDeleting(true)}
      >
        <DeleteIcon />
      </button>
    </li>
  );
}
export { TodoItem };
