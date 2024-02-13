import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export function TodoForm() {
  const { setOpenModal } = useContext(TodoContext);
  return (
    <form>
      <label htmlFor="Todo">Añade tu nueva tarea</label>
      <textarea placeholder="Escribe aquí tu TODO..." id="Todo"></textarea>
      <div>
        <button type="button" onClick={() => setOpenModal(false)}>
          Crear TODO
        </button>
        <button type="button" onClick={() => setOpenModal(false)}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
