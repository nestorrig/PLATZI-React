/* eslint-disable react/prop-types */
import { TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton, Loading } from "../components";

function AppUI({
    error,
    loading,
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
            {loading && (
            <>
                <Loading />
            </>
            )}
            {error && <p>Desespera, hubo un error...</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crea tu primer TODO</p>}

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
