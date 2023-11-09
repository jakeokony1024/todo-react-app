import React, {useContext} from 'react';
import {TodosContext} from "../context/TodosContext";

export default function TodoClearCompleted() {
    const { todos, setTodos } = useContext(TodosContext);

    function clearCompleted() {
        setTodos([...todos].filter(todo => !todo.isComplete));
    }

    return (
        <button
            className="button"
            onClick={clearCompleted}>
            Clear Completed
        </button>
    )
}