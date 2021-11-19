import React, { useState, useEffect } from "react";

import "./_app.css";
import Navigation from "./components/navigation/Navigation";
import Form from "./components/form/Form";
import Todo from "./components/todo/Todo";

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
            <Todo key={todo.id} todo={todo} showForm={showForm} />
          ))}
      </main>
    </div>
  );
};

export default App;
