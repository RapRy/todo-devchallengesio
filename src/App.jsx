import React, { useState, useEffect } from "react";

import "./_app.css";
import Navigation from "./components/navigation/Navigation";
import Form from "./components/form/Form";
import Todo from "./components/todo/Todo";
import Button from "./components/button/Button";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const todosLS = localStorage.getItem("todo");

    if (todosLS) {
      setTodos(JSON.parse(todosLS));
    }
  }, []);

  return (
    <div>
      <h1>#todo</h1>
      <main>
        <Navigation
          setTodos={setTodos}
          setShowForm={setShowForm}
          showForm={showForm}
        />
        {!showForm && <Form todos={todos} setTodos={setTodos} />}
        {todos &&
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              showForm={showForm}
              setTodos={setTodos}
              todos={todos}
            />
          ))}
        {showForm && <Button setTodos={setTodos} todos={todos} />}
      </main>
      <p className="footer-text">
        created by <span>Ryan</span> - decChallenges.io
      </p>
    </div>
  );
};

export default App;
