import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // Obtén del localStorage o usa un valor inicial si no hay nada en el localStorage
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    // Guarda en el localStorage cuando el valor cambie
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.log(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}

export default useLocalStorage;