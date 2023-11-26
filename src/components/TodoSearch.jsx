/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
import "./styles/TodoSearch.css"

function TodoSearch({
    searchValue,
    setSearchValue,
}) {
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