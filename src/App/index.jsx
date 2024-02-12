import '../reset.css'
import { AppUI } from "./AppUI";
import { TodoProvider } from "../components/TodoContext";

function App() {
  return (
    <>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </>
  )
}

export { App }