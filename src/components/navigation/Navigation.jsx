import React, { useRef, useEffect, useState } from "react";

import styles from "./_navigation.module.css";

const items = ["All", "Active", "Completed"];

const Navigation = ({ setTodos, setShowForm, showForm }) => {
  const indicatorRef = useRef();
  const containerRef = useRef();
  const [translate, setTranslate] = useState(0);

  const moveIndicator = (elem) => {
    const offsetLeft = elem.offsetLeft;
    const widthElem = elem.offsetWidth;
    const indiWidth = indicatorRef.current.offsetWidth;
    const translateValue = offsetLeft + widthElem / 2 - indiWidth / 2;
    setTranslate(translateValue);
  };

  const filterTodos = (type) => {
    if (localStorage.getItem("todo") === null) {
      return;
    }

    const todosLS = JSON.parse(localStorage.getItem("todo"));

    switch (type) {
      case "All":
        setTodos(todosLS);
        if (showForm) setShowForm((prev) => !prev);
        break;
      case "Active":
        const actives = todosLS.filter((todo) => todo.status === 1);
        setTodos(actives);
        if (showForm) setShowForm((prev) => !prev);
        break;
      case "Completed":
        const completed = todosLS.filter((todo) => todo.status === 0);
        setTodos(completed);
        setShowForm((prev) => !prev);
        break;
      default:
        return;
    }
  };

  const handleClick = (e) => {
    moveIndicator(e.currentTarget);
    filterTodos(e.currentTarget.innerHTML);
  };

  useEffect(() => {
    moveIndicator(containerRef.current.firstElementChild);
  }, [containerRef]);

  return (
    <div className={styles.container} ref={containerRef}>
      {items.map((item, i) => (
        <span key={i} className={styles.item} onClick={handleClick}>
          {item}
        </span>
      ))}
      <div
        className={styles.indicator}
        ref={indicatorRef}
        style={{ left: `${translate}px` }}
      ></div>
    </div>
  );
};

export default Navigation;
