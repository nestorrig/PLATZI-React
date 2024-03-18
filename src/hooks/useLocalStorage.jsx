import { useEffect, useState } from "react";

export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

const defaultTodos = [
  {
    text: "Marca el checkbox para intercambiar el estado de una tarea",
    completed: false,
  },
  {
    text: "Usa el botton de la derecha para borrar una tarea",
    completed: true,
  },
  {
    text: "Usa el boton del fondo para garegar nuevas tareas",
    completed: true,
  },
  {
    text: "Usa el menu para cambiar aspectos de la aplicacion y datos sobre tus tareas",
    completed: false,
  },
  { text: "Usa el buscador para filtrar tareas", completed: false },
];

// Verifica si los todos ya existen en el almacenamiento local
if (!localStorage.getItem("TODOS_V1")) {
  let stringifyTodos = JSON.stringify(defaultTodos);
  localStorage.setItem("TODOS_V1", stringifyTodos);
}
