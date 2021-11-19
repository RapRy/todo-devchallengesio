import React from "react";

import styles from "./_todo.module.css";

const Todo = ({ todo, showForm }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={todo.id}>
        <input
          type="checkbox"
          name={todo.id}
          id={todo.id}
          defaultChecked={todo.status === 0 ? true : false}
        />
        <span className="material-icons">done</span>
      </label>
      <label htmlFor={todo.id} data-isdone={todo.status === 0 ? true : false}>
        {todo.value}
      </label>
      {showForm && <span className="material-icons">delete_outline</span>}
    </div>
  );
};

export default Todo;
