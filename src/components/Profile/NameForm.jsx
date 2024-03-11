/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const NameForm = ({ inputValue, onInputChange, onSubmit }) => {
  const { errorMessage } = useContext(TodoContext);
  return (
    <>
      <h2 className="text-2xl font-bold mb-8">Editar Nombre</h2>
      <input
        type="text"
        id="name"
        placeholder="Capipepo Martinez"
        value={inputValue}
        onChange={onInputChange}
        className="rounded-md p-2 dark:bg-dark-bg-300  outline-none focus:ring-2 focus:ring-light-bg-100 dark:focus:ring-dark-bg-100"
        maxLength={35}
      />
      <div className="h-4 p-1">
        {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
      </div>
      <button
        onClick={onSubmit}
        className="mt-4 bg-light-primary-100 dark:bg-dark-primary-100 text-dark-text-100 p-2 rounded-md hover:bg-light-accent-200 dark:hover:bg-dark-accent-100 active:scale-90 transition-all"
      >
        Siguiente
      </button>
    </>
  );
};
