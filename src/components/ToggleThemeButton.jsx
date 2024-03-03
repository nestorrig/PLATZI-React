import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useEffect, useContext } from "react";
import { TodoContext } from "./TodoContext";

export const ToggleThemeButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(TodoContext);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="absolute bottom-4 text-5xl">
      <Classic toggled={isDarkMode} toggle={setIsDarkMode} />
    </div>
  );
};
