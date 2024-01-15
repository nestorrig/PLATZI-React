import { useState, useEffect } from "react";
import '../reset.css'
import {useLocalStorage} from "../hooks/useLocalStorage";
import { AppUI } from "./AppUI";


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: true },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estado derivados', completed: false },
// ];
// let stringifyTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1', stringifyTodos);

function App() {
  const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        if (searchValue === "") {
            return;
        }
        // console.log('los valores de searchValue son: ' + searchValue);
    }, [searchValue]);

  const {
    item: todos,
    setItem: setTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )
  
  const handleCheck = (todoText) => {
    setTodos(todos.map(todo => {
      if (todo.text === todoText) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    }));
  }
  
  const handleDelete = (todoText) => {
    setTodos(todos.filter(todo => todo.text !== todoText));
  }

  return (
    <>
      <AppUI
        error={error}
        loading={loading}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </>
  )
}

export { App }