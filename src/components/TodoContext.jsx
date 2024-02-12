import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useState } from 'react';
import { useEffect } from 'react';

const TodoContext = createContext();

function TodoProvider({ children }) {
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        if (searchValue === "") {
            return;
        }
        // console.log('los valores de searchValue son: ' + searchValue);
    }, [searchValue]);

  const {
    item: todos,
    saveItem: setTodos,
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
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      handleCheck,
      handleDelete,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };