/* eslint-disable react/prop-types */
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    handleCheck,
    handleDelete,
}) {
    return (
        <>
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
            <TodoList>
                {searchedTodos.map((todo) => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onCheck={() => handleCheck(todo.text)}
                    onDelete={() => handleDelete(todo.text)}
                />
                ))}
            </TodoList>
            <CreateTodoButton />
        </>
    );
}
export { AppUI };
