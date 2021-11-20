import React from "react";

import styles from "./_button.module.css";

const Button = ({ setTodos, todos }) => {
  const handleDeletes = () => {
    const todoLS = JSON.parse(localStorage.getItem("todo"));
    const newTodoLS = todoLS.filter((item) => item.status === 1);
    localStorage.setItem("todo", JSON.stringify(newTodoLS));

    const todosState = [...todos];
    const newTodoState = todosState.filter((item) => item.status === 1);
    setTodos(newTodoState);
  };

  return (
    <button className={styles.button} onClick={handleDeletes}>
      <span className="material-icons">delete_outline</span> delete all
    </button>
  );
};

export default Button;
