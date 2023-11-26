import { useState, useEffect } from "react";
import "./styles/TodoSearch.css"

function TodoSearch() {
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        if (searchValue === "") {
            return;
        }
        console.log('los valores de searchValue son: ' + searchValue);
    }, [searchValue]);

    return (
        <div className="TodoSearch">
            <input 
                placeholder="Cortar cebolla" 
                type="text"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
        </div>
    );
}

export { TodoSearch };