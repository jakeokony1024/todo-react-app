import React, { useContext } from 'react'
import {TodosContext} from "../context/TodosContext";

export default function TodoCompleteAllTodos() {

    const { todos, setTodos } = useContext(TodosContext);
    function completeAllTodos() {
        const updatedTodos = todos.map(todo => {
            todo.isComplete = true;

            return todo;
        })

        setTodos(updatedTodos)
    }

    return (
        <div className="button"
             onClick={completeAllTodos}>
            check All
        </div>
    )
}