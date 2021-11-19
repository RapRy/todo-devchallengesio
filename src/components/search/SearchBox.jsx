import React from "react";

import styles from "./_searchBox.module.css";

const SearchBox = ({ setTodos, todos }) => {
  const submitForm = (e) => {
    e.preventDefault();

    const inputValue = e.target.children[0].children[0].value;
    const id = Math.floor(Math.random() * (999 - 100 + 1) + 100);

    // no key todo in localstorage
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem(
        "todo",
        JSON.stringify([{ id, value: inputValue, status: 1 }])
      );

      setTodos((prev) => [{ id, value: inputValue, status: 1 }, ...prev]);

      return;
    }
    // has key in localstorage
    const todo = JSON.parse(localStorage.getItem("todo"));
    if (todo) {
      localStorage.setItem(
        "todo",
        JSON.stringify([{ id, value: inputValue, status: 1 }, ...todo])
      );

      setTodos((prev) => [{ id, value: inputValue, status: 1 }, ...prev]);
    }
  };

  return (
    <form action="/" className={styles.form} onSubmit={submitForm}>
      <label htmlFor="input">
        <input type="text" id="input" placeholder="add details" required />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default SearchBox;
