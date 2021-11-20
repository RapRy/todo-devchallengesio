import React from "react";

import styles from "./_todo.module.css";

const Todo = ({ todo, showForm, setTodos, todos }) => {
  const toggleComplete = (status) => {
    const todoLS = JSON.parse(localStorage.getItem("todo"));
    const lsInd = todoLS.findIndex((item) => item.id === todo.id);
    const lsSelected = { ...todoLS[lsInd], status };
    todoLS.splice(lsInd, 1, lsSelected);
    localStorage.setItem("todo", JSON.stringify(todoLS));

    const todosState = [...todos];
    const stateInd = todos.findIndex((item) => item.id === todo.id);
    const stateSelected = { ...todosState[stateInd], status };
    todosState.splice(stateInd, 1, stateSelected);
    setTodos(todosState);
  };

  const handleOnChange = (e) => {
    if (e.target.checked) {
      toggleComplete(0);
    } else {
      toggleComplete(1);
    }
  };

  const handleDelete = () => {
    const todoLS = JSON.parse(localStorage.getItem("todo"));
    const lsInd = todoLS.findIndex((item) => item.id === todo.id);
    todoLS.splice(lsInd, 1);
    localStorage.setItem("todo", JSON.stringify(todoLS));

    const todosState = [...todos];
    const stateInd = todos.findIndex((item) => item.id === todo.id);
    todosState.splice(stateInd, 1);
    setTodos(todosState);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={todo.id}>
        <input
          type="checkbox"
          name={todo.id}
          id={todo.id}
          defaultChecked={todo.status === 0 ? true : false}
          onChange={handleOnChange}
        />
        <span className="material-icons">done</span>
      </label>
      <label htmlFor={todo.id} data-isdone={todo.status === 0 ? true : false}>
        {todo.value}
      </label>
      {showForm && (
        <span className="material-icons" onClick={handleDelete}>
          delete_outline
        </span>
      )}
    </div>
  );
};

export default Todo;
