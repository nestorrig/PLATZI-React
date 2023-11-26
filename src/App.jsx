import { useState, useEffect } from "react";
import './reset.css'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'


const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: true },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estado derivados', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        if (searchValue === "") {
            return;
        }
        console.log('los valores de searchValue son: ' + searchValue);
    }, [searchValue]);
  const [todos, setTodos] = useState(defaultTodos);
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;


  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // let searchedTodos = [];
  // if (!searchValue.length >= 1) {
  //   searchedTodos = todos;
  // } else {
  //   searchedTodos = todos.filter(todo => {
  //     const todoText = todo.text.toLowerCase();
  //     const searchText = searchValue.toLowerCase();
  //     return todoText.includes(searchText);
  //   });
  // }
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
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed = {todo.completed}
          />
        ))}
        
      </TodoList>

      <CreateTodoButton />
    </>
  )
}


export { App }
