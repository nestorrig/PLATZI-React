import "./styles/TodoSearch.css"
function TodoSearch() {
    return (
        <div className="TodoSearch">
            <input 
                placeholder="Cortar cebolla" 
                type="text"
                onChange={(event) => {
                    console.log(event.target.value);
                }}
            />
        </div>
    );
}

export { TodoSearch };