/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CompletedIcon } from "../icons/CompletedIcon";
import { DeleteIcon } from "../icons/DeleteIcon";

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
    <div
      className={`grid origin-top transition-all duration-300 ease-in-out ${
        isDeleting ? "grid-rows-[0fr] mb-0" : "grid-rows-[1fr] mb-4"
      }`}
    >
      <div className={` ${isDeleting ? "overflow-hidden" : ""}`}>
        <li
          className={`relative p-4 pr-10 flex items-start gap-4 transition-transform origin-top duration-300 bg-light-bg-200 dark:bg-dark-bg-200 rounded-lg ${
            isDeleting ? "scale-y-0 " : ""
          }`}
        >
          <button
            className={`min-w-6 h-6 border-2 rounded-full cursor-pointer ease-in-out duration-300 active:scale-75 ${
              completed
                ? "border-light-bg-300 dark:border-dark-bg-300 bg-light-bg-300 dark:bg-dark-bg-300"
                : "border-light-bg-300 dark:border-dark-bg-300"
            }`}
            onClick={onCheck}
          >
            <CompletedIcon completed={completed} />
          </button>
          <p
            className={` ${
              completed
                ? "line-through text-light-text-200 dark:text-dark-text-200"
                : ""
            }`}
          >
            {text}
          </p>
          <button
            className={`absolute right-[-4px] top-[-4px] w-[30px] h-[30px] flex justify-center items-center bg-light-bg-300 dark:bg-dark-bg-300 border-none rounded-full p-1 cursor-pointer transition-background ease-in-out duration-300 hover:bg-light-primary-100 hover:dark:bg-dark-primary-100`}
            onClick={() => setIsDeleting(true)}
          >
            <DeleteIcon />
          </button>
        </li>
      </div>
    </div>
  );
}
export { TodoItem };
