import React, { useContext, useMemo } from 'react';
import { TodosContext } from "../context/TodosContext";

export default function TodoItemsRemaining() {
    const { todos } = useContext(TodosContext);

    function remainingCalculation() {
        return todos.filter(todo => !todo.isComplete).length;
    }

    const remaining = useMemo(remainingCalculation, [todos]);

    return (
        <span>{remaining} Items Remaining</span>
    )
}