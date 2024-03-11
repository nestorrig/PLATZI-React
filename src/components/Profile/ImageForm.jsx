/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const ImageForm = ({ onFileSelect, onSubmit, onDelete }) => {
  const { errorMessage } = useContext(TodoContext);
  return (
    <>
      <h2 className="text-2xl font-bold mb-8">Imagen de perfil</h2>
      <input
        type="file"
        id="image"
        onChange={onFileSelect}
        className="w-full border-2 border-light-bg-300 dark:border-dark-bg-300 rounded-md p-2 outline-none focus:border-light-bg-100 dark:focus:border-dark-bg-100"
      />
      <div className="h-4 p-1">
        {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
      </div>
      <div className="flex items-stretch gap-4 mt-4">
        <button
          onClick={onDelete}
          className="w-1/2 border-2 border-light-primary-100 dark:border-dark-primary-100 text-light-text-100 dark:text-dark-text-100 p-2 rounded-md hover:bg-light-bg-100 dark:hover:bg-dark-bg-100 active:scale-90 transition-all"
        >
          Borrar
        </button>
        <button
          onClick={onSubmit}
          className="w-1/2 bg-light-primary-100 dark:bg-dark-primary-100 text-dark-text-100 p-2 rounded-md hover:bg-light-accent-200 dark:hover:bg-dark-accent-100 active:scale-90 transition-all"
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
