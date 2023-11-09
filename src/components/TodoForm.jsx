import React, {useContext} from 'react';
import { useState } from "react";
import {TodosContext} from "../context/TodosContext";

function TodoForm() {
    const { todos, setTodos, idForTodo, setIdForTodo } = useContext(TodosContext);
    const [todoInput, setTodoInput] = useState('');

    function handleInput(e) {
        setTodoInput(e.target.value)
    }

    function addTodo(event) {
        event.preventDefault();

        if (todoInput.trim().length === 0) {
            return;
        }

        setTodos([...todos, {
            id: idForTodo,
            title: todoInput,
            isComplete: false
        }])

        setIdForTodo(prevIdForTodo => prevIdForTodo + 1)
        setTodoInput('');
    }

    return (
        <form action="#" onSubmit={addTodo}>

            <input
                type="text"
                value={todoInput}
                onChange={handleInput}
                className="todo-input"
                placeholder="all work and no play makes Jack a dull boy"
            />

        </form>
    )
}

export default TodoForm