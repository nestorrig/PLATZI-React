/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  const [openNewTask, setOpenNewTask] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [gradientColors, setGradientColors] = useState([]);

  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const handleCheck = (todoText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.text === todoText) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handleDelete = (todoText) => {
    setTodos(todos.filter((todo) => todo.text !== todoText));
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    setTodos(newTodos);
  };

  //Theme
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  useEffect(() => {
    if (isDarkMode) {
      setGradientColors(["#E74C3C", "#2d2d2d"]);
    } else {
      setGradientColors(["#EF5350", "#e5e5e5"]);
    }
  }, [isDarkMode]);

  useEffect(() => {
    setPercentage((completedTodos / totalTodos) * 100);
  }, [totalTodos, completedTodos]);

  const { item: image, saveItem: setImage } = useLocalStorage("image", "");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadImage = async () => {
    if (selectedFile) {
      const reader = new FileReader();

      const fileReadPromise = new Promise((resolve, reject) => {
        reader.onload = (readerEvent) => {
          const binaryString = readerEvent.target.result;
          const base64 = btoa(binaryString);
          if (base64.length > 3 * 1024 * 1024) {
            // 3MB in base64
            setErrorMessage("!El archivo es muy grande!, el maximo es 3MB");
            reject(new Error("!El archivo es muy grande!, el maximo es 3MB"));
          } else {
            setImage(base64);
            resolve();
          }
        };
      });

      reader.readAsBinaryString(selectedFile);
      await fileReadPromise;
    }
  };

  const { item: name, saveItem: setName } = useLocalStorage("name", "");
  const [activeProfileForm, setActiveProfileForm] = useState(false);
  const [activeProfileFormSection, setActiveProfileFormSection] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const values = {
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    handleCheck,
    handleDelete,
    addTodo,
    openNewTask,
    setOpenNewTask,
    openMenu,
    setOpenMenu,
    isDarkMode,
    setIsDarkMode,
    percentage,
    setPercentage,
    gradientColors,
    setGradientColors,
    image,
    setImage,
    uploadImage,
    handleFileSelect,
    name,
    setName,
    activeProfileForm,
    setActiveProfileForm,
    activeProfileFormSection,
    setActiveProfileFormSection,
    errorMessage,
    setErrorMessage,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}

export { TodoContext, TodoProvider };
