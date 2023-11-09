import { useRef, useEffect, useState } from 'react';
import NoTodos from './NoTodos'
import '../App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useLocalStorage from "../hooks/useLocalStorage";
import {TodosContext} from "../context/TodosContext";
import {CSSTransition, SwitchTransition} from "react-transition-group";

function App() {
  // const [name, setName] = useState('')
  const [name, setName] = useLocalStorage('name', '')

  const nameInputEl = useRef(null);
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');
  const [idForTodo, setIdForTodo] = useLocalStorage('idForTodo', 1);

  function todosFiltered() {
    if (filter === 'all') {
      return todos
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.isComplete)
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete)
    }
  }

  useEffect(() => {
    nameInputEl.current.focus();

    // setName(JSON.parse(localStorage.getItem('name')) ?? '')
  }, []);

  function handleNameInput(event) {
    setName(event.target.value)
    // localStorage.setItem('name', JSON.stringify(event.target.value))
  }

  return (
      <TodosContext.Provider value={{ todos, setTodos, idForTodo, setIdForTodo, filter, setFilter, todosFiltered }}>
        <div className="todo-app">
          <div className="name-container">
            <h2>What is your name?</h2>
            <form action="#">
              <input
                className="todo-input"
                type="text"
                ref={nameInputEl}
                placeholder="What is your Name"
                value={name}
                onChange={handleNameInput}
              ></input>
            </form>
            <CSSTransition
                in={name.length > 0}
                timeout={300}
                classNames="slide-vertical"
                unmountOnExit
            >
              <p className="name-label">Hello {name}</p>
            </CSSTransition>
          </div>
          <h2>Todo App</h2>
          <TodoForm/>
          <SwitchTransition mode="out-in">
            <CSSTransition key={todos.length > 0} timeout={300} classNames="slide-vertical" unmountOnExit>
              {todos.length > 0 ? (<TodoList/>) : (<NoTodos/>)}
            </CSSTransition>
          </SwitchTransition>
        </div>
      </TodosContext.Provider>
  );
}

export default App;
