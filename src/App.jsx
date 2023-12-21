import { useState, useEffect } from "react";
import './reset.css'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'
import useLocalStorage from "./hooks/useLocalStorage";


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
    const [todos, setTodos] = useLocalStorage('TODOS_V1', []);
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
      <TodoCounter  
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed = {todo.completed}
            onCheck={() => handleCheck(todo.text)}
            onDelete={() => handleDelete(todo.text)}
          />
        ))}
        
      </TodoList>

      <CreateTodoButton />
    </>
  )
}


export { App }
