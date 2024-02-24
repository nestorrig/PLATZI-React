import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

export function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    console.log(newTodoValue);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="Todo">Añade tu nueva tarea</label>
      <textarea
        placeholder="Escribe aquí tu TODO..."
        id="Todo"
        onChange={onChange}
        value={newTodoValue}
      ></textarea>
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Crear TODO</button>
      </div>
    </form>
  );
}
