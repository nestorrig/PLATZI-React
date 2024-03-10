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
        className="rounded-md p-2 dark:bg-dark-bg-300"
        maxLength={35}
      />
      <div className="h-4 p-1">
        {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
      </div>
      <button
        onClick={onSubmit}
        className="mt-4 bg-light-primary-100 dark:bg-dark-primary-100 text-dark-text-100 p-2 rounded-md"
      >
        Siguiente
      </button>
    </>
  );
};
